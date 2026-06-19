const pageHeroImages = {
  menu: "/images/heroes/menu.webp",
  locations: "/images/heroes/locations.webp",
  reviews: "/images/heroes/reviews.webp",
  faq: "/images/heroes/faq.webp",
  "our-story": "/images/heroes/our-story.webp",
  "pentonville-road": "/images/heroes/pentonville-road.webp",
  "kings-cross-road": "/images/heroes/kings-cross-road.webp",
} as const;

export type PageHeroId = keyof typeof pageHeroImages;

export function pageHeroImage(id: PageHeroId) {
  return pageHeroImages[id];
}
