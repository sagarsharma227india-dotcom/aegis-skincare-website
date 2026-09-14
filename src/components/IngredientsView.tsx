import React, { useState } from 'react';
import { INGREDIENTS_DATA } from '../data/ingredients';
import { PRODUCTS } from '../data/products';
import { NavView } from '../types';
import { Sparkles, ArrowRight, Dna, CheckCircle2 } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

interface IngredientsViewProps {
  setCurrentView: (view: NavView) => void;
  onSelectProduct: (productId: string) => void;
}

export const IngredientsView: React.FC<IngredientsViewProps> = ({
  setCurrentView,
  onSelectProduct
}) => {
  const [selectedIngredientId, setSelectedIngredientId] = useState<string>('niacinamide');

  const currentIngredient =
    INGREDIENTS_DATA.find((ing) => ing.id === selectedIngredientId) || INGREDIENTS_DATA[0];

  const matchedProducts = currentIngredient.matchedProducts
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="bg-[#F2EFE9] min-h-screen py-12 lg:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EFE9] border border-[#E2DDD5] rounded-[3px] text-[#526442] text-[10px] font-mono-spec tracking-[0.2em] uppercase">
            <Dna className="w-3.5 h-3.5" />
            <span>THE AEGIS INGREDIENT INDEX</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-editorial font-normal text-[#1A1C1B] leading-tight">
            Active Ingredients, <br />
            <span className="italic text-[#526442]">100% Disclosed.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5E645F] leading-relaxed">
            Every molecule in our catalog serves a defined biological purpose. Explore our evidence-informed ingredients and the formulas that deliver them.
          </p>
        </div>

        {/* 2-Column Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Ingredient Selector */}
          <div className="lg:col-span-4 bg-[#F2EFE9] border border-[#E2DDD5] rounded-[4px] p-4 space-y-2">
            <span className="text-[11px] font-mono-spec text-[#5E645F] font-semibold uppercase px-2 block mb-2">
              SELECT ACTIVE MOLECULE:
            </span>
            <div className="space-y-1">
              {INGREDIENTS_DATA.map((ing) => (
                <button
                  key={ing.id}
                  id={`ingredient-tab-${ing.id}`}
                  onClick={() => setSelectedIngredientId(ing.id)}
                  className={`w-full text-left p-3 rounded-[3px] transition-all flex items-center justify-between ${
                    selectedIngredientId === ing.id
                      ? 'bg-[#526442] text-[#FAF9F7] font-semibold'
                      : 'bg-[#FAF9F7] text-[#1A1C1B] border border-[#E2DDD5] hover:border-[#526442]'
                  }`}
                >
                  <span className="text-xs font-serif-editorial">{ing.name}</span>
                  <span className="text-[10px] font-mono-spec opacity-80 uppercase">
                    {ing.category.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Ingredient Detail Card */}
          <div className="lg:col-span-8 bg-[#FAF9F7] border border-[#E2DDD5] rounded-[4px] p-6 sm:p-10 space-y-8 shadow-xs">
            <div className="space-y-2 pb-6 border-b border-[#E2DDD5]">
              <span className="text-[10px] font-mono-spec text-[#526442] font-bold uppercase tracking-widest block">
                {currentIngredient.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-medium text-[#1A1C1B]">
                {currentIngredient.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="p-4 bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] space-y-1.5">
                <strong className="text-[11px] font-mono-spec font-bold text-[#1A1C1B] uppercase block">
                  WHAT IT DOES:
                </strong>
                <p className="text-[#5E645F]">{currentIngredient.whatItDoes}</p>
              </div>

              <div className="p-4 bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] space-y-1.5">
                <strong className="text-[11px] font-mono-spec font-bold text-[#1A1C1B] uppercase block">
                  BEST FOR:
                </strong>
                <p className="text-[#5E645F]">{currentIngredient.bestFor}</p>
              </div>

              <div className="p-4 bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] space-y-1.5 md:col-span-2">
                <strong className="text-[11px] font-mono-spec font-bold text-[#1A1C1B] uppercase block">
                  HOW TO INCORPORATE:
                </strong>
                <p className="text-[#5E645F]">{currentIngredient.howToUse}</p>
              </div>

              <div className="p-4 bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] space-y-1.5 md:col-span-2">
                <strong className="text-[11px] font-mono-spec font-bold text-[#526442] uppercase block">
                  SCIENTIFIC MECHANISM:
                </strong>
                <p className="text-[#1A1C1B] text-xs">{currentIngredient.scientificInsight}</p>
              </div>
            </div>

            {/* Matched Products */}
            <div className="pt-4 border-t border-[#E2DDD5] space-y-4">
              <span className="text-[11px] font-mono-spec text-[#526442] font-bold uppercase tracking-wider block">
                AEGIS FORMULAS DELIVERING THIS ACTIVE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchedProducts.map((prod) => (
                  <div
                    key={prod?.id}
                    onClick={() => prod && onSelectProduct(prod.id)}
                    className="cursor-pointer p-4 bg-[#F2EFE9] hover:bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 shrink-0 rounded-[2px] overflow-hidden">
                        {prod && <ProductPackagingView product={prod} size="xs" />}
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-mono-spec text-[#526442] block font-bold">
                          {prod?.stepNumber}
                        </span>
                        <h4 className="text-xs font-bold text-[#1A1C1B] group-hover:text-[#526442]">
                          {prod?.name}
                        </h4>
                        <span className="text-[11px] font-mono-spec text-[#5E645F]">₹{prod?.price}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#5E645F] group-hover:text-[#1A1C1B] transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
