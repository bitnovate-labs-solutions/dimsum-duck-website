import type { Metadata } from "next";
import { Kalam, Ma_Shan_Zheng, Noto_Serif_SC } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content";
import { defaultOpenGraphImage, organizationGraph, siteUrl } from "@/lib/seo";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-sc",
});

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kalam",
});

const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ma-shan-zheng",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Dim Sum Duck London",
    "Dim Sum Duck King's Cross",
    "Dimsumduck London",
    "Dim Sum & Duck",
    "dim sum duck",
    "Dim Sum Duck Pentonville Road",
    "Cantonese dim sum London",
    "roast duck King's Cross",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "restaurant",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: siteUrl,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [defaultOpenGraphImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "King's Cross, London",
  },
  icons: {
    icon: [{ url: "/logos/logo-1.webp", type: "image/webp" }],
    apple: [{ url: "/logos/logo-1.webp", type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${notoSerifSC.variable} ${kalam.variable} ${maShanZheng.variable}`}
    >
      <body>
        <JsonLd data={organizationGraph()} />
        {children}
      </body>
    </html>
  );
}
