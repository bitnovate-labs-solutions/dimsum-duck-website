import type { FooterLocation } from "./types";
import { dsdImage } from "./locationImages";

export const site = {
  name: "Dim Sum Duck",
  nameChinese: "点豆得",
  alternateNames: [
    "Dimsumduck",
    "Dim Sum Duck London",
    "Dim Sum & Duck",
    "Dim Sum and Duck",
    "Dim Sum Duck King's Cross",
    "点豆得",
    "Dim Sum Duck 点豆得",
  ],
  title: "Dim Sum Duck London | King's Cross Dim Sum & Roast Duck",
  description:
    "Dim Sum Duck is a walk-in Cantonese restaurant in King's Cross, London, UK — handmade dim sum and in-house roast duck at 124 King's Cross Road (WC1X 9DS) and 186 Pentonville Road (N1 9JP). Search Dim Sum Duck London, not Dim Dou Duck Kuala Lumpur.",
  url: "https://dimsumduck.com",
  locale: "en_GB",
  telephone: "+44 7344 685051",
  telephoneE164: "+447344685051",
  ogImage: "/images/dimsumduck/Dim%20Sum%20Duck%20090426-2624.webp",
  logoWhite: "/logos/logo-1.webp",
  logoBlue: "/logos/logo-2.webp",
  logoHero: "/logos/logo-2.webp",
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
  profiles: [
    "https://www.instagram.com/dimsumandduck/",
    "https://guide.michelin.com/gb/en/greater-london/london/restaurant/dimsum-duck",
    "https://www.tripadvisor.com/Restaurant_Review-g186338-d23608793-Reviews-Dim_Sum_Duck-London_England.html",
  ],
  contactEmail: "team@dimsumduck.com",
  copyrightYear: 2026,
  menuPdfUrl: "#",
  assets: {
    blueTexture: dsdImage("Dim Sum Duck 090426-2783.webp"),
    footerBackground: dsdImage("Dim Sum Duck 090426-3560.webp"),
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
    {
      hours: "Pentonville Road: 11:30am – 10pm daily",
      note: "(kitchen closes 9:30pm)",
    },
    {
      hours: "King's Cross Road: 12 – 5pm & 6 – 10pm daily",
      note: "(kitchen closes 9:30pm)",
    },
  ],
} as const;

export const legalLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "COOKIES", href: "/cookies" },
] as const;
