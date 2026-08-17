import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { LocationDetailSections } from "@/components/pages/LocationDetailSections";
import { JsonLd } from "@/components/JsonLd";
import { getLocation } from "@/content/locations";
import { site } from "@/content";
import { locationGraph, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "pentonville-road" }, { slug: "kings-cross-road" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: `Location | ${site.name}` };

  return pageMetadata({
    title: `${location.name}`,
    description: `Dim Sum Duck ${location.name} (Dimsumduck) — walk-in Cantonese dim sum and roast duck at ${location.address}. ${location.hoursShort}.`,
    path: `/${location.slug}`,
    keywords: [
      `Dim Sum Duck ${location.name}`,
      `Dimsumduck ${location.name}`,
      location.address,
      location.postalCode,
    ],
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <SiteShell headerVariant="overlay">
      <JsonLd data={locationGraph(location)} />
      <PageHero
        image={location.heroImage}
        title={location.name}
        titleZh={location.nameChinese}
      />

      <div className="location-detail-page">
        <LocationDetailSections location={location} />
      </div>
    </SiteShell>
  );
}
