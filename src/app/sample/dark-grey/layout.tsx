import type { Metadata } from "next";
import { site } from "@/content";
import { SamplePaletteSync } from "../SamplePaletteSync";

export const metadata: Metadata = {
  title: `Home - ${site.name}`,
  description: site.description,
  robots: { index: false, follow: false },
};

export default function SampleDarkGreyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-sample-palette="dark-grey">
      <SamplePaletteSync palette="dark-grey" />
      {children}
    </div>
  );
}
