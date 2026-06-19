import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
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
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${faqIntro.heroImage})` }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">{faqIntro.heroTitle}</h1>
          <p className="page-hero-zh chinese">{faqIntro.heroTitleZh}</p>
        </div>
      </div>

      <div className="content faq-page">
        <div className="postContent">
          <FaqPageSections sections={faqSections} />
        </div>
      </div>
    </SiteShell>
  );
}
