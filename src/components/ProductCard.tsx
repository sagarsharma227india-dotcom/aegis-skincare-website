import React from 'react';
import { Product } from '../types';
import { Heart, Star, Plus, ArrowRight } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

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
  const specCode = product.id.toUpperCase().replace('AEGIS-', 'AG-');

  return (
    <div className="group h-full flex-1 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#4B5848]/60 shadow-xs">
      {/* Top Meta & Wishlist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-[10px] font-mono-spec">
          <span className="text-[#4B5848] font-bold tracking-widest uppercase">
            {product.stepNumber}
          </span>
          <div className="flex items-center gap-1.5">
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
        </div>

        {/* Product Imagery - Authentic Real Photography */}
        <div
          id={`product-card-img-${product.id}`}
          onClick={() => onSelectProduct(product.id)}
          className="cursor-pointer relative aspect-square bg-[#151714] rounded-[2px] overflow-hidden flex items-center justify-center border border-[#CFC8BC]/40 group/img"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
            referrerPolicy="no-referrer"
          />

          {/* Overlay actual product label in HTML to maintain brand consistency over real photography */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
            <div className="flex justify-between items-end opacity-90">
              <span className="text-[10px] font-mono-spec font-bold tracking-[0.1em] text-white/90">
                AEGIS // {specCode}
              </span>
            </div>
          </div>

          {/* Quick View Hover Overlay Button */}
          <div className="absolute inset-0 bg-[#20231F]/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none group-hover/img:pointer-events-auto">
            <button
              id={`quick-view-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product.id);
              }}
              className="px-3.5 py-1.5 bg-[#F8F5EF] text-[#20231F] hover:bg-[#E8E1D6] text-[10px] font-mono-spec tracking-widest uppercase font-semibold rounded-[2px] shadow-sm flex items-center gap-1.5 transition-transform translate-y-1 group-hover/img:translate-y-0"
            >
              <span>Quick View</span>
              <ArrowRight className="w-3 h-3 text-[#4B5848]" />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div
          onClick={() => onSelectProduct(product.id)}
          className="cursor-pointer space-y-1.5 text-left"
        >
          {/* Skin Type / Category Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pb-0.5">
            {product.skinTypes && product.skinTypes[0] && (
              <span className="text-[9px] font-mono-spec uppercase px-1.5 py-0.5 bg-[#E8E1D6] text-[#4B5848] rounded-[2px] font-semibold">
                {product.skinTypes[0]}
              </span>
            )}
            <span className="text-[#4B5848] text-[9px] font-mono-spec font-medium tracking-wider uppercase line-clamp-1">
              {product.formulaSpec}
            </span>
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
