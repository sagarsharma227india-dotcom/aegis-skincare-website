import React from 'react';
import { motion } from 'motion/react';
import { NavView } from '../types';

interface ShopByConcernProps {
  setCurrentView: (view: NavView) => void;
}

export const ShopByConcern: React.FC<ShopByConcernProps> = ({ setCurrentView }) => {
  const concerns = [
    { id: 'acne', label: 'Acne & Breakouts' },
    { id: 'oil', label: 'Oil Control' },
    { id: 'texture', label: 'Blackheads & Pores' },
    { id: 'dark-spots', label: 'Dark Spots' },
    { id: 'barrier', label: 'Dryness & Barrier' },
    { id: 'sun', label: 'Sun Protection' },
    { id: 'shaving', label: 'Razor Irritation' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F7] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1C1B] mb-3">Shop by Concern</h2>
            <p className="font-sans text-[#5E645F] text-sm max-w-xl">
              Select your primary skin concern to view targeted, science-backed formulations.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono-spec font-bold text-[#526442] hover:text-[#1A1C1B] tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            VIEW ALL PRODUCTS &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => {
                // In a real app, this would set a filter state in the shop view
                setCurrentView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer p-6 bg-[#F2EFE9] border border-[#E2DDD5] rounded-[4px] hover:border-[#1A1C1B] hover:shadow-sm transition-all text-center flex flex-col items-center justify-center min-h-[120px]"
            >
              <span className="font-mono-spec text-xs font-semibold tracking-wide text-[#1A1C1B] group-hover:text-[#526442] transition-colors">
                {concern.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
