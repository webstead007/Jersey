'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInWishlist, toggleWishlist, setSelectedProduct } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative flex flex-col justify-between bg-[#faf7f2] border border-[#ded5c7] rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all duration-300 hover:border-[#a87c28]/70 hover:shadow-xl hover:shadow-[#a87c28]/5 cursor-pointer shadow-sm"
    >
      {/* Top Badges & Wishlist */}
      <div className="flex items-center justify-between mb-3 z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.isNew && (
            <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase bg-[#a87c28] text-white font-semibold">
              NEW DROP
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase bg-white text-[#171513] border border-[#ded5c7] font-medium shadow-xs">
              POPULAR
            </span>
          )}
        </div>

        <button
          onClick={handleWishlist}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`p-2 rounded-full border transition-all duration-200 ${
            inWishlist
              ? 'bg-[#a87c28]/15 border-[#a87c28] text-[#a87c28]'
              : 'bg-white border-[#ded5c7] text-[#6e665c] hover:text-[#171513] hover:border-[#a87c28]'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 md:w-4 md:h-4 ${inWishlist ? 'fill-[#a87c28]' : ''}`} />
        </button>
      </div>

      {/* Product Image Stage */}
      <div className="relative w-full aspect-square flex items-center justify-center p-3 md:p-6 mb-4 rounded-xl bg-[#f2ece4] overflow-hidden border border-[#ded5c7]/50">
        <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-108">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#171513] text-[10px] font-mono tracking-widest uppercase shadow-md font-semibold">
            <Eye className="w-3.5 h-3.5 text-[#a87c28]" />
            <span>QUICK VIEW</span>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#a87c28] block mb-1 font-semibold">
            {product.team}
          </span>
          <h3 className="text-sm md:text-base font-medium tracking-wide text-[#171513] uppercase mb-1 line-clamp-1 group-hover:text-[#a87c28] transition-colors">
            {product.name}
          </h3>
          <span className="text-[11px] font-mono text-[#736a60] block mb-3">
            {product.edition}
          </span>
        </div>

        {/* Price Tag */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base md:text-lg font-mono font-medium text-[#171513]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs font-mono line-through text-[#998e82]">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Size Selector */}
        <div className="flex items-center gap-1 md:gap-1.5 mb-4">
          {product.sizes.map((sz) => (
            <button
              key={sz}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(sz);
              }}
              className={`flex-1 py-1 md:py-1.5 rounded-lg text-[10px] font-mono transition-all ${
                selectedSize === sz
                  ? 'bg-[#1e1c1a] text-white font-bold shadow-xs'
                  : 'bg-white border border-[#ded5c7] text-[#6e665c] hover:bg-[#f2ece4] hover:text-[#171513]'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`w-full py-2.5 md:py-3 rounded-full flex items-center justify-center gap-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 shadow-sm ${
            isAddedRecently
              ? 'bg-emerald-600 text-white font-bold'
              : 'bg-[#1e1c1a] hover:bg-[#a87c28] text-white active:scale-98'
          }`}
        >
          {isAddedRecently ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>ADDED ({selectedSize})</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5 text-[#f2ece4]" />
              <span>ADD TO CART</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
