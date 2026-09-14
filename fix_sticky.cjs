const fs = require('fs');
let code = fs.readFileSync('src/components/ProductDetailModal.tsx', 'utf8');

code = code.replace(
  /\{\/\* Sticky Actions Toolbar \*\/\}\s*<div className="p-4 bg-\[#F2EFE9\] border border-\[#E2DDD5\] rounded-\[4px\] flex flex-wrap items-center gap-3">/,
  `{/* Sticky Actions Toolbar */}
            <div className="sticky bottom-0 left-0 right-0 z-20 p-4 bg-[#F2EFE9]/95 backdrop-blur-sm border-t lg:border border-[#E2DDD5] lg:rounded-[4px] flex flex-wrap items-center gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] lg:shadow-none lg:static -mx-5 lg:mx-0 -mb-5 lg:mb-0 mt-6">`
);

fs.writeFileSync('src/components/ProductDetailModal.tsx', code);
