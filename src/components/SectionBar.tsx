import { ArrowButton } from "./ArrowButton";

type SectionBarProps = {
  title: string;
  href?: string;
  onClick?: () => void;
  arrowVariant?: "blue" | "cream";
};

export function SectionBar({
  title,
  href,
  onClick,
  arrowVariant = "blue",
}: SectionBarProps) {
  return (
    <div className="section-bar">
      <div className="section-bar__title">
        <h2>{title}</h2>
      </div>
      <div className="section-bar__action">
        <ArrowButton href={href} onClick={onClick} variant={arrowVariant} />
      </div>
    </div>
  );
}

export function ItalicLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="clearfaceitalic">
      <em>{children}</em>
    </span>
  );
}
