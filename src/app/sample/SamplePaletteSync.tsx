"use client";

import { useEffect } from "react";

export function SamplePaletteSync({
  palette,
}: {
  palette: "light-grey" | "darker-grey" | "dark-grey";
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.samplePalette = palette;
    return () => {
      delete root.dataset.samplePalette;
    };
  }, [palette]);

  return null;
}
