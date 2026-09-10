'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { FRAME_PATHS, TOTAL_FRAMES } from '@/lib/framesManifest';

interface UseFrameAnimationOptions {
  progress: number;
  smoothing?: number;
  onInitialReady?: () => void;
}

export function useFrameAnimation({
  progress,
  smoothing = 0.15,
  onInitialReady,
}: UseFrameAnimationOptions) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  const loadedCountRef = useRef<number>(0);

  // Update target frame based on incoming scroll progress (0 to 1)
  useEffect(() => {
    const clamped = Math.max(0, Math.min(1, progress));
    targetFrameRef.current = clamped * (TOTAL_FRAMES - 1);
  }, [progress]);

  // Progressive frame preloading
  useEffect(() => {
    let isCancelled = false;
    loadedCountRef.current = 0;

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]!);
          return;
        }
        const img = new Image();
        img.src = FRAME_PATHS[index];
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index] = img;
            loadedCountRef.current += 1;
            setLoadProgress(Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));

            // Initial ready once first 12 frames are loaded
            if (index === 0 || loadedCountRef.current >= 12) {
              setIsInitialReady(true);
              onInitialReady?.();
            }

            if (loadedCountRef.current >= TOTAL_FRAMES) {
              setIsFullyLoaded(true);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          // If frame fails, resolve null gracefully
          resolve(img);
        };
      });
    };

    // Priority 1: First 15 frames immediately
    const loadInitialBatch = async () => {
      const initialPromises = [];
      for (let i = 0; i < Math.min(15, TOTAL_FRAMES); i++) {
        initialPromises.push(loadImage(i));
      }
      await Promise.all(initialPromises);
      if (isCancelled) return;

      // Priority 2: Keyframes across the timeline (every 10th frame) for instant responsiveness across scroll
      const keyframePromises = [];
      for (let i = 15; i < TOTAL_FRAMES; i += 10) {
        keyframePromises.push(loadImage(i));
      }
      await Promise.all(keyframePromises);
      if (isCancelled) return;

      // Priority 3: Progressive sequential load of remaining frames
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (isCancelled) return;
        if (!imagesRef.current[i]) {
          await loadImage(i);
        }
      }
    };

    loadInitialBatch();

    return () => {
      isCancelled = true;
    };
  }, [onInitialReady]);

  // Render loop with lerp smoothing & aspect-ratio contain logic
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Smooth lerp: currentFrame += (targetFrame - currentFrame) * smoothing
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.001) {
      currentFrameRef.current += diff * smoothing;
    } else {
      currentFrameRef.current = targetFrameRef.current;
    }

    const frameIndex = Math.round(
      Math.max(0, Math.min(TOTAL_FRAMES - 1, currentFrameRef.current))
    );

    // Find closest loaded image if exact frame isn't loaded yet
    let imgToDraw = imagesRef.current[frameIndex];
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      // Search nearby frames for closest ready frame
      for (let offset = 1; offset < 20; offset++) {
        const lower = frameIndex - offset;
        const upper = frameIndex + offset;
        if (lower >= 0 && imagesRef.current[lower]?.complete) {
          imgToDraw = imagesRef.current[lower];
          break;
        }
        if (upper < TOTAL_FRAMES && imagesRef.current[upper]?.complete) {
          imgToDraw = imagesRef.current[upper];
          break;
        }
      }
    }

    if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
      const cw = canvas.width;
      const ch = canvas.height;
      const nw = imgToDraw.naturalWidth;
      const nh = imgToDraw.naturalHeight;

      // Edge-to-edge cover scaling so the cinematic room seamlessly fills the entire viewport without black bars
      const scale = Math.max(cw / nw, ch / nh);
      const dw = nw * scale;
      const dh = nh * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      // Fill background matching natural warm showroom wall ambience
      ctx.fillStyle = '#ded9d2';
      ctx.fillRect(0, 0, cw, ch);

      // Draw the frame centered and crisp
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(imgToDraw, dx, dy, dw, dh);
    }

    animationFrameIdRef.current = requestAnimationFrame(render);
  }, [smoothing]);

  // Setup canvas resolution and resize handling
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [render]);

  return {
    canvasRef,
    loadProgress,
    isInitialReady,
    isFullyLoaded,
    currentFrame: Math.round(currentFrameRef.current),
  };
}
