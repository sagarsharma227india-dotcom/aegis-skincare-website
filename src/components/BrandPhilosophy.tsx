import React from 'react';
import { Shield, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section className="bg-[#20231F] text-[#F8F5EF] py-20 lg:py-28 border-b border-[#343A33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Wordmark & Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#343A33] rounded-[3px] text-[#A9B7B7] text-[10px] font-mono-spec tracking-[0.25em] uppercase">
            <AegisMonogram size={14} color="#A9B7B7" />
            <span>THE AEGIS PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-[#F8F5EF]">
            "Your skin already has a defence system. <br />
            <span className="italic text-[#A9B7B7]">AEGIS helps you take care of it."</span>
          </h2>

          <p className="text-sm sm:text-base text-[#CFC8BC] max-w-2xl mx-auto leading-relaxed">
            Men’s skin can differ in sebum output, facial hair growth and shaving-related friction.
            We formulate evidence-informed active molecules without unnecessary fillers or synthetic fragrances to support your natural barrier.
          </p>
        </div>

        {/* 3 Pillars: Protect · Correct · Maintain */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="p-8 bg-[#282C27] border border-[#3E453D] rounded-[4px] space-y-4 text-left">
            <div className="text-[11px] font-mono-spec text-[#A9B7B7] font-semibold tracking-widest uppercase">
              01 / PROTECT
            </div>
            <h3 className="text-xl font-serif-editorial text-[#F8F5EF]">
              Shield The Acid Mantle
            </h3>
            <p className="text-xs text-[#CFC8BC] leading-relaxed">
              Preserving physiological pH 5.5 and providing daily broad-spectrum SPF 50 defense against UV rays, urban pollution, and blue light without leaving a white cast.
            </p>
          </div>

          <div className="p-8 bg-[#282C27] border border-[#3E453D] rounded-[4px] space-y-4 text-left">
            <div className="text-[11px] font-mono-spec text-[#A9B7B7] font-semibold tracking-widest uppercase">
              02 / CORRECT
            </div>
            <h3 className="text-xl font-serif-editorial text-[#F8F5EF]">
              Target What Matters
            </h3>
            <p className="text-xs text-[#CFC8BC] leading-relaxed">
              Oil-soluble 2% BHA and 5% Niacinamide penetrate inside sebum-filled pores to loosen congestion, calm post-shave redness, and refine surface texture.
            </p>
          </div>

          <div className="p-8 bg-[#282C27] border border-[#3E453D] rounded-[4px] space-y-4 text-left">
            <div className="text-[11px] font-mono-spec text-[#A9B7B7] font-semibold tracking-widest uppercase">
              03 / MAINTAIN
            </div>
            <h3 className="text-xl font-serif-editorial text-[#F8F5EF]">
              Stay Consistent
            </h3>
            <p className="text-xs text-[#CFC8BC] leading-relaxed">
              A streamlined 3-minute morning and evening protocol engineered to fit effortlessly into your everyday schedule for sustainable long-term results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
