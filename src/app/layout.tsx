import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-sc",
});

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
    <html lang="en" className={notoSerifSC.variable}>
      <body>{children}</body>
    </html>
  );
}
