const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');

// Replace formula spec with concerns
code = code.replace(
  /<div className="flex flex-wrap items-center gap-1\.5 pb-0\.5">[\s\S]*?<\/div>/,
  `<div className="flex flex-wrap items-center gap-1.5 pb-0.5">
            <span className="text-[10px] font-mono-spec font-bold tracking-wider uppercase text-[#526442]">
              {product.concerns.slice(0, 2).join(' · ')}
            </span>
          </div>`
);

// Scale 1.02
code = code.replace(/group-hover:scale-\[1\.03\]/g, 'group-hover:scale-[1.02]');

fs.writeFileSync('src/components/ProductCard.tsx', code);
