export type NavItem = {
  thai: string;
  label: string;
  href: string;
  external?: boolean;
  action?: "book" | "careers";
};

export type Location = {
  slug: string;
  name: string;
  nameThai: string;
  address: string;
  email: string;
  bookingUrl?: string;
  careersUrl?: string;
  heroImage: string;
  description: string;
  subtitle: string;
  reservationsTitle: string;
  reservationsText: string;
  reservationsCta: string;
  reservationsCtaHref?: string;
  menuDescription: string;
  menuLinks: { label: string; href: string }[];
};

export type FooterLocation = {
  name: string;
  address: string;
  email: string;
};

export type FaqSection = {
  title: string;
  items: { question: string; answer: string }[];
};

export type ContentSection = {
  type:
    | "hero-video"
    | "intro"
    | "split-image"
    | "blue-banner"
    | "booking"
    | "menu-preview"
    | "locations-list"
    | "image-grid"
    | "text-block"
    | "section-bar"
    | "location-rows";
  id?: string;
  data: Record<string, unknown>;
};
