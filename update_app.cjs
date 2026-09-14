const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Add imports
if (!code.includes("import { ShopByConcern }")) {
  code = code.replace(
    "import { BrandPhilosophy } from './components/BrandPhilosophy';",
    "import { BrandPhilosophy } from './components/BrandPhilosophy';\nimport { ShopByConcern } from './components/ShopByConcern';\nimport { Bestsellers } from './components/Bestsellers';"
  );
}

// Add to layout after BrandPhilosophy
code = code.replace(
  /<BrandPhilosophy \/>/,
  `<BrandPhilosophy />\n            <ShopByConcern setCurrentView={changeView} />\n            <Bestsellers onSelectProduct={handleSelectProduct} onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} wishlistIds={wishlistIds} />`
);

fs.writeFileSync('src/App.tsx', code);
