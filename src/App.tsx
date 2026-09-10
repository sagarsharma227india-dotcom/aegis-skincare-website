import React, { useState, useEffect } from 'react';
import { NavView, Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { ProductCard } from './components/ProductCard';
import { ClinicalComparison } from './components/ClinicalComparison';
import { CustomerReviews } from './components/CustomerReviews';
import { RoutineQuiz } from './components/RoutineQuiz';
import { ShopView } from './components/ShopView';
import { RoutinesView } from './components/RoutinesView';
import { IngredientsView } from './components/IngredientsView';
import { ScienceView } from './components/ScienceView';
import { JournalView } from './components/JournalView';
import { AboutView } from './components/AboutView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { AegisAIChatbot } from './components/AegisAIChatbot';
import { Sparkles, ArrowRight, Sun, Moon, Clock } from 'lucide-react';

export function App() {
  // Navigation View State
  const [currentView, setCurrentView] = useState<NavView>('home');

  // Selected Product Detail State
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Recently Viewed Products State
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aegis_recently_viewed');
      if (saved) {
        const parsed = JSON.parse(saved) as string[];
        return parsed.filter(id => PRODUCTS.some(p => p.id === id));
      }
      return ['aegis-wash', 'aegis-clear'];
    } catch {
      return ['aegis-wash', 'aegis-clear'];
    }
  });

  // Cart & Wishlist State (starts empty initially)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aegis_cart');
      if (saved) {
        const parsed = JSON.parse(saved) as CartItem[];
        // Auto-remove any cart items that no longer exist in the active catalog
        return parsed.filter(item => PRODUCTS.some(p => p.id === item.product.id));
      }
      return [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aegis_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved) as string[];
        // Auto-remove any wishlist IDs that no longer exist in the active catalog
        return parsed.filter(id => PRODUCTS.some(p => p.id === id));
      }
      return [];
    } catch {
      return [];
    }
  });

  // Drawer / Modal Visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  // Track product views in recently viewed list
  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      const updated = [productId, ...filtered].slice(0, 6);
      try {
        localStorage.setItem('aegis_recently_viewed', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Save Cart & Wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aegis_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('aegis_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Handle Hash Routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'arifa-naved') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const validViews: NavView[] = [
        'home',
        'shop',
        'quiz',
        'routines',
        'ingredients',
        'science',
        'journal',
        'about'
      ];
      if (validViews.includes(hash as NavView)) {
        setCurrentView(hash as NavView);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changeView = (view: NavView) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to bag.`);
  };

  const handleAddMultipleToCart = (products: Product[]) => {
    setCartItems((prev) => {
      const next = [...prev];
      for (const product of products) {
        const existing = next.find((item) => item.product.id === product.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          next.push({ product, quantity: 1 });
        }
      }
      return next;
    });
    showToast(`Added ${products.length} routine formulas to your bag.`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Operations
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed formula from saved items.');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved formula to wishlist.');
        return [...prev, productId];
      }
    });
  };

  const selectedProduct = selectedProductId
    ? PRODUCTS.find((p) => p.id === selectedProductId)
    : null;

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#E8E1D6] text-[#20231F] font-sans antialiased flex flex-col justify-between selection:bg-[#4B5848] selection:text-[#F8F5EF]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Sticky Header */}
      <Header
        currentView={currentView}
        setCurrentView={changeView}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Views */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div>
            {/* Hero Magazine Section */}
            <Hero
              setCurrentView={changeView}
              onSelectProduct={handleSelectProduct}
            />

            {/* Deep Charcoal Brand Philosophy */}
            <BrandPhilosophy />

            {/* 3-Minute Routine Guide Section */}
            <section className="py-20 lg:py-24 border-b border-[#CFC8BC] bg-[#E8E1D6] text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono-spec tracking-[0.2em] uppercase text-[#4B5848] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>THE 3-MINUTE COMMITMENT</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif-editorial font-normal text-[#20231F]">
                    Your routine, simplified.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C625B] leading-relaxed">
                    Designed around biological necessity rather than cosmetic excess. Complete both morning and evening steps in under 3 minutes total.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AM */}
                  <div className="p-6 sm:p-8 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#CFC8BC]">
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-[#4B5848]" />
                        <h3 className="font-serif-editorial text-lg text-[#20231F]">
                          Morning Protocol (AM)
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono-spec text-[#5C625B]">~90s</span>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-[#F2EEE7] rounded-[2px] space-y-0.5">
                        <strong className="text-[#20231F] block font-mono-spec text-[11px]">01 / CLEANSE (30s)</strong>
                        <p className="text-[#5C625B]">AEGIS WASH with Apple Amino Acids lifts overnight oils at pH 5.5.</p>
                      </div>
                      <div className="p-3 bg-[#F2EEE7] rounded-[2px] space-y-0.5">
                        <strong className="text-[#20231F] block font-mono-spec text-[11px]">02 / CORRECT (30s)</strong>
                        <p className="text-[#5C625B]">AEGIS CLEAR 2% BHA + 5% Niacinamide unclogs pores and balances shine.</p>
                      </div>
                      <div className="p-3 bg-[#F2EEE7] rounded-[2px] space-y-0.5">
                        <strong className="text-[#20231F] block font-mono-spec text-[11px]">03 / DEFEND (30s)</strong>
                        <p className="text-[#5C625B]">AEGIS SHIELD SPF 50 provides 100% invisible photoprotection in stubble.</p>
                      </div>
                    </div>
                  </div>

                  {/* PM */}
                  <div className="p-6 sm:p-8 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[#CFC8BC]">
                      <div className="flex items-center gap-2">
                        <Moon className="w-4 h-4 text-[#20231F]" />
                        <h3 className="font-serif-editorial text-lg text-[#20231F]">
                          Evening Protocol (PM)
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono-spec text-[#5C625B]">~60s</span>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-[#F2EEE7] rounded-[2px] space-y-0.5">
                        <strong className="text-[#20231F] block font-mono-spec text-[11px]">01 / PURIFY (30s)</strong>
                        <p className="text-[#5C625B]">Wash away daytime city pollution, sunscreen, and oxidized sebum.</p>
                      </div>
                      <div className="p-3 bg-[#F2EEE7] rounded-[2px] space-y-0.5">
                        <strong className="text-[#20231F] block font-mono-spec text-[11px]">02 / REPAIR (30s)</strong>
                        <p className="text-[#5C625B]">AEGIS BARRIER with 3:1:1 Ceramides accelerates post-shave overnight recovery.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <button
                    onClick={() => changeView('routines')}
                    className="inline-flex items-center gap-2 text-xs font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider hover:text-[#20231F]"
                  >
                    <span>Explore Full Interactive Routine Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Formulations Catalog Preview */}
            <section className="py-20 lg:py-24 border-b border-[#CFC8BC] bg-[#E8E1D6] text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono-spec tracking-[0.2em] uppercase text-[#4B5848] font-bold">
                      <span>THE CORE ARCHITECTURE</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif-editorial font-normal text-[#20231F]">
                      Essential Formulations
                    </h2>
                  </div>
                  <button
                    onClick={() => changeView('shop')}
                    className="inline-flex items-center gap-2 text-xs font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider hover:text-[#20231F]"
                  >
                    <span>View Complete Catalogue ({PRODUCTS.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {PRODUCTS.slice(0, 3).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelectProduct={handleSelectProduct}
                      onAddToCart={handleAddToCart}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={wishlistIds.includes(product.id)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* High-Contrast Deep Charcoal Clinical Contrast Section */}
            <ClinicalComparison />

            {/* Everyday Experiences / Customer Reviews */}
            <CustomerReviews />

            {/* Skin Quiz CTA Banner */}
            <section className="py-16 bg-[#F2EEE7] border-b border-[#CFC8BC] text-center">
              <div className="max-w-3xl mx-auto px-4 space-y-4">
                <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest block">
                  PERSONALIZED SKIN CONSULTATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif-editorial text-[#20231F]">
                  Not sure where to begin?
                </h3>
                <p className="text-xs sm:text-sm text-[#5C625B] max-w-lg mx-auto leading-relaxed">
                  Take our 6-step consultation quiz to match your oil levels, shaving frequency, and sun exposure with the right active formulas.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => changeView('quiz')}
                    className="px-8 py-3.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs font-semibold uppercase tracking-widest rounded-[3px] inline-flex items-center gap-2 shadow-xs transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-[#E8E1D6]" />
                    <span>Find My Routine</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === 'shop' && (
          <ShopView
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            recentlyViewedIds={recentlyViewedIds}
          />
        )}

        {currentView === 'quiz' && (
          <RoutineQuiz
            onAddToCart={handleAddToCart}
            onAddMultipleToCart={handleAddMultipleToCart}
            onSelectProduct={handleSelectProduct}
            onShowToast={showToast}
          />
        )}

        {currentView === 'routines' && (
          <RoutinesView
            setCurrentView={changeView}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onAddMultipleToCart={handleAddMultipleToCart}
          />
        )}

        {currentView === 'ingredients' && (
          <IngredientsView
            setCurrentView={changeView}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'science' && (
          <ScienceView setCurrentView={changeView} />
        )}

        {currentView === 'journal' && (
          <JournalView
            setCurrentView={changeView}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'about' && (
          <AboutView setCurrentView={changeView} />
        )}
      </main>

      {/* Luxury Editorial Footer */}
      <Footer setCurrentView={changeView} />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
          onAddMultipleToCart={handleAddMultipleToCart}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={handleSelectProduct}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onShowToast={showToast}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        setCurrentView={changeView}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
        setCurrentView={changeView}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
        setCurrentView={changeView}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onClearCart={handleClearCart}
      />

      {/* Global Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* AEGIS AI Skincare Guide Chatbot */}
      <AegisAIChatbot
        onSelectProduct={handleSelectProduct}
        onAddToCart={handleAddToCart}
        onOpenQuiz={() => changeView('quiz')}
      />
    </div>
  );
}

export default App;
