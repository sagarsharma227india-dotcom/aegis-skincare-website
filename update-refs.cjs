const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDir(dir) {
  const entries = fs.readdirSync(dir);
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace ./aegis- with /images/products/aegis- (etc based on bundle vs product vs journal)
      // Actually, we can use a regex to find all ./aegis-*.jpg and art-*.jpg and replace them with the correct path.
      
      const newContent = content.replace(/\.\/([a-zA-Z0-9_-]+\.jpg)/g, (match, file) => {
        changed = true;
        if (file.includes('routine') || file.includes('bundle') || file.includes('set')) {
          return '/images/bundles/' + file;
        } else if (file.startsWith('art-')) {
          return '/images/journal/' + file;
        } else {
          return '/images/products/' + file;
        }
      });
      
      // Also catch anything that has /aegis-*.jpg
      const newContent2 = newContent.replace(/(['"])\/([a-zA-Z0-9_-]+\.jpg)(['"])/g, (match, p1, file, p3) => {
        changed = true;
        if (file.includes('routine') || file.includes('bundle') || file.includes('set')) {
          return p1 + '/images/bundles/' + file + p3;
        } else if (file.startsWith('art-')) {
          return p1 + '/images/journal/' + file + p3;
        } else {
          return p1 + '/images/products/' + file + p3;
        }
      });

      if (changed && newContent2 !== content) {
        fs.writeFileSync(fullPath, newContent2);
        console.log('Updated ' + fullPath);
      }
    }
  });
}

processDir(srcDir);
