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

    // When video ends, pause for 5 seconds on last frame, then replay
    const handleEnded = () => {
      // Video stays on last frame (paused)
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 5000);
    };

    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener('canplaythrough', handleReady);
      video.addEventListener('loadeddata', handleReady);
    }

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplaythrough', handleReady);
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('ended', handleEnded);
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
