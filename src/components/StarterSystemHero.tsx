import React, { useState } from 'react';
import { Product, NavView } from '../types';
import { PRODUCTS } from '../data/products';
import { useImageStore } from '../hooks/useImageStore';
import {
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  Check,
  ShieldCheck,
  Clock,
  Droplets,
  Star,
  CheckCircle2,
  Layers,
  ShoppingBag,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StarterSystemHeroProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  setCurrentView: (view: NavView) => void;
}

// Subcomponent for each of the 3 individual system steps to ensure live custom photo synchronization
const SynchronizedStepCard: React.FC<{
  item: {
    step: string;
    role: string;
    product: Product;
    volume: string;
    time: string;
    highlight: string;
    benefit: string;
    finish: string;
  };
  onClick: () => void;
}> = ({ item, onClick }) => {
  const { image } = useImageStore(item.product.id, item.product.image);

  return (
    <div
      onClick={onClick}
      className="group/card cursor-pointer bg-[#E8E1D6]/50 hover:bg-[#E8E1D6] border border-[#CFC8BC] hover:border-[#4B5848] rounded-[3px] p-3 transition-all duration-300 flex flex-col justify-between text-left"
    >
      <div className="aspect-square bg-[#151714] rounded-[2px] overflow-hidden relative mb-2.5">
        <img
          src={image}
          alt={item.product.name}
          className="w-full h-full object-cover grayscale-[0.1] group-hover/card:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-[#20231F]/90 text-[#F8F5EF] text-[9px] font-mono-spec rounded-[2px]">
          {item.step}
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[10px] font-mono-spec text-[#4B5848] font-bold">
          <span>{item.role}</span>
          <span className="text-[#7A8279]">{item.time}</span>
        </div>
        <h4 className="text-xs sm:text-sm font-serif-editorial text-[#20231F] font-medium leading-tight">
          {item.product.name}
        </h4>
        <p className="text-[10px] text-[#5C625B] line-clamp-2">
          {item.benefit}
        </p>
      </div>
    </div>
  );
};

// Subcomponent for single-step spotlight image with live custom photo synchronization
const SynchronizedSingleStepImage: React.FC<{
  product: Product;
  onSelectProduct: (id: string) => void;
}> = ({ product, onSelectProduct }) => {
  const { image } = useImageStore(product.id, product.image);

  return (
    <div
      onClick={() => onSelectProduct(product.id)}
      className="aspect-square sm:aspect-4/5 bg-[#151714] rounded-[3px] overflow-hidden relative cursor-pointer group/spotlight border border-[#CFC8BC]"
    >
      <img
        src={image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover/spotlight:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-3 right-3 text-left">
        <span className="text-[10px] font-mono-spec text-[#CFC8BC] uppercase tracking-widest block">
          CLICK TO VIEW FORMULA
        </span>
        <span className="text-sm font-serif-editorial text-[#F8F5EF]">
          {product.name}
        </span>
      </div>
    </div>
  );
};

export const StarterSystemHero: React.FC<StarterSystemHeroProps> = ({
  onSelectProduct,
  onAddToCart,
  setCurrentView
}) => {
  const starterBundle = PRODUCTS.find((p) => p.id === 'aegis-starter-bundle') || PRODUCTS[0];
  const washProduct = PRODUCTS.find((p) => p.id === 'aegis-wash') || PRODUCTS[0];
  const hydraProduct = PRODUCTS.find((p) => p.id === 'aegis-hydra') || PRODUCTS[1];
  const shieldProduct = PRODUCTS.find((p) => p.id === 'aegis-shield') || PRODUCTS[2];

  const systemItems = [
    {
      step: '01',
      role: 'CLEANSE',
      product: washProduct,
      volume: '150 ml',
      time: '30s',
      highlight: '15% Apple Amino Acids + 0.5% BHA',
      benefit: 'Preserves pH 5.5 barrier without post-wash tightness',
      finish: 'Clean, supple, non-stripping'
    },
    {
      step: '02',
      role: 'REPAIR',
      product: hydraProduct,
      volume: '50 ml',
      time: '30s',
      highlight: '2% Hyaluronic + 3% Niacinamide',
      benefit: 'Weightless oil-free hydration with mid-day oil balance',
      finish: 'Instant cooling burst, zero residue'
    },
    {
      step: '03',
      role: 'DEFEND',
      product: shieldProduct,
      volume: '50 ml',
      time: '30s',
      highlight: 'SPF 50+ PA++++ + 1% Ectoin',
      benefit: '100% invisible photoprotection even in thick beard stubble',
      finish: 'Natural matte, zero white cast'
    }
  ];

  // Active highlighted item tab ('all' or '01' | '02' | '03')
  const [activeTab, setActiveTab] = useState<'all' | '01' | '02' | '03'>('all');
  const [activeRoutine, setActiveRoutine] = useState<'am' | 'pm'>('am');
  const [isAdded, setIsAdded] = useState(false);

  const { image: bundleImg } = useImageStore(
    starterBundle.id,
    starterBundle.image
  );

  const handleAddBundle = () => {
    onAddToCart(starterBundle, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const selectedItemData = systemItems.find((i) => i.step === activeTab);

  return (
    <section
      id="hero-starter-system-section"
      className="relative py-20 lg:py-28 bg-[#F4EFE6] border-b border-[#CFC8BC] overflow-hidden text-left"
    >
      {/* Background architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#CFC8BC]">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#E8E1D6] border border-[#CFC8BC] rounded-[3px] text-[#4B5848] text-[10px] font-mono-spec tracking-[0.2em] uppercase font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4B5848]" />
              <span>THE HERO KIT · FOUNDATIONAL PROTOCOL</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial font-normal text-[#20231F] leading-[1.1] tracking-tight"
            >
              The Starter System.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#5C625B] leading-relaxed max-w-2xl"
            >
              Three synergistic formulations. Under 3 minutes daily. Zero confusion. Engineered as the
              definitive hero kit for men’s skin — balancing sebum, accelerating post-shave barrier
              recovery, and delivering 100% transparent SPF 50 photoprotection.
            </motion.p>
          </div>

          {/* Quick Credibility Specs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-[11px] font-mono-spec"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-[#20231F]">
              <div className="flex text-[#4B5848]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-semibold">5.0 / 5.0</span>
              <span className="text-[#7A8279]">(528 reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-[#4B5848] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#4B5848] animate-pulse" />
              <span>IN STOCK · 60-DAY SUPPLY · SAVE ₹298</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Product Showcase & Stage (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Step Switcher Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                id="hero-tab-all"
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-2 rounded-[3px] text-xs font-mono-spec uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                  activeTab === 'all'
                    ? 'bg-[#20231F] text-[#F8F5EF] border-[#20231F] shadow-xs'
                    : 'bg-[#F8F5EF] text-[#5C625B] border-[#CFC8BC] hover:border-[#20231F] hover:text-[#20231F]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>ALL 3 FORMULAS</span>
              </button>

              {systemItems.map((item) => (
                <button
                  key={item.step}
                  id={`hero-tab-${item.step}`}
                  onClick={() => setActiveTab(item.step as any)}
                  className={`px-3.5 py-2 rounded-[3px] text-xs font-mono-spec uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border ${
                    activeTab === item.step
                      ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] shadow-xs'
                      : 'bg-[#F8F5EF] text-[#5C625B] border-[#CFC8BC] hover:border-[#4B5848] hover:text-[#20231F]'
                  }`}
                >
                  <span className="font-bold">{item.step}</span>
                  <span>{item.role}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Stage Display with Animation */}
            <div className="relative bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-8 shadow-xs overflow-hidden">
              {/* Floating badges */}
              <div className="flex items-center justify-between pb-4 border-b border-[#CFC8BC] text-[11px] font-mono-spec">
                <div className="flex items-center gap-2 text-[#4B5848] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#4B5848]" />
                  <span>
                    {activeTab === 'all'
                      ? 'UNIFIED 3-PIECE CLINICAL SUITE'
                      : `STEP ${activeTab} / ${selectedItemData?.role}`}
                  </span>
                </div>
                <span className="text-[#7A8279] tracking-wider uppercase">
                  {activeTab === 'all' ? '60–75 DAY SUPPLY' : selectedItemData?.volume}
                </span>
              </div>

              {/* Central Visual Arena */}
              <AnimatePresence mode="wait">
                {activeTab === 'all' ? (
                  <motion.div
                    key="all-view"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 pt-4"
                  >
                    {/* Primary Showcase: The Starter System Product Image Shared with Shop Section */}
                    <div
                      onClick={() => onSelectProduct('aegis-starter-bundle')}
                      className="relative aspect-16/9 sm:aspect-21/9 bg-[#151714] rounded-[3px] overflow-hidden border border-[#CFC8BC] group/bundle cursor-pointer"
                    >
                      <img
                        src={bundleImg}
                        alt="The Starter System"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/bundle:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Bottom Info Bar */}
                      <div 
                        className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none flex items-end justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-mono-spec font-bold tracking-[0.15em] text-[#CFC8BC] uppercase block">
                            THE HERO KIT
                          </span>
                          <span className="text-sm font-serif-editorial text-[#F8F5EF]">
                            {starterBundle.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono-spec text-white/80 hidden sm:inline uppercase">
                          Click To View Dossier · ₹1,899 (Save ₹298)
                        </span>
                      </div>
                    </div>

                    {/* Synergistic 3 Formulas Lineup (Synced with Live Images) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono-spec text-[#7A8279] uppercase">
                        <span>The 3 Integrated Formulations</span>
                        <span>Click any step to inspect active specs</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {systemItems.map((item) => (
                          <SynchronizedStepCard
                            key={item.step}
                            item={item}
                            onClick={() => setActiveTab(item.step as any)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Architectural Trio Highlight Strip */}
                    <div className="p-4 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                      <div className="space-y-1">
                        <strong className="text-[#20231F] font-mono-spec text-[11px] uppercase tracking-wider block">
                          THE COMPLETE 3-STEP TRIAD
                        </strong>
                        <p className="text-[#5C625B]">
                          WASH (150ml) + REPAIR (50ml) + SHIELD SPF 50 (50ml). All 3 full-size formulas.
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onSelectProduct('aegis-starter-bundle')}
                          className="text-xs font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1 whitespace-nowrap cursor-pointer"
                        >
                          <span>View Full Suite Dossier</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${activeTab}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-4 items-center"
                  >
                    <div className="sm:col-span-5">
                      <SynchronizedSingleStepImage
                        product={selectedItemData!.product}
                        onSelectProduct={onSelectProduct}
                      />
                    </div>

                    <div className="sm:col-span-7 space-y-4 text-left">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono-spec font-bold text-[#4B5848] uppercase tracking-wider">
                          STEP {selectedItemData!.step} / {selectedItemData!.role} · {selectedItemData!.time}
                        </span>
                        <h3 className="text-2xl font-serif-editorial font-normal text-[#20231F]">
                          {selectedItemData!.product.name}
                        </h3>
                        <p className="text-xs font-mono-spec text-[#7A8279]">
                          {selectedItemData!.product.subtitle} · {selectedItemData!.volume}
                        </p>
                      </div>

                      <div className="space-y-2.5 text-xs text-[#5C625B]">
                        <div className="p-3 bg-[#F2EEE7] rounded-[2px] border border-[#CFC8BC]/60 space-y-1">
                          <strong className="text-[#20231F] font-mono-spec text-[10px] uppercase tracking-wider block">
                            KEY CLINICAL ACTIVE
                          </strong>
                          <p className="text-[#20231F] font-medium">{selectedItemData!.highlight}</p>
                          <p className="text-[#5C625B]">{selectedItemData!.benefit}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-spec">
                          <div className="p-2.5 bg-[#E8E1D6]/60 rounded-[2px]">
                            <span className="block text-[#7A8279] text-[9px] uppercase">TEXTURE & FINISH</span>
                            <span className="text-[#20231F] font-medium truncate block">
                              {selectedItemData!.finish}
                            </span>
                          </div>
                          <div className="p-2.5 bg-[#E8E1D6]/60 rounded-[2px]">
                            <span className="block text-[#7A8279] text-[9px] uppercase">RITUAL TIMING</span>
                            <span className="text-[#20231F] font-medium block">
                              {selectedItemData!.time} Commitment
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectProduct(selectedItemData!.product.id)}
                        className="w-full py-2.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs font-semibold uppercase tracking-wider rounded-[3px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Examine Single Product Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4 Clinical Pillars Micro-Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] space-y-1">
                <span className="text-[18px] sm:text-[22px] font-mono-spec font-bold text-[#20231F] block leading-none">
                  +94%
                </span>
                <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                  Moisture Retention
                </span>
              </div>
              <div className="p-3 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] space-y-1">
                <span className="text-[18px] sm:text-[22px] font-mono-spec font-bold text-[#20231F] block leading-none">
                  100%
                </span>
                <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                  Zero Cast in Stubble
                </span>
              </div>
              <div className="p-3 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] space-y-1">
                <span className="text-[18px] sm:text-[22px] font-mono-spec font-bold text-[#20231F] block leading-none">
                  pH 5.5
                </span>
                <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                  Acid Mantle Matched
                </span>
              </div>
              <div className="p-3 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] space-y-1">
                <span className="text-[18px] sm:text-[22px] font-mono-spec font-bold text-[#20231F] block leading-none">
                  &lt; 3 Min
                </span>
                <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                  Daily Time Needed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Routine Timeline + Value Calculator + Direct Purchase (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* AM / PM Interactive Protocol Preview */}
            <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-7 space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#CFC8BC]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4B5848]" />
                  <h3 className="font-serif-editorial text-lg text-[#20231F]">
                    How The System Operates
                  </h3>
                </div>

                {/* Day / Night Toggle */}
                <div className="flex items-center gap-1 bg-[#E8E1D6] p-1 rounded-[3px]">
                  <button
                    id="hero-routine-am-btn"
                    onClick={() => setActiveRoutine('am')}
                    className={`px-2.5 py-1 text-[10px] font-mono-spec uppercase rounded-[2px] transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeRoutine === 'am'
                        ? 'bg-[#F8F5EF] text-[#4B5848] font-bold shadow-xs'
                        : 'text-[#5C625B] hover:text-[#20231F]'
                    }`}
                  >
                    <Sun className="w-3 h-3" />
                    <span>AM (90s)</span>
                  </button>
                  <button
                    id="hero-routine-pm-btn"
                    onClick={() => setActiveRoutine('pm')}
                    className={`px-2.5 py-1 text-[10px] font-mono-spec uppercase rounded-[2px] transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeRoutine === 'pm'
                        ? 'bg-[#20231F] text-[#F8F5EF] font-bold shadow-xs'
                        : 'text-[#5C625B] hover:text-[#20231F]'
                    }`}
                  >
                    <Moon className="w-3 h-3" />
                    <span>PM (60s)</span>
                  </button>
                </div>
              </div>

              {/* Routine Steps List with Animation */}
              <AnimatePresence mode="wait">
                {activeRoutine === 'am' ? (
                  <motion.div
                    key="am-flow"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 text-xs"
                  >
                    <div className="p-3 bg-[#F2EEE7] rounded-[2px] border-l-2 border-[#4B5848] space-y-0.5">
                      <div className="flex items-center justify-between text-[10px] font-mono-spec">
                        <strong className="text-[#20231F] uppercase font-bold">
                          01 / CLEANSE (30s) · AEGIS WASH
                        </strong>
                        <span className="text-[#4B5848]">pH 5.5</span>
                      </div>
                      <p className="text-[#5C625B]">
                        Lather 1 pump with warm water to dissolve overnight oil without drying the skin.
                      </p>
                    </div>

                    <div className="p-3 bg-[#F2EEE7] rounded-[2px] border-l-2 border-[#4B5848] space-y-0.5">
                      <div className="flex items-center justify-between text-[10px] font-mono-spec">
                        <strong className="text-[#20231F] uppercase font-bold">
                          02 / REPAIR (30s) · AEGIS HYDRA
                        </strong>
                        <span className="text-[#4B5848]">Oil-Free Gel</span>
                      </div>
                      <p className="text-[#5C625B]">
                        Smooth 1 pump over face & neck to rebuild moisture barrier and balance mid-day shine.
                      </p>
                    </div>

                    <div className="p-3 bg-[#F2EEE7] rounded-[2px] border-l-2 border-[#4B5848] space-y-0.5">
                      <div className="flex items-center justify-between text-[10px] font-mono-spec">
                        <strong className="text-[#20231F] uppercase font-bold">
                          03 / DEFEND (30s) · AEGIS SHIELD SPF 50
                        </strong>
                        <span className="text-[#4B5848]">Invisible SPF</span>
                      </div>
                      <p className="text-[#5C625B]">
                        Apply 2 fingers over face and stubble. Zero chalky cast, zero beard residue.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pm-flow"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 text-xs"
                  >
                    <div className="p-3 bg-[#F2EEE7] rounded-[2px] border-l-2 border-[#20231F] space-y-0.5">
                      <div className="flex items-center justify-between text-[10px] font-mono-spec">
                        <strong className="text-[#20231F] uppercase font-bold">
                          01 / PURIFY (30s) · AEGIS WASH
                        </strong>
                        <span className="text-[#20231F]">Evening Reset</span>
                      </div>
                      <p className="text-[#5C625B]">
                        Dissolves city grime, sweat, and daytime sunscreen completely clean.
                      </p>
                    </div>

                    <div className="p-3 bg-[#F2EEE7] rounded-[2px] border-l-2 border-[#20231F] space-y-0.5">
                      <div className="flex items-center justify-between text-[10px] font-mono-spec">
                        <strong className="text-[#20231F] uppercase font-bold">
                          02 / REPAIR (30s) · AEGIS HYDRA
                        </strong>
                        <span className="text-[#20231F]">Overnight Moisture</span>
                      </div>
                      <p className="text-[#5C625B]">
                        Apply 1-2 pumps to calm shave friction, rehydrate stratum corneum, and rebuild barrier.
                      </p>
                    </div>

                    <div className="p-3 bg-[#E8E1D6]/60 rounded-[2px] border border-dashed border-[#CFC8BC] text-[#5C625B] text-[11px] font-mono-spec flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4B5848] shrink-0" />
                      <span>NO NIGHTTIME SUNSCREEN NEEDED · SYSTEM COMPLETE</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Price & Savings Breakdown */}
              <div className="pt-4 border-t border-[#CFC8BC] space-y-3">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono-spec uppercase text-[#7A8279] block">
                        COMPLETE 3-PIECE SYSTEM
                      </span>
                      <span className="font-serif-editorial text-2xl font-medium text-[#20231F]">
                        ₹1,899
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs line-through text-[#7A8279] font-mono-spec mr-2">
                        ₹2,197
                      </span>
                      <span className="px-2 py-0.5 bg-[#4B5848] text-[#F8F5EF] text-[10px] font-mono-spec font-bold rounded-[2px]">
                        SAVE ₹298
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5C625B]">
                    Includes full-size WASH (150ml), HYDRA (50ml), and SHIELD (50ml).
                  </p>
                </div>

                {/* Direct Add To Bag Action */}
                <div className="space-y-2 pt-2">
                  <motion.button
                    id="hero-starter-system-add-btn"
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddBundle}
                    className={`w-full py-4 rounded-[3px] font-mono-spec text-xs uppercase tracking-widest font-bold transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer ${
                      isAdded
                        ? 'bg-[#20231F] text-[#F8F5EF]'
                        : 'bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#A9B7B7]" />
                        <span>ADDED SYSTEM TO BAG</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#E8E1D6]" />
                        <span>ADD STARTER SYSTEM TO BAG — ₹1,899</span>
                      </>
                    )}
                  </motion.button>

                  <button
                    id="hero-starter-system-dossier-btn"
                    onClick={() => onSelectProduct('aegis-starter-bundle')}
                    className="w-full py-2.5 rounded-[3px] bg-transparent hover:bg-[#F2EEE7] text-[#20231F] border border-[#CFC8BC] hover:border-[#20231F] font-mono-spec text-[11px] uppercase tracking-wider font-semibold transition-all text-center block"
                  >
                    VIEW INGREDIENT &amp; CLINICAL DOSSIER
                  </button>
                </div>

                {/* Assurance Guarantee */}
                <div className="pt-2 flex flex-col gap-1.5 text-[10px] font-mono-spec text-[#5C625B]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B5848]" />
                    <span>Free express delivery on all Starter Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B5848]" />
                    <span>60-Day Empty-Bottle Skin Health Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B5848]" />
                    <span>100% Fragrance-Free · Hypoallergenic Tested</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
