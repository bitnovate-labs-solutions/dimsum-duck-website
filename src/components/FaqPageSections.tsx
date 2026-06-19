"use client";

import { useState } from "react";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { FaqSection } from "@/content/types";

type FaqPageSectionsProps = {
  sections: FaqSection[];
};

export function FaqPageSections({ sections }: FaqPageSectionsProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="faq-section">
          <h3 className="faq-section-title">{section.title}</h3>
          {section.notice && (
            <div className="faq-allergies-notice">
              {section.notice.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="faq-notice-text">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          {section.alwaysVisible
            ? section.items.map((item) => (
                <div key={item.question} className="faq-item faq-item-visible">
                  <h5 className="faq-item-question">{item.question}</h5>
                  <p className="faq-item-answer">{item.answer}</p>
                </div>
              ))
            : section.items.map((item) => {
                const itemKey = `${section.title}::${item.question}`;
                return (
                  <FaqAccordion
                    key={itemKey}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openKey === itemKey}
                    onToggle={() =>
                      setOpenKey((current) =>
                        current === itemKey ? null : itemKey,
                      )
                    }
                  />
                );
              })}
        </section>
      ))}
    </>
  );
}
