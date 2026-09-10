'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface CategoryTile {
  title: string;
  subtitle: string;
  count: string;
  image: string;
  tag: string;
}

const CATEGORY_TILES: CategoryTile[] = [
  {
    title: 'NATIONAL TEAMS',
    subtitle: 'WORLD STAGE & CONTINENTAL GLORY',
    count: '34 NATIONS',
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM.jpeg', // Brazil
    tag: 'CANARINHO & LA ROJA',
  },
  {
    title: 'EUROPEAN CLUBS',
    subtitle: 'CHAMPIONS LEAGUE ELITE',
    count: '28 CLUBS',
    image: '/product-list/WhatsApp Image 2026-09-10 at 10.29.57 PM (2).jpeg', // Real Madrid
    tag: 'MADRID • BARÇA • UNITED',
  },
  {
    title: 'SOL DE MAYO',
    subtitle: 'HAUTE COUTURE SPECIAL EDITIONS',
    count: 'LIMITED VAULT',
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM (2).jpeg', // Argentina special
    tag: 'JACQUARD BAROQUE',
  },
  {
    title: 'RETRO & CLASSIC',
    subtitle: 'NOSTALGIA & HISTORIC MOMENTS',
    count: 'GOLDEN ERAS',
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM (1).jpeg', // Spain
    tag: 'TIMELESS KITS',
  },
];

export function CategorySection() {
  const scrollToProducts = () => {
    const el = document.getElementById('collection-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-12 bg-[#f2ece4] border-t border-[#ded5c7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#a87c28] block mb-1 font-semibold">
              CURATED ARCHIVES
            </span>
            <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl text-[#171513] tracking-tight uppercase">
              Product Categories
            </h2>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#6e665c] font-mono">
            ENGINEERED FOR SUPPORTERS & COLLECTORS
          </p>
        </div>

        {/* Small-width Category Tiles Grid: 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CATEGORY_TILES.map((cat, idx) => (
            <div
              key={idx}
              onClick={scrollToProducts}
              className="group relative h-[250px] sm:h-[280px] rounded-2xl overflow-hidden bg-[#faf7f2] border border-[#ded5c7] cursor-pointer transition-all duration-300 hover:border-[#a87c28]/70 hover:shadow-lg hover:shadow-[#a87c28]/10"
            >
              {/* Background Product Image */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-95 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c1a] via-[#1e1c1a]/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-5 z-10 text-white">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-mono tracking-wider text-white uppercase border border-white/20">
                    {cat.tag}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#a87c28] group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 block mb-0.5">
                    {cat.count}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-normal tracking-[0.03em] uppercase text-white mb-1 group-hover:text-[#f3dfc1] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-white/80 font-light truncate">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
