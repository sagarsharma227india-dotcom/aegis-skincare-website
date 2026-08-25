import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, ShieldCheck } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="bg-[#E8E1D6] py-20 lg:py-24 border-b border-[#CFC8BC] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-spec tracking-[0.2em] uppercase text-[#4B5848] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>COMMUNITY FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-normal text-[#20231F]">
            Everyday Experiences
          </h2>
          <p className="text-xs sm:text-sm text-[#5C625B] leading-relaxed">
            Real feedback from men using the 3-minute protocol across varying climates and skin types.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#4B5848]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-spec text-[#5C625B]">
                    {review.date}
                  </span>
                </div>

                <p className="text-xs text-[#20231F] leading-relaxed font-serif-editorial italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#CFC8BC]/60 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#20231F] font-serif-editorial">
                    {review.author}
                  </span>
                  {review.verifiedBuyer && (
                    <span className="text-[9px] font-mono-spec text-[#4B5848] font-semibold uppercase">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono-spec text-[#5C625B]">
                  <span>{review.city}</span>
                  <span className="truncate max-w-[120px]">{review.productName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
