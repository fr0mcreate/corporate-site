'use client';

import { useEffect, useRef } from 'react';

interface Penguin {
  x: number;
  y: number;
  vx: number;
  frame: number;
  frameTimer: number;
  direction: 1 | -1;
  state: 'walk' | 'idle' | 'jump';
  idleTimer: number;
  jumpVy: number;
  groundY: number;
  size: number;
}

// 8x8 pixel art penguin sprite data (1 = black, 2 = white, 3 = orange, 4 = blue/accent, 0 = transparent)
const PENGUIN_WALK1 = [
  [0,0,0,1,1,0,0,0],
  [0,0,1,2,2,1,0,0],
  [0,0,1,2,2,1,0,0],
  [0,1,1,4,4,1,1,0],
  [0,1,2,2,2,2,1,0],
  [0,0,1,2,2,1,0,0],
  [0,0,1,0,0,1,0,0],
  [0,1,3,0,0,3,1,0],
];

const PENGUIN_WALK2 = [
  [0,0,0,1,1,0,0,0],
  [0,0,1,2,2,1,0,0],
  [0,0,1,2,2,1,0,0],
  [0,1,1,4,4,1,1,0],
  [0,1,2,2,2,2,1,0],
  [0,0,1,2,2,1,0,0],
  [0,0,0,1,1,0,0,0],
  [0,0,1,3,3,1,0,0],
];

const PENGUIN_IDLE = [
  [0,0,0,1,1,0,0,0],
  [0,0,1,2,2,1,0,0],
  [0,0,1,2,2,1,0,0],
  [0,1,1,4,4,1,1,0],
  [0,1,2,2,2,2,1,0],
  [0,0,1,2,2,1,0,0],
  [0,0,1,0,0,1,0,0],
  [0,0,3,0,0,3,0,0],
];

const FRAMES = [PENGUIN_WALK1, PENGUIN_WALK2];

const PIXEL_COLORS: Record<number, string> = {
  1: '#111111',       // outline black
  2: '#e8e8e8',       // white belly
  3: '#ff8c00',       // orange feet/beak
  4: '#00e5ff',       // eyes (accent2 cyan)
};

export default function PixelPenguins() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const penguinsRef = useRef<Penguin[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Create penguins
    const count = 5;
    const penguins: Penguin[] = [];
    for (let i = 0; i < count; i++) {
      const size = 3 + Math.floor(Math.random() * 2); // pixel size 3-4
      penguins.push({
        x: Math.random() * (canvas.width - 40) + 20,
        y: 0,
        vx: (0.3 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
        frame: 0,
        frameTimer: 0,
        direction: Math.random() > 0.5 ? 1 : -1,
        state: 'walk',
        idleTimer: 0,
        jumpVy: 0,
        groundY: 0,
        size,
      });
    }
    penguinsRef.current = penguins;

    function drawSprite(ctx: CanvasRenderingContext2D, sprite: number[][], x: number, y: number, size: number, flipX: boolean) {
      for (let row = 0; row < sprite.length; row++) {
        for (let col = 0; col < sprite[row].length; col++) {
          const pixel = sprite[row][col];
          if (pixel === 0) continue;
          ctx.fillStyle = PIXEL_COLORS[pixel] || '#fff';
          const px = flipX ? x + (7 - col) * size : x + col * size;
          const py = y + row * size;
          ctx.fillRect(px, py, size, size);
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of penguins) {
        // Ground position (bottom of canvas minus penguin height)
        p.groundY = canvas.height - 8 * p.size - 10;
        if (p.y === 0) p.y = p.groundY;

        // State machine
        if (p.state === 'walk') {
          p.x += p.vx * p.direction;
          p.frameTimer++;
          if (p.frameTimer > 12) {
            p.frameTimer = 0;
            p.frame = (p.frame + 1) % 2;
          }

          // Random direction change
          if (Math.random() < 0.005) {
            p.direction *= -1;
          }

          // Random stop
          if (Math.random() < 0.008) {
            p.state = 'idle';
            p.idleTimer = 60 + Math.floor(Math.random() * 120);
          }

          // Random jump
          if (Math.random() < 0.003) {
            p.state = 'jump';
            p.jumpVy = -3;
          }

          // Bounce off edges
          if (p.x < 10) {
            p.x = 10;
            p.direction = 1;
          }
          if (p.x > canvas.width - 8 * p.size - 10) {
            p.x = canvas.width - 8 * p.size - 10;
            p.direction = -1;
          }

          // Draw walking frame
          drawSprite(ctx, FRAMES[p.frame], p.x, p.y, p.size, p.direction === -1);

        } else if (p.state === 'idle') {
          p.idleTimer--;
          if (p.idleTimer <= 0) {
            p.state = 'walk';
            // Maybe change direction
            if (Math.random() > 0.5) p.direction *= -1;
          }
          drawSprite(ctx, PENGUIN_IDLE, p.x, p.y, p.size, p.direction === -1);

        } else if (p.state === 'jump') {
          p.y += p.jumpVy;
          p.jumpVy += 0.15; // gravity
          p.x += p.vx * p.direction * 0.5;

          if (p.y >= p.groundY) {
            p.y = p.groundY;
            p.state = 'walk';
          }

          drawSprite(ctx, PENGUIN_IDLE, p.x, p.y, p.size, p.direction === -1);
        }

        // Shadow
        ctx.fillStyle = 'rgba(0, 255, 65, 0.08)';
        ctx.beginPath();
        ctx.ellipse(p.x + 4 * p.size, p.groundY + 8 * p.size + 2, 5 * p.size, 2, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
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
