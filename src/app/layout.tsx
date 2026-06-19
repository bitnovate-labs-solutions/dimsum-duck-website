import type { Metadata } from "next";
import { site } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/logos/logo-1.png",
    apple: "/logos/logo-1.png",
  },
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
