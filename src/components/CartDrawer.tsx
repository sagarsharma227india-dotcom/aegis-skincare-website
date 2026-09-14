import React, { useState } from 'react';
import { CartItem, NavView } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ProductPackagingView } from './ProductPackagingView';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
  setCurrentView: (view: NavView) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  setCurrentView
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number } | null>(
    null
  );
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = appliedPromo ? Math.round((rawSubtotal * appliedPromo.discountPercent) / 100) : 0;
  const subtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 999;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;
  const freeShippingProgress = Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    const cleanCode = promoCode.trim().toUpperCase();

    if (cleanCode === 'AEGIS10') {
      setAppliedPromo({ code: 'AEGIS10', discountPercent: 10 });
      setPromoCode('');
    } else if (cleanCode === 'WELCOME15') {
      setAppliedPromo({ code: 'WELCOME15', discountPercent: 15 });
      setPromoCode('');
    } else if (!cleanCode) {
      setPromoError('Please enter a valid coupon code.');
    } else {
      setPromoError('Code is invalid or has expired.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1A1C1B]/70 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div className="bg-[#FAF9F7] border-l border-[#E2DDD5] w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative">
        {/* Top Header */}
        <div className="p-6 border-b border-[#E2DDD5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#526442]" />
            <h2 className="font-serif-editorial text-xl font-medium text-[#1A1C1B]">
              Your Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            id="cart-drawer-close-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F2EFE9] text-[#1A1C1B] border border-transparent hover:border-[#E2DDD5] transition-colors"
            aria-label="Close shopping bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3 bg-[#F2EFE9] border-b border-[#E2DDD5] text-left space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono-spec text-[#1A1C1B]">
            {amountToFreeShipping === 0 ? (
              <span className="text-[#526442] font-bold">✓ YOU HAVE QUALIFIED FOR FREE SHIPPING</span>
            ) : (
              <span>
                Add <strong className="text-[#1A1C1B]">₹{amountToFreeShipping}</strong> more for Free Delivery
              </span>
            )}
            <span className="text-[#5E645F]">{freeShippingProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#F2EFE9] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#526442] transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-left">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F2EFE9] border border-[#E2DDD5] flex items-center justify-center mx-auto text-[#5E645F]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-editorial text-lg text-[#1A1C1B]">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-[#5E645F] max-w-xs mx-auto">
                  Discover our evidence-informed skincare protocols designed for everyday defense.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  setCurrentView('shop');
                }}
                className="px-6 py-2.5 bg-[#526442] text-[#FAF9F7] text-xs font-mono-spec uppercase tracking-wider rounded-[3px]"
              >
                Explore Formulations
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="p-4 bg-[#F2EFE9] border border-[#E2DDD5] rounded-[4px] flex gap-4 items-center justify-between"
              >
                <div className="w-16 h-16 shrink-0 rounded-[2px] overflow-hidden border border-[#E2DDD5]">
                  <ProductPackagingView product={item.product} size="xs" />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[9px] font-mono-spec text-[#526442] uppercase font-bold block">
                    {item.product.stepNumber}
                  </span>
                  <h4 className="text-xs font-bold text-[#1A1C1B] truncate font-serif-editorial">
                    {item.product.name}
                  </h4>
                  <div className="text-xs font-mono-spec font-semibold text-[#1A1C1B]">
                    ₹{item.product.price.toLocaleString('en-IN')}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center border border-[#E2DDD5] rounded-[2px] bg-[#FAF9F7]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="px-2 py-0.5 text-xs text-[#1A1C1B] hover:bg-[#F2EFE9]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-[11px] font-mono-spec font-semibold text-[#1A1C1B]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="px-2 py-0.5 text-xs text-[#1A1C1B] hover:bg-[#F2EFE9]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#5E645F] hover:text-[#A65F5F] p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right font-mono-spec text-xs font-bold text-[#1A1C1B]">
                  ₹{item.product.price * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Checkout Summary */}
        {items.length > 0 && (
          <div className="p-6 bg-[#F2EFE9] border-t border-[#E2DDD5] space-y-4 text-left">
            {/* Promo Code Box */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (try AEGIS10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-[#FAF9F7] border border-[#E2DDD5] rounded-[3px] text-xs font-mono-spec text-[#1A1C1B] uppercase focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#1A1C1B] text-[#FAF9F7] text-xs font-mono-spec uppercase rounded-[3px]"
                >
                  Apply
                </button>
              </div>
              {promoError && (
                <p className="text-[10px] font-mono-spec text-[#A65F5F]">{promoError}</p>
              )}
              {appliedPromo && (
                <p className="text-[10px] font-mono-spec text-[#526442]">
                  ✓ Promo '{appliedPromo.code}' applied ({appliedPromo.discountPercent}% OFF)
                </p>
              )}
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs font-mono-spec text-[#5E645F] pt-2 border-t border-[#E2DDD5]/60">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span className="text-[#1A1C1B]">₹{rawSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-[#526442]">
                  <span>DISCOUNT ({appliedPromo.code})</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>ESTIMATED DELIVERY</span>
                <span className="text-[#1A1C1B]">
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1A1C1B] pt-2 border-t border-[#E2DDD5]">
                <span>TOTAL</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              id="cart-drawer-checkout-btn"
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full py-3.5 bg-[#526442] hover:bg-[#394536] text-[#FAF9F7] font-mono-spec text-xs uppercase tracking-widest font-semibold rounded-[3px] transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>PROCEED TO CHECKOUT · ₹{total.toLocaleString('en-IN')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono-spec text-[#5E645F]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#526442]" />
              <span>100% Secure Encrypted Indian Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
