"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
};

export function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setReady(true);

    video.addEventListener("canplay", markReady);
    if (video.readyState >= 3) {
      markReady();
    }

    void video.play().catch(() => {});

    return () => video.removeEventListener("canplay", markReady);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        className="dsd-hero-poster"
        decoding="async"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        className={`dsd-hero-video${ready ? " dsd-hero-video--ready" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
