const fs = require('fs');
let code = fs.readFileSync('src/components/ShopView.tsx', 'utf8');

code = code.replace(
  /<p className="text-sm font-mono-spec text-\[#5E645F\]">\s*No formulas matched your current filter criteria\.\s*<\/p>/,
  `<p className="text-sm font-mono-spec text-[#5E645F] uppercase font-bold tracking-wider">
              NOTHING MATCHED YOUR FILTERS
            </p>`
);

code = code.replace(
  /Reset Filters/,
  `CLEAR FILTERS`
);

fs.writeFileSync('src/components/ShopView.tsx', code);
