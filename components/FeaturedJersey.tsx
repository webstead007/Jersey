'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/lib/products';

export function FeaturedJersey() {
  const { addToCart, setSelectedProduct } = useCart();
  const featured = PRODUCTS.find((p) => p.id === 'argentina-away-special-2026') || PRODUCTS[1];
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <section id="featured-section" className="relative py-24 md:py-36 bg-[#0a0a0e] border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/10 mb-3">
              <Sparkles className="w-3 h-3 text-[#c5a059]" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a059]">
                SHOWROOM SHOWCASE • LIMITED VAULT RELEASE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] uppercase text-white">
              FEATURED ATELIER PIECE
            </h2>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 font-mono">
            EDITION 01 // SOL DE MAYO TRIBUTE
          </p>
        </div>

        {/* Hero Editorial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-[#111117]/80 border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-xl relative overflow-hidden">
          {/* Left Column: Huge Product Imagery */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] md:min-h-[520px] rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-6 group cursor-pointer"
            onClick={() => setSelectedProduct(featured)}
          >
            {/* Background Subtle Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
              <span className="text-8xl md:text-9xl font-black font-mono tracking-tighter text-white">
                AFA
              </span>
            </div>

            <div className="relative w-full max-w-md aspect-square transition-transform duration-700 ease-out group-hover:scale-105">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-white/60">
              CLICK FOR HIGH-RES INSPECTION
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#c5a059] mb-2">
              {featured.team}
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-[0.1em] uppercase text-white mb-3">
              {featured.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-light font-mono text-white">
                ₹{featured.price.toLocaleString('en-IN')}
              </span>
              {featured.originalPrice && (
                <span className="text-sm font-mono line-through text-white/40">
                  ₹{featured.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30">
                SAVE ₹{(featured.originalPrice! - featured.price).toLocaleString('en-IN')}
              </span>
            </div>

            <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
              {featured.description}
            </p>

            {/* Fabric Specs */}
            <div className="space-y-2.5 mb-8 border-y border-white/10 py-6">
              {featured.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-white/80 font-mono tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/60">
                <span className="uppercase tracking-widest">SELECT MATCHDAY SIZE</span>
                <span className="text-[#c5a059] cursor-pointer hover:underline">SIZE GUIDE</span>
              </div>
              <div className="flex gap-2.5">
                {featured.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-3 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-white text-black font-bold shadow-lg scale-105'
                        : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                id="featured-add-to-cart-btn"
                onClick={() => addToCart(featured, selectedSize)}
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-full bg-[#c5a059] hover:bg-[#d9b76e] text-black font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#c5a059]/20 hover:scale-[1.02] active:scale-98"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART</span>
              </button>
              <button
                onClick={() => setSelectedProduct(featured)}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-white bg-white/5 text-white font-medium text-xs tracking-[0.2em] uppercase transition-all"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-white/40">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>OFFICIAL FEDERATION AUTHENTICITY CERTIFICATE INCLUDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
