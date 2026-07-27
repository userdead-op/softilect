import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Softilect | Start a Software Project",
  description:
    "Contact Softilect to start a discovery call for web, mobile, AI, Web3, healthcare, or ecommerce software development.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Softilect | Start a Software Project",
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
