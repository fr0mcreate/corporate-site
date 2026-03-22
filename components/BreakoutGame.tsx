'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

interface Brick {
  x: number;
  y: number;
  w: number;
  h: number;
  alive: boolean;
  color: string;
  hits: number;
}

const COLORS = {
  bg: '#050510',
  paddle: '#00ff41',
  ball: '#00ff41',
  ballGlow: 'rgba(0, 255, 65, 0.6)',
  text: '#00ff41',
  textDim: '#4a5568',
  accent2: '#00e5ff',
  accent3: '#ff0090',
  border: '#00ff41',
  borderDim: 'rgba(0, 255, 65, 0.15)',
};

const BRICK_COLORS = ['#00ff41', '#00e5ff', '#ff0090', '#ffff00', '#ff6600', '#aa00ff'];

export default function BreakoutGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'won' | 'lost'>('idle');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [visible, setVisible] = useState(false);
  const gameRef = useRef<{
    ball: Ball;
    paddle: { x: number; w: number; h: number };
    bricks: Brick[];
    animFrame: number;
    keys: Set<string>;
    mouseX: number;
    score: number;
    lives: number;
    gameState: 'idle' | 'playing' | 'won' | 'lost';
    particles: Array<{x: number; y: number; dx: number; dy: number; life: number; color: string; size: number}>;
  }>({
    ball: { x: 0, y: 0, dx: 0, dy: 0, radius: 6 },
    paddle: { x: 0, w: 100, h: 12 },
    bricks: [],
    animFrame: 0,
    keys: new Set(),
    mouseX: 0,
    score: 0,
    lives: 3,
    gameState: 'idle',
    particles: [],
  });

  // Intersection Observer to reveal game
  useEffect(() => {
    const el = canvasRef.current?.parentElement;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.width;
    const H = canvas.height;
    const g = gameRef.current;

    // Paddle
    g.paddle = { x: W / 2 - 50, w: 100, h: 12 };

    // Ball
    g.ball = {
      x: W / 2,
      y: H - 50,
      dx: 3.5 * (Math.random() > 0.5 ? 1 : -1),
      dy: -3.5,
      radius: 6,
    };

    // Bricks: 6 rows x 10 cols
    const rows = 6;
    const cols = 10;
    const brickW = (W - 40 - (cols - 1) * 4) / cols;
    const brickH = 18;
    const bricks: Brick[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        bricks.push({
          x: 20 + c * (brickW + 4),
          y: 50 + r * (brickH + 4),
          w: brickW,
          h: brickH,
          alive: true,
          color: BRICK_COLORS[r % BRICK_COLORS.length],
          hits: r < 2 ? 2 : 1,
        });
      }
    }
    g.bricks = bricks;
    g.score = 0;
    g.lives = 3;
    g.particles = [];
    g.gameState = 'playing';
    setScore(0);
    setLives(3);
    setGameState('playing');
  }, []);

  const spawnParticles = useCallback((x: number, y: number, color: string) => {
    const g = gameRef.current;
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 3;
      g.particles.push({
        x,
        y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        life: 30 + Math.random() * 20,
        color,
        size: 2 + Math.random() * 3,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = Math.min(rect.width - 4, 700);
      canvas.height = 450;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Input handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      gameRef.current.keys.add(e.key);
      if (e.key === ' ' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      gameRef.current.keys.delete(e.key);
    };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      gameRef.current.mouseX = e.clientX - rect.left;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      gameRef.current.mouseX = e.touches[0].clientX - rect.left;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Game loop
    function gameLoop() {
      const g = gameRef.current;
      if (!ctx || !canvas) return;
      const W = canvas.width;
      const H = canvas.height;

      // Clear
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, W, H);

      // Draw border
      ctx.strokeStyle = COLORS.borderDim;
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, W - 2, H - 2);

      // Draw scanlines
      ctx.fillStyle = 'rgba(0, 255, 65, 0.015)';
      for (let y = 0; y < H; y += 4) {
        ctx.fillRect(0, y, W, 1);
      }

      if (g.gameState === 'playing') {
        // Move paddle with mouse or keyboard
        if (g.keys.has('ArrowLeft')) {
          g.paddle.x -= 7;
        }
        if (g.keys.has('ArrowRight')) {
          g.paddle.x += 7;
        }
        // Mouse/touch
        if (g.mouseX > 0) {
          g.paddle.x = g.mouseX - g.paddle.w / 2;
        }
        // Clamp
        g.paddle.x = Math.max(0, Math.min(W - g.paddle.w, g.paddle.x));

        // Move ball
        g.ball.x += g.ball.dx;
        g.ball.y += g.ball.dy;

        // Wall collision
        if (g.ball.x - g.ball.radius <= 0 || g.ball.x + g.ball.radius >= W) {
          g.ball.dx = -g.ball.dx;
          g.ball.x = Math.max(g.ball.radius, Math.min(W - g.ball.radius, g.ball.x));
        }
        if (g.ball.y - g.ball.radius <= 0) {
          g.ball.dy = -g.ball.dy;
          g.ball.y = g.ball.radius;
        }

        // Ball out of bounds (lost life)
        if (g.ball.y + g.ball.radius > H) {
          g.lives--;
          setLives(g.lives);
          if (g.lives <= 0) {
            g.gameState = 'lost';
            setGameState('lost');
          } else {
            // Reset ball
            g.ball.x = W / 2;
            g.ball.y = H - 50;
            g.ball.dx = 3.5 * (Math.random() > 0.5 ? 1 : -1);
            g.ball.dy = -3.5;
          }
        }

        // Paddle collision
        const pTop = H - 30;
        if (
          g.ball.dy > 0 &&
          g.ball.y + g.ball.radius >= pTop &&
          g.ball.y + g.ball.radius <= pTop + g.paddle.h + 4 &&
          g.ball.x >= g.paddle.x &&
          g.ball.x <= g.paddle.x + g.paddle.w
        ) {
          g.ball.dy = -Math.abs(g.ball.dy);
          // Angle based on where it hit the paddle
          const hitPos = (g.ball.x - g.paddle.x) / g.paddle.w;
          g.ball.dx = (hitPos - 0.5) * 8;
          g.ball.y = pTop - g.ball.radius;
          spawnParticles(g.ball.x, pTop, COLORS.paddle);
        }

        // Brick collision
        for (const brick of g.bricks) {
          if (!brick.alive) continue;
          if (
            g.ball.x + g.ball.radius > brick.x &&
            g.ball.x - g.ball.radius < brick.x + brick.w &&
            g.ball.y + g.ball.radius > brick.y &&
            g.ball.y - g.ball.radius < brick.y + brick.h
          ) {
            brick.hits--;
            if (brick.hits <= 0) {
              brick.alive = false;
              g.score += 10;
              setScore(g.score);
              spawnParticles(brick.x + brick.w / 2, brick.y + brick.h / 2, brick.color);
            } else {
              g.score += 5;
              setScore(g.score);
            }

            // Determine collision side
            const overlapLeft = g.ball.x + g.ball.radius - brick.x;
            const overlapRight = brick.x + brick.w - (g.ball.x - g.ball.radius);
            const overlapTop = g.ball.y + g.ball.radius - brick.y;
            const overlapBottom = brick.y + brick.h - (g.ball.y - g.ball.radius);
            const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

            if (minOverlap === overlapTop || minOverlap === overlapBottom) {
              g.ball.dy = -g.ball.dy;
            } else {
              g.ball.dx = -g.ball.dx;
            }
            break;
          }
        }

        // Check win
        if (g.bricks.every(b => !b.alive)) {
          g.gameState = 'won';
          setGameState('won');
        }
      }

      // --- DRAW ---

      // Bricks
      for (const brick of g.bricks) {
        if (!brick.alive) continue;
        ctx.fillStyle = brick.color;
        ctx.globalAlpha = brick.hits > 1 ? 0.6 : 1;
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
        // Glow
        ctx.shadowColor = brick.color;
        ctx.shadowBlur = 6;
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Pixel grid on bricks
        ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 0.5;
        for (let px = brick.x + 4; px < brick.x + brick.w; px += 4) {
          ctx.beginPath();
          ctx.moveTo(px, brick.y);
          ctx.lineTo(px, brick.y + brick.h);
          ctx.stroke();
        }
      }

      // Paddle
      const paddleY = H - 30;
      ctx.fillStyle = COLORS.paddle;
      ctx.shadowColor = COLORS.ballGlow;
      ctx.shadowBlur = 10;
      ctx.fillRect(g.paddle.x, paddleY, g.paddle.w, g.paddle.h);
      ctx.shadowBlur = 0;
      // Paddle edge pixels
      ctx.fillStyle = COLORS.accent2;
      ctx.fillRect(g.paddle.x, paddleY, 4, g.paddle.h);
      ctx.fillRect(g.paddle.x + g.paddle.w - 4, paddleY, 4, g.paddle.h);

      // Ball
      if (g.gameState === 'playing') {
        ctx.beginPath();
        ctx.arc(g.ball.x, g.ball.y, g.ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.ball;
        ctx.shadowColor = COLORS.ballGlow;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Ball trail
        ctx.beginPath();
        ctx.arc(g.ball.x - g.ball.dx * 2, g.ball.y - g.ball.dy * 2, g.ball.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 65, 0.3)';
        ctx.fill();
      }

      // Particles
      g.particles = g.particles.filter(p => p.life > 0);
      for (const p of g.particles) {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;
        p.dy += 0.05; // gravity
        ctx.globalAlpha = p.life / 50;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }
      ctx.globalAlpha = 1;

      // HUD
      ctx.font = '12px "DotGothic16", monospace';
      ctx.fillStyle = COLORS.text;
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE: ${g.score}`, 10, 20);
      ctx.textAlign = 'right';
      ctx.fillText(`LIVES: ${'♥'.repeat(g.lives)}${'♡'.repeat(3 - g.lives)}`, W - 10, 20);

      // Game over / win overlay
      if (g.gameState === 'won' || g.gameState === 'lost') {
        ctx.fillStyle = 'rgba(5, 5, 16, 0.8)';
        ctx.fillRect(0, 0, W, H);

        ctx.textAlign = 'center';
        ctx.font = '24px "DotGothic16", monospace';
        ctx.fillStyle = g.gameState === 'won' ? COLORS.paddle : COLORS.accent3;
        ctx.shadowColor = g.gameState === 'won' ? COLORS.ballGlow : 'rgba(255, 0, 144, 0.6)';
        ctx.shadowBlur = 20;
        ctx.fillText(
          g.gameState === 'won' ? 'STAGE CLEAR!' : 'GAME OVER',
          W / 2,
          H / 2 - 30
        );
        ctx.shadowBlur = 0;

        ctx.font = '14px "DotGothic16", monospace';
        ctx.fillStyle = COLORS.text;
        ctx.fillText(`FINAL SCORE: ${g.score}`, W / 2, H / 2 + 10);

        ctx.font = '12px "DotGothic16", monospace';
        ctx.fillStyle = COLORS.textDim;
        ctx.fillText('クリックまたはスペースキーでリスタート', W / 2, H / 2 + 45);
      }

      // Idle state
      if (g.gameState === 'idle') {
        ctx.textAlign = 'center';
        ctx.font = '20px "DotGothic16", monospace';
        ctx.fillStyle = COLORS.text;
        ctx.shadowColor = COLORS.ballGlow;
        ctx.shadowBlur = 15;
        ctx.fillText('BLOCK BREAKER', W / 2, H / 2 - 30);
        ctx.shadowBlur = 0;

        ctx.font = '12px "DotGothic16", monospace';
        ctx.fillStyle = COLORS.accent2;
        ctx.fillText('- FR0M CREATE EDITION -', W / 2, H / 2);

        ctx.fillStyle = COLORS.textDim;
        ctx.fillText('クリックまたはスペースキーでスタート', W / 2, H / 2 + 35);

        // Draw decorative bricks preview
        for (let i = 0; i < 5; i++) {
          ctx.fillStyle = BRICK_COLORS[i];
          ctx.globalAlpha = 0.3;
          ctx.fillRect(W / 2 - 100 + i * 42, H / 2 + 60, 38, 12);
          ctx.globalAlpha = 1;
        }
      }

      g.animFrame = requestAnimationFrame(gameLoop);
    }

    gameRef.current.animFrame = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(gameRef.current.animFrame);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [spawnParticles]);

  const handleInteract = useCallback(() => {
    const g = gameRef.current;
    if (g.gameState === 'idle' || g.gameState === 'won' || g.gameState === 'lost') {
      initGame();
    }
  }, [initGame]);

  // Space key to start/restart
  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        handleInteract();
      }
    };
    window.addEventListener('keydown', handleSpace);
    return () => window.removeEventListener('keydown', handleSpace);
  }, [handleInteract]);

  return (
    <section className="breakout-section">
      <div className="container">
        <header className="section-header">
          <p className="section-kicker">SECRET STAGE / GAME</p>
          <h2 className="glitch-text" data-text="Block Breaker">Block Breaker</h2>
          <p>隠しステージを発見しました。ブロックを全て破壊せよ。</p>
        </header>
        <div
          className={`breakout-container ${visible ? 'breakout-visible' : ''}`}
          onClick={handleInteract}
        >
          <canvas ref={canvasRef} className="breakout-canvas" />
          <div className="breakout-controls">
            <span>◀ ▶ キー / マウス / タッチで操作</span>
            <span>SCORE: {score} | LIVES: {'♥'.repeat(lives)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
