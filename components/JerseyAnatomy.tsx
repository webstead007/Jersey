'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, ShieldCheck, Wind, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface TechPillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  specs: string[];
  icon: any;
}

const TECH_PILLARS: TechPillar[] = [
  {
    id: 'crest',
    title: '3D Silicone Thermal Crest',
    subtitle: 'FEATHERWEIGHT CREST APPLIQUÉ',
    badge: '01 // IDENTITY',
    description:
      'Replacing heavy traditional woven patches, authentic player-issue kits feature heat-transferred, ultra-flexible 3D silicone crests that eliminate chest friction and reduce kit weight by 40%.',
    specs: ['0.4mm Low-Profile Thickness', 'Zero Skin Chafing', 'Heat-Welded Bond Tested to 120°C'],
    icon: ShieldCheck,
  },
  {
    id: 'fabric',
    title: 'Hydro-Vent Vapor Micro-Mesh',
    subtitle: 'MOISTURE REPEL AERODYNAMICS',
    badge: '02 // PERFORMANCE',
    description:
      'Engineered open-hole knit structured across high-sweat zones. As core body heat rises, the micro-pores dynamically expand, expelling vapor and keeping the fabric featherlight.',
    specs: ['100% Post-Consumer Recycled Polyester', 'Hydrophobic Wicking Rate < 0.8s', '4-Way Ergonomic Stretch'],
    icon: Wind,
  },
  {
    id: 'raglan',
    title: 'Ergonomic Raglan Seam Profile',
    subtitle: 'SPRINT-OPTIMIZED SILHOUETTE',
    badge: '03 // BIOMECHANICS',
    description:
      'Diagonal sleeve construction running from collar to underarm eliminates the traditional shoulder seam, allowing complete arm rotation and maximum shoulder swing during top-speed sprints.',
    specs: ['Zero Shoulder Pressure Points', 'Laser-Cut Flatlock Seaming', 'Aerodynamic Form-Fit'],
    icon: Layers,
  },
  {
    id: 'auth',
    title: 'Holographic Federation Seal',
    subtitle: 'INDIVIDUAL ARCHIVE SERIALIZATION',
    badge: '04 // PROVENANCE',
    description:
      'Every jersey departing the atelier carries a tamper-evident holographic serial seal registered to official federation archives to guarantee authentic match-grade origin.',
    specs: ['Unique 9-Digit Encrypted Serial', 'Micro-Etched Federation Crest', 'Tamper-Evident Foil Layer'],
    icon: Cpu,
  },
];

export function JerseyAnatomy() {
  const [activeTab, setActiveTab] = useState('crest');
  const activePillar = TECH_PILLARS.find((p) => p.id === activeTab) || TECH_PILLARS[0];
  const Icon = activePillar.icon;

  return (
    <section className="py-24 md:py-36 bg-[#07070a] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <Sparkles className="w-3 h-3 text-[#c5a059]" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/70">
                TECHNICAL MASTERY // FABRIC ARCHITECTURE
              </span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              Anatomy of a Matchday Kit
            </h2>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/40 font-mono max-w-sm">
            Inside the engineering and textile science that separates elite matchday apparel from ordinary sportswear.
          </p>
        </div>

        {/* Interactive Anatomy Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0d0d12] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12">
          {/* Left Column: Interactive Visual Showcase */}
          <div className="lg:col-span-6 relative aspect-square w-full rounded-2xl bg-[#121218] border border-white/10 p-6 flex items-center justify-center overflow-hidden group">
            {/* The Real Madrid / Barcelona / Brazil Jersey Close-Up */}
            <div className="relative w-full h-full max-w-md">
              <Image
                src="/product-list/WhatsApp Image 2026-09-10 at 10.29.57 PM (2).jpeg"
                alt="Jersey Anatomy Close Up"
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Hotspot Target Callout */}
            <div className="absolute top-8 left-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a059]/40 text-[10px] font-mono tracking-widest text-[#c5a059] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-ping" />
              <span>ACTIVE INSPECTION // {activePillar.title}</span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Pillars Selection */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Tab Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {TECH_PILLARS.map((p) => {
                const isActive = p.id === activeTab;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`p-3.5 rounded-xl text-left font-mono transition-all duration-200 border ${
                      isActive
                        ? 'bg-white/10 border-[#c5a059] text-white shadow-lg'
                        : 'bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-widest text-[#c5a059] block mb-0.5">
                      {p.badge}
                    </span>
                    <span className="text-xs font-medium block truncate text-white">
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Feature Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c5a059]">
                    {activePillar.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light tracking-wide text-white uppercase">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                {activePillar.description}
              </p>

              {/* Specs List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {activePillar.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
