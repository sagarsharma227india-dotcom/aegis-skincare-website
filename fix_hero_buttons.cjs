const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// The current buttons are:
// <button id="hero-shop-all-cta" class="... bg-[#1A1C1B] ... text-[#FAF9F7] ..."> <span>SHOP PRODUCTS →</span> </button>
// <button id="hero-quiz-cta" class="... bg-transparent ... text-[#1A1C1B] ..."> <span>TAKE THE 60-SECOND SKIN ASSESSMENT</span> <ArrowRight /> </button>

// We need to swap their styles so Quiz is primary.
code = code.replace(
  /className="px-7 py-3\.5 rounded-\[4px\] bg-\[#1A1C1B\] hover:bg-\[#3E453D\] text-\[#FAF9F7\] font-mono-spec text-xs uppercase tracking-widest font-semibold transition-all shadow-sm flex items-center gap-2\.5 cursor-pointer"/,
  'className="px-6 py-3.5 rounded-[4px] bg-transparent hover:bg-[#F2EFE9] text-[#1A1C1B] border border-[#E2DDD5] hover:border-[#1A1C1B] font-mono-spec text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"'
);

code = code.replace(
  /className="px-6 py-3\.5 rounded-\[4px\] bg-transparent hover:bg-\[#F2EFE9\] text-\[#1A1C1B\] border border-\[#E2DDD5\] hover:border-\[#1A1C1B\] font-mono-spec text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 cursor-pointer"/,
  'className="px-7 py-3.5 rounded-[4px] bg-[#1A1C1B] hover:bg-[#3E453D] text-[#FAF9F7] font-mono-spec text-xs uppercase tracking-widest font-semibold transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer w-full sm:w-auto"'
);

fs.writeFileSync('src/components/Hero.tsx', code);
