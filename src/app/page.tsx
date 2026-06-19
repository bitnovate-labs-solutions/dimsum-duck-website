import type { Metadata } from "next";
import { preload } from "react-dom";
import { SiteShell } from "@/components/SiteShell";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { homePage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Home - ${site.name}`,
  description: site.description,
};

export default function HomePage() {
  preload(homePage.hero.poster, { as: "image", fetchPriority: "high" });
  preload(homePage.hero.video, { as: "video", type: "video/mp4" });

  return (
    <SiteShell headerVariant="overlay">
      <HomePageContent />
    </SiteShell>
  );
}
