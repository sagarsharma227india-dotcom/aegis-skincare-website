const fs = require('fs');
let content = fs.readFileSync('src/data/journal.ts', 'utf8');

// art-male-dermal-biology
content = content.replace(/image:\s*'[^']+',\s*relatedProducts:\s*\['aegis-starter-bundle'/g, "image: '/art-male-dermal-biology.jpg',\n    relatedProducts: ['aegis-starter-bundle'");

content = content.replace(/image:\s*'[^']+',\s*relatedProducts:\s*\['aegis-repair'/g, "image: '/art-skin-barrier-tewl.jpg',\n    relatedProducts: ['aegis-repair'");

// Just replacing all manually by matching the id of the article
const articles = [
  'art-male-dermal-biology',
  'art-skin-barrier-tewl',
  'art-photobiology-cellular-senescence',
  'art-follicular-dysbiosis-sebum',
  'art-circadian-dermatology-nocturnal-repair',
  'art-minimalist-dermatology-protocols'
];

articles.forEach(art => {
  const regex = new RegExp(`id:\\s*'${art}'[\\s\\S]*?image:\\s*'([^']+)'`);
  const match = content.match(regex);
  if (match) {
    const origImage = match[1];
    content = content.replace(origImage, `/${art}.jpg`);
  }
});

fs.writeFileSync('src/data/journal.ts', content);
