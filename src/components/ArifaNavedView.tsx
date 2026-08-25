import React, { useState } from 'react';
import { NavView } from '../types';
import { ArrowLeft, ArrowRight, Dna, Sparkles, Shield, Award, CheckCircle2, FlaskConical, Quote } from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';
import { FounderPortraitFrame } from './FounderPortraitFrame';
import { FounderPortrait, ARIFA_PORTRAITS } from '../data/founderPortraits';

interface ArifaNavedViewProps {
  setCurrentView: (view: NavView) => void;
}

export const ArifaNavedView: React.FC<ArifaNavedViewProps> = ({ setCurrentView }) => {
  const [activePortrait, setActivePortrait] = useState<FounderPortrait>(ARIFA_PORTRAITS[0]);

  return (
    <div className="bg-[#E8E1D6] min-h-screen py-12 lg:py-20 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <button
          id="back-to-about-btn"
          onClick={() => {
            setCurrentView('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-mono-spec text-[#5C625B] hover:text-[#20231F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ABOUT LAB</span>
        </button>

        {/* Hero Header Profile */}
        <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 sm:p-10 space-y-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Portrait Frame with Premium Editorial Container */}
            <div className="lg:col-span-5 space-y-3">
              <div
                id="arifa-portrait-editorial-container"
                className="relative p-2 sm:p-2.5 bg-[#F2EEE7]/80 rounded-[6px] border border-[#CFC8BC]/90 shadow-sm transition-all duration-300 hover:border-[#4B5848]/50"
                style={{
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  filter: 'drop-shadow(0 10px 24px rgba(32, 35, 31, 0.09))'
                }}
              >
                {/* Architectural Editorial Header Tag */}
                <div className="flex items-center justify-between px-1.5 pb-2 border-b border-[#CFC8BC]/60 text-[9px] font-mono-spec text-[#5C625B] tracking-widest uppercase">
                  <div className="flex items-center gap-1.5 font-bold text-[#4B5848]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5848] animate-pulse inline-block" />
                    <span>FORMULATION ARCHIVE · DELHI</span>
                  </div>
                  <span className="text-[#879385] font-semibold">REF: AN-2026</span>
                </div>

                <div className="pt-2">
                  <FounderPortraitFrame
                    initialPortraitId="architectural-lead"
                    variant="hero"
                    showControls={true}
                    onSelectPortrait={(portrait) => setActivePortrait(portrait)}
                  />
                </div>
              </div>
            </div>

            {/* Profile Narrative & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[2px] text-[#4B5848] text-[9px] font-mono-spec tracking-[0.2em] uppercase font-bold">
                  <AegisMonogram size={12} color="#4B5848" />
                  <span>LEAD ARCHITECTURAL FORMULATOR · DELHI LAB</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif-editorial font-medium text-[#20231F]">
                  ARIFA NAVED
                </h1>
                <p className="text-xs font-mono-spec text-[#5C625B]">
                  Senior Formulation & Design Lead · AEGIS MEN
                </p>
              </div>

              {/* Dynamic Quote based on selected portrait look */}
              <div className="p-4 bg-[#F2EEE7] border-l-2 border-[#4B5848] rounded-r-[3px] space-y-1.5">
                <Quote className="w-4 h-4 text-[#4B5848]" />
                <p className="text-xs sm:text-sm text-[#20231F] font-serif-editorial italic leading-relaxed">
                  "{activePortrait.quote}"
                </p>
                <span className="text-[9px] font-mono-spec text-[#5C625B] uppercase block">
                  — ON {activePortrait.title.toUpperCase()}
                </span>
              </div>

              {/* Description from active look */}
              <p className="text-xs sm:text-sm text-[#5C625B] leading-relaxed">
                {activePortrait.description}
              </p>

              {/* Verified Credentials Box */}
              <div className="p-4 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] space-y-2 text-xs font-mono-spec">
                <div className="flex justify-between border-b border-[#CFC8BC]/60 pb-1.5">
                  <span className="text-[#5C625B]">QUALIFICATIONS:</span>
                  <span className="text-[#20231F] font-semibold">M.Sc. Cosmetic Science & Chemistry</span>
                </div>
                <div className="flex justify-between border-b border-[#CFC8BC]/60 pb-1.5">
                  <span className="text-[#5C625B]">SPECIALIZATION:</span>
                  <span className="text-[#20231F] font-semibold">Epidermal Barrier & Active Delivery Kinetics</span>
                </div>
                <div className="flex justify-between border-b border-[#CFC8BC]/60 pb-1.5">
                  <span className="text-[#5C625B]">PRIMARY FOCUS:</span>
                  <span className="text-[#20231F] font-semibold">Male Stratum Corneum & Post-Shave Recovery</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C625B]">EXPERIENCE:</span>
                  <span className="text-[#20231F] font-semibold">12+ Years in High-Performance Skincare</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulation Philosophy & Ingredient Thinking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-3 shadow-xs">
            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider block">
              HER APPROACH
            </span>
            <h3 className="font-serif-editorial text-xl text-[#20231F]">
              Biomimetic Lipid Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#5C625B] leading-relaxed">
              Arifa’s formulation model prioritizes ingredients that naturally mirror the stratum corneum’s lipid bilayer. Rather than coating the face with heavy occlusives, AEGIS formulations supply the exact building blocks (ceramides, cholesterol, fatty acids in 3:1:1 physiological ratio) the skin uses to repair itself.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-3 shadow-xs">
            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider block">
              INGREDIENT THINKING
            </span>
            <h3 className="font-serif-editorial text-xl text-[#20231F]">
              Physiological Compatibility
            </h3>
            <p className="text-xs sm:text-sm text-[#5C625B] leading-relaxed">
              Every formulation is buffered to an optimal physiological pH (pH 5.5 for cleansers, pH 3.8-4.2 for BHA serums) ensuring maximum molecule bioavailability while preventing irritation or stinging on post-shave skin.
            </p>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="p-6 sm:p-8 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#CFC8BC] pb-4">
            <h3 className="font-serif-editorial text-xl text-[#20231F]">
              Formulation Research Timeline
            </h3>
            <span className="text-[10px] font-mono-spec text-[#5C625B]">DELHI & GLOBAL LABS</span>
          </div>

          <div className="space-y-4 text-xs font-mono-spec text-[#5C625B]">
            <div className="flex gap-4 items-start border-l-2 border-[#4B5848] pl-4">
              <span className="font-bold text-[#20231F] w-12">2012</span>
              <div>
                <strong className="text-[#20231F] block">Foundation in Cosmetic Science</strong>
                <p className="text-[#5C625B] text-[11px]">Academic specialization in surfactant chemistry and epidermal barrier integrity.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-l-2 border-[#4B5848] pl-4">
              <span className="font-bold text-[#20231F] w-12">2015</span>
              <div>
                <strong className="text-[#20231F] block">Active Ingredient Stability Research</strong>
                <p className="text-[#5C625B] text-[11px]">Investigating photostable UV filters and antioxidant degradation kinetics in high-UV climates.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-l-2 border-[#4B5848] pl-4">
              <span className="font-bold text-[#20231F] w-12">2018</span>
              <div>
                <strong className="text-[#20231F] block">Active Skincare & Salicylic Acid Formulations</strong>
                <p className="text-[#5C625B] text-[11px]">Developing low-irritation lipophilic BHA complexes for hyper-sebaceous and acne-prone skin.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-l-2 border-[#4B5848] pl-4">
              <span className="font-bold text-[#20231F] w-12">2021</span>
              <div>
                <strong className="text-[#20231F] block">3:1:1 Biomimetic Barrier Modeling</strong>
                <p className="text-[#5C625B] text-[11px]">Clinical testing of multi-lamellar ceramide emulsions for micro-abrasions caused by daily shaving.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-l-2 border-[#4B5848] pl-4">
              <span className="font-bold text-[#4B5848] w-12">2026</span>
              <div>
                <strong className="text-[#20231F] block">Senior Formulation & Design Lead at AEGIS MEN</strong>
                <p className="text-[#5C625B] text-[11px]">Directing core product architecture and 3-minute evidence-informed skincare protocols.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Action */}
        <div className="p-6 sm:p-8 bg-[#20231F] text-[#F8F5EF] border border-[#343A33] rounded-[4px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-left">
            <span className="text-[10px] font-mono-spec text-[#A9B7B7] uppercase tracking-widest block">
              EXPLORE THE RESULT OF HER WORK
            </span>
            <h4 className="text-xl font-serif-editorial text-[#F8F5EF]">
              Experience Arifa’s 4 Core Formulations
            </h4>
            <p className="text-xs text-[#CFC8BC]">
              Built with Apple Amino Acids, 2% BHA, 3:1:1 Ceramides, and invisible SPF 50.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-xs font-mono-spec uppercase tracking-widest font-semibold rounded-[3px] flex items-center justify-center gap-2 transition-colors shrink-0"
          >
            <span>Explore All Formulations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Portfolio Disclaimer */}
        <p className="text-[11px] font-mono-spec text-[#5C625B] text-center pt-2">
          * Note: Profile and formulation philosophy designed for the AEGIS MEN clinical direct-to-consumer brand architecture.
        </p>
      </div>
    </div>
  );
};

