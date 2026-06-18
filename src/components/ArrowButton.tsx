"use client";

import Link from "next/link";

type ArrowButtonProps = {
  href?: string;
  variant?: "blue" | "cream";
  onClick?: () => void;
  ariaLabel?: string;
};

export function ArrowButton({
  href,
  variant = "blue",
  onClick,
  ariaLabel = "Continue",
}: ArrowButtonProps) {
  const className = `arrow-button ${variant === "cream" ? "cream" : ""}`;

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        →
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel}>
      →
    </button>
  );
}
