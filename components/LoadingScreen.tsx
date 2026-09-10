'use client';

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  progress: number;
  isInitialReady: boolean;
}

export function LoadingScreen({ progress, isInitialReady }: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isInitialReady) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        const hideTimer = setTimeout(() => {
          setShouldRender(false);
        }, 800);
        return () => clearTimeout(hideTimer);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isInitialReady]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-16 bg-[#070709] text-white transition-opacity duration-700 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-mono">
          ATELIER 90 // CINEMATIC EXPERIENCE
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-mono">
          PARIS • MADRID • MILANO
        </span>
      </div>

      {/* Center Branding & Progress */}
      <div className="flex flex-col items-center text-center max-w-md w-full my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/70">
            INITIALIZING 3D SHOWROOM
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase text-white mb-2">
          JERSEY STORE
        </h1>
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/40 mb-10">
          HAUTE COUTURE FOOTBALL ARCHIVE
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-full bg-white/10 h-[2px] rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-[#c5a059] to-white transition-all duration-300 ease-out"
            style={{ width: `${Math.max(5, progress)}%` }}
          />
        </div>

        {/* Progress Numbers & Frame Counter */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-white/50">
          <span>LOADING FRAMES</span>
          <span className="text-white font-medium">{progress}%</span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-widest text-white/40">
        <span>AUTHENTIC MATCHDAY COLLECTIONS</span>
        <span>SCROLL DRIVEN 3D CINEMATIC</span>
      </div>
    </div>
  );
}
