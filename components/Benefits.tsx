'use client';

import React from 'react';
import { ShieldCheck, Truck, Lock, RotateCcw } from 'lucide-react';

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'AUTHENTIC QUALITY',
    description:
      'Official federation and club grade fabrics, micro-mesh breathability, and genuine heat-pressed silicone crests made for supporters who care about every detail.',
    tag: 'VERIFIED 100%',
  },
  {
    icon: Truck,
    title: 'EXPRESS DELIVERY',
    description:
      'Swift, insured dispatch across every pin code in India via premium courier partners with end-to-end tracking to your doorstep.',
    tag: '2-4 BUSINESS DAYS',
  },
  {
    icon: Lock,
    title: 'SECURE PAYMENTS',
    description:
      '256-bit encrypted transactions supporting UPI, major Credit/Debit Cards, Net Banking, and zero-fee EMI options.',
    tag: 'BANK LEVEL SECURITY',
  },
  {
    icon: RotateCcw,
    title: 'EASY RETURNS',
    description:
      'Simple 7-day doorstep size replacement and exchange experience because finding the perfect matchday fit should be completely seamless.',
    tag: '7-DAY GUARANTEE',
  },
];

export function Benefits() {
  return (
    <section id="benefits-section" className="py-10 md:py-14 bg-[#f2ece4] border-t border-[#ded5c7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#a87c28] block mb-2 font-semibold">
            THE ATELIER PROMISE
          </span>
          <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] tracking-tight uppercase mb-4">
            Why Shop With Us
          </h2>
          <p className="text-sm text-[#6e665c] font-light leading-relaxed">
            Crafted for football purists, collectors, and supporters worldwide.
          </p>
        </div>

        {/* Minimal Editorial Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex flex-col p-6 rounded-2xl bg-[#faf7f2] border border-[#ded5c7] hover:border-[#a87c28]/60 transition-colors group shadow-xs"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#ded5c7] flex items-center justify-center text-[#a87c28] group-hover:scale-110 group-hover:bg-[#a87c28]/10 transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#736a60]">
                    {b.tag}
                  </span>
                </div>

                <h3 className="text-base font-medium tracking-wider uppercase text-[#171513] mb-2 group-hover:text-[#a87c28] transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs text-[#6e665c] font-light leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
