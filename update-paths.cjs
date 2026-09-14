const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imgDir = path.join(publicDir, 'images');
const prodDir = path.join(imgDir, 'products');
const bundleDir = path.join(imgDir, 'bundles');
const journalDir = path.join(imgDir, 'journal');
const heroDir = path.join(imgDir, 'hero');
const lifestyleDir = path.join(imgDir, 'lifestyle');

[imgDir, prodDir, bundleDir, journalDir, heroDir, lifestyleDir].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.jpg'));

files.forEach(file => {
  const oldPath = path.join(publicDir, file);
  let newDir = prodDir; // default
  if (file.includes('routine') || file.includes('bundle') || file.includes('set')) {
    newDir = bundleDir;
  } else if (file.startsWith('art-')) {
    newDir = journalDir;
  }
  
  const newPath = path.join(newDir, file);
  fs.renameSync(oldPath, newPath);
});

console.log('Moved images');
