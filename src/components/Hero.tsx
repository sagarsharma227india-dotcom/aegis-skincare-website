import React from 'react';
import { NavView } from '../types';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductPackagingView } from './ProductPackagingView';
import { motion } from 'motion/react';

interface HeroProps {
  setCurrentView: (view: NavView) => void;
  onSelectProduct: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentView, onSelectProduct }) => {
  const starterBundle = PRODUCTS.find((p) => p.id === 'aegis-starter-bundle') || PRODUCTS[0];
  return (
    <section className="relative bg-[#E8E1D6] border-b border-[#CFC8BC] overflow-hidden min-h-[85vh] flex items-center">
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-[#4B5848] text-[10px] font-mono-spec tracking-[0.2em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B5848]" />
                <span>AEGIS MEN · SCIENCE × SIMPLICITY</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-serif-editorial text-[#20231F] leading-[1.08] tracking-tight">
                Protection, <br />
                <span className="italic font-light text-[#4B5848]">made simple.</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-[#5C625B] max-w-xl leading-relaxed"
            >
              Purposeful skincare designed around the everyday realities of men’s skin — oil, shaving, dehydration and daily sun exposure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-quiz-cta"
                onClick={() => {
                  setCurrentView('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-[4px] bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs uppercase tracking-widest font-semibold transition-all shadow-sm flex items-center gap-2.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E8E1D6]" />
                <span>FIND MY ROUTINE</span>
              </button>

              <button
                id="hero-shop-cta"
                onClick={() => {
                  setCurrentView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-[4px] bg-transparent hover:bg-[#F2EEE7] text-[#20231F] border border-[#CFC8BC] hover:border-[#20231F] font-mono-spec text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2"
              >
                <span>SHOP ESSENTIALS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Supporting Micro-Specs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-6 border-t border-[#CFC8BC]/70 grid grid-cols-3 gap-4 max-w-lg text-[11px] font-mono-spec text-[#5C625B]"
            >
              <div>
                <span className="block text-[#20231F] font-semibold uppercase">01 / CLEANSE</span>
                <span>pH 5.5 Mantle</span>
              </div>
              <div>
                <span className="block text-[#20231F] font-semibold uppercase">02 / CORRECT</span>
                <span>2% BHA + 10% B3</span>
              </div>
              <div>
                <span className="block text-[#20231F] font-semibold uppercase">03 / DEFEND</span>
                <span>Invisible SPF 50</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Campaign Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Architectural Surface Frame */}
              <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between text-[11px] font-mono-spec pb-3 border-b border-[#CFC8BC]">
                  <span className="text-[#4B5848] font-semibold tracking-wider uppercase">
                    CAMPAIGN ESSENTIAL
                  </span>
                  <span className="text-[#5C625B]">60-DAY SUPPLY</span>
                </div>

                <div
                  id="hero-featured-product"
                  onClick={() => onSelectProduct('aegis-starter-bundle')}
                  className="cursor-pointer aspect-4/3 bg-[#151714] rounded-[2px] overflow-hidden flex items-center justify-center border border-[#CFC8BC]/40 transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  <ProductPackagingView
                    product={starterBundle}
                    size="hero"
                    className="w-full h-full border-none shadow-none"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif-editorial text-xl font-medium text-[#20231F]">
                      THE STARTER SYSTEM
                    </h3>
                    <span className="font-mono-spec font-semibold text-[#20231F] text-sm">
                      ₹1,999
                    </span>
                  </div>
                  <p className="text-xs text-[#5C625B] leading-relaxed">
                    WASH (150ml) + CLEAR Serum (30ml) + SHIELD SPF 50 (50ml). Complete 3-step morning & evening ritual.
                  </p>
                </div>

                <button
                  id="hero-quick-bundle-btn"
                  onClick={() => onSelectProduct('aegis-starter-bundle')}
                  className="w-full py-3 rounded-[3px] bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-[11px] uppercase tracking-wider font-semibold transition-colors text-center block"
                >
                  VIEW SYSTEM SPECIFICATION
                </button>
              </div>

              {/* Decorative architectural tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 bg-[#20231F] text-[#F8F5EF] px-3.5 py-1.5 rounded-[2px] text-[10px] font-mono-spec shadow-md"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#A9B7B7]" />
                <span>CLINICAL PROTOCOL</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
