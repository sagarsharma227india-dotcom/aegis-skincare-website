import React, { useState } from 'react';
import { NavView } from '../types';
import { AegisMonogram } from './AegisMonogram';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#20231F] text-[#F8F5EF] border-t border-[#343A33] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-[#343A33]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center">
                <AegisMonogram size={18} color="#F8F5EF" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-[0.2em] text-lg text-[#F8F5EF] leading-tight font-serif-editorial">
                  AEGIS
                </span>
                <span className="text-[9px] font-mono-spec tracking-[0.25em] text-[#A9B7B7] uppercase">
                  MEN'S SKINCARE
                </span>
              </div>
            </div>

            <p className="text-xs text-[#CFC8BC] leading-relaxed max-w-sm">
              Purposeful skincare designed around the everyday realities of men’s skin — oil, shaving, dehydration and daily sun exposure. Formulated and tested in India.
            </p>

            <div className="pt-2 text-[10px] font-mono-spec text-[#A9B7B7] space-y-1">
              <div>EST. 2024 · DELHI, INDIA</div>
              <div>SCIENCE × SIMPLICITY · 100% DISCLOSED INCI</div>
            </div>
          </div>

          {/* Quick Links: Products */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono-spec text-[#A9B7B7] font-bold uppercase tracking-widest block">
              CATALOGUE
            </span>
            <ul className="space-y-2 text-xs font-mono-spec text-[#CFC8BC]">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  All Formulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  Starter Systems & Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('quiz');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  Skin Consultation Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('routines');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  The 3-Minute Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Research & Lab */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono-spec text-[#A9B7B7] font-bold uppercase tracking-widest block">
              RESEARCH & LAB
            </span>
            <ul className="space-y-2 text-xs font-mono-spec text-[#CFC8BC]">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('science');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  Our Science & Barrier
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('ingredients');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  Active Ingredient Index
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('journal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  The AEGIS Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  About AEGIS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('arifa-naved');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F8F5EF] transition-colors"
                >
                  Arifa Naved (Lead)
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono-spec text-[#A9B7B7] font-bold uppercase tracking-widest block">
              LAB DISPATCHES
            </span>
            <p className="text-xs text-[#CFC8BC] leading-relaxed">
              Receive concise monthly updates on dermal science, ingredient insights, and formulation releases.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#282C27] border border-[#3E453D] rounded-[3px] text-xs font-mono-spec text-[#A9B7B7] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A9B7B7]" />
                <span>Subscribed to Lab Dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-3 py-2 bg-[#282C27] border border-[#3E453D] rounded-l-[3px] text-xs font-mono-spec text-[#F8F5EF] placeholder:text-[#5C625B] focus:outline-hidden focus:border-[#A9B7B7]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] rounded-r-[3px] transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-[10px] font-mono-spec text-[#5C625B] block">
                  No promotional spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-spec text-[#5C625B] gap-4">
          <div>
            © {new Date().getFullYear()} AEGIS MEN'S SKINCARE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>INCI Transparency</span>
            <span>Shipping Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
