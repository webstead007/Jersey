export interface StoryStage {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  startFrame: number;
  endFrame: number;
  startProgress: number;
  endProgress: number;
  badge: string;
}

export const TOTAL_FRAMES = 241;

// Generate all 241 local frame URLs: /frames/ezgif-frame-001.png ... /frames/ezgif-frame-241.png
export const FRAME_PATHS: string[] = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNum = String(i + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNum}.png`;
});

export const STORY_STAGES: StoryStage[] = [
  {
    id: 1,
    number: '01',
    title: 'THE GAME STARTS HERE',
    subtitle: 'THE EMPTY CANVAS',
    description: 'A space created for the passion, culture and identity of football. Pure architecture waiting to be defined.',
    startFrame: 1,
    endFrame: 59,
    startProgress: 0,
    endProgress: 0.245,
    badge: 'STAGE 01 — FOUNDATION',
  },
  {
    id: 2,
    number: '02',
    title: 'BUILT FOR THE GAME',
    subtitle: 'THE STORE TAKES SHAPE',
    description: 'Every detail is designed around the world’s most beautiful game. Precision steel, ambient illumination, and bespoke display modules emerge.',
    startFrame: 60,
    endFrame: 124,
    startProgress: 0.245,
    endProgress: 0.515,
    badge: 'STAGE 02 — ARCHITECTURE',
  },
  {
    id: 3,
    number: '03',
    title: 'WEAR YOUR COLORS',
    subtitle: 'JERSEYS ENTER THE SCENE',
    description: 'Iconic clubs. Legendary nations. Your colors. Your game. Match-worn heritage and modern kit tech populate every shelf.',
    startFrame: 125,
    endFrame: 179,
    startProgress: 0.515,
    endProgress: 0.743,
    badge: 'STAGE 03 — ARRIVAL',
  },
  {
    id: 4,
    number: '04',
    title: 'YOUR JERSEY. YOUR IDENTITY.',
    subtitle: 'THE COMPLETED SHOWROOM',
    description: 'Discover jerseys crafted for the moments that matter. The centerpiece island locks into place alongside legendary club kits.',
    startFrame: 180,
    endFrame: 219,
    startProgress: 0.743,
    endProgress: 0.909,
    badge: 'STAGE 04 — SHOWROOM',
  },
  {
    id: 5,
    number: '05',
    title: 'THE SHOWROOM IS OPEN',
    subtitle: 'EXPLORE THE COLLECTION',
    description: 'Step inside the atelier. Touch the fabric, feel the history, and claim the kit that defines your allegiance.',
    startFrame: 220,
    endFrame: 241,
    startProgress: 0.909,
    endProgress: 1.0,
    badge: 'STAGE 05 — READY',
  },
];

export function getStageForProgress(progress: number): StoryStage {
  const clamped = Math.max(0, Math.min(1, progress));
  for (let i = STORY_STAGES.length - 1; i >= 0; i--) {
    if (clamped >= STORY_STAGES[i].startProgress) {
      return STORY_STAGES[i];
    }
  }
  return STORY_STAGES[0];
}

export function getStageForFrame(frameIndex: number): StoryStage {
  const frameNumber = frameIndex + 1;
  const found = STORY_STAGES.find(
    (s) => frameNumber >= s.startFrame && frameNumber <= s.endFrame
  );
  return found || STORY_STAGES[STORY_STAGES.length - 1];
}
