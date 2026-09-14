const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace(/id=\{`nav-\$\{link\.id\}`\}/g, "id={`nav-${link.label.toLowerCase().replace(/\\s+/g, '-')}`}");

fs.writeFileSync('src/components/Header.tsx', code);
