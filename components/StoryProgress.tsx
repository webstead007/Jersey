'use client';

import React from 'react';
import { STORY_STAGES, StoryStage } from '@/lib/framesManifest';

interface StoryProgressProps {
  currentStage: StoryStage;
  progress: number;
  currentFrame: number;
  onStageClick?: (stage: StoryStage) => void;
}

export function StoryProgress({
  currentStage,
  progress,
  currentFrame,
  onStageClick,
}: StoryProgressProps) {
  return (
    <>
      {/* Desktop Floating Story Progress Indicator */}
      <div className="hidden lg:flex flex-col items-start gap-4 fixed left-8 xl:left-14 top-1/2 -translate-y-1/2 z-30 pointer-events-auto select-none">
        {/* Stage Timeline Tracker with Vertical Progress Line */}
        <div className="relative pl-6 py-2 flex flex-col gap-6">
          {/* Background vertical track line */}
          <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full">
            {/* Active progress indicator line */}
            <div
              className="w-full bg-gradient-to-b from-[#c5a059] to-white rounded-full transition-all duration-150 ease-out"
              style={{ height: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>

          {STORY_STAGES.map((stage) => {
            const isActive = stage.id === currentStage.id;
            const isPassed = progress > stage.endProgress;

            return (
              <button
                key={stage.id}
                onClick={() => onStageClick?.(stage)}
                className={`group text-left flex items-start gap-3 transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 scale-100 translate-x-1'
                    : isPassed
                    ? 'opacity-60 hover:opacity-90'
                    : 'opacity-30 hover:opacity-70'
                }`}
              >
                {/* Milestone Node on Track */}
                <span
                  className={`absolute -left-[1px] w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#c5a059] border-white ring-4 ring-[#c5a059]/30 scale-125'
                      : isPassed
                      ? 'bg-white border-white/60'
                      : 'bg-black border-white/30'
                  }`}
                  style={{
                    top: `${(stage.id - 1) * 25 + 4}%`,
                  }}
                />

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest transition-colors ${
                        isActive ? 'text-[#c5a059]' : 'text-white/60'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-white/60 group-hover:text-white'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </div>

                  {isActive && (
                    <span className="text-[10px] text-white/50 tracking-widest uppercase font-mono mt-0.5 animate-fade-in">
                      {stage.subtitle}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Frame & Telemetry readout */}
        <div className="pl-6 pt-2 border-t border-white/10 flex items-center gap-3 text-[10px] font-mono tracking-widest text-white/40">
          <span>FRAME {String(currentFrame + 1).padStart(3, '0')} / 241</span>
          <span className="text-[#c5a059] font-medium">{Math.round(progress * 100)}%</span>
        </div>
      </div>

      {/* Mobile Compact Progress Tracker */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-30 pointer-events-none">
        <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between pointer-events-auto shadow-2xl">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-[#c5a059] tracking-widest">
                {currentStage.number} / 05
              </span>
              <span className="text-xs uppercase font-medium text-white tracking-widest truncate max-w-[200px]">
                {currentStage.title}
              </span>
            </div>
            <span className="text-[10px] text-white/40 tracking-wider uppercase font-mono">
              {currentStage.subtitle}
            </span>
          </div>

          {/* Mini progress dots */}
          <div className="flex items-center gap-1.5">
            {STORY_STAGES.map((s) => (
              <span
                key={s.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s.id === currentStage.id
                    ? 'w-6 bg-[#c5a059]'
                    : s.endProgress < progress
                    ? 'w-2 bg-white/70'
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
