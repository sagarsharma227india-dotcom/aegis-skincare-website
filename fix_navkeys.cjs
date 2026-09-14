const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace(/key=\{link\.id\}/g, 'key={link.label}');

fs.writeFileSync('src/components/Header.tsx', code);
