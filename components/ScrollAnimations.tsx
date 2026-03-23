'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    // Wait for loading screen to finish
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        initAnimations();
      });
    }, 2800);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  function initAnimations() {
    // Hero title reveal
    gsap.fromTo('.hero h1',
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    );

    gsap.fromTo('.hero-kicker',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.5 }
    );

    gsap.fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
    );

    // ===== STACKING SECTIONS via CSS sticky =====
    // Apply sticky positioning and ascending z-index via JS
    let zIndex = 1;

    const heroEl = document.querySelector<HTMLElement>('.hero');
    if (heroEl) {
      heroEl.style.position = 'sticky';
      heroEl.style.top = '0';
      heroEl.style.zIndex = String(zIndex++);
    }

    const stickySections = gsap.utils.toArray<HTMLElement>('.section-sticky');
    stickySections.forEach((section) => {
      section.style.position = 'sticky';
      section.style.top = '0';
      section.style.zIndex = String(zIndex++);
    });

    // Section reveals
    gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
      const header = section.querySelector('.section-header');
      const cards = section.querySelectorAll('.card, .service-card, .work-card, .strength-item, .faq-item');

      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 },
          {
            opacity: 1, y: 0, x: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    // Strength items typewriter-style
    gsap.utils.toArray<HTMLElement>('.strength-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // CTA section pulse
    ScrollTrigger.create({
      trigger: '.cta-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.cta-section',
          { backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,255,65,0) 0%, transparent 70%)' },
          {
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,255,65,0.08) 0%, transparent 70%)',
            duration: 1.5,
            ease: 'power2.out',
          }
        );
        gsap.fromTo('.cta-section h2',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
        );
      },
    });

    // Works parallax thumbnails
    gsap.utils.toArray<HTMLElement>('.work-thumb').forEach((thumb) => {
      gsap.fromTo(thumb,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: thumb,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    });

    // Progress bar on right
    gsap.to('.scroll-progress-bar', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }

  return null;
}
