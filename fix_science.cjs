const fs = require('fs');
let code = fs.readFileSync('src/components/ScienceView.tsx', 'utf8');

// I'll add the visual system at the top of the Science page, right before the 5 Core Science Modules.
const visualSystem = `
        {/* Core Clinical Pathways */}
        <div className="space-y-6 pt-4 mb-16">
          <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#1A1C1B]">
            Clinical Pathways
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pathway 1: Oil Control */}
            <div className="bg-[#FAF9F7] border border-[#E2DDD5] rounded-[4px] p-6 shadow-xs flex flex-col gap-4 group">
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">CONCERN</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Oil Imbalance</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8B5CF]" />
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">MECHANISM</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Excess Sebum</strong>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">ACTIVE</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">5% Niacinamide + Zinc</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#526442]" />
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px] border-l-2 border-[#526442]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">FORMULATION</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">AEGIS CLEAR</strong>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <span className="text-[10px] font-mono-spec bg-[#1A1C1B] text-[#FAF9F7] px-2 py-1 rounded-[2px] font-semibold tracking-wider">
                  ROUTINE: AM / PM
                </span>
              </div>
            </div>

            {/* Pathway 2: Barrier Repair */}
            <div className="bg-[#FAF9F7] border border-[#E2DDD5] rounded-[4px] p-6 shadow-xs flex flex-col gap-4 group">
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">CONCERN</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Barrier Damage</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8B5CF]" />
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">MECHANISM</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Lipid Depletion</strong>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">ACTIVE</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">3:1:1 Ceramides</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#526442]" />
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px] border-l-2 border-[#526442]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">FORMULATION</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">AEGIS RECOVER</strong>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <span className="text-[10px] font-mono-spec bg-[#1A1C1B] text-[#FAF9F7] px-2 py-1 rounded-[2px] font-semibold tracking-wider">
                  ROUTINE: PM
                </span>
              </div>
            </div>
            
             {/* Pathway 3: Razor Burn */}
            <div className="bg-[#FAF9F7] border border-[#E2DDD5] rounded-[4px] p-6 shadow-xs flex flex-col gap-4 group">
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">CONCERN</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Razor Irritation</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8B5CF]" />
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">MECHANISM</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Micro-trauma</strong>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">ACTIVE</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">Centella + Panthenol</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#526442]" />
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px] border-l-2 border-[#526442]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">FORMULATION</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">AEGIS CALM</strong>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <span className="text-[10px] font-mono-spec bg-[#1A1C1B] text-[#FAF9F7] px-2 py-1 rounded-[2px] font-semibold tracking-wider">
                  ROUTINE: POST-SHAVE
                </span>
              </div>
            </div>
            
             {/* Pathway 4: UV Damage */}
            <div className="bg-[#FAF9F7] border border-[#E2DDD5] rounded-[4px] p-6 shadow-xs flex flex-col gap-4 group">
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">CONCERN</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">UV Damage</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8B5CF]" />
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#5E645F] uppercase tracking-wider block">MECHANISM</span>
                  <strong className="text-sm font-serif-editorial text-[#1A1C1B] block">Photoaging</strong>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">ACTIVE</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">Organic UV Filters</strong>
                </div>
                <ArrowRight className="w-4 h-4 text-[#526442]" />
                <div className="flex-1 space-y-1 bg-[#F2EFE9] p-3 rounded-[2px] border-l-2 border-[#526442]">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">FORMULATION</span>
                  <strong className="text-xs font-mono-spec text-[#1A1C1B] block">AEGIS SHIELD SPF 50</strong>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <span className="text-[10px] font-mono-spec bg-[#1A1C1B] text-[#FAF9F7] px-2 py-1 rounded-[2px] font-semibold tracking-wider">
                  ROUTINE: AM
                </span>
              </div>
            </div>

          </div>
        </div>
`;

code = code.replace(/\{\/\* 5 Core Science Modules \*\/\}/, visualSystem + '\n        {/* 5 Core Science Modules */}');

fs.writeFileSync('src/components/ScienceView.tsx', code);
