const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(
  /<h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-\[#1A1C1B\] font-normal leading-\[1\.08\] tracking-tight">[\s\S]*?<\/h1>/,
  `<h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1A1C1B] font-normal leading-[1.08] tracking-tight">
                Your skin isn't complicated.<br />Your skincare shouldn't be.
              </h1>`
);

code = code.replace(
  /<p className="font-sans text-base sm:text-lg text-\[#5E645F\] max-w-2xl font-light leading-relaxed">[\s\S]*?<\/p>/,
  `<p className="font-sans text-base sm:text-lg text-[#5E645F] max-w-2xl font-light leading-relaxed">
                Science-backed formulas designed around your skin, your concerns, and your everyday routine.
              </p>`
);

code = code.replace(/<span>FIND MY ROUTINE<\/span>/, '<span>TAKE THE 60-SECOND SKIN ASSESSMENT</span>');
code = code.replace(/<span>EXPLORE ALL FORMULAS<\/span>/, '<span>SHOP PRODUCTS →</span>');

fs.writeFileSync('src/components/Hero.tsx', code);
