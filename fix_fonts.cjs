const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Cormorant\+Garamond[^"]+" rel="stylesheet" \/>/,
  `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />`
);
fs.writeFileSync('index.html', html);

let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');
tailwind = tailwind.replace(/Cormorant Garamond/g, 'Playfair Display');
tailwind = tailwind.replace(/Plus Jakarta Sans/g, 'Inter');
fs.writeFileSync('tailwind.config.js', tailwind);

