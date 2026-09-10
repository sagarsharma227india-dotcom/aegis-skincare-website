import React from 'react';
import { Product } from '../types';
import { X, Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

interface ProductComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (productId: string) => void;
}

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  products,
  onClose,
  onRemoveProduct,
  onAddToCart,
  onSelectProduct
}) => {
  if (products.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#20231F]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] w-full max-w-5xl overflow-hidden shadow-2xl relative my-6">
        {/* Header */}
        <div className="px-6 py-4 bg-[#F2EEE7] border-b border-[#CFC8BC] flex items-center justify-between">
          <div className="space-y-0.5 text-left">
            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest">
              FORMULATION MATRIX
            </span>
            <h2 className="text-xl font-serif-editorial text-[#20231F]">
              Compare Products Side by Side
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#E8E1D6] hover:bg-[#CFC8BC] text-[#20231F] transition-colors border border-[#CFC8BC]"
            aria-label="Close comparison modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#CFC8BC]">
                <th className="py-4 px-3 text-[11px] font-mono-spec text-[#5C625B] uppercase w-1/4">
                  ATTRIBUTE
                </th>
                {products.map((p) => (
                  <th key={p.id} className="py-4 px-3 text-left align-top">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold">
                          {p.stepNumber}
                        </span>
                        <button
                          onClick={() => onRemoveProduct(p.id)}
                          className="text-[#5C625B] hover:text-[#A65F5F] p-1 text-xs"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div
                        onClick={() => onSelectProduct(p.id)}
                        className="cursor-pointer aspect-square w-20 h-20 bg-[#151714] rounded-[2px] overflow-hidden border border-[#CFC8BC]"
                      >
                        <ProductPackagingView
                          product={p}
                          size="xs"
                          className="w-full h-full border-none shadow-none"
                        />
                      </div>

                      <div>
                        <h4
                          onClick={() => onSelectProduct(p.id)}
                          className="cursor-pointer font-serif-editorial font-medium text-base text-[#20231F] hover:text-[#4B5848]"
                        >
                          {p.name}
                        </h4>
                        <span className="text-sm font-mono-spec font-bold text-[#20231F]">
                          ₹{p.price}
                        </span>
                      </div>

                      <button
                        onClick={() => onAddToCart(p)}
                        className="w-full py-1.5 px-2 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-[10px] font-mono-spec uppercase rounded-[2px] tracking-wider transition-colors flex items-center justify-center gap-1 font-semibold"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-xs text-[#20231F] divide-y divide-[#CFC8BC]/50">
              <tr>
                <td className="py-3 px-3 font-mono-spec text-[#5C625B] text-[11px] uppercase">
                  Best For
                </td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3">
                    {p.comparison?.bestFor || p.shortDescription}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 font-mono-spec text-[#5C625B] text-[11px] uppercase">
                  Texture & Finish
                </td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3">
                    <span className="font-medium text-[#20231F]">
                      {p.beforeYouBuy?.texture || p.comparison?.texture || 'Fluid'}
                    </span>
                    <span className="block text-[11px] text-[#5C625B]">
                      {p.beforeYouBuy?.finish || 'Matte'}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 font-mono-spec text-[#5C625B] text-[11px] uppercase">
                  Key Active Complex
                </td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3">
                    <span className="font-mono-spec text-[11px] text-[#4B5848] font-bold">
                      {p.formulaSpec}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 font-mono-spec text-[#5C625B] text-[11px] uppercase">
                  AM / PM Application
                </td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3">
                    <div className="space-y-1 text-[11px] font-mono-spec">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#5C625B]">AM:</span>
                        {p.comparison?.amUse !== false ? (
                          <span className="text-[#4B5848] font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Yes
                          </span>
                        ) : (
                          <span className="text-[#5C625B]">Optional</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#5C625B]">PM:</span>
                        {p.comparison?.pmUse !== false ? (
                          <span className="text-[#4B5848] font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" /> Yes
                          </span>
                        ) : (
                          <span className="text-[#5C625B] flex items-center gap-1">
                            <Minus className="w-3 h-3" /> Not Needed
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 font-mono-spec text-[#5C625B] text-[11px] uppercase">
                  Physiological pH
                </td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3 font-mono-spec text-[11px]">
                    {p.phLevel}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="py-3 px-3 font-mono-spec text-[#5C625B] text-[11px] uppercase">
                  Target Skin Type
                </td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3 text-[11px]">
                    {p.beforeYouBuy?.skinType || 'All skin types'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F2EEE7] border-t border-[#CFC8BC] text-center text-xs font-mono-spec text-[#5C625B]">
          All AEGIS formulations are 100% fragrance-free, sulfate-free, and pH balanced for optimal skin tolerance.
        </div>
      </div>
    </div>
  );
};
