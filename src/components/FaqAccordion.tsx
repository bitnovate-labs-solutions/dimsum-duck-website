"use client";

type FaqAccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqAccordion({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionProps) {
  return (
    <div className={`faq-accordion ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="faq-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-accordion-question">{question}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="faq-accordion-panel">
          <p className="faq-accordion-answer">{answer}</p>
        </div>
      )}
    </div>
  );
}
