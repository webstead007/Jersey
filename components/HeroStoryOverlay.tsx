'use client';

import React from 'react';
import { ArrowDown, ShoppingBag } from 'lucide-react';
import { StoryStage } from '@/lib/framesManifest';

interface HeroStoryOverlayProps {
  currentStage: StoryStage;
  progress: number;
  onExploreClick: () => void;
}

// Stage text matching the exact editorial layout, serif typography, and phrasing of the reference
const STAGE_EDITORIAL = [
  {
    stageId: 1,
    tag: '01 // THE COLLECTION',
    headline: 'Every inch spoken for',
    body: 'Hanging, folding, display: every line crafted to fit the space — measured against your passion so it is never standard.',
  },
  {
    stageId: 2,
    tag: '02 // THE ARCHITECTURE',
    headline: 'Built for the game',
    body: 'Every detail is designed around the world’s most beautiful game. Precision steel framing and perimeter illumination taking shape.',
  },
  {
    stageId: 3,
    tag: '03 // THE ARRIVAL',
    headline: 'Wear your colors',
    body: 'Iconic clubs. Legendary nations. Match-worn heritage and modern kit technology populating every display.',
  },
  {
    stageId: 4,
    tag: '04 // THE SHOWROOM',
    headline: 'Your jersey. Your identity.',
    body: 'The centerpiece island and matchday archives lock into place. Discover jerseys crafted for the moments that matter.',
  },
  {
    stageId: 5,
    tag: '05 // THE ATELIER',
    headline: 'The collection awaits',
    body: 'The showroom is fully completed. Step inside to explore authentic matchday kits, rare vault editions, and custom crests.',
  },
];

export function HeroStoryOverlay({
  currentStage,
  onExploreClick,
}: HeroStoryOverlayProps) {
  const editorial =
    STAGE_EDITORIAL.find((s) => s.stageId === currentStage.id) ||
    STAGE_EDITORIAL[0];
  const isStage5 = currentStage.id === 5;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end p-6 md:p-14 lg:p-16 pb-12 md:pb-16">
      {/* Bottom-Left Editorial Text matching the reference screenshot */}
      <div className="max-w-xl text-left pointer-events-auto">
        {/* Monospace Uppercase Tag matching 01 // THE COLLECTION in reference */}
        <div className="text-[11px] md:text-xs font-mono tracking-[0.25em] uppercase text-[#c5a059] mb-2 drop-shadow-md">
          {editorial.tag}
        </div>

        {/* Big Editorial Serif Heading matching "Every inch spoken for" in reference */}
        <h2 className="font-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          {editorial.headline}
        </h2>

        {/* Supporting description matching the reference paragraph */}
        <p className="text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-lg mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {editorial.body}
        </p>

        {/* Actions / CTA */}
        {isStage5 ? (
          <div className="flex flex-wrap items-center gap-3 animate-fade-in">
            <button
              id="explore-collection-btn"
              onClick={onExploreClick}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-xs uppercase font-medium tracking-[0.2em] hover:bg-[#c5a059] transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              <span>EXPLORE THE COLLECTION</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onExploreClick}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white text-xs uppercase font-medium tracking-[0.18em] hover:bg-white/10 hover:border-white transition-all active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>SHOP JERSEYS</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 drop-shadow">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3 h-3 text-[#c5a059] animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );
}
