'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  // First load: wait for loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        initAnimations();
        initializedRef.current = true;
      });
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // On route change: re-apply sticky + animations immediately
  useEffect(() => {
    if (!initializedRef.current) return; // skip first render (handled above)
    ScrollTrigger.getAll().forEach(t => t.kill());
    // Small delay for DOM to update after navigation
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        initAnimations();
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  function initAnimations() {
    const vh = window.innerHeight;

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

    // ===== STICKY OVERLAP (rudel.jp method) =====
    // Set position:sticky and negative top on each section-sticky
    // Negative top = section height - viewport height (so all content is visible before it sticks)
    const stickySections = document.querySelectorAll<HTMLElement>('.section-sticky');
    stickySections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const overflow = sectionHeight - vh;
      
      if (overflow > 0) {
        // Section taller than viewport: negative top so content scrolls fully before sticking
        section.style.position = 'sticky';
        section.style.top = `-${overflow}px`;
      } else {
        // Section fits in viewport: stick at top
        section.style.position = 'sticky';
        section.style.top = '0px';
      }
    });

    // Hero also gets sticky
    const heroEl = document.querySelector<HTMLElement>('.hero');
    if (heroEl) {
      const heroHeight = heroEl.offsetHeight;
      const heroOverflow = heroHeight - vh;
      heroEl.style.position = 'sticky';
      heroEl.style.top = heroOverflow > 0 ? `-${heroOverflow}px` : '0px';
    }

    // Section entrance reveals
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

    // Strength items
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

    // Progress bar
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
