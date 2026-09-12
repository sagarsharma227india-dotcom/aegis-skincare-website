import React, { useState } from 'react';
import { NavView, Product } from '../types';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, Sparkles, ShieldCheck, Star, Check, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';
import { useImageStore } from '../hooks/useImageStore';

interface HeroProps {
  setCurrentView: (view: NavView) => void;
  onSelectProduct: (productId: string) => void;
  onAddToCart?: (product: Product, quantity?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentView, onSelectProduct, onAddToCart }) => {
  const afterProduct = PRODUCTS.find((p) => p.id === 'aegis-after') || PRODUCTS.find((p) => p.name.includes('AFTER')) || PRODUCTS[0];
  const [isAdded, setIsAdded] = useState(false);

  const displayedProduct = afterProduct;
  const { image: heroImage } = useImageStore(displayedProduct.id, displayedProduct.image);

  const handleQuickAdd = () => {
    if (onAddToCart) {
      onAddToCart(displayedProduct, 1);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2400);
    }
  };

  return (
    <section id="aegis-hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#CFC8BC]">
      {/* Background Interactive WebGL/Canvas Particle Mesh */}
      <HeroCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clinical Philosophy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Subtle Clinical Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-[11px] font-mono-spec tracking-[0.2em] uppercase text-[#4B5848]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4B5848] animate-pulse" />
              <span>PHYSIOLOGICAL PRECISION DERMATOLOGY FOR MEN</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#20231F] font-normal leading-[1.08] tracking-tight">
                Architectural skin health.<br />Engineered for daily friction.
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#5C625B] max-w-2xl font-light leading-relaxed">
                Male facial stratum corneum is 20% thicker, produces double the sebum, and endures blade shearing multiple times weekly. AEGIS formulates targeted clinical actives matched to male barrier chemistry.
              </p>
            </div>

            {/* Core Proof Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] space-y-1">
                <span className="text-[10px] font-mono-spec text-[#4B5848] uppercase tracking-wider block font-bold">
                  ABSORPTION
                </span>
                <p className="text-xs text-[#20231F] font-serif-editorial font-medium">
                  Rapid Penetration
                </p>
                <p className="text-[11px] text-[#5C625B] leading-tight">
                  No greasy film or heavy beard residue.
                </p>
              </div>

              <div className="p-3.5 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] space-y-1">
                <span className="text-[10px] font-mono-spec text-[#4B5848] uppercase tracking-wider block font-bold">
                  TRANSPARENCY
                </span>
                <p className="text-xs text-[#20231F] font-serif-editorial font-medium">
                  100% INCI Disclosure
                </p>
                <p className="text-[11px] text-[#5C625B] leading-tight">
                  Exact percentage disclosures on every carton.
                </p>
              </div>
            </div>

            {/* Primary Calls to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-shop-all-cta"
                onClick={() => {
                  setCurrentView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-[4px] bg-[#20231F] hover:bg-[#3E453D] text-[#F8F5EF] font-mono-spec text-xs uppercase tracking-widest font-semibold transition-all shadow-sm flex items-center gap-2.5 cursor-pointer"
              >
                <span>EXPLORE ALL FORMULAS</span>
              </button>
              <button
                id="hero-quiz-cta"
                onClick={() => {
                  setCurrentView('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-[4px] bg-transparent hover:bg-[#F2EEE7] text-[#20231F] border border-[#CFC8BC] hover:border-[#20231F] font-mono-spec text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>FIND MY ROUTINE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Campaign Interactive Hero Formulation Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Architectural Surface Frame */}
              <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-7 space-y-4 shadow-sm">
                
                {/* Header with Star Rating and Inventory Context Badge */}
                <div className="flex items-center justify-between text-[11px] font-mono-spec pb-3 border-b border-[#CFC8BC]">
                  <div className="flex items-center gap-1.5 text-[#4B5848] font-bold tracking-wider uppercase">
                    <Star className="w-3.5 h-3.5 fill-[#4B5848]" />
                    <span>5.0 (312 CLINICAL REVIEWS)</span>
                  </div>
                  
                  {/* Subtle Inventory Context Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#EFE9DF] text-[#7A5826] border border-[#D5C7B2] text-[9.5px] font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A87B32] animate-pulse" />
                      Hero Formula
                    </span>
                  </div>
                </div>

                {/* Product Image Area - Clicking opens modal */}
                <div 
                  id="hero-featured-product"
                  onClick={() => onSelectProduct(displayedProduct.id)}
                  className="cursor-pointer aspect-4/3 bg-[#151714] rounded-[3px] overflow-hidden flex items-center justify-center border border-[#CFC8BC] transition-transform duration-300 group-hover:scale-[1.01] relative group/img"
                  title={`Click to view ${displayedProduct.name} dossier`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={displayedProduct.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative"
                    >
                      <img 
                        src={heroImage} 
                        alt={displayedProduct.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (heroImage !== displayedProduct.image) {
                            (e.target as HTMLImageElement).src = displayedProduct.image;
                          }
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Product Copy and Pricing */}
                <div className="space-y-1.5 text-left">
                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono-spec uppercase text-[#4B5848] font-bold block tracking-wider">
                        POST-SHAVE SOOTHING & RAZOR HEAT RELIEF
                      </span>
                      <h3 className="font-serif-editorial text-xl font-medium text-[#20231F]">
                        {displayedProduct.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline gap-1.5">
                        {displayedProduct.originalPrice && (
                          <span className="text-xs font-mono-spec text-[#7A8279] line-through">
                            ₹{displayedProduct.originalPrice}
                          </span>
                        )}
                        <span className="font-mono-spec font-bold text-[#20231F] text-base">
                          ₹{displayedProduct.price}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono-spec text-[#4B5848] font-bold block">
                        −92% RAZOR BURN IN 60 SEC
                      </span>
                    </div>
                  </div>

                  <div className="text-[10.5px] font-mono-spec text-[#4B5848] font-medium bg-[#E8E1D6]/60 px-2 py-1 rounded-[2px]">
                    Actives: 1.0% Bisabolol · 3.0% Panthenol · Centella · Allantoin
                  </div>
                  
                  <p className="text-xs text-[#5C625B] leading-relaxed line-clamp-2">
                    100% alcohol-free soothing serum that instantly extinguishes razor burn, seals microscopic nicks, and eliminates post-shave redness with zero sting.
                  </p>
                </div>

                {/* Single Add to Bag Action Button */}
                <div className="pt-1">
                  <motion.button 
                    id="hero-quick-add-btn"
                    whileTap={{ scale: 0.98 }}
                    onClick={handleQuickAdd}
                    className={`w-full py-3.5 rounded-[3px] font-mono-spec text-xs uppercase tracking-wider font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer ${
                      isAdded 
                        ? 'bg-[#20231F] text-[#F8F5EF]' 
                        : 'bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#A9B7B7]" />
                        <span>ADDED {displayedProduct.name} TO BAG</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-[#E8E1D6]" />
                        <span>ADD TO BAG · ₹{displayedProduct.price}</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 bg-[#20231F] text-[#F8F5EF] px-3.5 py-1.5 rounded-[2px] text-[10px] font-mono-spec shadow-md border border-[#3E453D]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#A9B7B7]" />
                <span>CLINICAL EFFICACY · DERMATOLOGIST FORMULATED</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
