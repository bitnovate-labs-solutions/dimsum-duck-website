import type { Metadata } from "next";
import { site } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `Site - ${site.name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
