import type { FooterLocation } from "./types";
import { dsdImage } from "./locationImages";

export const site = {
  name: "Dim Sum Duck",
  nameChinese: "点豆得",
  title: "Dim Sum Duck 点豆得",
  description:
    "Authentic Cantonese dim sum and in-house roasted duck, handmade fresh every day at our Pentonville Road and King's Cross Road restaurants in London.",
  url: "https://dimsumduck.co.uk",
  logoWhite: "/logos/logo-1.png",
  logoBlue: "/logos/logo-2.png",
  logoHero: "/logos/logo-2.png",
  colors: {
    primary: "#2B4B6F",
    accent: "#3BBCD4",
    highlight: "#E84520",
    blue: "#1B6FD8",
    blueLight: "#1A7FD0",
    cream: "#F7F0E9",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: {
    display: "Cooper BT",
    displayFile: "/fonts/CooperBT-Black.woff2",
    script: "Feeling Passionate",
    scriptFile: "/fonts/FeelingPassionate.woff2",
    body: "Noto",
  },
  social: {
    instagram: "https://www.instagram.com/dimsumandduck/",
    whatsapp: "https://wa.me/447344685051",
    whatsappDisplay: "07344 685051",
  },
  contactEmail: "team@dimsumduck.co.uk",
  copyrightYear: 2026,
  menuPdfUrl: "#",
  assets: {
    heroVideo: "/hero/hero-video.mp4",
    heroPoster: dsdImage("Dim Sum Duck 090426-3499.jpg"),
    blueTexture: dsdImage("Dim Sum Duck 090426-2783.jpg"),
    footerBackground: dsdImage("Dim Sum Duck 090426-3560.jpg"),
  },
} as const;

export const footerLocations: FooterLocation[] = [
  {
    name: "PENTONVILLE ROAD",
    address: "186 Pentonville Rd\nLondon N1 9JP",
    email: "",
    googleMapsUrl:
      "https://share.google/rmK41h4RIadiO8jyu",
  },
  {
    name: "KING'S CROSS ROAD",
    address: "124 King's Cross Rd\nLondon WC1X 9DS",
    email: "",
    googleMapsUrl:
      "https://share.google/L9wacmkOhq1y9uKet",
  },
];

export const footerOpeningHours = {
  title: "OPENING HOURS",
  lines: [
    "Pentonville Road: 11:30am – 10pm daily (kitchen closes 9:30pm)",
    "King's Cross Road: 12 – 5pm & 6 – 10pm daily (kitchen closes 9:30pm)",
  ],
} as const;

export const legalLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "COOKIES", href: "/cookies" },
] as const;
