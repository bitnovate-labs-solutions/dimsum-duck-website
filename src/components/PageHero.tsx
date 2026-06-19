import { preload } from "react-dom";

type PageHeroProps = {
  image: string;
  title: string;
  titleZh: string;
  imagePosition?: string;
};

export function PageHero({
  image,
  title,
  titleZh,
  imagePosition = "center",
}: PageHeroProps) {
  preload(image, { as: "image", fetchPriority: "high" });

  return (
    <div className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="page-hero-image"
        decoding="async"
        fetchPriority="high"
        style={{ objectPosition: imagePosition }}
      />
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-zh chinese">{titleZh}</p>
      </div>
    </div>
  );
}
