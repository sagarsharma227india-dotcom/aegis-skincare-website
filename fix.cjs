const fs = require('fs');

['src/components/Hero.tsx', 'src/components/ProductDetailModal.tsx', 'src/components/ProductCard.tsx', 'src/components/JournalView.tsx', 'src/components/StarterSystemHero.tsx'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/onError=\{\(e\) => \{[\s\S]*?\}\}/g, `onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/placeholder-product.jpg'; }}`);
    fs.writeFileSync(file, content);
  }
});
