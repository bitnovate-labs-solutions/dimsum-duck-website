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
    "Answers about Dim Sum Duck (Dimsumduck) in King's Cross: walk-in only, opening hours, allergies, nearest station, and how to find both London restaurants.",
  path: "/faq",
  keywords: ["Dim Sum Duck FAQ", "Dimsumduck booking", "Dim Sum Duck walk-in"],
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
