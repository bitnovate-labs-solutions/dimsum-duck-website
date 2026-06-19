import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { homePage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Home - ${site.name}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        href={homePage.hero.media}
        as="video"
        type="video/mp4"
        fetchPriority="high"
      />
      <SiteShell headerVariant="overlay">
        <HomePageContent />
      </SiteShell>
    </>
  );
}
