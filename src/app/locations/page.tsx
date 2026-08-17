import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { LocationHoverCard } from "@/components/LocationHoverCard";
import { locationsPage } from "@/content/pages";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locations in London",
  description:
    "Dim Sum Duck London locations in King's Cross, United Kingdom: 124 King's Cross Road, WC1X 9DS and 186 Pentonville Road, N1 9JP. Walk-in Cantonese dim sum — search Dim Sum Duck London on Google Maps.",
  path: "/locations",
  keywords: [
    "Dim Sum Duck London locations",
    "Dim Sum Duck King's Cross Road",
    "Dim Sum Duck Pentonville Road",
    "Dim Sum Duck Google Maps",
  ],
});

export default function LocationsPage() {
  return (
    <SiteShell headerVariant="overlay">
      <PageHero
        image={locationsPage.heroImage}
        title={locationsPage.heroTitle}
        titleZh={locationsPage.heroTitleZh}
      />

      <div className="content locations-page">
        <div className="postContent">
          <h3>{locationsPage.heading}</h3>
          <p className="chinese locations-page-subtitle">
            {locationsPage.headingZh}
          </p>
          <p>{locationsPage.intro}</p>
          <h2 className="locations-page-region">{locationsPage.region}</h2>

          <div className="locations-grid">
            {locations.map((location) => (
              <LocationHoverCard
                key={location.slug}
                location={location}
                variant="detail"
              />
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
