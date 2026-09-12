const fs = require('fs');
const path = require('path');

const publicFiles = fs.readdirSync(path.join(__dirname, 'public')).filter(f => f.endsWith('.jpg'));
const productsDir = path.join(__dirname, 'src/data/products');

const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(productsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // We are going to parse manually or with regex.
  // The structure is usually `id: 'some-id',` followed eventually by `image: 'https...',`
  
  // Using a regex to find blocks with id and image
  const blocks = content.split(/id:\s*['"]([^'"]+)['"]/);
  
  // blocks[0] is everything before the first id
  // blocks[1] is the first id
  // blocks[2] is the rest of the object
  // and so on...
  
  for (let i = 1; i < blocks.length; i += 2) {
    const id = blocks[i];
    let obj = blocks[i+1];
    
    // Check if the id matches any public jpg
    const imgName = id + '.jpg';
    if (publicFiles.includes(imgName)) {
      // replace the first image field in this block
      // Note: we might have galleryImages as well. We'll just replace the main image
      const imgRegex = /(image:\s*['"])([^'"]+)(['"])/;
      if (imgRegex.test(obj)) {
        obj = obj.replace(imgRegex, `$1/${imgName}$3`);
        blocks[i+1] = obj;
        changed = true;
      }
    }
  }

  if (changed) {
    content = blocks[0] + blocks.slice(1).reduce((acc, curr, idx) => {
      if (idx % 2 === 0) return acc + "id: '" + curr + "'";
      return acc + curr;
    }, "");
    fs.writeFileSync(filePath, content);
    console.log(`Updated images in ${file}`);
  }
});
