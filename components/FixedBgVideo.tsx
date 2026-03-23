'use client';

import { useEffect, useRef, useState } from 'react';

interface FixedBgVideoProps {
  src: string;
  loop?: boolean;
}

export default function FixedBgVideo({ src, loop = true }: FixedBgVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setLoaded(true);
      video.play().catch(() => {});
    };

    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener('canplaythrough', handleReady);
      video.addEventListener('loadeddata', handleReady);
    }

    return () => {
      video.removeEventListener('canplaythrough', handleReady);
      video.removeEventListener('loadeddata', handleReady);
    };
  }, []);

  return (
    <div className={`fixed-bg-video-wrap ${loaded ? 'fixed-bg-video-loaded' : ''}`}>
      <video
        ref={videoRef}
        className="fixed-bg-video"
        src={src}
        muted
        autoPlay
        loop={loop}
        playsInline
        preload="auto"
      />
      <div className="fixed-bg-video-overlay" />
    </div>
  );
}
