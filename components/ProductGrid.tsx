'use client';

import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import { Sparkles } from 'lucide-react';

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  return (
    <section id="collection-section" className="py-10 md:py-14 bg-[#f2ece4] border-t border-[#ded5c7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ded5c7] bg-white/80 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#a87c28]" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6e665c]">
              AUTUMN / WINTER 2026 ARCHIVE
            </span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] tracking-tight uppercase mb-3">
            The Collection
          </h2>
          <p className="text-sm md:text-base text-[#6e665c] font-light leading-relaxed max-w-xl">
            Jerseys for the clubs, countries and players that define the game.
            Engineered with matchday performance fabrics and historic club heritage.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1e1c1a] text-white font-bold shadow-md scale-105'
                    : 'bg-white/80 border border-[#ded5c7] text-[#6e665c] hover:bg-white hover:text-[#171513] hover:border-[#1e1c1a]/40'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 2 columns on mobile, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
