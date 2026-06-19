import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { LocationHoverCard } from "@/components/LocationHoverCard";
import { locationsPage } from "@/content/pages";
import { locations } from "@/content/locations";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Locations - ${site.name}`,
  description: locationsPage.heading,
};

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
