import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { LocationHoverCard } from "@/components/LocationHoverCard";
import { locationsPage } from "@/content/pages";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locations",
  description:
    "Find Dim Sum Duck (Dimsumduck) in King's Cross, London — walk-in Cantonese restaurants at 186 Pentonville Road, N1 9JP and 124 King's Cross Road, WC1X 9DS.",
  path: "/locations",
  keywords: [
    "Dim Sum Duck locations",
    "Dimsumduck King's Cross",
    "Dim Sum Duck Pentonville Road",
    "Dim Sum Duck King's Cross Road",
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
