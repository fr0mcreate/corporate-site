'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionVideoProps {
  src: string;
}

export default function SectionVideo({ src }: SectionVideoProps) {
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
    <div className={`section-video-wrap ${loaded ? 'section-video-loaded' : ''}`}>
      <video
        ref={videoRef}
        className="section-video"
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      <div className="section-video-overlay" />
    </div>
  );
}
