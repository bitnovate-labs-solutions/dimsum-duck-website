import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { site } from "@/content";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <SiteShell headerVariant="cream">
      <HomePageContent />
    </SiteShell>
  );
}
