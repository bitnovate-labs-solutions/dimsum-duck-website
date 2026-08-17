import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { FaqPageSections } from "@/components/FaqPageSections";
import { JsonLd } from "@/components/JsonLd";
import { faqIntro, faqSections } from "@/content/faq";
import { faqGraph, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Where is Dim Sum Duck? In King's Cross, London, UK — not Dim Dou Duck in Kuala Lumpur. Walk-in hours, allergies, nearest station, and how to find us on Google Maps.",
  path: "/faq",
  keywords: [
    "Where is Dim Sum Duck",
    "Dim Sum Duck London",
    "Dim Sum Duck vs Dim Dou Duck",
    "Dim Sum Duck Google Maps",
  ],
});

export default function FaqPage() {
  return (
    <SiteShell headerVariant="overlay">
      <JsonLd data={faqGraph()} />
      <PageHero
        image={faqIntro.heroImage}
        title={faqIntro.heroTitle}
        titleZh={faqIntro.heroTitleZh}
      />

      <div className="content faq-page">
        <div className="postContent">
          <FaqPageSections sections={faqSections} />
        </div>
      </div>
    </SiteShell>
  );
}
