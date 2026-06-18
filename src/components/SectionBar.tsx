import Link from "next/link";
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

type ItalicLinkProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function ItalicLink({ href, children, onClick }: ItalicLinkProps) {
  if (href) {
    return (
      <span className="clearfaceitalic">
        <Link href={href}>{children}</Link>
      </span>
    );
  }

  return (
    <span className="clearfaceitalic">
      <button
        type="button"
        onClick={onClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          font: "inherit",
          color: "inherit",
          textDecoration: "underline",
        }}
      >
        {children}
      </button>
    </span>
  );
}
