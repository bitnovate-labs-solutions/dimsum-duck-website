import type { Metadata } from "next";
import { faqSections } from "@/content/faq";
import { locations } from "@/content/locations";
import { site } from "@/content/site";
import type { Location } from "@/content/types";

export const siteUrl = site.url.replace(/\/$/, "");

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultOpenGraphImage = {
  url: absoluteUrl(site.ogImage),
  width: 1200,
  height: 800,
  alt: "Handmade dim sum at Dim Sum Duck in King's Cross, London",
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords: [
      "Dim Sum Duck London",
      "Dim Sum Duck King's Cross",
      "Dimsumduck London",
      "Dim Sum & Duck",
      "dim sum duck",
      "dim sum restaurant King's Cross",
      "roast duck King's Cross London",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title,
      description,
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOpenGraphImage.url],
    },
  };
}

function postalAddress(location: Location) {
  return {
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: location.addressLocality,
    addressRegion: location.addressRegion,
    postalCode: location.postalCode,
    addressCountry: location.addressCountry,
  };
}

export function mapsSearchQuery(location: Location) {
  return `Dim Sum Duck ${location.streetAddress}, ${location.addressLocality}, ${location.postalCode}, United Kingdom`;
}

export function mapsSearchUrl(location: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsSearchQuery(location),
  )}`;
}

export function mapsEmbedUrl(location: Location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    mapsSearchQuery(location),
  )}&z=17&hl=en&output=embed`;
}

function openingHours(location: Location) {
  if (location.slug === "pentonville-road") {
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "22:00",
      },
    ];
  }

  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "12:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "18:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "18:00",
      closes: "22:00",
    },
  ];
}

export function restaurantNode(location: Location) {
  const pageUrl = absoluteUrl(`/${location.slug}`);
  const mapUrl = mapsSearchUrl(location);
  return {
    "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
    "@id": `${pageUrl}#restaurant`,
    name: `Dim Sum Duck ${location.name}`,
    legalName: site.name,
    alternateName: [
      "Dim Sum Duck London",
      "Dimsumduck",
      "Dim Sum & Duck",
      `Dim Sum Duck ${location.name}, London`,
      `${site.name} ${location.nameChinese}`,
    ],
    disambiguatingDescription: `Dim Sum Duck ${location.name} is a walk-in Cantonese restaurant in King's Cross, London, United Kingdom. It is not Dim Dou Duck in Kuala Lumpur, Malaysia.`,
    description:
      location.detailParagraphs[0] ||
      `Dim Sum Duck ${location.name} is a walk-in Cantonese restaurant in King's Cross, London, UK.`,
    url: pageUrl,
    image: location.gallery.map((image) => absoluteUrl(image.src)),
    telephone: site.telephoneE164,
    email: site.contactEmail,
    servesCuisine: ["Cantonese", "Dim Sum", "Chinese", "Hong Kong", "Roast Duck"],
    acceptsReservations: "False",
    priceRange: "££",
    menu: absoluteUrl("/menus"),
    address: postalAddress(location),
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    hasMap: [location.googleMapsUrl, mapUrl],
    openingHoursSpecification: openingHours(location),
    containedInPlace: {
      "@type": "Place",
      name: "King's Cross, London",
      containedInPlace: {
        "@type": "City",
        name: "London",
        containedInPlace: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
    },
    areaServed: [
      { "@type": "Place", name: "King's Cross" },
      { "@type": "Place", name: "Pentonville" },
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    parentOrganization: { "@id": `${siteUrl}#organization` },
    sameAs: [...site.profiles, location.googleMapsUrl, mapUrl],
  };
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: site.name,
        alternateName: site.alternateNames,
        legalName: site.name,
        url: siteUrl,
        logo: absoluteUrl(site.logoBlue),
        image: absoluteUrl(site.ogImage),
        email: site.contactEmail,
        telephone: site.telephoneE164,
        sameAs: site.profiles,
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressRegion: "England",
          addressCountry: "GB",
        },
        areaServed: {
          "@type": "City",
          name: "London",
          containedInPlace: {
            "@type": "Country",
            name: "United Kingdom",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: site.name,
        alternateName: site.alternateNames,
        description: site.description,
        inLanguage: "en-GB",
        publisher: { "@id": `${siteUrl}#organization` },
      },
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}#brand`,
        name: site.name,
        alternateName: site.alternateNames,
        disambiguatingDescription:
          "Dim Sum Duck is a walk-in Cantonese restaurant in King's Cross, London, United Kingdom. It is not Dim Dou Duck in Kuala Lumpur.",
        description: site.description,
        url: siteUrl,
        telephone: site.telephoneE164,
        email: site.contactEmail,
        image: absoluteUrl(site.ogImage),
        servesCuisine: ["Cantonese", "Dim Sum", "Chinese", "Hong Kong", "Roast Duck"],
        acceptsReservations: "False",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressRegion: "England",
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "Place", name: "King's Cross" },
          { "@type": "City", name: "London" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        sameAs: site.profiles,
        department: locations.map((location) => ({
          "@id": `${absoluteUrl(`/${location.slug}`)}#restaurant`,
        })),
      },
      ...locations.map(restaurantNode),
    ],
  };
}

export function locationGraph(location: Location) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: site.name,
        alternateName: site.alternateNames,
        url: siteUrl,
      },
      restaurantNode(location),
    ],
  };
}

export function faqGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };
}
