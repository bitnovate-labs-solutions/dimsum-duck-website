import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { OurStorySections } from "@/components/pages/OurStorySections";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ourStoryPage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Our Story - ${site.name}`,
  description: ourStoryPage.introTitle,
};

export default function OurStoryPage() {
  return (
    <SiteShell headerVariant="overlay">
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${ourStoryPage.heroImage})` }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">{ourStoryPage.heroTitle}</h1>
          <p className="page-hero-zh chinese">{ourStoryPage.heroTitleZh}</p>
        </div>
      </div>

      <div className="our-story-intro">
        <ScrollReveal className="our-story-intro-reveal">
          <div className="our-story-intro-inner">
            <h2 className="our-story-intro-title">
              {ourStoryPage.introTitle}
              <span className="chinese"> {ourStoryPage.introTitleZh}</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <OurStorySections sections={ourStoryPage.sections} />
    </SiteShell>
  );
}
