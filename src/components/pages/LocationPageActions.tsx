"use client";

import { ItalicLink } from "@/components/SectionBar";
import { useModal } from "@/components/ModalProvider";

type LocationPageActionsProps = {
  cta: string;
  ctaHref?: string;
  bookingUrl?: string;
};

export function LocationPageActions({
  cta,
  ctaHref,
  bookingUrl,
}: LocationPageActionsProps) {
  const { openBook } = useModal();

  if (ctaHref) {
    return (
      <p style={{ textAlign: "center", margin: "2rem 0" }}>
        <ItalicLink href={ctaHref}>{cta}</ItalicLink>
      </p>
    );
  }

  if (bookingUrl) {
    return (
      <p style={{ textAlign: "center", margin: "2rem 0" }}>
        <ItalicLink href={bookingUrl}>{cta}</ItalicLink>
      </p>
    );
  }

  return (
    <p style={{ textAlign: "center", margin: "2rem 0" }}>
      <ItalicLink onClick={openBook}>{cta}</ItalicLink>
    </p>
  );
}
