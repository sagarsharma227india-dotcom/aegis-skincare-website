import React from 'react';
import { Product } from '../types';
import { AegisMonogram } from './AegisMonogram';

interface ProductPackagingViewProps {
  product: Product;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const ProductPackagingView: React.FC<ProductPackagingViewProps> = ({
  product,
  size = 'md',
  className = ''
}) => {
  const specCode = product.id.toUpperCase().replace('AEGIS-', 'AG-');
  const cleanProductName = product.name.replace(/^THE AEGIS /i, '').replace(/^AEGIS /i, '').trim();

  // Thumbnail sizes (xs, sm)
  if (size === 'xs' || size === 'sm') {
    return (
      <div className={`relative w-full h-full bg-[#151714] overflow-hidden ${className}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
          <span className="text-[6px] font-mono-spec font-bold text-[#F8F5EF] uppercase truncate">{cleanProductName}</span>
        </div>
      </div>
    );
  }

  // Full sizes (md, lg, hero)
  const containerHeight = size === 'hero' ? 'h-72 sm:h-84' : size === 'lg' ? 'h-80 sm:h-96' : 'h-64 sm:h-72';

  return (
    <div
      className={`relative w-full ${containerHeight} bg-[#151714] rounded-[3px] overflow-hidden flex flex-col justify-end select-none border border-[#4B5848]/40 shadow-inner group ${className}`}
    >
      {/* Actual Photographic Image */}
      <img 
        src={product.image} 
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
        referrerPolicy="no-referrer"
      />

      {/* Lighting / Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

      {/* Top Clinical Spec Stamp */}
      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-[#20231F]/80 backdrop-blur-md px-2 py-0.5 rounded-[2px] border border-white/10 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#829177]" />
        <span className="text-[8px] font-mono-spec tracking-widest text-[#F8F5EF] font-bold uppercase">
          AEGIS // {specCode}
        </span>
      </div>

      {/* HTML Brand Label Overlay (ensures perfect label accuracy as requested) */}
      <div className="relative z-10 p-4 w-full">
        <div className="w-full max-w-[220px] mx-auto bg-[#F6F2E8]/95 backdrop-blur-sm rounded-[2px] p-3 text-[#1C1F1B] shadow-xl border border-[#D5CDBC]">
          <div className="flex justify-between items-center border-b border-[#C8BFAD] pb-1.5 mb-1.5">
            <div className="flex items-center gap-1">
              <AegisMonogram size={12} color="#1C1F1B" />
              <span className="font-serif-editorial font-bold text-xs tracking-[0.2em] text-[#1C1F1B]">
                AEGIS
              </span>
            </div>
            <span className="text-[7px] font-mono-spec font-bold text-[#4B5848] tracking-widest uppercase">
              {product.stepNumber.split(' ')[0]}
            </span>
          </div>
          
          <div className="text-left">
            <h4 className="font-mono-spec font-bold text-[11px] sm:text-[12px] uppercase text-[#1C1F1B] leading-tight line-clamp-1">
              {cleanProductName}
            </h4>
            <p className="text-[8px] text-[#5C625B] font-mono-spec line-clamp-1 mt-0.5">
              {product.subtitle}
            </p>
          </div>

          <div className="mt-2 bg-[#ECE6D6] px-1.5 py-0.5 rounded-[1px] border border-[#D5CDBC] text-left">
            <span className="text-[7px] font-mono-spec text-[#3A4036] font-semibold line-clamp-1">
              {product.formulaSpec}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
