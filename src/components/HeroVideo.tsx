"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
};

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setReady(true);

    video.addEventListener("playing", markReady);
    if (video.readyState >= 2) {
      markReady();
    }

    void video.play().catch(() => {});

    return () => video.removeEventListener("playing", markReady);
  }, []);

  return (
    <video
      ref={videoRef}
      className={`dsd-hero-video${ready ? " dsd-hero-video--ready" : ""}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
