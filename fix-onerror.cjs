const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/components');

function processDir(dir) {
  const entries = fs.readdirSync(dir);
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Let's replace the whole onError={...} block
      const newContent = content.replace(/onError=\{\(e\) => \{[\s\S]*?\}\}/g, `onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/placeholder-product.jpg';
            }}`);
            
      // Also catch my messy previous replace
      const newContent2 = newContent.replace(/\/\/ \s*\/\/ Fallback[\s\S]*?(?=\/>|<div)/g, ''); // dangerous

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  });
}

processDir(srcDir);
