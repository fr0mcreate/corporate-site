'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const pausingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setLoaded(true);
      video.play().catch(() => {});
    };

    // Detect end of video via timeupdate (more reliable than 'ended' event)
    const handleTimeUpdate = () => {
      if (pausingRef.current) return;
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        pausingRef.current = true;
        video.pause();
        // Hold on last frame for 5 seconds, then restart
        setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(() => {});
          pausingRef.current = false;
        }, 5000);
      }
    };

    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener('canplaythrough', handleReady);
      video.addEventListener('loadeddata', handleReady);
    }

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('canplaythrough', handleReady);
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('timeupdate', handleTimeUpdate);
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
        playsInline
        preload="auto"
      />
      <div className="hero-video-overlay" />
    </div>
  );
}
