'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ShoppingBag, ShieldCheck, Truck, RotateCcw, Heart, Zap } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function ProductDetailModal() {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    isInWishlist,
    toggleWishlist,
    setIsCartOpen,
  } = useCart();

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const inWishlist = isInWishlist(selectedProduct.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(selectedProduct, selectedSize);
    }
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, selectedSize);
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      {/* Click outside backdrop */}
      <div
        className="fixed inset-0"
        onClick={() => setSelectedProduct(null)}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#faf7f2] border border-[#ded5c7] rounded-3xl p-6 md:p-12 shadow-2xl z-10 my-auto text-[#171513]">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#6e665c] hover:text-[#171513] transition-colors z-20"
          aria-label="Close Product Details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Image Gallery View */}
          <div className="md:col-span-6 relative aspect-square w-full rounded-2xl bg-[#f2ece4] border border-[#ded5c7] p-6 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              />
            </div>

            {/* Federation Badge Tag */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              {selectedProduct.badges.map((b, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded text-[9px] font-mono tracking-widest uppercase bg-white/90 backdrop-blur-md text-[#a87c28] border border-[#ded5c7] font-semibold shadow-xs"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Product Information */}
          <div className="md:col-span-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#a87c28] font-semibold">
                {selectedProduct.team}
              </span>
              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                className="flex items-center gap-1.5 text-xs text-[#6e665c] hover:text-[#a87c28] transition-colors"
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-[#a87c28] text-[#a87c28]' : ''}`} />
                <span className="font-mono text-[10px] uppercase font-medium">
                  {inWishlist ? 'SAVED' : 'WISHLIST'}
                </span>
              </button>
            </div>

            <h2 className="font-serif font-normal text-2xl md:text-3xl text-[#171513] tracking-tight uppercase mb-2">
              {selectedProduct.name}
            </h2>

            <span className="text-xs font-mono text-[#736a60] block mb-4">
              {selectedProduct.edition}
            </span>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#ded5c7]">
              <span className="text-2xl md:text-3xl font-mono font-bold text-[#171513]">
                ₹{selectedProduct.price.toLocaleString('en-IN')}
              </span>
              {selectedProduct.originalPrice && (
                <span className="text-sm font-mono line-through text-[#998e82]">
                  ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs font-mono text-emerald-700 font-bold">
                IN STOCK ({selectedProduct.stockCount} LEFT)
              </span>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-[#524b42] font-light leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Size Picker */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2 text-[#6e665c]">
                <span className="uppercase tracking-widest">SIZE</span>
                <span className="text-[#a87c28] font-medium">AUTHENTIC PLAYER FIT</span>
              </div>
              <div className="flex gap-2">
                {selectedProduct.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-mono transition-all ${
                      selectedSize === sz
                        ? 'bg-[#1e1c1a] text-white font-bold shadow-sm'
                        : 'bg-white border border-[#ded5c7] text-[#6e665c] hover:bg-[#f2ece4]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-[#6e665c] tracking-widest uppercase">
                QUANTITY
              </span>
              <div className="flex items-center border border-[#ded5c7] rounded-full bg-white px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 text-base text-[#6e665c] hover:text-[#171513] flex items-center justify-center font-mono"
                >
                  −
                </button>
                <span className="w-8 text-center text-xs font-mono font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 text-base text-[#6e665c] hover:text-[#171513] flex items-center justify-center font-mono"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-full bg-[#1e1c1a] hover:bg-[#a87c28] text-white font-medium text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-transform duration-200 active:scale-98 shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART • ₹{(selectedProduct.price * quantity).toLocaleString('en-IN')}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-full bg-[#a87c28] hover:bg-[#b88d3e] text-white font-medium text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-transform duration-200 active:scale-98 shadow-md"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>BUY NOW WITH EXPRESS CHECKOUT</span>
              </button>
            </div>

            {/* Shipping & Trust Pillars */}
            <div className="space-y-3 pt-6 border-t border-[#ded5c7] text-xs text-[#6e665c] font-mono">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-[#a87c28]" />
                <span>Express Pan-India Delivery (2-4 Business Days)</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-4 h-4 text-[#a87c28]" />
                <span>7-Day Hassle-Free Size Replacement Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>100% Authentic Matchday Standard Merchandise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
