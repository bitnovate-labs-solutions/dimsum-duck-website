import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Home - ${site.name}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <SiteShell headerVariant="overlay">
      <HomePageContent />
    </SiteShell>
  );
}
