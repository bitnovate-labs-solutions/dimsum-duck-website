import type { Location } from "./types";
import { dsdImage } from "./locationImages";
import { menuPdfFiles, sharedFoodMenus } from "./menuPdfs";

export const locations: Location[] = [
  {
    slug: "pentonville-road",
    name: "Pentonville Road",
    nameChinese: "彭顿维尔路",
    address: "186 Pentonville Road, London, N1 9JP",
    googleMapsUrl: "https://share.google/rmK41h4RIadiO8jyu",
    heroImage: dsdImage("Dim Sum Duck 090426-3560.jpg"),
    introImage: dsdImage("Dim Sum Duck 090426-3579.jpg"),
    introImageAlt: "Dim Sum Duck Pentonville Road dining room and open kitchen",
    gallery: [
      {
        src: dsdImage("Dim Sum Duck 090426-3560.jpg"),
        alt: "Dim Sum Duck Pentonville Road restaurant interior",
        category: "interior",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2922.jpg"),
        alt: "Dim Sum Duck restaurant exterior and storefront",
        category: "exterior",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2596.jpg"),
        alt: "Handmade dim sum and roast duck at Dim Sum Duck",
        category: "food",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2660.jpg"),
        alt: "In-house roasted duck at Dim Sum Duck",
        category: "food",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2624.jpg"),
        alt: "Assorted dim sum dishes at Dim Sum Duck",
        category: "food",
      },
    ],
    menuIntro:
      "Our larger Pentonville Road menu includes a dedicated wine list and an expanded drinks selection.",
    menuIntroZh: "彭顿维尔路店提供专属酒单及更丰富的饮品选择。",
    menuItems: [
      ...sharedFoodMenus,
      {
        id: "drinks-desserts-pentonville",
        labelEn: "Drinks & Desserts",
        file: menuPdfFiles.drinksPentonville,
      },
      {
        id: "wine-list",
        labelEn: "Wine List",
        file: menuPdfFiles.winePentonville,
        exclusive: true,
      },
    ],
    hours: "Open everyday from 11:30am–10pm (kitchen closes at 9:30pm).",
    hoursShort: "11:30am – 10pm Everyday",
    reservationMethod: "Walk-in only",
    reservationMethodZh: "仅限到店",
    description: "",
    detailParagraphs: [
      "Opened in 2026, this location is just a 1-minute walk from our original restaurant. The space is twice as large and offers fully indoor seating. We also have larger tables available, making it more suitable for bigger parties.",
      "Our drinks selection at this location is even more extensive, featuring a dedicated wine list and Asahi on tap, available by the pint or half pint. Our food is handmade and prepared to the same exceptional standards as at our original location.",
      "At this venue you can expect a more comfortable dining experience, with dimmer lighting and more spacious seating.",
    ],
  },
  {
    slug: "kings-cross-road",
    name: "King's Cross Road",
    nameChinese: "国王十字路",
    address: "124 King's Cross Road, London WC1X 9DS",
    googleMapsUrl: "https://share.google/L9wacmkOhq1y9uKet",
    heroImage: dsdImage("Dim Sum Duck 090426-3592.jpg"),
    introImage: dsdImage("Dim Sum Duck 090426-3587.jpg"),
    introImageAlt: "Dim Sum Duck King's Cross Road dining room",
    gallery: [
      {
        src: dsdImage("Dim Sum Duck 090426-3592.jpg"),
        alt: "Dim Sum Duck King's Cross Road dining room",
        category: "interior",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2922.jpg"),
        alt: "Dim Sum Duck restaurant exterior and storefront",
        category: "exterior",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2450.jpg"),
        alt: "Steamed soup dumplings at Dim Sum Duck",
        category: "food",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-2660.jpg"),
        alt: "In-house roasted duck at Dim Sum Duck",
        category: "food",
      },
      {
        src: dsdImage("Dim Sum Duck 090426-3449.jpg"),
        alt: "Handmade dim sum being prepared at Dim Sum Duck",
        category: "food",
      },
    ],
    menuIntro:
      "Classic Cantonese dim sum and roast duck, handmade fresh every day at our original location.",
    menuIntroZh: "国王十字路原创店，每日手工制作经典点心与烧鸭。",
    menuItems: [
      ...sharedFoodMenus,
      {
        id: "drinks-desserts-kings-cross",
        labelEn: "Drinks & Desserts",
        file: menuPdfFiles.drinksKingsCross,
      },
    ],
    hours:
      "Weekdays & Saturdays: 12:00pm–5:00pm, 6:00pm–10:00pm\nSundays: 11:30am–5:00pm, 6:00pm–10:00pm\nKitchen closes at 9:30pm.",
    hoursShort: "12 – 5pm & 6 – 10pm Everyday",
    reservationMethod: "Walk-in only",
    reservationMethodZh: "仅限到店",
    description: "",
    listingHeading: "Our Original Location",
    detailParagraphs: [
      "This is where it all started. Our original restaurant introduced classic Cantonese cooking, prepared with care you can taste, and has become well known for its delicious food and the queues of guests eager to dine with us.",
      "The venue is smaller and more intimate, with indoor seating as well as a covered outdoor canopy area. It's a lively, fast-paced, no-fuss space, perfect for those looking for a casual dining experience.",
      "This location is walk-in only and best suited for smaller parties of up to 4–5 guests.",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
