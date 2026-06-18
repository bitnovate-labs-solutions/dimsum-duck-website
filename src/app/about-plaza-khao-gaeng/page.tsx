import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { aboutPage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `About - ${site.name}`,
  description: aboutPage.heading,
};

export default function AboutPage() {
  return (
    <SiteShell showFixedLogo>
      <div className="content about-page">
        <div className="postContent">
          <h2>{aboutPage.title}</h2>
          <h1>{aboutPage.heading}</h1>

          {aboutPage.sections.map((section) => (
            <section key={section.title} className="about-section">
              <div>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <Image
                src={section.image}
                alt={section.title}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
