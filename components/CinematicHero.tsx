'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrameAnimation } from '@/hooks/useFrameAnimation';
import { FrameCanvas } from './FrameCanvas';
import { HeroStoryOverlay } from './HeroStoryOverlay';
import { LoadingScreen } from './LoadingScreen';
import { getStageForProgress } from '@/lib/framesManifest';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const {
    canvasRef,
    loadProgress,
    isInitialReady,
  } = useFrameAnimation({
    progress: scrollProgress,
    smoothing: 0.18,
  });

  const currentStage = getStageForProgress(scrollProgress);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: stickyRef.current,
      pinSpacing: false,
      scrub: 0.5,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById('product-showcase-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Luxury Loading Screen */}
      <LoadingScreen
        progress={loadProgress}
        isInitialReady={isInitialReady}
      />

      {/* Pinned Cinematic Virtual Scroll Track */}
      <section
        id="cinematic-hero"
        ref={containerRef}
        className="relative w-full h-[360vh] bg-[#ded9d2]"
      >
        {/* Pinned 100vw x 100vh Viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 left-0 w-full h-screen h-[100svh] overflow-hidden select-none bg-[#ded9d2]"
        >
          {/* Edge-to-Edge Frame Canvas */}
          <FrameCanvas canvasRef={canvasRef} />

          {/* Bottom-Left Editorial Text matching reference image */}
          <HeroStoryOverlay
            currentStage={currentStage}
            progress={scrollProgress}
            onExploreClick={scrollToProducts}
          />
        </div>
      </section>
    </>
  );
}
