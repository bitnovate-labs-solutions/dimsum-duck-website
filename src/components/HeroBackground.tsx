"use client";

import { useState } from "react";

type HeroBackgroundProps = {
  poster: string;
  src: string;
};

export function HeroBackground({ poster, src }: HeroBackgroundProps) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        className="dsd-hero-poster"
        decoding="sync"
        fetchPriority="high"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className={`dsd-hero-media${ready ? " dsd-hero-media--ready" : ""}`}
        decoding="async"
        onLoad={() => setReady(true)}
      />
    </>
  );
}
