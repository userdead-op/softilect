import type { Metadata } from "next";
import { Syne, Figtree, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://softilect.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Softilect | Software Development Agency for Web, AI, Web3 & Ecommerce",
    template: "%s | Softilect",
  },
  description:
    "Softilect is a software development agency that designs and ships web, mobile, AI, Web3, healthcare, and ecommerce products. Discovery to maintenance with secure architecture and cinematic product craft.",
  keywords: [
    "software development agency",
    "web development company",
    "custom software development",
    "blockchain development",
    "dApp development",
    "NFT marketplace development",
    "ecommerce development",
    "healthcare software development",
    "Gen AI development",
    "SaaS development",
    "UX UI design agency",
    "Softilect",
  ],
  authors: [{ name: "Softilect" }],
  creator: "Softilect",
  publisher: "Softilect",
  applicationName: "Softilect",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Softilect",
    title:
      "Softilect | Software Development Agency for Web, AI, Web3 & Ecommerce",
    description:
      "Design, engineer, and launch high-performing digital products with Softilect. Web, mobile, AI, Web3, healthcare, and ecommerce.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softilect | Software Development Agency",
    description:
      "Software development agency for web, mobile, AI, Web3, healthcare, and ecommerce products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add Search Console token when available:
    // google: "your-verification-token",
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
      className={`${syne.variable} ${figtree.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd />
        <SmoothScroll>
          <div className="noise" aria-hidden />
          <CursorGlow />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
