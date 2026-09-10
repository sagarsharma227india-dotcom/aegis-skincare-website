const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/data/products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

// High quality Unsplash images grouped by category
const images = {
  serums: [
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1580870059805-47c63be3db94?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80'
  ],
  cleansers: [
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615397323058-29a393fbab93?auto=format&fit=crop&w=800&q=80'
  ],
  moisturizers: [
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556228720-1c2be2414d8c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611078449492-5743b35be9bd?auto=format&fit=crop&w=800&q=80'
  ],
  sunscreens: [
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80'
  ],
  treatments: [
    'https://images.unsplash.com/photo-1629198725699-317fb57375a0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80'
  ],
  body: [
    'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
  ],
  masks: [
    'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1607500516104-5853245452d9?auto=format&fit=crop&w=800&q=80'
  ],
  exfoliation: [
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80'
  ],
  bundles: [
    'https://images.unsplash.com/photo-1615397323058-29a393fbab93?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80'
  ],
  textures: [
    'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
  ]
};

let counts = {
  serums: 0, cleansers: 0, moisturizers: 0, sunscreens: 0, treatments: 0, body: 0, masks: 0, exfoliation: 0, bundles: 0
};

files.forEach(file => {
  if (file === 'reviews.ts') return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the `images: { ... }` block
  const imageBlockRegex = /images:\s*\{[\s\S]*?\},/g;
  
  // Categorize based on file name
  const cat = file.replace('.ts', '');
  
  content = content.replace(imageBlockRegex, (match) => {
    // Extract main and texture if present
    let mainMatch = match.match(/main:\s*['"](.*?)['"]/);
    let textureMatch = match.match(/texture:\s*['"](.*?)['"]/);
    
    let mainImg = mainMatch ? mainMatch[1] : '';
    let textureImg = textureMatch ? textureMatch[1] : images.textures[Math.floor(Math.random() * images.textures.length)];
    
    // Select new beautiful Unsplash image for main based on category
    let pool = images[cat] || images.serums;
    let newMain = pool[counts[cat] % pool.length];
    counts[cat]++;
    
    let g1 = pool[(counts[cat]+1) % pool.length];
    let g2 = images.textures[Math.floor(Math.random() * images.textures.length)];
    
    return `image: '${newMain}',
    galleryImages: [
      '${newMain}',
      '${g1}',
      '${g2}'
    ],
    textureImage: '${textureImg}',`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed products');
