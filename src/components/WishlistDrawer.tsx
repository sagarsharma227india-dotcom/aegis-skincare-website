import React from 'react';
import { Product, NavView } from '../types';
import { PRODUCTS } from '../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (productId: string) => void;
  setCurrentView: (view: NavView) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  setCurrentView
}) => {
  if (!isOpen) return null;

  const savedProducts = wishlistIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#20231F]/70 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div className="bg-[#F8F5EF] border-l border-[#CFC8BC] w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-[#CFC8BC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#A65F5F] fill-current" />
            <h2 className="font-serif-editorial text-xl font-medium text-[#20231F]">
              Saved Formulations ({savedProducts.length})
            </h2>
          </div>
          <button
            id="wishlist-drawer-close-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F2EEE7] text-[#20231F] border border-transparent hover:border-[#CFC8BC] transition-colors"
            aria-label="Close saved items"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-left">
          {savedProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F2EEE7] border border-[#CFC8BC] flex items-center justify-center mx-auto text-[#5C625B]">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-editorial text-lg text-[#20231F]">
                  You haven't saved any formulas yet
                </h3>
                <p className="text-xs text-[#5C625B] max-w-xs mx-auto">
                  Click the heart icon on any product to save it to your personal wishlist for later review.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  setCurrentView('shop');
                }}
                className="px-6 py-2.5 bg-[#4B5848] text-[#F8F5EF] text-xs font-mono-spec uppercase tracking-wider rounded-[3px]"
              >
                Browse Catalogue
              </button>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] flex gap-4 items-center justify-between"
              >
                <div
                  onClick={() => {
                    onClose();
                    onSelectProduct(product.id);
                  }}
                  className="cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-[2px] overflow-hidden border border-[#CFC8BC]">
                    <ProductPackagingView product={product} size="xs" />
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#4B5848] uppercase font-bold block">
                    {product.stepNumber}
                  </span>
                  <h4
                    onClick={() => {
                      onClose();
                      onSelectProduct(product.id);
                    }}
                    className="cursor-pointer text-xs font-bold text-[#20231F] truncate font-serif-editorial hover:text-[#4B5848]"
                  >
                    {product.name}
                  </h4>
                  <div className="text-xs font-mono-spec font-semibold text-[#20231F]">
                    ₹{product.price}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onToggleWishlist(product.id);
                      }}
                      className="px-3 py-1 bg-[#4B5848] text-[#F8F5EF] text-[10px] font-mono-spec uppercase rounded-[2px] flex items-center gap-1 font-semibold"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onToggleWishlist(product.id)}
                      className="text-[#5C625B] hover:text-[#A65F5F] p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProducts.length > 0 && (
          <div className="p-6 bg-[#F2EEE7] border-t border-[#CFC8BC]">
            <button
              onClick={() => {
                savedProducts.forEach((p) => onAddToCart(p));
                onClose();
              }}
              className="w-full py-3 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-xs font-mono-spec uppercase tracking-wider font-semibold rounded-[3px]"
            >
              Add All Saved Items to Bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
