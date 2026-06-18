import type { FooterLocation } from "./types";

export const site = {
  name: "Plaza",
  title: "Plaza Khao Gaeng",
  description:
    "Plaza Khao Gaeng is a Southern Thai restaurant in London, with locations in Covent Garden, Borough Yards, and Tottenham Court Road.",
  url: "https://plazakhaogaeng.com",
  logoWhite: "/images/theme/plaza-white.png",
  logoBlue: "/images/theme/plaza-blue.png",
  logoHero: "/images/uploads/PLAZA-LOGO-WHITE.png",
  social: {
    instagram: "https://www.instagram.com/plazakhaogaeng/",
    tiktok: "https://www.tiktok.com/@plaza.khao.gaeng",
  },
  giftingUrl: "https://plazakhaogaeng.giftpro.co.uk/",
  partnerLinks: [
    {
      name: "Chaiyo Restaurants",
      href: "https://www.chaiyorestaurants.com/",
      image: "/images/uploads/chaiyo.png",
    },
    {
      name: "Speedboat Bar",
      href: "https://www.speedboatbar.co.uk/",
      image: "/images/uploads/speedboat.png",
    },
  ],
  openingHours: {
    weekday: "Mon - Sat: 12pm - 10.30pm",
    sunday: "Sunday: 12pm-8.30pm",
  },
  eventsEmail: "events@plazakhaogaeng.com",
  contactEmail: "contact@chaiyorestaurants.com",
  contactAddress: "67-69 George Street, London W1U 8LT",
  copyrightYear: 2026,
  assets: {
    heroVideo: "/images/uploads/hero-video.mp4",
    heroPoster: "/images/uploads/DSC01994.jpg",
    blueTexture: "/images/uploads/blue-background-texture-30.png",
    footerBackground: "/images/uploads/footer-background-3.jpg",
  },
} as const;

export const footerLocations: FooterLocation[] = [
  {
    name: "BOROUGH",
    address: "Arch 207, 18 Stoney St\nLondon SE1 9AD",
    email: "by@plazakhaogaeng.com",
  },
  {
    name: "COVENT GARDEN",
    address: "6 Bedford St\nLondon WC2E 9HZ",
    email: "cg@plazakhaogaeng.com",
  },
  {
    name: "TOTTENHAM COURT ROAD",
    address: "103-105 New Oxford St\nLondon WC1A 1DB",
    email: "tcr@plazakhaogaeng.com",
  },
];

export const legalLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "COOKIES", href: "/cookies" },
] as const;

export const bookingLocations = [
  {
    name: "Covent Garden",
    href: "https://www.sevenrooms.com/explore/plazakhaogaengcoventgarden/reservations/create/search",
  },
  {
    name: "Borough Yards",
    href: "https://www.sevenrooms.com/explore/plazakhaogaengborough/reservations/create/search",
  },
  {
    name: "Tottenham Court Road",
    href: "https://www.sevenrooms.com/explore/plazakhaogaengtcr/reservations/create/search",
  },
] as const;

export const careersLocations: {
  name: string;
  href: string;
  isHeader?: boolean;
}[] = [
  {
    name: "Opportunities",
    href: "#",
    isHeader: true,
  },
  {
    name: "Covent Garden",
    href: "https://www.peoplebank.com/pb3/corporate/jksrestaurants/advertsearch.php?p_Location=Plaza+Covent+Garden&p_Frontend_Dept=&do_search=Show+Vacancies",
  },
  {
    name: "Borough Yards",
    href: "https://www.peoplebank.com/pb3/corporate/jksrestaurants/advertsearch.php?p_Location=Plaza+Khao+Gaeng+-+Borough&p_Frontend_Dept=&do_search=Show+Vacancies",
  },
  {
    name: "Tottenham Court Road",
    href: "https://www.peoplebank.com/pb3/corporate/jksrestaurants/advertsearch.php?p_Location=Plaza+Khao+Gaeng+-+Tottenham+Court+Road&p_Frontend_Dept=&do_search=Show+Vacancies",
  },
] as const;
