import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { faqIntro, faqSections } from "@/content/faq";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `FAQ - ${site.name}`,
  description: faqIntro.title,
};

export default function FaqPage() {
  return (
    <SiteShell showFixedLogo>
      <div className="content">
        <div className="postContent">
          <h2>{faqIntro.title}</h2>
          {faqIntro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}

          {faqSections.map((section) => (
            <section key={section.title} className="faq-section">
              <h3>{section.title}</h3>
              {section.items.map((item) => (
                <div key={item.question} className="faq-item">
                  <h5>{item.question}</h5>
                  <p>{item.answer}</p>
                </div>
              ))}
            </section>
          ))}

          <p>
            Please click{" "}
            <Link href="/privacy">here</Link> to read our Privacy and Cookie
            policies.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
