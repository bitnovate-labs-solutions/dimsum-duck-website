type HeroBackgroundProps = {
  poster: string;
  src: string;
};

export function HeroBackground({ poster, src }: HeroBackgroundProps) {
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
        className="dsd-hero-media"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </>
  );
}
