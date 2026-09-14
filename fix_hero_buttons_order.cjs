const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// I'll manually replace the button blocks
const newButtons = `
              <button
                id="hero-quiz-cta"
                onClick={() => {
                  setCurrentView('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-[4px] bg-[#1A1C1B] hover:bg-[#3E453D] text-[#FAF9F7] font-mono-spec text-xs uppercase tracking-widest font-semibold transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>TAKE THE 60-SECOND SKIN ASSESSMENT</span>
              </button>
              <button
                id="hero-shop-all-cta"
                onClick={() => {
                  setCurrentView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-[4px] bg-transparent hover:bg-[#F2EFE9] text-[#1A1C1B] border border-[#E2DDD5] hover:border-[#1A1C1B] font-mono-spec text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SHOP PRODUCTS &rarr;</span>
              </button>
`;

// use a regex to match from `<button id="hero-shop-all-cta"` to `</button>` including the second button
code = code.replace(/<button\s+id="hero-shop-all-cta"[\s\S]*?<\/button>\s*<button\s+id="hero-quiz-cta"[\s\S]*?<\/button>/, newButtons);
fs.writeFileSync('src/components/Hero.tsx', code);
