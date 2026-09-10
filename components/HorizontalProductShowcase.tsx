'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS, Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Eye, Heart, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HorizontalProductShowcase() {
  const { addToCart, isInWishlist, toggleWishlist, setSelectedProduct } = useCart();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerContainerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'brazil-home-2026': 'M',
    'argentina-away-special-2026': 'M',
    'spain-home-furia-2026': 'M',
    'real-madrid-home-2026': 'M',
    'barcelona-home-blaugrana-2026': 'M',
    'manchester-united-home-2026': 'M',
  });
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  useEffect(() => {
    if (!triggerContainerRef.current || !trackRef.current) return;

    const totalSlides = PRODUCTS.length;
    const track = trackRef.current;
    const trigger = triggerContainerRef.current;

    // Pinning and horizontal transform animation via GSAP ScrollTrigger
    const scrollAnimation = gsap.to(track, {
      xPercent: -100 * (totalSlides - 1) / totalSlides,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 0.8,
        start: 'top top',
        end: () => `+=${totalSlides * 100}vh`,
        onUpdate: (self) => {
          const slide = Math.min(
            totalSlides - 1,
            Math.floor(self.progress * totalSlides)
          );
          setActiveSlideIndex(slide);
        },
      },
    });

    return () => {
      scrollAnimation.scrollTrigger?.kill();
      scrollAnimation.kill();
    };
  }, []);

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id] || 'M';
    addToCart(product, size);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section
      id="product-showcase-section"
      ref={triggerContainerRef}
      className="relative w-full h-screen h-[100svh] overflow-hidden bg-[#0c0c12] select-none"
    >
      {/* Top Section Banner */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c5a059] drop-shadow">
            SHOWCASE ARCHIVE // ONE BY ONE
          </span>
        </div>
        <div className="text-xs font-mono tracking-widest text-white/60">
          <span className="text-white font-bold">
            {String(activeSlideIndex + 1).padStart(2, '0')}
          </span>{' '}
          / {String(PRODUCTS.length).padStart(2, '0')}
        </div>
      </div>

      {/* Horizontal Slides Track: width = PRODUCTS.length * 100vw */}
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: `${PRODUCTS.length * 100}vw` }}
      >
        {PRODUCTS.map((product, idx) => {
          const currentSize = selectedSizes[product.id] || 'M';
          const inWishlist = isInWishlist(product.id);
          const isAdded = addedProductId === product.id;

          return (
            <div
              key={product.id}
              className="w-screen h-full flex-shrink-0 flex items-center justify-center p-6 md:p-16 lg:p-24 relative"
            >
              <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-10">
                {/* Left: Giant Solo Product Image */}
                <div
                  className="lg:col-span-6 relative flex items-center justify-center h-[340px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent p-4 md:p-8 cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Subtle Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
                    <span className="text-8xl md:text-9xl font-black font-mono tracking-tighter text-white">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Main Product Image */}
                  <div className="relative w-full h-full max-w-md aspect-square transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                      priority={idx < 2}
                    />
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-6 right-6 p-3 rounded-full border transition-all ${
                      inWishlist
                        ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#c5a059]'
                        : 'bg-black/40 border-white/10 text-white/70 hover:text-white hover:bg-black/60'
                    }`}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? 'fill-[#c5a059]' : ''}`} />
                  </button>

                  <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-white/70 flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>CLICK FOR 360° INSPECTION</span>
                  </div>
                </div>

                {/* Right: Editorial Product Details */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  {/* Category & Team */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#c5a059]">
                      {product.team}
                    </span>
                    <span className="text-white/30 font-mono text-xs">•</span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
                      {product.edition}
                    </span>
                  </div>

                  {/* Headline Title */}
                  <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.1] mb-4">
                    {product.name}
                  </h2>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl md:text-4xl font-mono font-light text-white">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm md:text-base font-mono line-through text-white/40">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30">
                      OFFICIAL ATELIER RELEASE
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed mb-6 max-w-lg">
                    {product.description}
                  </p>

                  {/* Sizes */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                      SELECT MATCH SIZE
                    </span>
                    <div className="flex gap-2 max-w-sm">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => handleSizeSelect(product.id, sz)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                            currentSize === sz
                              ? 'bg-white text-black font-bold shadow-md scale-105'
                              : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex-1 py-3.5 rounded-full flex items-center justify-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xl ${
                        isAdded
                          ? 'bg-emerald-500 text-black font-bold'
                          : 'bg-[#c5a059] hover:bg-[#d9b76e] text-black active:scale-98'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>ADDED TO CART</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>ADD TO CART ({currentSize})</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-xs font-mono uppercase tracking-[0.2em] text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <span>DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Horizontal Progress Bar & Hint */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          {PRODUCTS.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeSlideIndex
                  ? 'w-8 bg-[#c5a059]'
                  : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <div className="text-[10px] font-mono tracking-widest uppercase text-white/40 flex items-center gap-2">
          <span>SCROLL TO GLIDE THROUGH KITS</span>
          <ArrowRight className="w-3 h-3 text-[#c5a059]" />
        </div>
      </div>
    </section>
  );
}
