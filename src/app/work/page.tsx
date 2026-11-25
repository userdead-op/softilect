import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { WorkCard } from "@/components/ui/WorkCard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies and Work",
  description:
    "Softilect case studies across fintech, Web3, healthcare, marketplaces, ecommerce operations and AI SaaS, delivered end to end from discovery to launch.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Case Studies and Work | Softilect", description: "Products Softilect has delivered end to end.", url: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]} />
      <PageHero
        eyebrow="Selected work"
        title="Products delivered end to end."
        lead="Fintech, Web3, healthcare, marketplaces, ecommerce operations and AI SaaS. Each one taken from first brief to a confident launch."
        crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
      </PageHero>
      <section className="sec" data-tone="light">
        <div className="wrap">
          <div className="wgrid" style={{ marginTop: 0 }}>
            {projects.map((p, i) => (
              <WorkCard key={p.slug} project={p} index={i} headingLevel={2} />
            ))}
          </div>
        </div>
      </section>
      <ClosingCta secondary={{ href: "/services", label: "Explore services" }} />
    </>
  );
}
