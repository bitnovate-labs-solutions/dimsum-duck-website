import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
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
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${locationsPage.heroImage})` }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">{locationsPage.heroTitle}</h1>
          <p className="page-hero-zh chinese">{locationsPage.heroTitleZh}</p>
        </div>
      </div>

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
