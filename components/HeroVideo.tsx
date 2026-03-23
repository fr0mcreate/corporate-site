'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setLoaded(true);
      video.play().catch(() => {});
    };

    // Already loaded (cached / fast load)
    if (video.readyState >= 3) {
      handleReady();
      return;
    }

    video.addEventListener('canplaythrough', handleReady);
    // Fallback: also listen for loadeddata
    video.addEventListener('loadeddata', handleReady);
    return () => {
      video.removeEventListener('canplaythrough', handleReady);
      video.removeEventListener('loadeddata', handleReady);
    };
  }, []);

  return (
    <div className={`hero-video-wrap ${loaded ? 'hero-video-loaded' : ''}`}>
      <video
        ref={videoRef}
        className="hero-video"
        src="/hero-video.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      <div className="hero-video-overlay" />
    </div>
  );
}
