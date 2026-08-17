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
      "Dim Sum Duck",
      "Dimsumduck",
      "dimsumduck",
      "dim sum duck",
      "Dim Sum Duck London",
      "dim sum King's Cross",
      "roast duck King's Cross",
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
    postalCode: location.postalCode,
    addressCountry: location.addressCountry,
  };
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
  return {
    "@type": "Restaurant",
    "@id": `${pageUrl}#restaurant`,
    name: `${site.name} ${location.name}`,
    alternateName: [
      `Dimsumduck ${location.name}`,
      `Dim Sum Duck ${location.name}`,
      `${site.name} ${location.nameChinese}`,
    ],
    description:
      location.detailParagraphs[0] ||
      `${site.name} ${location.name} is a walk-in Cantonese restaurant in King's Cross, London.`,
    url: pageUrl,
    image: location.gallery.map((image) => absoluteUrl(image.src)),
    telephone: site.telephoneE164,
    email: site.contactEmail,
    servesCuisine: ["Cantonese", "Dim Sum", "Chinese", "Roast Duck"],
    acceptsReservations: "False",
    priceRange: "££",
    address: postalAddress(location),
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    hasMap: [
      location.googleMapsUrl,
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${site.name} ${location.streetAddress} ${location.postalCode} London`,
      )}`,
    ],
    openingHoursSpecification: openingHours(location),
    areaServed: ["King's Cross", "Pentonville", "Islington", "London"],
    parentOrganization: { "@id": `${siteUrl}#organization` },
    sameAs: [site.social.instagram, location.googleMapsUrl],
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
        sameAs: [site.social.instagram],
        areaServed: {
          "@type": "City",
          name: "London",
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
        description: site.description,
        url: siteUrl,
        telephone: site.telephoneE164,
        email: site.contactEmail,
        image: absoluteUrl(site.ogImage),
        servesCuisine: ["Cantonese", "Dim Sum", "Chinese", "Roast Duck"],
        acceptsReservations: "False",
        areaServed: ["King's Cross", "London"],
        sameAs: [site.social.instagram],
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
