import React from 'react';
import { X, Check } from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';

export const ClinicalComparison: React.FC = () => {
  return (
    <section className="bg-[#20231F] text-[#F8F5EF] py-20 lg:py-28 border-b border-[#343A33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#343A33] rounded-[3px] text-[#A9B7B7] text-[10px] font-mono-spec tracking-[0.25em] uppercase">
            <AegisMonogram size={14} color="#A9B7B7" />
            <span>FORMULATION CONTRAST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight">
            Why Conventional Grooming <br />
            <span className="italic text-[#A9B7B7]">Strips The Barrier.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#CFC8BC] max-w-xl mx-auto leading-relaxed">
            Comparing typical high-alkaline body/face washes with our buffered, lipid-respecting formulations.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left: Conventional Grooming */}
          <div className="p-8 bg-[#282C27] border border-[#3E453D] rounded-[4px] space-y-6">
            <div className="space-y-1 pb-4 border-b border-[#3E453D]">
              <span className="text-[10px] font-mono-spec text-[#A65F5F] font-bold uppercase tracking-widest">
                CONVENTIONAL PRODUCTS
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#F8F5EF]">
                Harsh & Stripping
              </h3>
            </div>

            <div className="space-y-4 text-xs text-[#CFC8BC]">
              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#A65F5F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">Alkaline Soap Bases (pH 8.0 - 10.0)</strong>
                  <p className="text-[11px] text-[#A9B7B7]">Disrupts the acid mantle, triggering rebound sebum production.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#A65F5F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">Heavy Synthetic Perfumes & Menthol</strong>
                  <p className="text-[11px] text-[#A9B7B7]">Creates a temporary cooling sensation that leads to micro-irritation and redness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#A65F5F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">Denatured Alcohol Astringents</strong>
                  <p className="text-[11px] text-[#A9B7B7]">Extracts crucial intercellular lipids, leaving freshly-shaved skin raw and tight.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 text-[#A65F5F] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">Heavy Chalky Sunscreens</strong>
                  <p className="text-[11px] text-[#A9B7B7]">Leaves a greasy residue that clings visibly to facial stubble and beards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AEGIS Biomimetic */}
          <div className="p-8 bg-[#282C27] border-2 border-[#4B5848] rounded-[4px] space-y-6 relative">
            <div className="space-y-1 pb-4 border-b border-[#3E453D]">
              <span className="text-[10px] font-mono-spec text-[#A9B7B7] font-bold uppercase tracking-widest">
                THE AEGIS ARCHITECTURE
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#F8F5EF]">
                Biomimetic & Gentle
              </h3>
            </div>

            <div className="space-y-4 text-xs text-[#CFC8BC]">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#A9B7B7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">Physiological pH 5.5 Buffering</strong>
                  <p className="text-[11px] text-[#CFC8BC]">Maintains natural microbiome defenses while lifting away daily grime.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#A9B7B7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">100% Fragrance-Free & Calming</strong>
                  <p className="text-[11px] text-[#CFC8BC]">Fortified with Centella Asiatica and Phytosphingosine to soothe razor burn.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#A9B7B7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">3:1:1 Essential Lipid Emulsion</strong>
                  <p className="text-[11px] text-[#CFC8BC]">Replenishes natural ceramides, cholesterol, and fatty acids to seal moisture.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#A9B7B7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F8F5EF] block">100% Clear Photoprotection</strong>
                  <p className="text-[11px] text-[#CFC8BC]">Water-gel SPF 50 that melts invisibly into skin and facial hair within seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
