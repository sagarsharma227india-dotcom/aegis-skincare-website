const fs = require('fs');
const path = require('path');

const colorMap = {
  '#20231F': '#1A1C1B', // Primary Text
  '#4B5848': '#526442', // Primary Accent
  '#F8F5EF': '#FAF9F7', // Primary Background
  '#E8E1D6': '#F2EFE9', // Tonal Surface 1 (slightly darker than bg)
  '#F2EEE7': '#F2EFE9', // Tonal Surface 2
  '#CFC8BC': '#E2DDD5', // Borders
  '#5C625B': '#5E645F', // Secondary Text
};

function processDir(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = content;
      for (const [oldColor, newColor] of Object.entries(colorMap)) {
        // Case-insensitive replace for colors
        const regex = new RegExp(oldColor, 'gi');
        updated = updated.replace(regex, newColor);
      }
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated);
      }
    }
  }
}

processDir('src');
processDir('.'); // for index.html
console.log('Colors replaced.');
