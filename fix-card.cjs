const fs = require('fs');
const file = 'src/components/ProductCard.tsx';
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/onError=\{\(e\) => \{\s*\(e\.currentTarget as HTMLImageElement\)\.src = '\/images\/placeholder-product\.jpg';\s*\}\}\s*\/\/\s*\/\/ Fallback[\s\S]*?\}\}\s*\/>/g, `onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/placeholder-product.jpg';
            }}
          />`);
fs.writeFileSync(file, text);
