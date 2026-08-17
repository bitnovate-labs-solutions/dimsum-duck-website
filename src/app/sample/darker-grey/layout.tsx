import type { Metadata } from "next";
import { site } from "@/content";
import { SamplePaletteSync } from "../SamplePaletteSync";

export const metadata: Metadata = {
  title: `Home - ${site.name}`,
  description: site.description,
  robots: { index: false, follow: false },
};

export default function SampleDarkerGreyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-sample-palette="darker-grey">
      <SamplePaletteSync palette="darker-grey" />
      {children}
    </div>
  );
}
