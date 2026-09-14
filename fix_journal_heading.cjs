const fs = require('fs');
let code = fs.readFileSync('src/components/JournalView.tsx', 'utf8');

code = code.replace(
  /<h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-normal text-\[#1A1C1B\] leading-\[1\.08\] tracking-tight">\s*The Clinical Journal\.\s*<\/h1>/,
  `<h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-normal text-[#1A1C1B] leading-[1.08] tracking-tight">
                  THE AEGIS JOURNAL
                </h1>`
);

code = code.replace(
  /<p className="text-base sm:text-lg text-\[#5E645F\] font-light leading-relaxed">\s*Rigorous physiological guides on male stratum corneum mechanics, active ingredient bioavailability, barrier recovery from shaving friction, and non-comedogenic sunscreen technology\.\s*<\/p>/,
  `<p className="text-base sm:text-lg text-[#5E645F] font-light leading-relaxed">
                  Skin science, without the noise.
                </p>`
);

fs.writeFileSync('src/components/JournalView.tsx', code);
