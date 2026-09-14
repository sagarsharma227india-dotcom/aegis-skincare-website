const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = content.replace(/₹\{([a-zA-Z0-9_.[\]]+price)\}/g, "₹{$1.toLocaleString('en-IN')}");
      // For standalone variables like price, totalPrice, item.product.price
      updated = updated.replace(/₹\{([a-zA-Z0-9_.[\]]+)\}/g, (match, p1) => {
         if (p1.toLowerCase().includes('price') || p1.toLowerCase().includes('total')) {
             return `₹{${p1}.toLocaleString('en-IN')}`;
         }
         return match;
      });
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated);
      }
    }
  }
}

processDir('src/components');
