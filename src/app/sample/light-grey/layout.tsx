import type { Metadata } from "next";
import { site } from "@/content";
import { SamplePaletteSync } from "../SamplePaletteSync";

export const metadata: Metadata = {
  title: `Home - ${site.name}`,
  description: site.description,
  robots: { index: false, follow: false },
};

export default function SampleLightGreyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-sample-palette="light-grey">
      <SamplePaletteSync palette="light-grey" />
      {children}
    </div>
  );
}
