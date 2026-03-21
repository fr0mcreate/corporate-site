'use client';

import { useEffect, useRef } from 'react';

export default function RetroEffects() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const hero = canvas.parentElement;
        if (!hero) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const colors = ['#00ff41', '#00e5ff', '#ff0090', '#e0e0e0'];
        let stars: { x: number; y: number; size: number; color: string; speed: number; blinkPhase: number }[] = [];
        let animId: number;

        function resize() {
            if (!canvas || !hero) return;
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
            createStars();
        }

        function createStars() {
            if (!canvas) return;
            stars = [];
            for (let i = 0; i < 120; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() < 0.8 ? 1 : 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    speed: 0.1 + Math.random() * 0.3,
                    blinkPhase: Math.random() * Math.PI * 2,
                });
            }
        }

        function draw(time: number) {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const star of stars) {
                const alpha = 0.4 + 0.6 * Math.abs(Math.sin(time * 0.001 * star.speed + star.blinkPhase));
                ctx.fillStyle = star.color;
                ctx.globalAlpha = alpha;
                ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
            }
            ctx.globalAlpha = 1;
            animId = requestAnimationFrame(draw);
        }

        resize();
        animId = requestAnimationFrame(draw);
        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: -3,
                pointerEvents: 'none',
            }}
        />
    );
}
