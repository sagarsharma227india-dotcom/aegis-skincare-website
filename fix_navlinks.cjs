const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

const newNavLinks = `  const navLinks: { id: NavView | 'faq'; label: string }[] = [
    { id: 'shop', label: 'SHOP' },
    { id: 'shop', label: 'CONCERNS' },
    { id: 'routines', label: 'ROUTINES' },
    { id: 'science', label: 'SCIENCE' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'about', label: 'ABOUT' },
  ];`;

code = code.replace(/const navLinks: \{ id: NavView \| 'faq'; label: string \}\[\] = \[[\s\S]*?\];/, newNavLinks);

fs.writeFileSync('src/components/Header.tsx', code);
