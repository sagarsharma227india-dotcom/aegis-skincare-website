import React, { useState, useEffect, useRef } from 'react';
import { NavView } from '../types';
import { AegisMonogram } from './AegisMonogram';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [isPopping, setIsPopping] = useState(false);
  const prevCountRef = useRef(cartCount);

  useEffect(() => {
    if (cartCount > prevCountRef.current) {
      setIsPopping(true);
      const timer = setTimeout(() => setIsPopping(false), 700);
      prevCountRef.current = cartCount;
      return () => clearTimeout(timer);
    }
    prevCountRef.current = cartCount;
  }, [cartCount]);

    const navLinks: { id: NavView | 'faq'; label: string }[] = [
    { id: 'shop', label: 'SHOP' },
    { id: 'shop', label: 'CONCERNS' },
    { id: 'routines', label: 'ROUTINES' },
    { id: 'science', label: 'SCIENCE' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleNavClick = (viewId: NavView | 'faq') => {
    if (viewId === 'faq') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('aegis-home-faq');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F2EFE9]/95 backdrop-blur-md border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Monogram + Wordmark */}
        <motion.div
          id="header-brand-logo"
          role="button"
          tabIndex={0}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
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
          className="cursor-pointer flex items-center gap-3.5 group select-none"
          aria-label="AEGIS MEN Home"
        >
          <div className="w-10 h-10 rounded-[4px] bg-[#1A1C1B] group-hover:bg-[#526442] text-[#FAF9F7] flex items-center justify-center shadow-xs border border-[#3E453D] transition-colors">
            <AegisMonogram size={22} color="#FAF9F7" accentColor="#D3C9B8" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold tracking-[0.2em] text-xl text-[#1A1C1B] group-hover:text-[#526442] transition-colors leading-none font-serif-editorial">
              AEGIS MEN
            </span>
            <span className="text-[8.5px] font-mono-spec tracking-[0.3em] text-[#5E645F] uppercase pt-1 font-semibold">
              SCIENCE × SIMPLICITY
            </span>
          </div>
        </motion.div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-[0.14em]">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <motion.button
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick(link.id)}
                className={`py-1 transition-all relative cursor-pointer ${
                  isActive
                    ? 'text-[#1A1C1B] font-semibold'
                    : 'text-[#5E645F] hover:text-[#1A1C1B]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#526442]"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button
            id="header-search-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenSearch}
            className="p-2 text-[#1A1C1B] hover:text-[#526442] transition-colors rounded-sm focus:outline-hidden cursor-pointer"
            aria-label="Search Formulations"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </motion.button>

          <motion.button
            id="header-wishlist-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenWishlist}
            className="relative p-2 text-[#1A1C1B] hover:text-[#526442] transition-colors rounded-sm focus:outline-hidden cursor-pointer"
            aria-label="Saved Products"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#526442] text-[#FAF9F7] rounded-full text-[8px] font-mono-spec flex items-center justify-center font-semibold"
              >
                {wishlistCount}
              </motion.span>
            )}
          </motion.button>

          {/* Clean Editorial Bag Indicator with Subtle Dynamic Pop Micro-Interaction */}
          <motion.button
            id="header-bag-btn"
            onClick={onOpenCart}
            animate={
              isPopping
                ? {
                    scale: [1, 1.28, 0.92, 1.08, 1],
                    backgroundColor: ['#526442', '#1A1C1B', '#526442'],
                    boxShadow: [
                      '0 0 0 0 rgba(75, 88, 72, 0)',
                      '0 0 0 8px rgba(75, 88, 72, 0.25)',
                      '0 0 0 0 rgba(75, 88, 72, 0)'
                    ]
                  }
                : { scale: 1 }
            }
            transition={{ duration: 0.55, ease: 'easeOut' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[#526442] hover:bg-[#394536] text-[#FAF9F7] text-[11px] font-mono-spec tracking-wider transition-all shadow-xs cursor-pointer select-none"
            aria-label="Shopping Bag"
          >
            <motion.div
              animate={isPopping ? { rotate: [-10, 10, -5, 5, 0], scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </motion.div>
            <span className="font-semibold">BAG ({cartCount})</span>
            {isPopping && (
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -24, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-1 right-2 bg-[#1A1C1B] text-[#FAF9F7] border border-[#526442] text-[9px] font-mono-spec px-1.5 py-0.5 rounded shadow-md pointer-events-none whitespace-nowrap"
              >
                +1 Added
              </motion.span>
            )}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            id="header-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1C1B] hover:text-[#526442] focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F2EFE9] border-b border-[#E2DDD5] px-6 py-6 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 text-xs tracking-widest font-mono-spec">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    handleNavClick(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 border-b border-[#E2DDD5]/50 cursor-pointer ${
                    currentView === link.id ? 'text-[#526442] font-bold' : 'text-[#1A1C1B]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
