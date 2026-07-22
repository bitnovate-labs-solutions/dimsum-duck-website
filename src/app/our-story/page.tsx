import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { OurStorySections } from "@/components/pages/OurStorySections";
import { ourStoryPage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Our Story - ${site.name}`,
  description: ourStoryPage.introTitle,
};

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
