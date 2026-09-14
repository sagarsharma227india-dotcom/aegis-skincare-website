const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace(
  /<span className="font-bold tracking-\[0\.24em\] text-xl text-\[#20231F\] group-hover:text-\[#4B5848\] transition-colors leading-none font-serif-editorial">\s*AEGIS\s*<\/span>/g,
  `<span className="font-bold tracking-[0.2em] text-xl text-[#1A1C1B] group-hover:text-[#526442] transition-colors leading-none font-serif-editorial">
              AEGIS MEN
            </span>`
);

fs.writeFileSync('src/components/Header.tsx', code);
