import type { Metadata, Viewport } from "next";
import { Syne, Figtree } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

const title = "Softilect | Software Development Company for Web, Mobile, AI & Web3";
const description =
  "UK-led software development company building web, mobile, AI and Web3 products that grow your business. From discovery to launch and support. Book a call.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Softilect" },
  description,
  applicationName: "Softilect",
  authors: [{ name: "Softilect" }],
  creator: "Softilect",
  publisher: "Softilect",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GB", url: SITE_URL, siteName: "Softilect", title, description },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = { themeColor: "#f4f7f9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        <OrganizationJsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
