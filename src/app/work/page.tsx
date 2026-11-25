import type { Metadata } from "next";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { Ribbon } from "@/components/ui/Ribbon";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { WorkCard } from "@/components/ui/WorkCard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: { absolute: "Software Case Studies | Products We Have Built | Softilect" },
  description:
    "See the fintech, Web3, healthcare, marketplace and ecommerce products Softilect has built end to end, from first workshop to launch and support.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Case Studies and Work | Softilect", description: "Products Softilect has delivered end to end.", url: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]} />
      <PageHero
        eyebrow="Selected work"
        title="Software case studies: products we have built end to end"
        lead="Fintech, Web3, healthcare, marketplaces, ecommerce operations and AI SaaS. Each one taken from first brief to a confident launch."
        aside={<ServiceVisual slug="work" />}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
      </PageHero>
      <section className="rib" data-tone="light" aria-label="Sectors">
        <Ribbon items={["Fintech", "Web3", "Healthcare", "Marketplaces", "Ecommerce operations", "AI SaaS", "Logistics", "Education"]} />
      </section>
      <section className="sec tint" data-tone="light">
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
