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
  const className = `dsd-arrow-btn${variant === "cream" ? " dsd-arrow-btn--cream" : ""}`;
  const icon = (
    <svg
      className="dsd-arrow-btn-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h14M13 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
