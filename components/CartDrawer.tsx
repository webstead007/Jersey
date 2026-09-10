'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, Trash2, ArrowRight, ShoppingBag, CheckCircle, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    clearCart,
    shippingThreshold,
    shippingFree,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(drawerRef.current, {
        x: '0%',
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      document.body.style.overflow = '';
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isCartOpen]);

  const handleCheckout = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a87c28', '#c4a279', '#1e1c1a'],
    });
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 2800);
  };

  const progressPercent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-visibility duration-300 ${
        isCartOpen ? 'pointer-events-auto' : ''
      }`}
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 cursor-pointer"
      />

      {/* Slide-out Drawer from Right */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] md:w-[500px] bg-[#faf7f2] border-l border-[#ded5c7] flex flex-col justify-between shadow-2xl text-[#171513] translate-x-full z-10"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#ded5c7] flex items-center justify-between bg-[#f2ece4]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#a87c28]" />
            <h2 className="text-sm font-mono tracking-[0.25em] uppercase text-[#171513] font-bold">
              YOUR CART ({cart.reduce((a, b) => a + b.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-black/5 text-[#6e665c] hover:text-[#171513] transition-colors"
            aria-label="Close Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3 bg-white/70 border-b border-[#ded5c7] text-xs font-mono">
          <div className="flex items-center justify-between text-[#6e665c] mb-1.5">
            <span>
              {shippingFree ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  YOU UNLOCKED FREE EXPRESS SHIPPING!
                </span>
              ) : (
                <>Add ₹{(shippingThreshold - subtotal).toLocaleString('en-IN')} for Free Shipping</>
              )}
            </span>
            <span className="text-[#a87c28] font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#ded5c7] h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#a87c28] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {checkoutSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#a87c28]/15 border border-[#a87c28] flex items-center justify-center text-[#a87c28] mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-normal uppercase tracking-wider text-[#171513] mb-2">
                Order Dispatch Initiated
              </h3>
              <p className="text-xs font-mono text-[#6e665c] mb-4 max-w-xs">
                Your authentic matchday jerseys are being hand-packaged in our climate-controlled atelier.
              </p>
              <span className="px-3 py-1 rounded text-[10px] font-mono tracking-widest uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                DISPATCH ID: #ATELIER-2026-90
              </span>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <ShoppingBag className="w-12 h-12 text-[#b8b0a5] mb-4" />
              <p className="text-sm uppercase tracking-widest text-[#171513] font-medium mb-2">
                YOUR CART IS EMPTY
              </p>
              <p className="text-xs text-[#6e665c] max-w-xs mb-6 font-light">
                Discover match-worn heritage and luxury football kits in our showroom.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById('collection-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full border border-[#1e1c1a] hover:bg-[#1e1c1a] hover:text-white text-xs font-mono uppercase tracking-widest text-[#171513] transition-colors"
              >
                BROWSE KITS
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#ded5c7] shadow-xs"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl bg-[#f2ece4] p-2 flex-shrink-0 border border-[#ded5c7]/50">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#a87c28] block truncate font-semibold">
                    {item.product.team}
                  </span>
                  <h4 className="text-xs font-medium uppercase text-[#171513] truncate mb-1">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6e665c] mb-2">
                    <span>SIZE: {item.size}</span>
                    <span>•</span>
                    <span className="text-[#171513] font-semibold">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-[#ded5c7] rounded-full bg-[#faf7f2] px-2 py-0.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-5 h-5 text-[#6e665c] hover:text-[#171513] flex items-center justify-center font-mono text-xs"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-5 h-5 text-[#6e665c] hover:text-[#171513] flex items-center justify-center font-mono text-xs"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-[#998e82] hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Total price for line */}
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#171513] block">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && !checkoutSuccess && (
          <div className="p-6 border-t border-[#ded5c7] bg-[#f2ece4]">
            <div className="space-y-2 mb-4 text-xs font-mono">
              <div className="flex justify-between text-[#6e665c]">
                <span>SUBTOTAL</span>
                <span className="text-[#171513] font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#6e665c]">
                <span>EXPRESS PAN-INDIA SHIPPING</span>
                <span className={shippingFree ? 'text-emerald-700 font-bold' : 'text-[#171513]'}>
                  {shippingFree ? 'FREE' : '₹199'}
                </span>
              </div>
              <div className="flex justify-between text-sm font-medium text-[#171513] pt-2 border-t border-[#ded5c7]">
                <span className="font-bold">ESTIMATED TOTAL</span>
                <span className="text-[#a87c28] font-mono text-base font-bold">
                  ₹{(subtotal + (shippingFree ? 0 : 199)).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              id="checkout-action-btn"
              onClick={handleCheckout}
              className="w-full py-4 rounded-full bg-[#1e1c1a] hover:bg-[#a87c28] text-white font-medium text-xs font-mono tracking-[0.25em] uppercase flex items-center justify-center gap-3 transition-transform active:scale-98 shadow-md"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#736a60] font-mono tracking-widest uppercase mt-3">
              ENCRYPTED 256-BIT SECURE CHECKOUT
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
