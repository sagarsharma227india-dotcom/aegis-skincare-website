const fs = require('fs');
const path = require('path');

const publicFiles = fs.readdirSync(path.join(__dirname, 'public')).filter(f => f.endsWith('.jpg'));
const dataDir = path.join(__dirname, 'src/data');
const filePath = path.join(dataDir, 'journal.ts');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const blocks = content.split(/id:\s*['"]([^'"]+)['"]/);
  for (let i = 1; i < blocks.length; i += 2) {
    const id = blocks[i];
    let obj = blocks[i+1];
    
    // Check if the id matches any public jpg
    const imgName = id + '.jpg';
    if (publicFiles.includes(imgName)) {
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
    console.log(`Updated images in journal.ts`);
  }
}
