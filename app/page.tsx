'use client';

import React from 'react';
import { HeroHeader } from '@/components/HeroHeader';
import { CinematicHero } from '@/components/CinematicHero';
import { CategorySection } from '@/components/CategorySection';
import { ProductGrid } from '@/components/ProductGrid';
import { KitCustomizer } from '@/components/KitCustomizer';
import { FootballCulture } from '@/components/FootballCulture';
import { Benefits } from '@/components/Benefits';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductDetailModal } from '@/components/ProductDetailModal';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f2ece4] text-[#171513]">
      {/* Floating Translucent Header */}
      <HeroHeader />

      {/* Main Hero: Pinned 3D Canvas Frame Sequence with Bottom-Left Reference Typography */}
      <CinematicHero />

      {/* Editorial Curated Categories */}
      <CategorySection />

      {/* Complete Jersey Collection Grid (Product List) */}
      <ProductGrid />

      {/* The Printing Studio: Bespoke Name & Number Customizer (Moved Under Product List) */}
      <KitCustomizer />

      {/* Football Culture & Heritage Manifesto */}
      <FootballCulture />

      {/* Authenticity & Service Promise Pillars */}
      <Benefits />

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Global Interactive Slide-in Cart Drawer */}
      <CartDrawer />

      {/* Product Detail Modal */}
      <ProductDetailModal />
    </main>
  );
}
