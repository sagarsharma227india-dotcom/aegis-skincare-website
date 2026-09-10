import React from 'react';
import { Product } from '../types';
import { AegisMonogram } from './AegisMonogram';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProductPackagingViewProps {
  product: Product;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

// Registry of known bundle items with their respective container archetype & specs
const BUNDLE_CATALOG_SPEC: Record<string, { name: string; type: 'pump' | 'dropper' | 'tube' | 'flask' | 'jar'; step: string; vol: string; code: string; color: string; labelBg: string; textCol: string }> = {
  'aegis-wash': { name: 'WASH', type: 'pump', step: '01', vol: '150 ml', code: 'AG-WSH', color: '#829177', labelBg: '#F5F1E8', textCol: '#1C1F1B' },
  'aegis-purify': { name: 'PURIFY', type: 'pump', step: '01', vol: '150 ml', code: 'AG-PUR', color: '#829177', labelBg: '#F5F1E8', textCol: '#1C1F1B' },
  'aegis-calm': { name: 'CALM', type: 'pump', step: '01', vol: '150 ml', code: 'AG-CLM', color: '#829177', labelBg: '#F5F1E8', textCol: '#1C1F1B' },
  'aegis-clear': { name: 'CLEAR', type: 'dropper', step: '02', vol: '30 ml', code: 'AG-CLR', color: '#D4AF37', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-bright': { name: 'BRIGHT', type: 'dropper', step: '02', vol: '30 ml', code: 'AG-BRT', color: '#D4AF37', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-repair': { name: 'REPAIR', type: 'dropper', step: '02', vol: '30 ml', code: 'AG-RPR', color: '#D4AF37', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-hydrate': { name: 'HYDRATE', type: 'dropper', step: '02', vol: '30 ml', code: 'AG-HYD', color: '#D4AF37', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-after': { name: 'AFTER', type: 'flask', step: '02', vol: '100 ml', code: 'AG-AFT', color: '#9BB0A8', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-barrier': { name: 'BARRIER', type: 'flask', step: '03', vol: '50 ml', code: 'AG-BAR', color: '#9BB0A8', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-matte': { name: 'MATTE', type: 'flask', step: '03', vol: '50 ml', code: 'AG-MAT', color: '#9BB0A8', labelBg: '#1B1E19', textCol: '#F8F5EF' },
  'aegis-recover': { name: 'RECOVER', type: 'jar', step: '03', vol: '50 ml', code: 'AG-RCV', color: '#9BB0A8', labelBg: '#EDE7D9', textCol: '#1C1F1B' },
  'aegis-shield': { name: 'SHIELD SPF 50', type: 'tube', step: '04', vol: '50 ml', code: 'AG-SHD', color: '#C48A69', labelBg: '#21251E', textCol: '#F8F5EF' },
  'aegis-shield-matte': { name: 'SHIELD MATTE', type: 'tube', step: '04', vol: '50 ml', code: 'AG-SHM', color: '#C48A69', labelBg: '#21251E', textCol: '#F8F5EF' },
};

export const ProductPackagingView: React.FC<ProductPackagingViewProps> = ({
  product,
  size = 'md',
  className = ''
}) => {
  // Determine packaging archetype based on product category & attributes
  const getPackagingType = (): 'bundle' | 'jar' | 'tube' | 'dropper' | 'pump' | 'flask' => {
    if (product.isBundle || product.category === 'bundles' || (product.bundleItemIds && product.bundleItemIds.length > 0)) {
      return 'bundle';
    }
    if (product.category === 'masks' || product.id.includes('mask') || product.id === 'aegis-hydra' || product.id === 'aegis-recover') {
      return 'jar';
    }
    if (product.category === 'spf' || product.id.includes('shield') || product.id === 'aegis-lip') {
      return 'tube';
    }
    if (product.category === 'serums' || product.id === 'aegis-clear' || product.id === 'aegis-spot' || product.id === 'aegis-pore') {
      return 'dropper';
    }
    if (product.category === 'cleansers' || product.category === 'body') {
      return 'pump';
    }
    return 'flask'; // moisturizers & emulsions
  };

  const packType = getPackagingType();
  const specCode = product.id.toUpperCase().replace('AEGIS-', 'AG-');
  const cleanProductName = product.name.replace(/^THE AEGIS /i, '').replace(/^AEGIS /i, '').trim();

  // Extract clean actives highlight
  const firstActive = product.keyActives && product.keyActives[0]
    ? `${product.keyActives[0].name}${product.keyActives[0].concentration ? ' ' + product.keyActives[0].concentration : ''}`
    : product.formulaSpec;

  // -------------------------------------------------------------
  // THUMBNAIL / COMPACT SIZES (xs: 32-56px, sm: 64-96px)
  // -------------------------------------------------------------
  if (size === 'xs') {
    return (
      <div
        className={`w-full h-full min-w-8 min-h-8 bg-gradient-to-b from-[#20231F] via-[#161815] to-[#0E100D] rounded-[2px] flex flex-col items-center justify-between p-1 select-none border border-[#4B5848]/40 relative overflow-hidden ${className}`}
        title={`AEGIS ${cleanProductName}`}
      >
        {/* Top brand stamp */}
        <div className="flex items-center justify-between w-full border-b border-[#353A31] pb-0.5">
          <span className="text-[6px] font-mono-spec font-bold text-[#F8F5EF] tracking-wider uppercase">
            AEGIS
          </span>
          <span className="text-[5.5px] font-mono-spec text-[#829177] font-semibold">
            {product.stepNumber.split(' ')[0]}
          </span>
        </div>

        {/* Minimal Bottle Graphic in Center */}
        <div className="flex-1 flex flex-col items-center justify-center my-0.5">
          {packType === 'bundle' ? (
            <div className="flex items-end justify-center gap-0.5">
              <div className="w-1.5 h-4 bg-[#4B5848] rounded-t-[1px]" />
              <div className="w-1.5 h-5 bg-[#D4AF37] rounded-t-[1px]" />
              <div className="w-1.5 h-4 bg-[#C48A69] rounded-t-[1px]" />
            </div>
          ) : packType === 'dropper' ? (
            <div className="flex flex-col items-center">
              <div className="w-1 h-1 bg-[#40433E] rounded-t-full" />
              <div className="w-3.5 h-5 bg-[#482F1D] border border-[#6D482C] rounded-[1px] flex items-center justify-center">
                <span className="text-[4px] font-mono-spec font-bold text-[#E8E1D6]">AG</span>
              </div>
            </div>
          ) : packType === 'tube' ? (
            <div className="flex flex-col items-center">
              <div className="w-3.5 h-5 bg-[#2B3128] border-x border-[#495344] rounded-t-[1px] flex items-center justify-center">
                <span className="text-[4px] font-mono-spec font-bold text-[#829177]">SPF</span>
              </div>
              <div className="w-2.5 h-1 bg-[#1A1D18] rounded-b-[1px]" />
            </div>
          ) : packType === 'jar' ? (
            <div className="flex flex-col items-center pt-1">
              <div className="w-4 h-1.5 bg-[#41463D] rounded-t-[1px]" />
              <div className="w-4 h-3.5 bg-[#2A2823] border border-[#484236] rounded-b-[2px] flex items-center justify-center">
                <span className="text-[4px] font-mono-spec font-bold text-[#E8E1D6]">AG</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-1 h-1 bg-[#6E746A]" />
              <div className="w-3.5 h-5 bg-[#352D24] border border-[#54483B] rounded-t-sm rounded-b-[1px] flex items-center justify-center">
                <span className="text-[4px] font-mono-spec font-bold text-[#F5F1E8]">AG</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Label */}
        <div className="w-full text-center truncate">
          <span className="text-[5.5px] font-mono-spec text-[#CFC8BC] font-semibold uppercase leading-tight truncate block">
            {cleanProductName.split(' ')[0]}
          </span>
        </div>
      </div>
    );
  }

  // Size sm: used in routine quiz, comparison, recently viewed
  if (size === 'sm') {
    return (
      <div
        className={`w-full h-40 bg-gradient-to-b from-[#1E211D] via-[#161815] to-[#0E100D] rounded-[3px] flex flex-col items-center justify-between p-2.5 select-none border border-[#4B5848]/30 relative overflow-hidden shadow-sm ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(75,88,72,0.18),transparent_70%)] pointer-events-none" />
        
        {/* Header Spec */}
        <div className="w-full flex items-center justify-between z-10 border-b border-[#353A31] pb-1">
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#829177]" />
            <span className="text-[8px] font-mono-spec font-bold text-[#F8F5EF] tracking-wider uppercase">
              AEGIS
            </span>
          </div>
          <span className="text-[7px] font-mono-spec text-[#829177] font-semibold uppercase">
            {specCode}
          </span>
        </div>

        {/* Scaled Silhouette */}
        <div className="flex-1 flex items-center justify-center my-1 z-10 w-full">
          {packType === 'bundle' ? (
            <div className="flex items-end justify-center gap-1.5">
              <div className="w-4 h-16 bg-[#2B2721] rounded-t-sm border border-[#54483B] p-0.5 flex flex-col justify-between">
                <span className="text-[5px] font-mono-spec text-[#E8E1D6] font-bold">AG</span>
                <span className="text-[4px] font-mono-spec text-[#829177]">WASH</span>
              </div>
              <div className="w-4 h-18 bg-[#332215] rounded-t-sm border border-[#6D482C] p-0.5 flex flex-col justify-between mb-0.5">
                <span className="text-[5px] font-mono-spec text-[#E8E1D6] font-bold">AG</span>
                <span className="text-[4px] font-mono-spec text-[#D4AF37]">TREAT</span>
              </div>
              <div className="w-4 h-16 bg-[#242A22] rounded-t-sm border border-[#495344] p-0.5 flex flex-col justify-between">
                <span className="text-[5px] font-mono-spec text-[#E8E1D6] font-bold">AG</span>
                <span className="text-[4px] font-mono-spec text-[#C48A69]">DEFEND</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {packType === 'dropper' && <div className="w-2.5 h-2 bg-[#2D302C] rounded-t-full" />}
              {packType === 'pump' && <div className="w-3 h-2 bg-[#40433E] rounded-t-[1px]" />}
              <div className="w-16 h-22 bg-[#222520] border border-[#4B5848]/60 rounded-[2px] p-1.5 flex flex-col justify-between shadow-md">
                <div className="border-b border-[#3E453A] pb-0.5 flex justify-between items-center">
                  <span className="text-[7px] font-mono-spec font-bold text-[#F8F5EF]">AEGIS</span>
                  <span className="text-[6px] font-mono-spec text-[#829177]">{product.stepNumber.split(' ')[0]}</span>
                </div>
                <div className="text-center">
                  <span className="text-[8px] font-mono-spec font-bold text-[#E8E1D6] block uppercase line-clamp-1">
                    {cleanProductName}
                  </span>
                </div>
                <div className="text-[5.5px] font-mono-spec text-[#829177] flex justify-between pt-0.5 border-t border-[#3E453A]">
                  <span>{product.volume}</span>
                  <span>{product.phLevel}</span>
                </div>
              </div>
              {packType === 'tube' && <div className="w-10 h-2 bg-[#262B23] rounded-b-[2px]" />}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="w-full text-center z-10 pt-1 border-t border-[#353A31]">
          <span className="text-[7.5px] font-mono-spec text-[#F8F5EF] font-bold uppercase truncate block">
            {cleanProductName}
          </span>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // FULL DETAIL SIZES (md: cards, lg: modal hero, hero: campaign hero)
  // -------------------------------------------------------------
  const containerHeight = size === 'hero' ? 'h-72 sm:h-84' : size === 'lg' ? 'h-80 sm:h-96' : 'h-64 sm:h-72';

  return (
    <div
      className={`relative w-full ${containerHeight} bg-gradient-to-b from-[#1C1F1B] via-[#141613] to-[#0A0C09] rounded-[3px] overflow-hidden flex items-center justify-center p-4 select-none border border-[#4B5848]/40 shadow-inner ${className}`}
    >
      {/* Studio Lighting Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(75,88,72,0.26),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
      
      {/* Tabletop Shadow & Horizon Line */}
      <div className="absolute bottom-6 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4B5848]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-10 right-10 h-4 bg-black/40 blur-md rounded-full pointer-events-none" />

      {/* Top Clinical Spec Stamp */}
      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-[#20231F]/90 backdrop-blur-md px-2 py-0.5 rounded-[2px] border border-white/10 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#829177] animate-pulse" />
        <span className="text-[8px] font-mono-spec tracking-widest text-[#F8F5EF] font-bold uppercase">
          AEGIS // {specCode}
        </span>
      </div>

      {/* Step Category Badge */}
      <div className="absolute top-2.5 right-2.5 z-20 bg-[#161814]/80 backdrop-blur-md px-2 py-0.5 rounded-[2px] border border-[#4B5848]/40 text-[8px] font-mono-spec text-[#829177] font-semibold uppercase tracking-wider">
        {product.stepCategory}
      </div>

      {/* Subtle Clinical Background Watermark */}
      <div className="absolute bottom-2 right-2 text-[7px] font-mono-spec tracking-widest text-[#CFC8BC]/15 uppercase pointer-events-none">
        AEGIS CLINICAL PACKAGING SYSTEM
      </div>

      {/* =========================================================
          1. PUMP CONTAINER (Cleansers & Body)
          ========================================================= */}
      {packType === 'pump' && (
        <div className="relative flex flex-col items-center animate-fade-in z-10">
          {/* Pump Mechanism */}
          <div className="w-6 h-3 bg-gradient-to-r from-[#333630] via-[#52574F] to-[#2D302B] rounded-t-[2px] border-t border-[#6E746A] shadow-sm flex items-center justify-center">
            <div className="w-2 h-0.5 bg-white/20 rounded-full" />
          </div>
          <div className="w-9 h-2 bg-[#2D302C] rounded-[1px] border-b border-[#1A1C18]" />
          <div className="w-3.5 h-4 bg-[#1C1E1B] border-x border-[#3F423C]" />
          <div className="w-10 h-2.5 bg-gradient-to-r from-[#2F332D] via-[#484D44] to-[#2A2D28] rounded-[1px] border border-[#52574F]/70 shadow-sm" />
          
          {/* Bottle Body */}
          <div className="w-32 sm:w-36 h-46 sm:h-54 bg-gradient-to-r from-[#1D1B17] via-[#332A20] to-[#181613] rounded-t-lg rounded-b-md border border-[#54483B]/80 shadow-2xl relative flex flex-col items-center justify-between p-3.5 overflow-hidden">
            {/* Glossy Glass Highlights */}
            <div className="absolute top-0 left-2 w-1.5 h-full bg-white/12 blur-[0.5px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-3 w-3 h-full bg-white/[0.03] blur-[2px] pointer-events-none" />
            
            {/* Authentic Tactile Paper Apothecary Label */}
            <div className="w-full bg-[#F6F2E8] rounded-[2px] p-2.5 text-[#1C1F1B] shadow-md border border-[#D5CDBC] relative z-10 space-y-1.5">
              {/* Brand Header */}
              <div className="flex justify-between items-center border-b border-[#C8BFAD] pb-1">
                <div className="flex items-center gap-1">
                  <AegisMonogram size={12} color="#1C1F1B" />
                  <span className="font-serif-editorial font-bold text-xs tracking-[0.2em] text-[#1C1F1B]">
                    AEGIS
                  </span>
                </div>
                <span className="text-[7px] font-mono-spec font-bold text-[#4B5848] tracking-widest uppercase">
                  {specCode}
                </span>
              </div>

              {/* Exact Matching Product Name */}
              <div className="text-left">
                <h4 className="font-mono-spec font-bold text-[10px] sm:text-[11px] uppercase text-[#1C1F1B] leading-tight line-clamp-1">
                  {cleanProductName}
                </h4>
                <p className="text-[7px] text-[#5C625B] font-mono-spec line-clamp-1 mt-0.5">
                  {product.subtitle}
                </p>
              </div>

              {/* Actives Mechanism */}
              <div className="bg-[#ECE6D6] px-1.5 py-0.5 rounded-[1px] border border-[#D5CDBC] text-left">
                <span className="text-[6.5px] font-mono-spec text-[#3A4036] font-semibold line-clamp-1">
                  {product.formulaSpec}
                </span>
              </div>

              {/* Specs Footer */}
              <div className="pt-0.5 border-t border-[#E0D9C8] flex justify-between text-[7px] font-mono-spec text-[#5C625B]">
                <span>{product.volume}</span>
                <span className="font-bold text-[#4B5848]">{product.phLevel}</span>
              </div>
            </div>

            {/* Bottom Glass Stamp */}
            <div className="text-[6.5px] font-mono-spec tracking-widest text-[#B5A593]/70 uppercase text-center w-full pb-0.5">
              CLINICAL DERMATOLOGY // LAB SPEC
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          2. DROPPER CONTAINER (Serums & Treatments)
          ========================================================= */}
      {packType === 'dropper' && (
        <div className="relative flex flex-col items-center animate-fade-in z-10">
          {/* Matte Rubber Dropper Bulb */}
          <div className="w-5 h-4 bg-gradient-to-b from-[#181A17] to-[#2B2E28] rounded-t-full border border-[#40433E] shadow-sm flex items-center justify-center">
            <div className="w-1.5 h-1 bg-white/10 rounded-full" />
          </div>
          <div className="w-8 h-2 bg-[#2E312C] rounded-[1px] border-b border-[#1E201C]" />
          <div className="w-9 h-3 bg-gradient-to-r from-[#383C35] via-[#52574F] to-[#343831] rounded-[2px] border border-[#646A5F] shadow-sm" />
          
          {/* Heavy Amber Apothecary Glass Bottle */}
          <div className="w-28 sm:w-32 h-44 sm:h-50 bg-gradient-to-r from-[#22140A] via-[#432917] to-[#1E1108] rounded-t-md rounded-b-md border border-[#6D482C]/80 shadow-2xl relative flex flex-col items-center justify-between p-3 overflow-hidden">
            {/* Amber Glass Reflections & Pipette Interior Reflection */}
            <div className="absolute top-0 left-2 w-1.5 h-full bg-white/15 blur-[0.5px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-2 w-2 h-full bg-amber-400/[0.1] blur-[1px] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-3/4 bg-white/[0.04] blur-[1px] pointer-events-none" />
            
            {/* Dark Clinical Apothecary Label */}
            <div className="w-full bg-[#171A15] rounded-[2px] p-2.5 text-[#F8F5EF] shadow-xl border border-[#3E433A] relative z-10 space-y-1.5 mt-1">
              <div className="flex justify-between items-center border-b border-[#2F342B] pb-1">
                <div className="flex items-center gap-1">
                  <AegisMonogram size={11} color="#F8F5EF" />
                  <span className="font-serif-editorial font-bold text-[11px] tracking-[0.2em] text-[#F8F5EF]">
                    AEGIS
                  </span>
                </div>
                <span className="text-[7px] font-mono-spec text-[#829177] font-bold">
                  {specCode}
                </span>
              </div>

              {/* Exact Matching Product Name */}
              <div className="text-left">
                <h4 className="font-mono-spec font-bold text-[9.5px] uppercase text-[#E8E1D6] leading-tight line-clamp-1">
                  {cleanProductName}
                </h4>
                <p className="text-[6.5px] text-[#A69E8F] font-mono-spec line-clamp-1 mt-0.5">
                  {product.subtitle}
                </p>
              </div>

              {/* Active Percentage Highlight Box */}
              <div className="bg-[#20241E] px-1.5 py-0.5 rounded-[1px] border border-[#343B2F] text-left">
                <span className="text-[6.5px] font-mono-spec text-[#829177] font-semibold line-clamp-1">
                  {product.formulaSpec}
                </span>
              </div>

              {/* Specs Footer */}
              <div className="pt-0.5 border-t border-[#252A22] flex justify-between text-[6.5px] font-mono-spec text-[#829177]">
                <span>{product.volume}</span>
                <span className="text-[#E8E1D6] font-semibold">{product.phLevel}</span>
              </div>
            </div>

            <div className="text-[6px] font-mono-spec tracking-widest text-[#E8CBA8]/60 uppercase text-center pb-0.5">
              TARGETED HIGH-POTENCY SERUM
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          3. SQUEEZE TUBE (Sunscreens & SPF)
          ========================================================= */}
      {packType === 'tube' && (
        <div className="relative flex flex-col items-center animate-fade-in z-10">
          {/* Top Foil Crimped Seam */}
          <div className="w-28 sm:w-32 h-2.5 bg-gradient-to-r from-[#292D26] via-[#484F43] to-[#252922] border-t-2 border-[#646C5E] rounded-t-[1px] flex items-center justify-center">
            <div className="w-full flex justify-around px-2">
              <span className="w-1 h-0.5 bg-white/20 rounded-full" />
              <span className="w-1 h-0.5 bg-white/20 rounded-full" />
              <span className="w-1 h-0.5 bg-white/20 rounded-full" />
            </div>
          </div>
          
          {/* Squeeze Tube Body with Direct Silk-Screened Typography */}
          <div className="w-28 sm:w-32 h-44 sm:h-52 bg-gradient-to-b from-[#20241E] via-[#2A3027] to-[#1C201A] border-x border-[#3F463A] shadow-2xl relative flex flex-col items-center justify-between p-3 overflow-hidden">
            <div className="absolute top-0 left-2 w-1.5 h-full bg-white/[0.08] blur-[1px] pointer-events-none" />
            <div className="absolute top-0 right-2 w-1.5 h-full bg-black/20 blur-[1px] pointer-events-none" />
            
            {/* Direct Silk-Screened Typography */}
            <div className="w-full space-y-1.5 text-center mt-1 z-10">
              <div className="flex items-center justify-center gap-1.5">
                <AegisMonogram size={14} color="#F8F5EF" />
                <span className="text-base font-serif-editorial font-bold text-[#F8F5EF] tracking-[0.25em]">
                  AEGIS
                </span>
              </div>
              
              <div className="text-[7.5px] font-mono-spec text-[#829177] font-bold tracking-widest uppercase">
                {product.stepCategory} // {specCode}
              </div>

              <div className="w-12 h-[1px] bg-[#829177]/40 mx-auto my-1" />

              {/* Exact Matching Product Name */}
              <div className="text-[10px] sm:text-[11px] font-mono-spec font-bold text-[#F8F5EF] uppercase tracking-wider px-1">
                {cleanProductName}
              </div>

              {/* SPF Badge if SPF */}
              {product.category === 'spf' && (
                <div className="inline-block bg-[#161814] px-2 py-0.5 rounded-[2px] border border-[#829177]/50 text-[7px] font-mono-spec text-[#829177] font-bold tracking-widest">
                  BROAD SPECTRUM // MINERAL
                </div>
              )}

              <div className="text-[7px] font-mono-spec text-[#9DA695] px-1 line-clamp-2 leading-relaxed">
                {product.formulaSpec}
              </div>
            </div>

            {/* Tube Base Specs */}
            <div className="w-full border-t border-[#3B4235] pt-1 flex justify-between items-center text-[7px] font-mono-spec text-[#CFC8BC]/70 px-1">
              <span>{product.volume}</span>
              <span className="text-[#829177] font-semibold">{product.phLevel}</span>
            </div>
          </div>

          {/* Precision Cap Base */}
          <div className="w-16 sm:w-18 h-5 bg-gradient-to-r from-[#2B2F28] via-[#43483E] to-[#262A23] border-b-2 border-[#151713] rounded-b-md shadow-md" />
        </div>
      )}

      {/* =========================================================
          4. FLASK / CYLINDER (Moisturizers & Emulsions)
          ========================================================= */}
      {packType === 'flask' && (
        <div className="relative flex flex-col items-center animate-fade-in z-10">
          {/* Minimal Pump Cap */}
          <div className="w-12 h-4 bg-gradient-to-r from-[#2A2E27] via-[#41473C] to-[#262A23] rounded-t-sm border border-[#4B5146] shadow-sm" />
          <div className="w-14 h-1.5 bg-[#1F221D] border-b border-[#141612]" />
          
          {/* Sleek Cylindrical Bottle */}
          <div className="w-30 sm:w-34 h-46 sm:h-52 bg-gradient-to-b from-[#21251F] via-[#2A3027] to-[#1A1D18] rounded-t-md rounded-b-md border border-[#4B5345] shadow-2xl relative flex flex-col items-center justify-between p-3.5 overflow-hidden">
            <div className="absolute top-0 left-2 w-2 h-full bg-white/10 blur-[1px] pointer-events-none" />
            
            {/* Clinical Plate Label */}
            <div className="w-full bg-[#181B16] border border-[#3E4539] p-2.5 rounded-[2px] text-[#F8F5EF] space-y-1.5 mt-1 z-10 shadow-lg text-left">
              <div className="flex justify-between items-center border-b border-[#2C3227] pb-1">
                <div className="flex items-center gap-1">
                  <AegisMonogram size={12} color="#F8F5EF" />
                  <span className="font-serif-editorial font-bold text-xs tracking-[0.2em]">AEGIS</span>
                </div>
                <span className="text-[7px] font-mono-spec text-[#829177] font-bold">{specCode}</span>
              </div>

              {/* Exact Matching Product Name */}
              <div>
                <h4 className="text-[10px] font-mono-spec font-bold text-[#E8E1D6] uppercase leading-tight line-clamp-1">
                  {cleanProductName}
                </h4>
                <p className="text-[6.5px] font-mono-spec text-[#9DA695] line-clamp-1 mt-0.5">
                  {product.subtitle}
                </p>
              </div>

              <div className="bg-[#22271F] px-1.5 py-0.5 rounded-[1px] border border-[#363E31]">
                <span className="text-[6.5px] font-mono-spec text-[#829177] font-semibold line-clamp-1">
                  {product.formulaSpec}
                </span>
              </div>

              <div className="pt-0.5 border-t border-[#292F25] flex justify-between text-[7px] font-mono-spec text-[#829177]">
                <span>{product.volume}</span>
                <span className="text-[#E8E1D6] font-semibold">{product.phLevel}</span>
              </div>
            </div>

            <div className="text-[6.5px] font-mono-spec tracking-widest text-[#829177]/70 uppercase text-center w-full">
              BARRIER RESTORATIVE FORMULATION
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          5. JAR CONTAINER (Masks & Balms)
          ========================================================= */}
      {packType === 'jar' && (
        <div className="relative flex flex-col items-center animate-fade-in pt-4 z-10">
          {/* Heavyweight Jar Lid */}
          <div className="w-34 sm:w-38 h-7 bg-gradient-to-r from-[#2A2E28] via-[#464C41] to-[#252823] rounded-t-sm border border-[#5E6458] shadow-md flex items-center justify-center">
            <div className="w-full h-[1px] bg-white/15" />
          </div>
          <div className="w-32 h-1 bg-[#1A1C18]" />
          
          {/* Frosted Dark Glass Jar Base */}
          <div className="w-34 sm:w-38 h-32 sm:h-36 bg-gradient-to-b from-[#1C1E1B] via-[#2A2823] to-[#151713] rounded-b-lg border border-[#484236] shadow-2xl relative flex flex-col items-center justify-between p-3 overflow-hidden">
            <div className="absolute top-0 left-3 w-2 h-full bg-white/[0.08] blur-[2px] pointer-events-none" />
            
            {/* Wrap-around Apothecary Label */}
            <div className="w-full bg-[#EDE7D9] rounded-[2px] p-2 text-[#20231F] shadow border border-[#C5BBA7] space-y-1 mt-1 z-10 text-left">
              <div className="flex justify-between items-center border-b border-[#CEC5B2] pb-0.5">
                <div className="flex items-center gap-1">
                  <AegisMonogram size={10} color="#20231F" />
                  <span className="font-serif-editorial font-bold text-[10px] tracking-wider text-[#20231F]">AEGIS</span>
                </div>
                <span className="text-[6.5px] font-mono-spec font-semibold text-[#4B5848]">{specCode}</span>
              </div>

              {/* Exact Matching Product Name */}
              <div className="text-[9px] font-mono-spec font-bold text-[#20231F] uppercase line-clamp-1">
                {cleanProductName}
              </div>
              <div className="text-[6.5px] font-mono-spec text-[#5C625B] line-clamp-1">
                {product.subtitle}
              </div>
            </div>

            <div className="text-[7px] font-mono-spec text-[#B5A995]/80 tracking-widest uppercase text-center">
              {product.volume} • {product.phLevel}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          6. BUNDLE / SYSTEM KITS (Multi-Product Studio Staging)
          ========================================================= */}
      {packType === 'bundle' && (
        <div className="relative flex flex-col items-center justify-end w-full h-full animate-fade-in z-10 pb-2">
          {/* Staggered Row of Real Bottles from the Bundle */}
          <div className="flex items-end justify-center gap-2 sm:gap-3 w-full px-2 mb-2">
            {(product.bundleItemIds || ['aegis-wash', 'aegis-clear', 'aegis-shield']).map((itemId, idx) => {
              const itemSpec = BUNDLE_CATALOG_SPEC[itemId] || {
                name: itemId.replace('aegis-', '').toUpperCase(),
                type: idx === 0 ? 'pump' : idx === 1 ? 'dropper' : 'tube',
                step: `0${idx + 1}`,
                vol: '50ml',
                code: `AG-0${idx + 1}`,
                color: '#829177',
                labelBg: '#F5F1E8',
                textCol: '#1C1F1B'
              };

              return (
                <div
                  key={itemId}
                  className="flex flex-col items-center transition-transform hover:-translate-y-1 duration-200"
                >
                  {/* Container Cap / Head based on archetype */}
                  {itemSpec.type === 'pump' && (
                    <div className="flex flex-col items-center">
                      <div className="w-3.5 h-1.5 bg-[#40433E] rounded-t-[1px]" />
                      <div className="w-1.5 h-2 bg-[#1C1E1B]" />
                      <div className="w-5 h-1.5 bg-[#363A33] rounded-[1px]" />
                    </div>
                  )}
                  {itemSpec.type === 'dropper' && (
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-2.5 bg-[#1E201D] rounded-t-full" />
                      <div className="w-4.5 h-1.5 bg-[#40443D] rounded-[1px]" />
                    </div>
                  )}
                  {itemSpec.type === 'flask' && (
                    <div className="w-5 h-2 bg-[#31352E] rounded-t-sm" />
                  )}
                  {itemSpec.type === 'tube' && (
                    <div className="w-6 h-1 bg-[#3F463A] rounded-t-[1px] border-t border-[#646C5E]" />
                  )}

                  {/* Container Body */}
                  <div
                    className={`w-18 sm:w-22 ${
                      itemSpec.type === 'dropper' ? 'h-32 sm:h-36' : 'h-28 sm:h-32'
                    } rounded-t-sm rounded-b-[2px] p-1.5 border flex flex-col justify-between shadow-xl relative overflow-hidden`}
                    style={{
                      backgroundColor: itemSpec.type === 'dropper' ? '#351F10' : itemSpec.type === 'tube' ? '#252C22' : '#232520',
                      borderColor: itemSpec.type === 'dropper' ? '#6D482C' : '#495344'
                    }}
                  >
                    {/* Glass sheen highlight */}
                    <div className="absolute top-0 left-1 w-1 h-full bg-white/10 blur-[0.5px] pointer-events-none" />

                    {/* Authentic AEGIS Printed Label */}
                    <div
                      className="w-full rounded-[1px] p-1 border shadow-xs text-left"
                      style={{
                        backgroundColor: itemSpec.labelBg,
                        color: itemSpec.textCol,
                        borderColor: itemSpec.labelBg === '#F5F1E8' ? '#D5CDBC' : '#3E433A'
                      }}
                    >
                      <div className="flex justify-between items-center border-b border-black/10 pb-0.5">
                        <span className="font-serif-editorial font-bold text-[7px] tracking-wider">
                          AEGIS
                        </span>
                        <span
                          className="text-[5.5px] font-mono-spec font-bold"
                          style={{ color: itemSpec.color }}
                        >
                          {itemSpec.step}
                        </span>
                      </div>
                      <div className="text-[7.5px] font-mono-spec font-bold uppercase truncate mt-0.5">
                        {itemSpec.name}
                      </div>
                    </div>

                    {/* Bottom Volume & Step Spec */}
                    <div className="flex justify-between items-center text-[5.5px] font-mono-spec text-[#A69E8F] border-t border-white/10 pt-0.5">
                      <span>{itemSpec.vol}</span>
                      <span className="font-semibold" style={{ color: itemSpec.color }}>
                        STEP {itemSpec.step}
                      </span>
                    </div>
                  </div>

                  {itemSpec.type === 'tube' && (
                    <div className="w-10 h-2 bg-[#2B3128] rounded-b-[2px]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Curated Kit Presentation Base Plaque */}
          <div className="w-full max-w-sm bg-[#161814]/90 backdrop-blur-md rounded-[2px] border border-[#4B5848]/50 p-2 text-center shadow-lg">
            <div className="flex items-center justify-center gap-1.5">
              <AegisMonogram size={10} color="#F8F5EF" />
              <span className="text-[8px] font-mono-spec font-bold tracking-[0.2em] text-[#F8F5EF] uppercase">
                AEGIS CLINICAL SYSTEM
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] font-serif-editorial font-medium text-[#E8E1D6] truncate mt-0.5">
              {product.name}
            </div>
            <div className="text-[6.5px] font-mono-spec text-[#829177] tracking-wider uppercase mt-0.5">
              {product.volume} • COMPLETE DAILY REGIMEN
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
