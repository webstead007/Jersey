'use client';

import React from 'react';

interface FrameCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export function FrameCanvas({ canvasRef }: FrameCanvasProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-transparent select-none pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover mx-auto"
      />
    </div>
  );
}
