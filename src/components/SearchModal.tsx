import React, { useState, useMemo } from 'react';
import { Product, IngredientInfo, NavView } from '../types';
import { PRODUCTS } from '../data/products';
import { INGREDIENTS_DATA } from '../data/ingredients';
import { Search, X, ArrowRight, Dna, Package } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  setCurrentView: (view: NavView) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  setCurrentView
}) => {
  const [query, setQuery] = useState('');

  const suggestedTerms = [
    'Niacinamide',
    'Salicylic Acid',
    'SPF 50',
    'Ceramides',
    'Razor Burn',
    'Cleanser',
    'Zinc PCA'
  ];

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { products: [], ingredients: [] };

    const products = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.fullIngredients.toLowerCase().includes(q) ||
        p.concerns.some((c) => c.toLowerCase().includes(q))
    );

    const ingredients = INGREDIENTS_DATA.filter(
      (ing) =>
        ing.name.toLowerCase().includes(q) ||
        ing.category.toLowerCase().includes(q) ||
        ing.whatItDoes.toLowerCase().includes(q) ||
        ing.bestFor.toLowerCase().includes(q)
    );

    return { products, ingredients };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1C1B]/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in" onClick={onClose}>
      <div className="bg-[#FAF9F7] border border-[#E2DDD5] rounded-[4px] w-full max-w-2xl overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8 text-left" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#E2DDD5]">
          <Search className="w-5 h-5 text-[#526442] shrink-0" />
          <input
            id="search-main-input"
            type="text"
            placeholder="Search formulas, ingredients, or skin concerns..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base font-serif-editorial text-[#1A1C1B] placeholder:text-[#5E645F] focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F2EFE9] text-[#1A1C1B] border border-transparent hover:border-[#E2DDD5]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Keywords */}
        {!query && (
          <div className="space-y-3">
            <span className="text-[10px] font-mono-spec text-[#5E645F] font-bold uppercase tracking-wider block">
              SUGGESTED SEARCHES:
            </span>
            <div className="flex flex-wrap gap-2">
              {suggestedTerms.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-[#F2EFE9] hover:bg-[#F2EFE9] text-[#1A1C1B] text-xs font-mono-spec rounded-[3px] border border-[#E2DDD5] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Matched Products */}
            {filteredResults.products.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono-spec text-[#526442] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Package className="w-3 h-3" />
                  <span>FORMULATIONS ({filteredResults.products.length})</span>
                </span>
                <div className="space-y-2">
                  {filteredResults.products.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onSelectProduct(p.id);
                      }}
                      className="cursor-pointer p-3 bg-[#F2EFE9] hover:bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-[2px] overflow-hidden">
                          <ProductPackagingView product={p} size="xs" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono-spec text-[#526442] uppercase font-bold block">
                            {p.stepNumber}
                          </span>
                          <h4 className="text-xs font-bold text-[#1A1C1B]">{p.name}</h4>
                          <span className="text-[11px] font-mono-spec text-[#5E645F]">₹{p.price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#5E645F]" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Ingredients */}
            {filteredResults.ingredients.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono-spec text-[#526442] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Dna className="w-3 h-3" />
                  <span>INGREDIENTS ({filteredResults.ingredients.length})</span>
                </span>
                <div className="space-y-2">
                  {filteredResults.ingredients.map((ing) => (
                    <div
                      key={ing.id}
                      onClick={() => {
                        onClose();
                        setCurrentView('ingredients');
                      }}
                      className="cursor-pointer p-3 bg-[#F2EFE9] hover:bg-[#F2EFE9] rounded-[3px] border border-[#E2DDD5] flex items-center justify-between transition-colors"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-[#1A1C1B] font-serif-editorial">{ing.name}</h4>
                        <p className="text-[11px] text-[#5E645F] line-clamp-1">{ing.whatItDoes}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#5E645F]" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredResults.products.length === 0 && filteredResults.ingredients.length === 0 && (
              <div className="py-8 text-center text-xs font-mono-spec text-[#5E645F]">
                No matching formulations or active molecules found for "{query}".
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
