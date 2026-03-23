'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a fixed overlay that transitions between section backgrounds
 * as the user scrolls, creating a "next section overlaps previous" illusion.
 * 
 * Each section-sticky gets a full-viewport overlay that fades in when
 * that section enters the viewport from below.
 */
export default function SectionOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(init);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function init() {
    const container = containerRef.current;
    if (!container) return;

    // Get all sticky sections
    const sections = gsap.utils.toArray<HTMLElement>('.section-sticky');
    const hero = document.querySelector<HTMLElement>('.hero');

    // Create overlay layers for each section
    sections.forEach((section, i) => {
      const bg = getComputedStyle(section).backgroundColor;
      // Also check inline style
      const inlineBg = section.style.background || section.style.backgroundColor;
      
      const layer = document.createElement('div');
      layer.className = 'overlay-layer';
      layer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: ${inlineBg || bg || 'var(--bg)'};
        z-index: ${i + 2};
        pointer-events: none;
        clip-path: inset(100% 0 0 0);
        will-change: clip-path;
      `;
      container.appendChild(layer);

      // Animate clip-path as section enters viewport
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        onUpdate: (self) => {
          const progress = self.progress;
          const clipPercent = 100 - (progress * 100);
          layer.style.clipPath = `inset(${clipPercent}% 0 0 0)`;
        },
        onLeaveBack: () => {
          layer.style.clipPath = 'inset(100% 0 0 0)';
        },
      });
    });
  }

  return (
    <div
      ref={containerRef}
      className="section-overlay-container"
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  );
}
