import React, { useState } from "react";
import { Product } from "../types";
import { PRODUCTS, REVIEWS } from "../data/products";
import {
  X,
  Star,
  Check,
  Truck,
  RotateCcw,
  Heart,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  MapPin,
  Sparkles,
  Info,
  Clock,
  Droplets,
  AlertTriangle,
} from "lucide-react";
import { AegisMonogram } from "./AegisMonogram";
import { ProductPackagingView } from "./ProductPackagingView";
import { useImageStore } from "../hooks/useImageStore";

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onAddMultipleToCart?: (products: Product[]) => void;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (productId: string) => void;
  isWishlisted: boolean;
  onShowToast: (msg: string) => void;
}


const PairedProductCard: React.FC<{ pair: Product, onSelect: (id: string) => void }> = ({ pair, onSelect }) => {
  const { image } = useImageStore(pair.id, pair.image);
  return (
    <div
      onClick={() => onSelect(pair.id)}
      className="cursor-pointer flex items-center gap-2 p-2 bg-[#F2EEE7] hover:bg-[#E8E1D6] rounded-[3px] border border-[#CFC8BC] transition-colors"
    >
      <div className="w-8 h-8 rounded-[2px] overflow-hidden shrink-0">
        <img
          src={image}
          alt={pair.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="text-[11px] font-mono-spec">
        <span className="block text-[#20231F] font-semibold">
          {pair.name}
        </span>
        <span className="text-[#5C625B]">₹{pair.price}</span>
      </div>
    </div>
  );
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onAddMultipleToCart,
  onToggleWishlist,
  onSelectProduct,
  isWishlisted,
  onShowToast,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { image } = useImageStore(product.id, product.image);
  const [activeTab, setActiveTab] = useState<
    "why" | "ingredients" | "how" | "compatibility" | "inci" | "faq"
  >("why");
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);
  const [reviewFilterRating, setReviewFilterRating] = useState<number | null>(
    null,
  );

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode.trim())) {
      setDeliveryStatus(
        "✓ Express 2–4 day delivery available for PIN " +
          pincode +
          " · Free delivery on this order",
      );
    } else {
      setDeliveryStatus("Please enter a valid 6-digit Indian PIN code.");
    }
  };

  const pairedProducts = (product.pairsWith || [])
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const completeRoutineProducts = (product.completeRoutineItemIds || [])
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const routineTotalPrice = completeRoutineProducts.reduce(
    (sum, p) => sum + p.price,
    0,
  );
  const routineDiscount =
    product.completeRoutineDiscount || (routineTotalPrice > 1500 ? 348 : 0);
  const routineFinalPrice = routineTotalPrice - routineDiscount;

  const handleAddFullRoutine = () => {
    if (onAddMultipleToCart && completeRoutineProducts.length > 0) {
      onAddMultipleToCart(completeRoutineProducts);
      onShowToast(
        "Full 3-step routine added to bag with ₹" +
          routineDiscount +
          " savings.",
      );
      onClose();
    } else {
      onAddToCart(product);
      onClose();
    }
  };

  const filteredReviews = reviewFilterRating
    ? REVIEWS.filter((r) => r.rating === reviewFilterRating)
    : REVIEWS;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#20231F]/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] w-full max-w-5xl overflow-hidden shadow-2xl relative my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="product-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#F2EEE7] text-[#20231F] hover:bg-[#E8E1D6] transition-colors border border-[#CFC8BC]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Gallery & Quick Spec */}
          <div className="lg:col-span-5 bg-[#F2EEE7] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#CFC8BC] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest">
                  {product.stepNumber}
                </span>
                <span className="text-[9px] font-mono-spec text-[#5C625B] uppercase">
                  {product.category.toUpperCase()}
                </span>
              </div>

              {/* Main Visual Display Area */}
              <div className="aspect-square bg-[#151714] rounded-[3px] p-0 flex items-center justify-center border border-[#CFC8BC] relative overflow-hidden group/img">
                <div className="w-full h-full relative">
                  <img
                    src={image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (image !== product.image) {
                        (e.target as HTMLImageElement).src = product.image;
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="font-serif-editorial text-3xl font-medium text-[#20231F] leading-tight">
                  {product.name}
                </h2>
                <p className="text-[#5C625B] text-sm">{product.subtitle}</p>
                <div className="flex items-center gap-2 text-xs font-mono-spec text-[#5C625B] pt-2">
                  <div className="flex text-[#4B5848]">
                    {Array.from({ length: Math.floor(product.rating) }).map(
                      (_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ),
                    )}
                  </div>
                  <span className="font-semibold text-[#20231F]">
                    {product.rating}
                  </span>
                  <span>({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Sticky Actions Toolbar */}
            <div className="p-4 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] flex flex-wrap items-center gap-3">
              <div className="flex items-center border border-[#CFC8BC] rounded-[3px] bg-[#F8F5EF]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-[#20231F] hover:bg-[#E8E1D6] text-xs font-mono-spec"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-mono-spec font-semibold text-[#20231F]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-[#20231F] hover:bg-[#E8E1D6] text-xs font-mono-spec"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                id="modal-add-to-bag-btn"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                className="flex-1 py-3 px-6 rounded-[3px] bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Add to Bag · ₹{product.price * quantity}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="modal-wishlist-btn"
                onClick={() => onToggleWishlist(product.id)}
                className={`p-3 rounded-[3px] border transition-colors ${
                  isWishlisted
                    ? "border-[#A65F5F] text-[#A65F5F] bg-[#F8F5EF]"
                    : "border-[#CFC8BC] text-[#5C625B] hover:text-[#20231F] bg-[#F8F5EF]"
                }`}
                title="Save formulation"
              >
                <Heart
                  className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
                />
              </button>
            </div>

            {/* Before You Buy Section */}
            {product.beforeYouBuy && (
              <div className="p-4 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] space-y-3">
                <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest block">
                  BEFORE YOU BUY
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                      Finish
                    </span>
                    <span className="font-medium text-[#20231F]">
                      {product.beforeYouBuy.finish}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                      Fragrance
                    </span>
                    <span className="font-medium text-[#20231F]">
                      {product.beforeYouBuy.fragrance}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                      Best For
                    </span>
                    <span className="font-medium text-[#20231F]">
                      {product.beforeYouBuy.skinType}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                      Placement
                    </span>
                    <span className="font-medium text-[#20231F]">
                      {product.beforeYouBuy.routine}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                      Supply Duration
                    </span>
                    <span className="font-medium text-[#20231F]">
                      {product.beforeYouBuy.expectedUse}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* How to Use Timeline */}
            {product.howToUseTimeline && (
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest block">
                  APPLICATION PROTOCOL
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.howToUseTimeline.map((step, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono-spec">
                        <span className="font-bold text-[#4B5848]">
                          STEP {step.stepNumber} · {step.action}
                        </span>
                        <span className="text-[#5C625B]">
                          {step.amountOrTime}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#20231F]">
                        {step.instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Check Delivery & Indian PIN Code */}
            <form
              onSubmit={handleCheckPincode}
              className="pt-2 text-xs space-y-2 border-t border-[#CFC8BC]"
            >
              <label
                htmlFor="pincode-input"
                className="font-mono-spec text-[#5C625B] flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4B5848]" />
                  <span>Check Express Delivery & Cash on Delivery:</span>
                </span>
                <span className="text-[10px] text-[#4B5848] font-bold uppercase">
                  Free on orders &gt; ₹999
                </span>
              </label>
              <div className="flex gap-2">
                <input
                  id="pincode-input"
                  type="text"
                  placeholder="e.g. 560038 / 110001"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  maxLength={6}
                  className="px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] w-44 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#20231F] hover:bg-[#343A33] text-[#F8F5EF] rounded-[3px] text-xs font-mono-spec uppercase font-semibold transition-colors"
                >
                  Verify
                </button>
              </div>
              {deliveryStatus && (
                <p className="text-[11px] font-mono-spec text-[#4B5848] pt-1">
                  {deliveryStatus}
                </p>
              )}
            </form>

            {/* Complete Your Routine (Bundled Section) */}
            {completeRoutineProducts.length > 1 && (
              <div className="p-5 bg-[#20231F] text-[#F8F5EF] rounded-[4px] space-y-4 border border-[#3E453D]">
                <div className="flex items-center justify-between pb-2 border-b border-[#343A33]">
                  <div>
                    <span className="text-[9px] font-mono-spec text-[#A9B7B7] uppercase tracking-widest block">
                      COMPLETE THE PROTOCOL
                    </span>
                    <h4 className="font-serif-editorial text-lg text-[#F8F5EF]">
                      The 3-Step Daily System
                    </h4>
                  </div>
                  <div className="text-right font-mono-spec">
                    <span className="text-xs text-[#A9B7B7] line-through block">
                      ₹{routineTotalPrice}
                    </span>
                    <span className="text-base font-bold text-[#F8F5EF]">
                      ₹{routineFinalPrice}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {completeRoutineProducts.map((item) => (
                    <div
                      key={item.id}
                      className="p-2 bg-[#282C27] rounded-[3px] border border-[#3E453D] text-[10px] font-mono-spec space-y-1"
                    >
                      <span className="text-[#A9B7B7] block">
                        {item.stepCategory}
                      </span>
                      <span className="text-[#F8F5EF] font-semibold block truncate">
                        {item.name}
                      </span>
                      <span className="text-[#CFC8BC]">₹{item.price}</span>
                    </div>
                  ))}
                </div>

                <button
                  id="modal-add-routine-bundle-btn"
                  onClick={handleAddFullRoutine}
                  className="w-full py-2.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] rounded-[3px] text-xs font-mono-spec uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#A9B7B7]" />
                  <span>Add Full 3-Step System (Save ₹{routineDiscount})</span>
                </button>
              </div>
            )}

            {/* Detail Tabs */}
            <div className="space-y-4 pt-4 border-t border-[#CFC8BC]">
              <div className="flex border-b border-[#CFC8BC] text-xs font-mono-spec overflow-x-auto gap-4">
                {(
                  [
                    { id: "why", label: "Why It Exists" },
                    { id: "ingredients", label: "Key Actives" },
                    { id: "how", label: "How to Use" },
                    { id: "compatibility", label: "Compatibility" },
                    { id: "inci", label: "Full INCI" },
                    { id: "faq", label: "FAQ" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 uppercase transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-b-2 border-[#4B5848] text-[#20231F] font-bold"
                        : "text-[#5C625B] hover:text-[#20231F]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="text-xs text-[#20231F] leading-relaxed space-y-3 min-h-[140px]">
                {activeTab === "why" && (
                  <div className="space-y-3">
                    <p className="text-[#5C625B] leading-relaxed">
                      {product.whyItExists}
                    </p>
                    <div className="space-y-1.5 pt-2">
                      <span className="font-mono-spec font-bold text-[11px] text-[#4B5848] uppercase block">
                        Observed Benefits:
                      </span>
                      {product.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#4B5848] mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "ingredients" && (
                  <div className="space-y-3">
                    {product.keyActives.map((act, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1"
                      >
                        <div className="flex justify-between font-mono-spec text-[11px]">
                          <strong className="text-[#20231F]">
                            {act.name} ({act.concentration})
                          </strong>
                          <span className="text-[#4B5848]">{act.role}</span>
                        </div>
                        <p className="text-[#5C625B] text-[11px]">
                          {act.mechanism}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "how" && (
                  <div className="space-y-3">
                    <div className="p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                      <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase block">
                        Morning Protocol (AM):
                      </span>
                      <p className="text-[#5C625B]">{product.protocolAM}</p>
                    </div>

                    <div className="p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                      <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase block">
                        Evening Protocol (PM):
                      </span>
                      <p className="text-[#5C625B]">{product.protocolPM}</p>
                    </div>
                  </div>
                )}

                {activeTab === "compatibility" && (
                  <div className="space-y-3">
                    {product.compatibility ? (
                      <div className="space-y-3">
                        <div className="p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                          <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase block">
                            Works Well With:
                          </span>
                          <p className="text-[#20231F]">
                            {product.compatibility.worksWellWith.join(", ")}
                          </p>
                        </div>
                        <div className="p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC] space-y-1">
                          <span className="text-[10px] font-mono-spec text-[#A65F5F] font-bold uppercase block">
                            Use Carefully With:
                          </span>
                          <p className="text-[#5C625B]">
                            {product.compatibility.useCarefullyWith.join(", ")}
                          </p>
                        </div>
                        <p className="text-[11px] text-[#5C625B] italic">
                          {product.compatibility.explanation}
                        </p>
                      </div>
                    ) : (
                      <p className="text-[#5C625B]">
                        Universally compatible with all AEGIS barrier care
                        formulations.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "inci" && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono-spec text-[#5C625B] uppercase block">
                      100% Disclosed INCI List:
                    </span>
                    <p className="text-[11px] font-mono-spec text-[#5C625B] bg-[#F2EEE7] p-3 rounded-[3px] border border-[#CFC8BC] leading-relaxed">
                      {product.fullIngredients}
                    </p>
                  </div>
                )}

                {activeTab === "faq" && (
                  <div className="space-y-2">
                    {product.faqList.map((faq, i) => (
                      <div
                        key={i}
                        className="space-y-1 border-b border-[#CFC8BC]/50 pb-2"
                      >
                        <strong className="text-[#20231F] block">
                          {faq.question}
                        </strong>
                        <p className="text-[#5C625B] text-[11px]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Section with Star Filter */}
            <div className="pt-6 border-t border-[#CFC8BC] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest block">
                    COMMUNITY FEEDBACK
                  </span>
                  <h4 className="font-serif-editorial text-lg text-[#20231F]">
                    Customer Reviews ({product.reviewCount})
                  </h4>
                </div>

                <div className="flex gap-1 text-[10px] font-mono-spec">
                  <button
                    onClick={() => setReviewFilterRating(null)}
                    className={`px-2 py-1 rounded-[2px] border ${
                      reviewFilterRating === null
                        ? "bg-[#20231F] text-[#F8F5EF] border-[#20231F]"
                        : "border-[#CFC8BC] text-[#5C625B]"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setReviewFilterRating(5)}
                    className={`px-2 py-1 rounded-[2px] border ${
                      reviewFilterRating === 5
                        ? "bg-[#20231F] text-[#F8F5EF] border-[#20231F]"
                        : "border-[#CFC8BC] text-[#5C625B]"
                    }`}
                  >
                    5★
                  </button>
                  <button
                    onClick={() => setReviewFilterRating(4)}
                    className={`px-2 py-1 rounded-[2px] border ${
                      reviewFilterRating === 4
                        ? "bg-[#20231F] text-[#F8F5EF] border-[#20231F]"
                        : "border-[#CFC8BC] text-[#5C625B]"
                    }`}
                  >
                    4★
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {filteredReviews.slice(0, 3).map((r) => (
                  <div
                    key={r.id}
                    className="p-3 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#20231F]">
                          {r.author}
                        </span>
                        {r.verified && (
                          <span className="text-[9px] font-mono-spec bg-[#E8E1D6] px-1.5 py-0.5 rounded-[2px] text-[#4B5848]">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono-spec text-[#5C625B]">
                        {r.date}
                      </span>
                    </div>

                    <div className="flex text-[#4B5848]">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs font-semibold text-[#20231F]">
                      {r.title}
                    </p>
                    <p className="text-xs text-[#5C625B] leading-relaxed">
                      {r.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pairs Well With */}
            {pairedProducts.length > 0 && (
              <div className="pt-4 border-t border-[#CFC8BC] space-y-2">
                <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider block">
                  PAIRS WELL WITH:
                </span>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {pairedProducts.map((pair) => (
                    <PairedProductCard key={pair.id} pair={pair} onSelect={onSelectProduct} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
