export type NavItem = {
  chinese?: string;
  label: string;
  href: string;
  external?: boolean;
};

export type MenuDownloadItem = {
  id: string;
  labelEn: string;
  file: string;
  exclusive?: boolean;
};

export type LocationGalleryImage = {
  src: string;
  alt: string;
  category: "interior" | "exterior" | "food";
};

export type Location = {
  slug: string;
  name: string;
  nameChinese: string;
  address: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
  heroImage: string;
  introImage: string;
  introImageAlt: string;
  gallery: LocationGalleryImage[];
  menuIntro: string;
  menuIntroZh: string;
  menuItems: MenuDownloadItem[];
  hours: string;
  hoursShort: string;
  reservationMethod: string;
  reservationMethodZh: string;
  description: string;
  listingHeading?: string;
  detailParagraphs: string[];
};

export type FooterLocation = {
  name: string;
  address: string;
  email: string;
  googleMapsUrl?: string;
};

export type FaqSection = {
  title: string;
  items: { question: string; answer: string }[];
  alwaysVisible?: boolean;
  notice?: string;
};

export type MenuItem = {
  nameEn: string;
  nameZh: string;
  /** Optional tasting note / description (e.g. wine list) */
  description?: string;
};

/** Accordion group within a menu tab */
export type MenuCategory = {
  id: string;
  titleEn: string;
  titleZh: string;
  items: MenuItem[];
};

/** Top-level menu tab (Full Menu, Dim Sum, etc.) */
export type MenuTab = {
  id: string;
  titleEn: string;
  titleZh: string;
  categories: MenuCategory[];
  /** Footer notes shown under this tab (e.g. service charge) */
  notes?: string[];
};

export type MenuDownloadGroup = {
  id: string;
  image?: string;
  imageLabel?: string;
  titleEn: string;
  titleZh?: string;
  address?: string;
  items: MenuDownloadItem[];
  showWineNote?: boolean;
  variant?: "food" | "location";
};

export type Review = {
  publication: string;
  title: string;
  author?: string;
  date?: string;
  href: string;
  image: string;
};

export type OurStorySection = {
  label: string;
  labelZh: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  paragraphsEn: string[];
  paragraphsZh: string[];
  imagePosition: "left" | "right";
};
