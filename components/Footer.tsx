'use client';

import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Instagram, Facebook, Youtube, Check } from 'lucide-react';

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e1c1a] border-t border-[#332f2b] text-[#f2ece4] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Tier: Big Brandmark + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#c59b48] block mb-2 font-semibold">
                ATELIER 90 // HAUTE COUTURE
              </span>
              <h2 className="font-serif font-normal text-4xl md:text-6xl text-[#f2ece4] tracking-tight uppercase mb-4">
                Jersey Store
              </h2>
              <p className="text-sm text-[#b8b0a5] font-light leading-relaxed max-w-md">
                The premier interactive 3D showroom for the world’s most iconic football kits, national pride, and match-worn nostalgia.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#d6cec4] hover:text-white hover:border-[#c59b48] hover:bg-white/5 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#d6cec4] hover:text-white hover:border-[#c59b48] hover:bg-white/5 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#d6cec4] hover:text-white hover:border-[#c59b48] hover:bg-white/5 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#292623] border border-white/10 rounded-3xl p-8 shadow-md">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c59b48] block mb-2 font-semibold">
                THE VAULT PRIVILEGE CLUB
              </span>
              <h3 className="font-serif text-xl font-normal uppercase tracking-wider text-white mb-2">
                Early Access to New Drops
              </h3>
              <p className="text-xs text-[#b8b0a5] font-light mb-6">
                Receive secret showroom access 24 hours before limited-edition kits go live to the general public.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className="flex-1 bg-black/40 border border-white/15 rounded-full px-5 py-3 text-xs font-mono uppercase tracking-widest text-white placeholder-white/40 focus:outline-none focus:border-[#c59b48] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#c59b48] hover:bg-[#d9b76e] text-[#1e1c1a] text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 transition-all"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>JOINED</span>
                    </>
                  ) : (
                    <>
                      <span>JOIN</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-mono">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c59b48] block mb-4 font-semibold">
              SHOP
            </span>
            <ul className="space-y-2.5 text-[#b8b0a5]">
              <li><a href="#collection-section" className="hover:text-white transition-colors">National Teams</a></li>
              <li><a href="#collection-section" className="hover:text-white transition-colors">European Clubs</a></li>
              <li><a href="#collection-section" className="hover:text-white transition-colors">Retro Vault</a></li>
              <li><a href="#collection-section" className="hover:text-white transition-colors">Matchday Training</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c59b48] block mb-4 font-semibold">
              COLLECTIONS
            </span>
            <ul className="space-y-2.5 text-[#b8b0a5]">
              <li><a href="#collection-section" className="hover:text-white transition-colors">Sol de Mayo Special</a></li>
              <li><a href="#collection-section" className="hover:text-white transition-colors">Canarinho Pro 2026</a></li>
              <li><a href="#collection-section" className="hover:text-white transition-colors">La Furia Roja Euro</a></li>
              <li><a href="#collection-section" className="hover:text-white transition-colors">125th Anniversary Kits</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c59b48] block mb-4 font-semibold">
              ATELIER
            </span>
            <ul className="space-y-2.5 text-[#b8b0a5]">
              <li><a href="#culture-section" className="hover:text-white transition-colors">Football Manifesto</a></li>
              <li><a href="#benefits-section" className="hover:text-white transition-colors">Authenticity Check</a></li>
              <li><a href="#benefits-section" className="hover:text-white transition-colors">Our Showroom Story</a></li>
              <li><a href="#benefits-section" className="hover:text-white transition-colors">Care Guide</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c59b48] block mb-4 font-semibold">
              SUPPORT
            </span>
            <ul className="space-y-2.5 text-[#b8b0a5]">
              <li><a href="#benefits-section" className="hover:text-white transition-colors">Pan-India Shipping</a></li>
              <li><a href="#benefits-section" className="hover:text-white transition-colors">7-Day Exchanges</a></li>
              <li><a href="#benefits-section" className="hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#benefits-section" className="hover:text-white transition-colors">Concierge Desk</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono text-[#8a8075]">
          <p>© 2026 Jersey Store • Atelier 90. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-[#c59b48] transition-colors uppercase tracking-widest"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
