import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Star, Plus, ArrowRight } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

interface RecentlyViewedProps {
  viewedIds: string[];
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({
  viewedIds,
  onSelectProduct,
  onAddToCart
}) => {
  const viewedProducts = viewedIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  if (viewedProducts.length === 0) return null;

  return (
    <section className="border-t border-[#E2DDD5] pt-12 mt-16 text-left">
      <div className="flex items-center justify-between pb-6">
        <div>
          <span className="text-[10px] font-mono-spec text-[#526442] font-bold uppercase tracking-widest block">
            BROWSING HISTORY
          </span>
          <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#1A1C1B]">
            You Were Looking At
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {viewedProducts.slice(0, 4).map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product.id)}
            className="group cursor-pointer bg-[#FAF9F7] border border-[#E2DDD5] rounded-[3px] p-4 flex flex-col justify-between hover:border-[#526442] transition-all"
          >
            <div className="space-y-3">
              <div className="aspect-square bg-[#151714] rounded-[2px] border border-[#E2DDD5]/30 overflow-hidden flex items-center justify-center">
                <ProductPackagingView
                  product={product}
                  size="sm"
                  className="w-full h-full border-none shadow-none transition-transform group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono-spec text-[#526442] uppercase tracking-wider block">
                  {product.stepNumber}
                </span>
                <h4 className="font-serif-editorial text-sm font-medium text-[#1A1C1B] group-hover:text-[#526442] transition-colors line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-[11px] text-[#5E645F] line-clamp-1">{product.subtitle}</p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-[#E2DDD5]/50 flex items-center justify-between">
              <span className="font-mono-spec text-xs font-bold text-[#1A1C1B]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className="p-1.5 bg-[#526442] hover:bg-[#394536] text-[#FAF9F7] rounded-[2px] text-[10px] font-mono-spec uppercase transition-colors"
                title="Add to bag"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
