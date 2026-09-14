const fs = require('fs');

let content2 = fs.readFileSync('src/components/ProductDetailModal.tsx', 'utf8');
content2 = content2.replace(/onError=\{\(e\) => \{ \(e\.currentTarget as HTMLImageElement\)\.src = '\/images\/placeholder-product\.jpg'; \}\}\s*\/\/\s*if \([\w\.]+ !== [\w\.]+\) \{[\s\S]*?\}\s*\}\}/, 
`onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/placeholder-product.jpg'; }}`);
fs.writeFileSync('src/components/ProductDetailModal.tsx', content2);
