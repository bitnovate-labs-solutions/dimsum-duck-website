import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { LocationRow } from "@/components/LocationHeading";
import { locationsPage } from "@/content/pages";
import { locations } from "@/content/locations";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Locations - ${site.name}`,
  description: locationsPage.heading,
};

export default function LocationsPage() {
  return (
    <SiteShell showFixedLogo>
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${locationsPage.heroImage})` }}
      >
        <h1>
          {locationsPage.title}
          <span className="thai">{locationsPage.titleThai}</span>
        </h1>
      </div>
      <div className="content">
        <div className="postContent">
          <h3>{locationsPage.heading}</h3>
          <h2>{locationsPage.region}</h2>

          <div className="blue-section" style={{ marginTop: "2rem" }}>
            {locations.map((location) => (
              <LocationRow key={location.slug} location={location} light />
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
