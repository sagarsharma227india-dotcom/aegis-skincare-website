import React from 'react';
import { Product } from '../types';
import { Heart, Star, Plus, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  return (
    <div className="group bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#4B5848]/60 shadow-xs">
      {/* Top Meta & Wishlist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-[10px] font-mono-spec">
          <span className="text-[#4B5848] font-bold tracking-widest uppercase">
            {product.stepNumber}
          </span>
          <button
            id={`wishlist-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`p-1.5 rounded-[3px] transition-colors ${
              isWishlisted ? 'text-[#A65F5F]' : 'text-[#5C625B] hover:text-[#20231F]'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Product Imagery */}
        <div
          id={`product-card-img-${product.id}`}
          onClick={() => onSelectProduct(product.id)}
          className="cursor-pointer aspect-square bg-[#F2EEE7] rounded-[2px] overflow-hidden flex items-center justify-center p-6 border border-[#CFC8BC]/40"
        >
          <img
            src={product.images.main}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Product Details */}
        <div
          onClick={() => onSelectProduct(product.id)}
          className="cursor-pointer space-y-1.5 text-left"
        >
          <div className="flex items-center gap-1 text-[#4B5848] text-[10px] font-mono-spec font-medium tracking-wider uppercase">
            <span>{product.formulaSpec}</span>
          </div>

          <h3 className="font-serif-editorial text-lg font-medium text-[#20231F] group-hover:text-[#4B5848] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#5C625B] font-normal line-clamp-1">
            {product.subtitle}
          </p>

          <p className="text-xs text-[#5C625B] line-clamp-2 pt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Bottom Price, Rating & Action */}
      <div className="pt-5 mt-4 border-t border-[#CFC8BC]/60 flex items-center justify-between">
        <div className="text-left">
          <div className="flex items-baseline gap-2 font-mono-spec">
            <span className="font-bold text-[#20231F] text-base">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-[#5C625B] line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#5C625B]">
            <Star className="w-3 h-3 fill-[#4B5848] text-[#4B5848]" />
            <span className="font-semibold text-[#20231F]">{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
        </div>

        <button
          id={`add-to-bag-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="px-4 py-2 rounded-[3px] bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};
