import React, { useState } from 'react';
import { NavView } from '../types';
import { AegisMonogram } from './AegisMonogram';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: NavView;
  setCurrentView: (view: NavView) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavView; label: string }[] = [
    { id: 'shop', label: 'SHOP' },
    { id: 'quiz', label: 'SKIN QUIZ' },
    { id: 'routines', label: 'ROUTINES' },
    { id: 'ingredients', label: 'INGREDIENTS' },
    { id: 'science', label: 'OUR SCIENCE' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'about', label: 'ABOUT' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#E8E1D6]/95 backdrop-blur-md border-b border-[#CFC8BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Monogram + Wordmark */}
        <div
          id="header-brand-logo"
          role="button"
          tabIndex={0}
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="cursor-pointer flex items-center gap-3 group select-none"
          aria-label="AEGIS MEN Home"
        >
          <div className="w-9 h-9 rounded bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center shadow-xs">
            <AegisMonogram size={20} color="#F8F5EF" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-[0.2em] text-lg text-[#20231F] leading-tight font-serif-editorial">
              AEGIS
            </span>
            <span className="text-[9px] font-mono-spec tracking-[0.25em] text-[#5C625B] uppercase">
              MEN'S SKINCARE
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-[0.14em]">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => {
                  setCurrentView(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-1 transition-all relative ${
                  isActive
                    ? 'text-[#20231F] font-semibold'
                    : 'text-[#5C625B] hover:text-[#20231F]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#4B5848]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            id="header-search-btn"
            onClick={onOpenSearch}
            className="p-2 text-[#20231F] hover:text-[#4B5848] transition-colors rounded-sm focus:outline-hidden"
            aria-label="Search Formulations"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            id="header-wishlist-btn"
            onClick={onOpenWishlist}
            className="relative p-2 text-[#20231F] hover:text-[#4B5848] transition-colors rounded-sm focus:outline-hidden"
            aria-label="Saved Products"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#4B5848] text-[#F8F5EF] rounded-full text-[8px] font-mono-spec flex items-center justify-center font-semibold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Clean Editorial Bag Indicator */}
          <button
            id="header-bag-btn"
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-[11px] font-mono-spec tracking-wider transition-all shadow-xs"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="font-semibold">BAG ({cartCount})</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="header-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#20231F] hover:text-[#4B5848] focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F2EEE7] border-b border-[#CFC8BC] px-6 py-6 space-y-4 animate-in fade-in">
          <nav className="flex flex-col space-y-3 text-xs tracking-widest font-mono-spec">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentView(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2 border-b border-[#CFC8BC]/50 ${
                  currentView === link.id ? 'text-[#4B5848] font-bold' : 'text-[#20231F]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
