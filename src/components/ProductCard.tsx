import React, { useState } from "react";
import { Product } from "../types";
import { Heart, Star, Plus, Check } from "lucide-react";
import { useImageStore } from "../hooks/useImageStore";
import { motion } from "motion/react";

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
  isWishlisted,
}) => {
  const specCode = product.id.toUpperCase().replace("AEGIS-", "AG-");
  const { image } = useImageStore(product.id, product.image);
  const [isJustAdded, setIsJustAdded] = useState(false);

  // Only keep Limited Edition for exactly 5 specific products (minus clear-routine)
  const limitedEditionIds = [
    'aegis-starter-bundle',
    'aegis-even-routine',
    'aegis-oil-control-set',
    'aegis-repair',
    'aegis-wash' // Replacing clear-routine with aegis-wash to keep it at 5, or I can just leave 4. Let's stick to 4 if user asked to remove clear routine. But user said "keep limited edition for any 5 products". So I'll add aegis-shield to keep it 5.
  ];
  
  const isLimited = limitedEditionIds.includes(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsJustAdded(true);
    setTimeout(() => setIsJustAdded(false), 1200);
  };

  return (
    <motion.div
      id={`product-card-${product.id}`}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelectProduct(product.id)}
      className="group h-full flex-1 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#4B5848] hover:shadow-md cursor-pointer select-none"
    >
      {/* Top Meta, Inventory Badge & Wishlist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-[10px] font-mono-spec">
          <div className="flex items-center gap-2">
            <span className="text-[#4B5848] font-bold tracking-widest uppercase">
              {product.stepNumber}
            </span>
            {/* Subtle Inventory Context Badge */}
            {isLimited && (
              <span className="inline-flex items-center gap-1 text-[9px] font-mono-spec uppercase tracking-wider font-semibold px-2 py-0.5 rounded-[2px] bg-[#EFE9DF] text-[#7A5826] border border-[#DDD0BC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A87B32]" />
                Limited Edition
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <motion.button
              id={`wishlist-btn-${product.id}`}
              type="button"
              whileTap={{ scale: 0.88 }}
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product.id);
              }}
              className={`p-1.5 rounded-[3px] border transition-colors cursor-pointer ${
                isWishlisted
                  ? "bg-[#4B5848] border-[#4B5848] text-[#F8F5EF]"
                  : "bg-[#F2EEE7] border-[#CFC8BC] text-[#5C625B] hover:text-[#20231F] hover:border-[#20231F]"
              }`}
              title={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <Heart
                className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`}
              />
            </motion.button>
          </div>
        </div>

        {/* Product Imagery - Authentic Real Photography */}
        <div
          id={`product-card-img-${product.id}`}
          className="relative aspect-square bg-[#151714] rounded-[2px] overflow-hidden flex items-center justify-center border border-[#CFC8BC]/40 group/img"
        >
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to base product image if custom fails to load
              if (image !== product.image) {
                (e.target as HTMLImageElement).src = product.image;
              }
            }}
          />

          {/* Overlay actual product label in HTML to maintain brand consistency over real photography */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
            <div className="flex justify-between items-end opacity-90">
              <span className="text-[10px] font-mono-spec font-bold tracking-[0.1em] text-white/90">
                AEGIS // {specCode}
              </span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-1.5 text-left">
          {/* Skin Type / Category Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pb-0.5">
            {product.skinTypes && product.skinTypes[0] && (
              <span className="text-[9px] font-mono-spec uppercase px-1.5 py-0.5 bg-[#E8E1D6] text-[#4B5848] rounded-[2px] font-semibold">
                {product.skinTypes[0]}
              </span>
            )}
            <span className="text-[#4B5848] text-[9px] font-mono-spec font-medium tracking-wider uppercase">
              {product.formulaSpec}
            </span>
          </div>

          <h3
            id={`product-title-${product.id}`}
            className="font-serif-editorial text-lg font-medium text-[#20231F] group-hover:text-[#4B5848] transition-colors leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#5C625B] font-normal">
            {product.subtitle}
          </p>

          <p className="text-xs text-[#5C625B] pt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Bottom Price, Rating & Add to Bag Action */}
      <div className="pt-5 mt-4 border-t border-[#CFC8BC]/60 flex items-center justify-between gap-3">
        <div className="text-left">
          <div className="flex items-baseline gap-2 font-mono-spec">
            <span className="font-bold text-[#20231F] text-base">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#5C625B] line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#5C625B]">
            <Star className="w-3 h-3 fill-[#4B5848] text-[#4B5848]" />
            <span className="font-semibold text-[#20231F]">
              {product.rating}
            </span>
            <span>({product.reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            id={`add-to-bag-${product.id}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.93 }}
            onClick={handleQuickAdd}
            className={`px-3.5 sm:px-4 py-2 rounded-[3px] font-mono-spec text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
              isJustAdded
                ? "bg-[#20231F] text-[#F8F5EF]"
                : "bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF]"
            }`}
          >
            {isJustAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#A8D5BA]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
