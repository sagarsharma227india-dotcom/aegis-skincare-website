import React from 'react';
import { NavView } from '../types';
import { ArrowRight } from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';

interface AboutViewProps {
  setCurrentView: (view: NavView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setCurrentView }) => {
  return (
    <div className="bg-[#E8E1D6] min-h-screen py-12 lg:py-20 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Manifesto */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-[#4B5848] text-[10px] font-mono-spec tracking-[0.2em] uppercase">
            <AegisMonogram size={14} color="#4B5848" />
            <span>EST. 2024 · DELHI, INDIA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-editorial font-normal text-[#20231F] leading-tight">
            Why AEGIS exists.
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#5C625B] leading-relaxed font-serif-editorial">
            <p className="text-[#20231F] font-medium">
              Skincare became unnecessarily complicated.
            </p>
            <p>
              AEGIS was built around a simpler idea:
            </p>
            <ul className="space-y-1.5 text-[#20231F] pl-4 border-l-2 border-[#4B5848]">
              <li>— Protect the barrier.</li>
              <li>— Target what matters.</li>
              <li>— Stay consistent.</li>
            </ul>
            <p>
              For years, men were offered two extremes: aggressive 3-in-1 body washes loaded with synthetic fragrances and high-alkaline sulfates, or overwhelming 10-step cosmetic routines that few people have the time or interest to maintain.
            </p>
            <p>
              We formulated AEGIS around the everyday biological realities of male skin—higher sebum production, regular shaving friction, and environmental sun exposure—using evidence-informed active molecules at physiological pH 5.5.
            </p>
          </div>
        </div>

        {/* 3 Core Architectural Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-2 shadow-xs">
            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase">STANDARD 01</span>
            <h3 className="font-serif-editorial text-lg text-[#20231F]">100% Disclosed INCI</h3>
            <p className="text-xs text-[#5C625B] leading-relaxed">
              Every active percentage is clearly stated on the front of the bottle. No proprietary mystery blends.
            </p>
          </div>

          <div className="p-6 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-2 shadow-xs">
            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase">STANDARD 02</span>
            <h3 className="font-serif-editorial text-lg text-[#20231F]">0% Synthetic Perfume</h3>
            <p className="text-xs text-[#5C625B] leading-relaxed">
              Formulated completely fragrance-free to prevent stinging and allergic contact dermatitis on post-shave skin.
            </p>
          </div>

          <div className="p-6 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-2 shadow-xs">
            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase">STANDARD 03</span>
            <h3 className="font-serif-editorial text-lg text-[#20231F]">3-Minute Protocol</h3>
            <p className="text-xs text-[#5C625B] leading-relaxed">
              Designed to take no more than 90 seconds in the morning and 60 seconds at night.
            </p>
          </div>
        </div>

        {/* Formulation Architecture Callout */}
        <div className="p-8 sm:p-10 bg-[#20231F] text-[#F8F5EF] border border-[#343A33] rounded-[4px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-mono-spec text-[#A9B7B7] uppercase tracking-widest block">
              EVIDENCE-INFORMED DAILY PROTOCOLS
            </span>
            <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#F8F5EF]">
              Engineered for Men's Epidermal Barrier
            </h2>
            <p className="text-xs text-[#CFC8BC]">
              100% INCI transparency, physiological pH 5.5 balance, and zero synthetic fragrance.
            </p>
          </div>
          <button
            id="about-explore-shop-btn"
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
      </div>
    </div>
  );
};

