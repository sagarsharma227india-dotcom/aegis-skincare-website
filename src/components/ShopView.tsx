import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, SkinConcern } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { RecentlyViewed } from './RecentlyViewed';
import { ProductComparisonModal } from './ProductComparisonModal';
import { Filter, SlidersHorizontal, ArrowUpDown, Layers, Check, X } from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';

interface ShopViewProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
  recentlyViewedIds: string[];
}

export const ShopView: React.FC<ShopViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  recentlyViewedIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedConcern, setSelectedConcern] = useState<SkinConcern>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Formulations' },
    { id: 'bundles', label: 'Systems & Bundles' },
    { id: 'cleansers', label: 'Cleansers' },
    { id: 'serums', label: 'Corrective Serums' },
    { id: 'moisturizers', label: 'Barrier Fluids' },
    { id: 'spf', label: 'Daily Sunscreen' }
  ];

  const concerns: { id: SkinConcern; label: string }[] = [
    { id: 'all', label: 'All Concerns' },
    { id: 'acne', label: 'Breakouts & Clogged Pores' },
    { id: 'oil', label: 'Excess Shine & Sebum' },
    { id: 'redness', label: 'Razor Burn & Friction' },
    { id: 'dehydration', label: 'Dryness & Barrier Support' },
    { id: 'aging', label: 'Daily UV Exposure' }
  ];

  const toggleCompare = (productId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), productId];
      }
      return [...prev, productId];
    });
  };

  const comparedProducts = compareIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchCon = selectedConcern === 'all' || p.concerns.includes(selectedConcern);
      return matchCat && matchCon;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedConcern, sortBy]);

  return (
    <div className="bg-[#E8E1D6] min-h-screen py-12 lg:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-spec tracking-[0.2em] uppercase text-[#4B5848] font-semibold">
            <AegisMonogram size={14} color="#4B5848" />
            <span>AEGIS FORMULATION INDEX</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-editorial font-normal text-[#20231F] leading-tight">
            Shop Formulations
          </h1>
          <p className="text-sm sm:text-base text-[#5C625B] leading-relaxed">
            Purposeful formulas for the skin concerns that matter. Disclosed active concentrations at physiological pH.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] p-5 space-y-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-[11px] font-mono-spec text-[#5C625B] uppercase pr-2 font-medium shrink-0">
              CATEGORY:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`shop-category-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-mono-spec tracking-wider uppercase transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#4B5848] text-[#F8F5EF] font-semibold shadow-xs'
                    : 'bg-[#F8F5EF] text-[#20231F] border border-[#CFC8BC] hover:border-[#20231F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Concerns & Sorting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#CFC8BC]/60">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-[11px] font-mono-spec text-[#5C625B] uppercase pr-2 font-medium shrink-0">
                SHOP BY CONCERN:
              </span>
              {concerns.map((con) => (
                <button
                  key={con.id}
                  id={`shop-concern-${con.id}`}
                  onClick={() => setSelectedConcern(con.id)}
                  className={`px-3 py-1 rounded-[3px] text-[11px] font-mono-spec tracking-wide uppercase transition-all whitespace-nowrap ${
                    selectedConcern === con.id
                      ? 'bg-[#20231F] text-[#F8F5EF] font-semibold'
                      : 'bg-transparent text-[#5C625B] hover:text-[#20231F]'
                  }`}
                >
                  {con.label}
                </button>
              ))}
            </div>

            {/* Sort selection */}
            <div className="flex items-center gap-2 text-xs font-mono-spec shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#5C625B]" />
              <label htmlFor="shop-sort-select" className="text-[#5C625B]">SORT:</label>
              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] px-2.5 py-1 text-xs text-[#20231F] focus:outline-hidden"
              >
                <option value="featured">Featured Protocol</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] space-y-4">
            <p className="text-sm font-mono-spec text-[#5C625B]">
              No formulas matched your current filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedConcern('all');
              }}
              className="px-5 py-2 bg-[#4B5848] text-[#F8F5EF] text-xs font-mono-spec uppercase rounded-[3px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="relative flex flex-col">
                <ProductCard
                  product={product}
                  onSelectProduct={onSelectProduct}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
                <div className="mt-2 flex items-center justify-end">
                  <button
                    onClick={() => toggleCompare(product.id)}
                    className={`text-[10px] font-mono-spec uppercase px-2 py-1 rounded-[2px] transition-colors flex items-center gap-1 ${
                      compareIds.includes(product.id)
                        ? 'bg-[#20231F] text-[#F8F5EF]'
                        : 'text-[#5C625B] hover:text-[#20231F]'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>{compareIds.includes(product.id) ? 'Comparing' : '+ Compare'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Compare Bar */}
        {compareIds.length > 0 && (
          <aside aria-label="Product comparison bar" className="fixed bottom-6 right-6 z-40 bg-[#20231F] text-[#F8F5EF] border border-[#3E453D] rounded-[4px] p-4 shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="space-y-0.5 text-left">
              <span className="text-[9px] font-mono-spec text-[#A9B7B7] uppercase tracking-widest block">
                COMPARE MATRIX ({compareIds.length}/3)
              </span>
              <div className="flex gap-2">
                {comparedProducts.map((p) => (
                  <span key={p.id} className="text-xs font-serif-editorial text-[#F8F5EF] flex items-center gap-1">
                    {p.name}
                    <button onClick={() => toggleCompare(p.id)} className="text-[#A9B7B7] hover:text-[#F8F5EF]">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <button
              id="open-compare-modal-btn"
              onClick={() => setIsCompareOpen(true)}
              className="py-2 px-4 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-xs font-mono-spec uppercase tracking-wider font-semibold rounded-[3px] transition-colors"
            >
              Compare
            </button>
          </aside>
        )}

        {/* Recently Viewed */}
        <RecentlyViewed
          viewedIds={recentlyViewedIds}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />

        {/* Comparison Modal */}
        {isCompareOpen && (
          <ProductComparisonModal
            products={comparedProducts}
            onClose={() => setIsCompareOpen(false)}
            onRemoveProduct={toggleCompare}
            onAddToCart={onAddToCart}
            onSelectProduct={onSelectProduct}
          />
        )}
      </div>
    </div>
  );
};
