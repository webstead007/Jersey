'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function HeroHeader() {
  const { totalItems, setIsCartOpen, wishlist } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/10 dark:bg-black/15 backdrop-blur-xl border-b border-white/10 py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo matching reference screenshot (Left: Clean luxury name) */}
          <a
            href="#"
            className="group flex flex-col items-start cursor-pointer transition-transform duration-300 active:scale-95"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-white drop-shadow-md">
                ATELIER 90
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/70 font-mono drop-shadow">
              JERSEY ARCHIVE
            </span>
          </a>

          {/* Center/Right Navigation Links matching reference screenshot */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection('cinematic-hero')}
              className="text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-200 drop-shadow-sm font-medium"
            >
              HOW WE BUILD
            </button>
            <button
              onClick={() => scrollToSection('collection-section')}
              className="text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-200 drop-shadow-sm font-medium"
            >
              COLLECTION
            </button>
            <button
              onClick={() => scrollToSection('customizer-section')}
              className="text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-200 drop-shadow-sm font-medium"
            >
              CUSTOM LAB
            </button>
            <button
              onClick={() => scrollToSection('culture-section')}
              className="text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-200 drop-shadow-sm font-medium"
            >
              CULTURE
            </button>
          </nav>

          {/* Right Action Icons (Cart + Wishlist) */}
          <div className="flex items-center gap-4 md:gap-6">
            {wishlist.length > 0 && (
              <button
                onClick={() => scrollToSection('product-showcase-section')}
                className="relative hidden sm:flex items-center justify-center p-2 text-white/80 hover:text-[#c5a059] transition-colors drop-shadow"
                title="Wishlist"
              >
                <Heart className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c5a059] text-[9px] font-mono text-black font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              </button>
            )}

            {/* Cart Trigger */}
            <button
              id="cart-trigger-btn"
              onClick={() => setIsCartOpen(true)}
              className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/25 bg-black/20 backdrop-blur-md hover:bg-white/20 hover:border-white transition-all duration-300 shadow-sm"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-white group-hover:text-[#c5a059] transition-colors" />
              <span className="text-xs font-mono tracking-widest text-white uppercase hidden sm:inline drop-shadow-sm">
                CART
              </span>
              <span className="w-5 h-5 rounded-full bg-white text-black text-[10px] font-mono font-bold flex items-center justify-center transition-colors group-hover:bg-[#c5a059]">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors drop-shadow"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-fade-in text-white">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#c5a059]">
              SHOWROOM NAVIGATION
            </span>
            <button
              onClick={() => scrollToSection('cinematic-hero')}
              className="text-left text-2xl font-light tracking-[0.15em] text-white hover:text-[#c5a059] transition-colors"
            >
              01 SHOWROOM
            </button>
            <button
              onClick={() => scrollToSection('product-showcase-section')}
              className="text-left text-2xl font-light tracking-[0.15em] text-white hover:text-[#c5a059] transition-colors"
            >
              02 COLLECTION
            </button>
            <button
              onClick={() => scrollToSection('featured-section')}
              className="text-left text-2xl font-light tracking-[0.15em] text-white hover:text-[#c5a059] transition-colors"
            >
              03 DESIGNS
            </button>
            <button
              onClick={() => scrollToSection('culture-section')}
              className="text-left text-2xl font-light tracking-[0.15em] text-white hover:text-[#c5a059] transition-colors"
            >
              04 CULTURE
            </button>
            <button
              onClick={() => scrollToSection('benefits-section')}
              className="text-left text-2xl font-light tracking-[0.15em] text-white hover:text-[#c5a059] transition-colors"
            >
              05 PROMISE
            </button>
          </div>

          <div className="border-t border-white/10 pt-6 font-mono text-xs text-white/50">
            <span>AUTHENTIC MATCHDAY COLLECTIONS • PAN-INDIA DISPATCH</span>
          </div>
        </div>
      )}
    </>
  );
}
