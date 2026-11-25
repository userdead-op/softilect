import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Arrow } from "@/components/ui/Icons";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getServicesByCategory, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Explore Softilect software development services: web and app development, UX/UI design, SaaS, ecommerce, healthcare software, blockchain, Gen AI, QA and DevOps.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development Services | Softilect",
    description: "Eighteen services across strategy, design, engineering, Web3 and AI, delivered by one accountable team.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="What we offer"
        title="Software development services, from strategy to support."
        lead="Six practices and eighteen services, delivered by one team that stays accountable from the first workshop to long-term maintenance."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
        <SecondaryButton href="/work">See our work</SecondaryButton>
      </PageHero>

      <section className="sec" data-tone="light">
        <div className="wrap">
          {serviceCategories.map((c) => (
            <div className="catblock" key={c.id} id={c.id}>
              <div className="cathead">
                <h2>{c.label}</h2>
                <p>{c.description}</p>
              </div>
              <div className="svgrid">
                {getServicesByCategory(c.id).map((s) => (
                  <Link className="sv" key={s.slug} href={`/services/${s.slug}`}>
                    <h3>{s.name}</h3>
                    <p>{s.short}</p>
                    <span className="more">
                      View service <Arrow />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
