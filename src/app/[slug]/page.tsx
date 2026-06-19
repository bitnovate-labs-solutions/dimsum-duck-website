import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { LocationDetailSections } from "@/components/pages/LocationDetailSections";
import { getLocation } from "@/content/locations";
import { site } from "@/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "pentonville-road" }, { slug: "kings-cross-road" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: `Location - ${site.name}` };

  return {
    title: `${location.name} - ${site.name}`,
    description:
      location.listingHeading ||
      location.detailParagraphs[0]?.slice(0, 160) ||
      location.name,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <SiteShell headerVariant="overlay">
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${location.heroImage})` }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">{location.name}</h1>
          <p className="page-hero-zh chinese">{location.nameChinese}</p>
        </div>
      </div>

      <div className="location-detail-page">
        <LocationDetailSections location={location} />
      </div>
    </SiteShell>
  );
}
