const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/--font-sans: 'Plus Jakarta Sans'/g, "--font-sans: 'Inter'");
css = css.replace(/--font-serif: 'Newsreader', 'Cormorant Garamond'/g, "--font-serif: 'Playfair Display'");

fs.writeFileSync('src/index.css', css);

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
  /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Cormorant\+Garamond[^"]+" rel="stylesheet" \/>/,
  `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />`
);
fs.writeFileSync('index.html', html);
