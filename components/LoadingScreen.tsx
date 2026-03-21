'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !barRef.current || !textRef.current || !percentRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => setVisible(false),
        });
      },
    });

    // Animate loading bar
    tl.to(barRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power1.inOut',
    });

    // Count percentage
    tl.to(percentRef.current, {
      innerText: 100,
      duration: 2,
      snap: { innerText: 1 },
      ease: 'power1.inOut',
      onUpdate: function () {
        if (percentRef.current) {
          percentRef.current.textContent = Math.round(
            gsap.getProperty(percentRef.current, 'innerText') as number || 0
          ).toString();
        }
      },
    }, '<');

    // Text flicker
    tl.fromTo(textRef.current, 
      { opacity: 0.3 },
      { opacity: 1, duration: 0.1, repeat: 6, yoyo: true, ease: 'steps(1)' },
      0
    );

    return () => { tl.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="loading-screen">
      <div className="loading-inner">
        <div ref={textRef} className="loading-title">
          <span className="loading-bracket">[</span>
          FROM CREATE
          <span className="loading-bracket">]</span>
        </div>
        <div className="loading-subtitle">SYSTEM LOADING...</div>
        <div className="loading-bar-track">
          <div ref={barRef} className="loading-bar-fill" />
        </div>
        <div className="loading-percent">
          <span ref={percentRef}>0</span>%
        </div>
      </div>
    </div>
  );
}
