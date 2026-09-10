'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Trophy, Calendar, ArrowRight } from 'lucide-react';

interface EraMilestone {
  year: string;
  tournament: string;
  hero: string;
  kitTitle: string;
  story: string;
  image: string;
  tag: string;
}

const ERA_MILESTONES: EraMilestone[] = [
  {
    year: '1970',
    tournament: 'FIFA World Cup • Mexico',
    hero: 'Pelé & Carlos Alberto',
    kitTitle: 'The Golden Canarinho',
    story:
      'The first World Cup broadcast in full color across the globe. Brazil’s radiant canary yellow kit with emerald collar became the eternal blueprint for beauty in football.',
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM.jpeg',
    tag: 'JOGA BONITO',
  },
  {
    year: '2010',
    tournament: 'World Cup Final • Soccer City',
    hero: 'Andrés Iniesta',
    kitTitle: 'La Furia Roja Crown',
    story:
      'Deep crimson and gold pinstripes worn during the breathless 116th minute in Johannesburg. A golden generation immortalized with a single half-volley.',
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM (1).jpeg',
    tag: 'TIKI-TAKA ERA',
  },
  {
    year: '2022',
    tournament: 'World Cup Final • Lusail',
    hero: 'Lionel Messi',
    kitTitle: 'The 3-Star Sol de Mayo',
    story:
      'The crowning moment of modern football history. The sky blue and navy away special edition etched forever into the sporting pantheon.',
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM (2).jpeg',
    tag: 'ETERNAL LEGACY',
  },
  {
    year: '2024',
    tournament: 'UEFA Champions League • Wembley',
    hero: 'Vinícius Jr. & Bellingham',
    kitTitle: 'The 15th European Crown',
    story:
      'Royal white and gold thread hoisting European Cup number 15 under the Wembley arch, cementing the greatest dynasty in club sports history.',
    image: '/product-list/WhatsApp Image 2026-09-10 at 10.29.57 PM (2).jpeg',
    tag: 'REYES DE EUROPA',
  },
];

export function KitTimeline() {
  const scrollToCollection = () => {
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-36 bg-[#09090d] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/70">
                THE VAULT TIMELINE // MOMENTS STITCHED IN HISTORY
              </span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              Golden Eras of Football
            </h2>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/40 font-mono max-w-sm">
            Discover the iconic match shirts worn during the most momentous seconds the sport has ever witnessed.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ERA_MILESTONES.map((era, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#111117] border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-[#c5a059]/50 hover:shadow-2xl hover:shadow-[#c5a059]/5"
            >
              <div>
                {/* Year & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-light font-mono text-[#c5a059]">
                    {era.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-widest uppercase text-white/60">
                    {era.tag}
                  </span>
                </div>

                {/* Jersey Thumbnail */}
                <div className="relative w-full aspect-square rounded-2xl bg-black/40 p-4 mb-5 overflow-hidden">
                  <Image
                    src={era.image}
                    alt={era.kitTitle}
                    fill
                    className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-1">
                  {era.tournament}
                </span>
                <h3 className="text-lg font-light uppercase text-white tracking-wide mb-2 group-hover:text-[#c5a059] transition-colors">
                  {era.kitTitle}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {era.story}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={scrollToCollection}
                className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#c5a059] group-hover:text-white transition-colors"
              >
                <span>EXPLORE ERA KITS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
