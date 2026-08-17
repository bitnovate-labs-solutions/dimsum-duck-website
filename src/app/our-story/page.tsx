import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { OurStorySections } from "@/components/pages/OurStorySections";
import { ourStoryPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "The story of Dim Sum Duck (Dimsumduck): from a Hong Kong fishing village to handmade Cantonese dim sum and roast duck in King's Cross, London.",
  path: "/our-story",
});

export default function OurStoryPage() {
  return (
    <SiteShell headerVariant="overlay">
      <PageHero
        image={ourStoryPage.heroImage}
        title={ourStoryPage.heroTitle}
        titleZh={ourStoryPage.heroTitleZh}
      />

      <OurStorySections
        sections={ourStoryPage.sections}
        introTitle={ourStoryPage.introTitle}
        introTitleZh={ourStoryPage.introTitleZh}
      />
    </SiteShell>
  );
}
