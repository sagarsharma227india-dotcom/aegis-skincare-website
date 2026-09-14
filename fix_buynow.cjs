const fs = require('fs');
let code = fs.readFileSync('src/components/ProductDetailModal.tsx', 'utf8');

const replacement = `
              <button
                id="modal-add-to-bag"
                onClick={() => {
                  for(let i=0; i<quantity; i++) onAddToCart(product);
                  onShowToast(\`Added \${quantity}x \${product.name} to bag.\`);
                }}
                className="flex-1 py-3 bg-[#526442] hover:bg-[#394536] text-[#FAF9F7] text-xs font-mono-spec tracking-wider uppercase font-semibold rounded-[3px] transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag · ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </button>
              <button
                id="modal-buy-now"
                onClick={() => {
                  for(let i=0; i<quantity; i++) onAddToCart(product);
                  // Assuming checkout drawer opens somehow, or just toast for now
                  onShowToast(\`Proceeding to checkout with \${product.name}\`);
                }}
                className="flex-1 py-3 bg-[#1A1C1B] hover:bg-[#3E453D] text-[#FAF9F7] text-xs font-mono-spec tracking-wider uppercase font-semibold rounded-[3px] transition-colors flex items-center justify-center gap-2"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
`;

// Currently it's:
// <button id="modal-add-to-bag" ...> <ShoppingBag/> <span>Add to Bag...</span> <ArrowRight/> </button>
code = code.replace(
  /<button\s+id="modal-add-to-bag"[\s\S]*?<\/button>/,
  replacement
);

fs.writeFileSync('src/components/ProductDetailModal.tsx', code);
