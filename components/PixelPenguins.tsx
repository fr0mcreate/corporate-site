'use client';

import { useEffect, useRef } from 'react';

interface Penguin {
  x: number;
  y: number;
  vx: number;
  vy: number;
  frame: number;
  frameTimer: number;
  dirX: 1 | -1;
  dirY: 1 | -1;
  state: 'walk' | 'idle';
  idleTimer: number;
  size: number;
  speed: number;
  targetX: number;
  targetY: number;
}

// 8x10 pixel art penguin (more visible)
// 1=outline, 2=white, 3=orange, 4=cyan eyes, 5=dark body
const WALK1 = [
  [0,0,0,1,1,1,0,0],
  [0,0,1,5,5,5,1,0],
  [0,1,5,4,5,4,5,1],
  [0,1,5,5,3,5,5,1],
  [1,5,5,5,5,5,5,5],
  [1,5,2,2,2,2,5,1],
  [0,1,2,2,2,2,1,0],
  [0,1,5,2,2,5,1,0],
  [0,0,1,0,0,1,0,0],
  [0,1,3,0,0,3,1,0],
];

const WALK2 = [
  [0,0,0,1,1,1,0,0],
  [0,0,1,5,5,5,1,0],
  [0,1,5,4,5,4,5,1],
  [0,1,5,5,3,5,5,1],
  [1,5,5,5,5,5,5,5],
  [1,5,2,2,2,2,5,1],
  [0,1,2,2,2,2,1,0],
  [0,1,5,2,2,5,1,0],
  [0,0,0,1,1,0,0,0],
  [0,0,1,3,3,1,0,0],
];

const IDLE = [
  [0,0,0,1,1,1,0,0],
  [0,0,1,5,5,5,1,0],
  [0,1,5,4,5,4,5,1],
  [0,1,5,5,3,5,5,1],
  [0,1,5,5,5,5,5,1],
  [0,1,2,2,2,2,1,0],
  [0,1,2,2,2,2,1,0],
  [0,0,1,2,2,1,0,0],
  [0,0,1,0,0,1,0,0],
  [0,0,3,0,0,3,0,0],
];

const FRAMES = [WALK1, WALK2];

const COLORS: Record<number, string> = {
  1: '#1a1a2e',
  2: '#e8e8e8',
  3: '#ff8c00',
  4: '#00e5ff',
  5: '#2a2a4a',
};

export default function PixelPenguins() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const penguinsRef = useRef<Penguin[]>([]);
  const animRef = useRef<number>(0);
  const obstaclesRef = useRef<DOMRect[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    function resize() {
      if (!canvas || !parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      updateObstacles();
    }

    function updateObstacles() {
      if (!parent || !canvas) return;
      const parentRect = parent.getBoundingClientRect();
      const cards = parent.querySelectorAll('.card, .service-card, .btn, .section-header');
      const rects: DOMRect[] = [];
      cards.forEach((el) => {
        const r = el.getBoundingClientRect();
        // Convert to canvas-relative coordinates
        rects.push(new DOMRect(
          r.left - parentRect.left,
          r.top - parentRect.top,
          r.width,
          r.height
        ));
      });
      obstaclesRef.current = rects;
    }

    resize();
    window.addEventListener('resize', resize);

    // Larger penguins, more of them
    const PENGUIN_SIZE = 4;
    const count = 8;
    const penguins: Penguin[] = [];
    const pw = 8 * PENGUIN_SIZE;
    const ph = 10 * PENGUIN_SIZE;
    for (let i = 0; i < count; i++) {
      // Start penguins at edges (top/bottom/left/right) to avoid cards in center
      const edge = i % 4;
      let startX = 0;
      let startY = 0;
      if (edge === 0) { startX = 10 + Math.random() * 60; startY = 10 + Math.random() * 40; }
      else if (edge === 1) { startX = canvas.width - pw - 10 - Math.random() * 60; startY = 10 + Math.random() * 40; }
      else if (edge === 2) { startX = 10 + Math.random() * 60; startY = canvas.height - ph - 10 - Math.random() * 40; }
      else { startX = canvas.width - pw - 10 - Math.random() * 60; startY = canvas.height - ph - 10 - Math.random() * 40; }
      penguins.push({
        x: startX,
        y: startY,
        vx: 0,
        vy: 0,
        frame: 0,
        frameTimer: 0,
        dirX: Math.random() > 0.5 ? 1 : -1,
        dirY: Math.random() > 0.5 ? 1 : -1,
        state: 'walk',
        idleTimer: 0,
        size: PENGUIN_SIZE,
        speed: 0.5 + Math.random() * 0.8,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
      });
    }
    penguinsRef.current = penguins;

    function pickNewTarget(p: Penguin) {
      if (!canvas) return;
      const pw = 8 * p.size;
      const ph = 10 * p.size;
      const margin = 20;
      // Pick random target, avoid obstacles
      for (let attempt = 0; attempt < 20; attempt++) {
        const tx = margin + Math.random() * (canvas.width - pw - margin * 2);
        const ty = margin + Math.random() * (canvas.height - ph - margin * 2);
        if (!isInsideObstacle(tx, ty, pw, ph)) {
          p.targetX = tx;
          p.targetY = ty;
          return;
        }
      }
      // Fallback
      p.targetX = margin + Math.random() * (canvas.width - pw - margin * 2);
      p.targetY = margin + Math.random() * (canvas.height - ph - margin * 2);
    }

    function isInsideObstacle(x: number, y: number, w: number, h: number): boolean {
      const pad = 15;
      for (const r of obstaclesRef.current) {
        if (
          x + w > r.x - pad &&
          x < r.x + r.width + pad &&
          y + h > r.y - pad &&
          y < r.y + r.height + pad
        ) {
          return true;
        }
      }
      return false;
    }

    function drawSprite(
      ctx: CanvasRenderingContext2D,
      sprite: number[][],
      x: number,
      y: number,
      size: number,
      flipX: boolean
    ) {
      for (let row = 0; row < sprite.length; row++) {
        for (let col = 0; col < sprite[row].length; col++) {
          const pixel = sprite[row][col];
          if (pixel === 0) continue;
          ctx.fillStyle = COLORS[pixel] || '#fff';
          const px = flipX ? x + (7 - col) * size : x + col * size;
          const py = y + row * size;
          ctx.fillRect(px, py, size, size);
        }
      }
    }

    let frameCount = 0;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Refresh obstacles periodically (layout may change on scroll)
      frameCount++;
      if (frameCount % 120 === 0) updateObstacles();

      const pw = 8 * PENGUIN_SIZE;
      const ph = 10 * PENGUIN_SIZE;

      for (const p of penguins) {
        if (p.state === 'walk') {
          // Move toward target
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 5) {
            // Reached target — idle briefly then pick new target
            p.state = 'idle';
            p.idleTimer = 40 + Math.floor(Math.random() * 100);
            p.vx = 0;
            p.vy = 0;
          } else {
            p.vx = (dx / dist) * p.speed;
            p.vy = (dy / dist) * p.speed;
            p.dirX = p.vx >= 0 ? 1 : -1;
          }

          // Check obstacle collision and steer away
          const nextX = p.x + p.vx;
          const nextY = p.y + p.vy;
          if (isInsideObstacle(nextX, nextY, pw, ph)) {
            // Push away from obstacle and pick new target
            pickNewTarget(p);
            // Move in opposite direction briefly
            p.x -= p.vx * 3;
            p.y -= p.vy * 3;
            p.vx = 0;
            p.vy = 0;
          } else {
            p.x = nextX;
            p.y = nextY;
          }

          // If currently inside obstacle (started there), escape
          if (isInsideObstacle(p.x, p.y, pw, ph)) {
            pickNewTarget(p);
            // Move toward target aggressively
            const eDx = p.targetX - p.x;
            const eDy = p.targetY - p.y;
            const eDist = Math.sqrt(eDx * eDx + eDy * eDy) || 1;
            p.x += (eDx / eDist) * 5;
            p.y += (eDy / eDist) * 5;
          }

          // Clamp to canvas
          p.x = Math.max(0, Math.min(canvas.width - pw, p.x));
          p.y = Math.max(0, Math.min(canvas.height - ph, p.y));

          // Animate walking frames
          p.frameTimer++;
          if (p.frameTimer > 10) {
            p.frameTimer = 0;
            p.frame = (p.frame + 1) % 2;
          }

          drawSprite(ctx, FRAMES[p.frame], p.x, p.y, p.size, p.dirX === -1);

        } else if (p.state === 'idle') {
          p.idleTimer--;
          if (p.idleTimer <= 0) {
            p.state = 'walk';
            pickNewTarget(p);
          }
          drawSprite(ctx, IDLE, p.x, p.y, p.size, p.dirX === -1);
        }

        // Small shadow
        ctx.fillStyle = 'rgba(0, 255, 65, 0.06)';
        ctx.beginPath();
        ctx.ellipse(
          p.x + pw / 2,
          p.y + ph + 1,
          pw / 2.5,
          3,
          0, 0, Math.PI * 2
        );
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    }

    // Initial target assignment
    for (const p of penguins) {
      pickNewTarget(p);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pixel-penguins"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
