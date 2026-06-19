type HeroBackgroundProps = {
  src: string;
};

export function HeroBackground({ src }: HeroBackgroundProps) {
  return (
    <video
      className="dsd-hero-media"
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
