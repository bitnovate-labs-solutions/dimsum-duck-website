"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { OurStorySection } from "@/content/types";

type OurStorySectionsProps = {
  sections: OurStorySection[];
  introTitle: string;
  introTitleZh: string;
};

function StoryFigure({
  section,
  showCaption,
}: {
  section: OurStorySection;
  showCaption: boolean;
}) {
  return (
    <ScrollReveal className="our-story-figure-reveal">
      <figure className="our-story-figure">
        <div className="our-story-figure-frame">
          <div className="our-story-figure-inner">
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 520px"
              className="our-story-figure-media"
            />
          </div>
        </div>
        {showCaption && section.imageCaption ? (
          <figcaption className="our-story-figure-caption">
            {section.imageCaption}
          </figcaption>
        ) : null}
      </figure>
    </ScrollReveal>
  );
}

export function OurStorySections({
  sections,
  introTitle,
  introTitleZh,
}: OurStorySectionsProps) {
  return (
    <div className="our-story-sections">
      <div className="our-story-lang our-story-lang--en" lang="en">
        <div className="our-story-intro">
          <ScrollReveal className="our-story-intro-reveal">
            <div className="our-story-intro-inner">
              <h2 className="our-story-intro-title">{introTitle}</h2>
            </div>
          </ScrollReveal>
        </div>

        {sections.map((section) => (
          <section
            key={`en-${section.label}`}
            className={`our-story-block our-story-block--${section.imagePosition}`}
          >
            <div className="our-story-block-inner">
              <StoryFigure section={section} showCaption />
              <ScrollReveal className="our-story-copy-reveal" delay={120}>
                <div className="our-story-copy">
                  <h3 className="our-story-label">{section.label}</h3>
                  {section.paragraphsEn.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        ))}
      </div>

      <div className="our-story-lang our-story-lang--zh" lang="zh-Hans">
        <div className="our-story-intro">
          <ScrollReveal className="our-story-intro-reveal">
            <div className="our-story-intro-inner">
              <h2 className="our-story-intro-title">{introTitleZh}</h2>
            </div>
          </ScrollReveal>
        </div>

        {sections.map((section) => (
          <section
            key={`zh-${section.labelZh}`}
            className={`our-story-block our-story-block--${section.imagePosition}`}
          >
            <div className="our-story-block-inner">
              <StoryFigure section={section} showCaption={false} />
              <ScrollReveal className="our-story-copy-reveal" delay={120}>
                <div className="our-story-copy">
                  <h3 className="our-story-label our-story-label--zh">
                    {section.labelZh}
                  </h3>
                  {section.paragraphsZh.map((paragraph) => (
                    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
