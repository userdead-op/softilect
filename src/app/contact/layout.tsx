import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Softilect | Book a Discovery Call" },
  description:
    "Tell us about your web, app, AI or Web3 project and get a clear plan back from a UK-led team. Book your discovery call with Softilect today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: { absolute: "Contact Softilect | Book a Discovery Call" },
    description:
      "Tell Softilect about your product roadmap and get a clear path from discovery to launch.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
