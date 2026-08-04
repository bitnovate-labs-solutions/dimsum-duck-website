import type { Metadata } from "next";
import { Kalam, Ma_Shan_Zheng, Noto_Serif_SC } from "next/font/google";
import { site } from "@/content";
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
  title: {
    default: site.title,
    template: `%s - ${site.name}`,
  },
  description: site.description,
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
      lang="en"
      className={`${notoSerifSC.variable} ${kalam.variable} ${maShanZheng.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
