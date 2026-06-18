import type { Location } from "./types";

export const locations: Location[] = [
  {
    slug: "covent-garden",
    name: "Covent Garden",
    nameThai: "โคเวนต์การ์เด้น",
    address: "6 Bedford St, London WC2E 9HZ",
    email: "cg@plazakhaogaeng.com",
    bookingUrl:
      "https://www.sevenrooms.com/explore/plazakhaogaengcoventgarden/reservations/create/search",
    careersUrl:
      "https://www.peoplebank.com/pb3/corporate/jksrestaurants/advertsearch.php?p_Location=Plaza+Covent+Garden&p_Frontend_Dept=&do_search=Show+Vacancies",
    heroImage: "/images/uploads/26.4.24-COVENT-GARDEN-ON-SITE-202.jpg",
    subtitle: "COVENT GARDEN",
    description:
      "Our third location in central London, just off the bustling Covent Garden Market.",
    reservationsTitle: "RESERVATIONS & GROUPS",
    reservationsText:
      "Plaza Covent Garden is well suited to larger groups and private events — from parties of 7+ dining from our Talung Set Menu, to bar hires, full restaurant takeovers and bespoke events. Menus are designed for sharing, with dishes served across the table in the style of a traditional raan khao gaeng.",
    reservationsCta: "Enquire now",
    reservationsCtaHref: "mailto:events@plazakhaogaeng.com",
    menuDescription:
      "Highlighting new regional cuisine embracing coconut-charcoal grills, turmeric-heavy curries simmered in clay pots, and our most rural expression of khao gaeng cooking.",
    menuLinks: [
      { label: "DRINKS", href: "#" },
      { label: "FOOD", href: "#" },
    ],
  },
  {
    slug: "borough-yards",
    name: "Borough Yards",
    nameThai: "บะระยาร์ดส",
    address: "Arch 207, 18 Stoney St, London SE1 9AD",
    email: "by@plazakhaogaeng.com",
    bookingUrl:
      "https://www.sevenrooms.com/explore/plazakhaogaengborough/reservations/create/search",
    careersUrl:
      "https://www.peoplebank.com/pb3/corporate/jksrestaurants/advertsearch.php?p_Location=Plaza+Khao+Gaeng+-+Borough&p_Frontend_Dept=&do_search=Show+Vacancies",
    heroImage: "/images/uploads/25.10.23-PLAZA-BOROUGH-1152-1.jpg",
    subtitle: "Borough Yards",
    description:
      "Our second location south of the river, tucked into the railway arches of Stoney Street, on the edge of Borough Market.",
    reservationsTitle: "Borough Yards GROUP Bookings",
    reservationsText:
      "Plaza Borough Yards is perfectly suited to larger groups and private events, be it parties of 7-16 guests dining from our Samrub Set Menu, or takeovers of our first-floor mezzanine for up to 35 guests. Both are bookable below, or you can make an enquiry for private events here.",
    reservationsCta: "Reserve now",
    menuDescription:
      "A selection of Southern Thai specialities, including our Plaza Samrub menu, bespoke to this location.",
    menuLinks: [
      { label: "DRINKS", href: "#" },
      { label: "FOOD", href: "#" },
      { label: "EVENTS", href: "#" },
    ],
  },
  {
    slug: "tottenham-court-road",
    name: "Tottenham Court Road",
    nameThai: "ท็อตแนมคอร์ตโรด",
    address: "103-105 New Oxford St, London WC1A 1DB",
    email: "tcr@plazakhaogaeng.com",
    bookingUrl:
      "https://www.sevenrooms.com/explore/plazakhaogaengtcr/reservations/create/search",
    careersUrl:
      "https://www.peoplebank.com/pb3/corporate/jksrestaurants/advertsearch.php?p_Location=Plaza+Khao+Gaeng+-+Tottenham+Court+Road&p_Frontend_Dept=&do_search=Show+Vacancies",
    heroImage: "/images/uploads/DSC08408.jpg",
    subtitle: "Tottenham Court Road",
    description:
      "Our first Plaza, situated on the mezzanine above Arcade Food Hall.",
    reservationsTitle: "GROUP Bookings",
    reservationsText:
      "Plaza Tottenham Court Road is available for larger group bookings for up to 16 guests, dining from our Deep South menu, with reservations available below. You can also make an enquiry for private events here.",
    reservationsCta: "Reserve now",
    menuDescription:
      "A kaleidoscope of curries and searing stir-fries, alongside vibrant salads and snacks to pick over, all hailing from Thailand's Southern provinces.",
    menuLinks: [
      { label: "DRINKS", href: "#" },
      { label: "FOOD", href: "#" },
      { label: "EVENTS", href: "#" },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
