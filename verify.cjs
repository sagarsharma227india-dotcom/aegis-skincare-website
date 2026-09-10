const fs = require('fs');
const path = require('path');

const journals = fs.readFileSync('src/data/journal.ts', 'utf8');
const numJournals = (journals.match(/id:\s*'art-/g) || []).length;
console.log(`Journals found: ${numJournals}`);

const productsDir = path.join(__dirname, 'src', 'data', 'products');
const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.ts') && f !== 'reviews.ts');
let products = [];
files.forEach(file => {
  const content = fs.readFileSync(path.join(productsDir, file), 'utf8');
  const matches = content.match(/image:\s*'([^']+)'/g);
  if (matches) {
    products.push(...matches.map(m => m.match(/'([^']+)'/)[1]));
  }
});
console.log(`Total Products extracted from TS: ${products.length}`);
const unique = new Set(products);
console.log(`Unique Product Images: ${unique.size}`);

