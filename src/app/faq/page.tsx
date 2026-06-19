import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { FaqPageSections } from "@/components/FaqPageSections";
import { faqIntro, faqSections } from "@/content/faq";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `FAQ - ${site.name}`,
  description: faqIntro.title,
};

export default function FaqPage() {
  return (
    <SiteShell headerVariant="overlay">
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
