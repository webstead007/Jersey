'use client';

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function FootballCulture() {
  return (
    <section id="culture-section" className="py-10 md:py-14 bg-[#ebe5dc] border-t border-[#ded5c7] relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a87c28_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Big Editorial Text Spread */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-4">
              <Quote className="w-5 h-5 text-[#a87c28]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#a87c28] font-semibold">
                MANIFESTO // CULTURA DE FÚTBOL
              </span>
            </div>

            <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-[#171513] tracking-tight uppercase leading-[1.1] mb-8">
              More Than <br />
              <span className="italic font-serif text-[#a87c28]">A Jersey.</span>
            </h2>

            <div className="space-y-6 text-sm sm:text-base md:text-lg text-[#524b42] font-light leading-relaxed">
              <p>
                Football is more than ninety minutes under floodlights. It’s the colors you grew up with, the heroes you idolized on grainy screens, the indelible tears of extra time, and the pride stitched across your chest.
              </p>
              <p className="text-[#6e665c] text-sm font-light">
                A jersey isn’t merely sportswear. It is living architecture — wearable history that anchors generational loyalty, stadium memories, and the unstoppable heartbeats of millions singing the same hymn.
              </p>
            </div>

            {/* Cultural stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#ded5c7]">
              <div>
                <span className="text-2xl md:text-3xl font-light font-mono text-[#171513] block">
                  1930—
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#736a60]">
                  HERITAGE ARCHIVE
                </span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-light font-mono text-[#a87c28] block font-medium">
                  100%
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#736a60]">
                  AUTHENTIC CUT
                </span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-light font-mono text-[#171513] block">
                  PAN-IN
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#736a60]">
                  EXPRESS DISPATCH
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Split Dual Imagery Spread using local assets */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-[#ded5c7] group shadow-sm">
              <Image
                src="/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM.jpeg"
                alt="Brazil Golden Heritage"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#f3dfc1] block">
                  JOGA BONITO
                </span>
                <span className="text-xs uppercase font-medium text-white">
                  CANARINHO PASSION
                </span>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-[#ded5c7] group mt-8 shadow-sm">
              <Image
                src="/frames/ezgif-frame-241.png"
                alt="The Completed Jersey Showroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#f3dfc1] block">
                  THE ATELIER
                </span>
                <span className="text-xs uppercase font-medium text-white">
                  SHOWROOM SANCTUARY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
