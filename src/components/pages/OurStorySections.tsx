"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { OurStorySection } from "@/content/types";

type OurStorySectionsProps = {
  sections: OurStorySection[];
};

export function OurStorySections({ sections }: OurStorySectionsProps) {
  return (
    <div className="our-story-sections">
      {sections.map((section) => (
        <section
          key={section.label}
          className={`our-story-block our-story-block--${section.imagePosition}`}
        >
          <div className="our-story-block-inner">
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
                {section.imageCaption ? (
                  <figcaption className="our-story-figure-caption">
                    {section.imageCaption}
                  </figcaption>
                ) : null}
              </figure>
            </ScrollReveal>

            <ScrollReveal className="our-story-copy-reveal" delay={120}>
              <div className="our-story-copy">
                <h3 className="our-story-label">
                  {section.label}
                  <span className="chinese"> {section.labelZh}</span>
                </h3>
                <div className="our-story-en">
                  {section.paragraphsEn.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <div className="our-story-zh chinese">
                  {section.paragraphsZh.map((paragraph) => (
                    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  );
}
