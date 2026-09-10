import React, { useState } from 'react';
import { NavView, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { RoutineBuilder } from './RoutineBuilder';
import { Clock, Sun, Moon, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';
import { motion } from 'motion/react';

interface RoutinesViewProps {
  setCurrentView: (view: NavView) => void;
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onAddMultipleToCart: (products: Product[]) => void;
}

export const RoutinesView: React.FC<RoutinesViewProps> = ({
  setCurrentView,
  onSelectProduct,
  onAddToCart,
  onAddMultipleToCart
}) => {
  const [profileType, setProfileType] = useState<'oily' | 'sensitive' | 'balanced'>('oily');
  const starterKit = PRODUCTS.find((p) => p.id === 'aegis-starter-bundle') || PRODUCTS[0];

  return (
    <div className="bg-[#E8E1D6] min-h-screen py-12 lg:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-[#4B5848] text-[10px] font-mono-spec tracking-[0.2em] uppercase font-semibold">
            <AegisMonogram size={14} color="#4B5848" />
            <span>THE 3-MINUTE COMMITMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-editorial font-normal text-[#20231F] leading-tight">
            Your routine, <br />
            <span className="italic text-[#4B5848]">simplified.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5C625B] leading-relaxed">
            Effective skincare should not require a 10-step chore. By targeting the exact biological steps—Cleanse, Correct, and Defend—AEGIS fits into any morning and evening schedule in under three minutes.
          </p>
        </motion.div>

        {/* Skin Profile Toggle */}
        <div className="bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-mono-spec text-[#5C625B] uppercase font-bold">
              EXPLORE ROUTINE FOR YOUR SKIN PROFILE:
            </span>
            <div className="flex gap-2">
              <button
                id="routine-tab-oily"
                onClick={() => setProfileType('oily')}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-mono-spec uppercase transition-all ${
                  profileType === 'oily'
                    ? 'bg-[#4B5848] text-[#F8F5EF] font-bold shadow-xs'
                    : 'bg-[#F8F5EF] text-[#20231F] border border-[#CFC8BC]'
                }`}
              >
                Oily & Congested
              </button>
              <button
                id="routine-tab-sensitive"
                onClick={() => setProfileType('sensitive')}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-mono-spec uppercase transition-all ${
                  profileType === 'sensitive'
                    ? 'bg-[#4B5848] text-[#F8F5EF] font-bold shadow-xs'
                    : 'bg-[#F8F5EF] text-[#20231F] border border-[#CFC8BC]'
                }`}
              >
                Post-Shave & Dry
              </button>
              <button
                id="routine-tab-balanced"
                onClick={() => setProfileType('balanced')}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-mono-spec uppercase transition-all ${
                  profileType === 'balanced'
                    ? 'bg-[#4B5848] text-[#F8F5EF] font-bold shadow-xs'
                    : 'bg-[#F8F5EF] text-[#20231F] border border-[#CFC8BC]'
                }`}
              >
                Daily Maintenance
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column AM / PM Protocol */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AM Routine */}
          <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#CFC8BC]">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#4B5848]" />
                <h3 className="font-serif-editorial text-xl font-medium text-[#20231F]">
                  Morning Protocol (AM)
                </h3>
              </div>
              <span className="text-[11px] font-mono-spec text-[#5C625B]">~90 SECONDS</span>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-4 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                <div className="flex justify-between text-[11px] font-mono-spec">
                  <span className="font-bold text-[#4B5848] uppercase">01 / CLEANSE (30s)</span>
                  <span className="text-[#20231F] font-semibold">AEGIS WASH</span>
                </div>
                <p className="text-xs text-[#5C625B]">
                  Lather 1 pump with water. Gently washes away sleep perspiration and sebum while maintaining your skin mantle at pH 5.5.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                <div className="flex justify-between text-[11px] font-mono-spec">
                  <span className="font-bold text-[#4B5848] uppercase">02 / CORRECT (30s)</span>
                  <span className="text-[#20231F] font-semibold">
                    {profileType === 'sensitive' ? 'AEGIS BARRIER' : 'AEGIS CLEAR SERUM'}
                  </span>
                </div>
                <p className="text-xs text-[#5C625B]">
                  {profileType === 'sensitive'
                    ? 'Apply 1 pump of 3:1:1 Ceramide Fluid to calm shaving irritation and rebuild lost lipids.'
                    : 'Apply 2-3 drops of 2% BHA + 5% Niacinamide across forehead and nose to control shine and keep pores clear.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                <div className="flex justify-between text-[11px] font-mono-spec">
                  <span className="font-bold text-[#4B5848] uppercase">03 / DEFEND (30s)</span>
                  <span className="text-[#20231F] font-semibold">AEGIS SHIELD SPF 50</span>
                </div>
                <p className="text-xs text-[#5C625B]">
                  Apply 2 finger lengths over face and neck. Dries down 100% invisible with zero white cast in facial hair or stubble.
                </p>
              </div>
            </div>
          </div>

          {/* PM Routine */}
          <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#CFC8BC]">
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-[#20231F]" />
                <h3 className="font-serif-editorial text-xl font-medium text-[#20231F]">
                  Evening Protocol (PM)
                </h3>
              </div>
              <span className="text-[11px] font-mono-spec text-[#5C625B]">~60 SECONDS</span>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-4 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                <div className="flex justify-between text-[11px] font-mono-spec">
                  <span className="font-bold text-[#4B5848] uppercase">01 / PURIFY (30s)</span>
                  <span className="text-[#20231F] font-semibold">AEGIS WASH</span>
                </div>
                <p className="text-xs text-[#5C625B]">
                  Dissolves daytime particulate pollution, sunscreen, and oxidized oils before rest.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                <div className="flex justify-between text-[11px] font-mono-spec">
                  <span className="font-bold text-[#4B5848] uppercase">02 / TREAT & REBUILD (30s)</span>
                  <span className="text-[#20231F] font-semibold">
                    {profileType === 'sensitive' ? 'AEGIS BARRIER FLUID' : 'AEGIS CLEAR + BARRIER'}
                  </span>
                </div>
                <p className="text-xs text-[#5C625B]">
                  {profileType === 'sensitive'
                    ? '2 pumps of Ceramide fluid to accelerate overnight recovery from daily razor passes.'
                    : 'Apply 3 drops of BHA serum to clear pore canals, followed by 1 pump of Barrier fluid if skin feels dry.'}
                </p>
              </div>
            </div>

            {/* Quick Kit Link */}
            <div className="p-5 bg-[#E8E1D6] rounded-[3px] border border-[#CFC8BC] space-y-3 mt-4">
              <div className="flex justify-between items-center text-xs font-mono-spec">
                <span className="font-bold text-[#20231F]">{starterKit.name}</span>
                <span className="text-[#4B5848] font-bold">₹{starterKit.price}</span>
              </div>
              <p className="text-[11px] text-[#5C625B]">
                {starterKit.shortDescription}
              </p>
              <button
                onClick={() => onAddToCart(starterKit)}
                className="w-full py-2.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-xs font-mono-spec uppercase tracking-wider font-semibold rounded-[3px] transition-colors"
              >
                Add Starter System to Bag
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Routine Builder */}
        <RoutineBuilder
          onAddMultipleToCart={onAddMultipleToCart}
          onSelectProduct={onSelectProduct}
        />

        {/* Personalized Quiz Callout */}
        <div className="bg-[#20231F] text-[#F8F5EF] p-8 sm:p-12 rounded-[4px] border border-[#3E453D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-serif-editorial">Want a personalized routine for your exact skin?</h3>
            <p className="text-xs text-[#CFC8BC] max-w-xl">
              Take our 60-second skin quiz to get custom ingredient recommendations calibrated to your shaving habits and daily outdoor exposure.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3.5 bg-[#F8F5EF] text-[#20231F] hover:bg-[#E8E1D6] font-mono-spec text-xs font-semibold uppercase tracking-wider rounded-[3px] flex items-center gap-2 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4B5848]" />
            <span>Take 60s Skin Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};
