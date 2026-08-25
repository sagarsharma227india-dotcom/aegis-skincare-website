import React, { useState } from 'react';
import { CartItem } from '../types';
import {
  X,
  Check,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Building,
  Truck,
  ArrowRight,
  ArrowLeft,
  PackageCheck
} from 'lucide-react';
import { AegisMonogram } from './AegisMonogram';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states initialized to empty (strictly no pre-filled personal data)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please enter a valid email';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please enter a 10-digit mobile number';
    if (!formData.address.trim()) errs.address = 'Please enter your street address';
    if (!formData.city.trim()) errs.city = 'Please enter your city';
    if (!formData.pincode.trim() || formData.pincode.length !== 6) errs.pincode = 'Please enter a 6-digit PIN code';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(3); // Direct to payment method
    }
  };

  const handleCompleteOrder = () => {
    // Generate authentic order ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const newOrderId = `AEG-${new Date().getFullYear()}-${randomNum}`;
    setOrderNumber(newOrderId);
    setStep(4);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#20231F]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] w-full max-w-3xl overflow-hidden shadow-2xl relative my-6 text-left">
        {/* Header */}
        <div className="p-6 bg-[#F2EEE7] border-b border-[#CFC8BC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center">
              <AegisMonogram size={16} color="#F8F5EF" />
            </div>
            <div>
              <h2 className="font-serif-editorial text-xl font-medium text-[#20231F]">
                Secure Checkout
              </h2>
              <span className="text-[10px] font-mono-spec text-[#5C625B]">
                STEP {step} OF 4 · 256-BIT SSL ENCRYPTED
              </span>
            </div>
          </div>

          {step !== 4 && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E8E1D6] text-[#20231F] border border-transparent hover:border-[#CFC8BC]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-4 border-b border-[#CFC8BC] text-[10px] font-mono-spec text-center">
          <div className={`py-2 ${step >= 1 ? 'bg-[#4B5848] text-[#F8F5EF] font-bold' : 'bg-[#F8F5EF] text-[#5C625B]'}`}>
            1. ADDRESS
          </div>
          <div className={`py-2 ${step >= 2 ? 'bg-[#4B5848] text-[#F8F5EF] font-bold' : 'bg-[#F8F5EF] text-[#5C625B]'}`}>
            2. DELIVERY
          </div>
          <div className={`py-2 ${step >= 3 ? 'bg-[#4B5848] text-[#F8F5EF] font-bold' : 'bg-[#F8F5EF] text-[#5C625B]'}`}>
            3. PAYMENT
          </div>
          <div className={`py-2 ${step >= 4 ? 'bg-[#4B5848] text-[#F8F5EF] font-bold' : 'bg-[#F8F5EF] text-[#5C625B]'}`}>
            4. CONFIRM
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* STEP 1: Shipping Address Form */}
          {step === 1 && (
            <form onSubmit={handleProceedToPayment} className="space-y-4">
              <h3 className="font-serif-editorial text-lg text-[#20231F]">
                1. Shipping Address & Contact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden focus:border-[#4B5848]"
                  />
                  {errors.fullName && <p className="text-[10px] text-[#A65F5F] font-mono-spec">{errors.fullName}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden focus:border-[#4B5848]"
                  />
                  {errors.email && <p className="text-[10px] text-[#A65F5F] font-mono-spec">{errors.email}</p>}
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                    Street Address & Apartment *
                  </label>
                  <input
                    type="text"
                    placeholder="House / Flat No., Street, Landmark"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden focus:border-[#4B5848]"
                  />
                  {errors.address && <p className="text-[10px] text-[#A65F5F] font-mono-spec">{errors.address}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden focus:border-[#4B5848]"
                  />
                  {errors.city && <p className="text-[10px] text-[#A65F5F] font-mono-spec">{errors.city}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="6-digit PIN code"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden focus:border-[#4B5848]"
                  />
                  {errors.pincode && <p className="text-[10px] text-[#A65F5F] font-mono-spec">{errors.pincode}</p>}
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                    Mobile Number (for delivery SMS updates) *
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#5C625B]">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden focus:border-[#4B5848]"
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-[#A65F5F] font-mono-spec">{errors.phone}</p>}
                </div>
              </div>

              <div className="pt-4 border-t border-[#CFC8BC] flex justify-between items-center">
                <span className="text-xs font-mono-spec text-[#5C625B]">
                  Order Total: <strong className="text-[#20231F]">₹{total}</strong>
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs uppercase tracking-wider font-semibold rounded-[3px] flex items-center gap-2"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-editorial text-lg text-[#20231F]">
                  Select Payment Method
                </h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono-spec text-[#5C625B] hover:text-[#20231F] flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Edit Address</span>
                </button>
              </div>

              {/* Payment Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-[3px] border text-xs font-mono-spec flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] font-semibold'
                      : 'bg-[#F2EEE7] text-[#20231F] border-[#CFC8BC]'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-[3px] border text-xs font-mono-spec flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] font-semibold'
                      : 'bg-[#F2EEE7] text-[#20231F] border-[#CFC8BC]'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-[3px] border text-xs font-mono-spec flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] font-semibold'
                      : 'bg-[#F2EEE7] text-[#20231F] border-[#CFC8BC]'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Net Banking</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-[3px] border text-xs font-mono-spec flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-[#4B5848] text-[#F8F5EF] border-[#4B5848] font-semibold'
                      : 'bg-[#F2EEE7] text-[#20231F] border-[#CFC8BC]'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>COD</span>
                </button>
              </div>

              {/* Dynamic Payment Input Form */}
              <div className="p-5 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] space-y-4">
                {paymentMethod === 'upi' && (
                  <div className="space-y-3">
                    <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                      Enter UPI ID (Google Pay, PhonePe, Paytm, BHIM)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. mobile@upi or name@okhdfcbank"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden"
                    />
                    <p className="text-[10px] font-mono-spec text-[#5C625B]">
                      A payment request will be sent to your UPI app for instant approval.
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="16-digit card number"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                          Expiry (MM/YY)
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="3 digits"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono-spec text-[#5C625B] uppercase block">
                      Select Your Bank
                    </label>
                    <select className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#20231F]">
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>State Bank of India (SBI)</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                      <option>Other Indian Banks</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="space-y-1 text-xs text-[#5C625B]">
                    <strong className="text-[#20231F] block font-mono-spec uppercase">
                      Cash on Delivery Available
                    </strong>
                    <p className="text-[11px]">
                      Please keep exact cash ready upon delivery to {formData.city || 'your address'}.
                    </p>
                  </div>
                )}
              </div>

              {/* Order Summary Line */}
              <div className="p-4 bg-[#E8E1D6] rounded-[3px] border border-[#CFC8BC] flex justify-between items-center text-xs font-mono-spec">
                <span>Total Payable Amount:</span>
                <span className="text-base font-bold text-[#20231F]">₹{total}</span>
              </div>

              {/* Pay Action */}
              <button
                id="checkout-pay-btn"
                onClick={handleCompleteOrder}
                className="w-full py-4 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs uppercase tracking-widest font-semibold rounded-[3px] transition-colors shadow-sm"
              >
                Place Order · ₹{total}
              </button>
            </div>
          )}

          {/* STEP 4: Order Confirmation */}
          {step === 4 && (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-widest block">
                  ORDER PLACED SUCCESSFULLY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial font-medium text-[#20231F]">
                  Thank You, {formData.fullName.split(' ')[0] || 'Customer'}
                </h3>
                <p className="text-xs text-[#5C625B] font-mono-spec">
                  Order Reference: <strong className="text-[#20231F]">{orderNumber}</strong>
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-xs font-mono-spec text-[#5C625B] space-y-2 text-left">
                <div className="flex justify-between border-b border-[#CFC8BC]/60 pb-1">
                  <span>DELIVERING TO:</span>
                  <span className="text-[#20231F] font-semibold">{formData.city || 'India'} ({formData.pincode || 'Verified'})</span>
                </div>
                <div className="flex justify-between border-b border-[#CFC8BC]/60 pb-1">
                  <span>PAYMENT STATUS:</span>
                  <span className="text-[#4B5848] font-semibold">Confirmed ({paymentMethod.toUpperCase()})</span>
                </div>
                <div className="flex justify-between">
                  <span>ESTIMATED DISPATCH:</span>
                  <span className="text-[#20231F] font-semibold">Tomorrow, 11:00 AM</span>
                </div>
              </div>

              <p className="text-xs text-[#5C625B] max-w-sm mx-auto">
                A confirmation receipt and tracking link have been dispatched to <strong>{formData.email || 'your email'}</strong>.
              </p>

              <button
                id="checkout-finish-btn"
                onClick={onClose}
                className="px-8 py-3.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] font-mono-spec text-xs uppercase tracking-widest font-semibold rounded-[3px]"
              >
                Return to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
