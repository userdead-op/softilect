import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Ribbon } from "@/components/ui/Ribbon";
import { Reveal } from "@/components/ui/Reveal";
import { DiagArrow } from "@/components/ui/Icons";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { ProcessTeaser } from "@/components/services/ProcessTeaser";
import { getServicesByCategory, services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Software Development Services UK | Web, App, AI & Web3" },
  description:
    "18 software development services from a UK-led studio: web and app development, UX/UI, SaaS, ecommerce, AI, blockchain, QA and DevOps. Book a discovery call.",
  keywords: ["software development services", "software development company UK", "web development", "app development", "AI development", "blockchain development", "UX UI design", "DevOps"],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development Services UK | Softilect",
    description: "Eighteen services across strategy, design, engineering, Web3 and AI, delivered by one accountable team.",
    url: "/services",
  },
};

const guide = [
  { q: "I need a website that ranks and brings in leads", to: "web-development" },
  { q: "I want to launch an iOS and Android app", to: "app-development" },
  { q: "I want to turn my idea into a SaaS product", to: "saas" },
  { q: "Our team still runs on spreadsheets and old systems", to: "digital-transformation" },
  { q: "I want to add AI to my product or operations", to: "gen-ai" },
  { q: "I am building a Web3 or crypto product", to: "blockchain" },
  { q: "Our releases are slow, buggy or stressful", to: "devops" },
];

export default function ServicesPage() {
  const ribbon = services.map((s) => s.name);
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="What we offer"
        title="Software development services for web, mobile, AI and Web3"
        lead="Six practices and eighteen services, delivered by one UK-led team that stays accountable from the first workshop to long-term support."
        aside={<ServiceVisual slug="services" />}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
        <SecondaryButton href="/work">See our work</SecondaryButton>
      </PageHero>

      <section className="rib" data-tone="light" aria-label="All services">
        <Ribbon items={ribbon} />
        <Ribbon items={[...ribbon].reverse()} outline />
      </section>

      <section className="sec pure" data-tone="light">
        <div className="wrap">
          <span className="eyebrow">Browse by practice</span>
          <h2 className="h2">Find the service that fits your goal.</h2>
          <div style={{ marginTop: 40 }}>
            {serviceCategories.map((c, i) => {
              const list = getServicesByCategory(c.id);
              return (
                <Reveal className="pcat" key={c.id}>
                  <div className="pcat-h" id={c.id}>
                    <span className="pn">{String(i + 1).padStart(2, "0")}</span>
                    <h2>{c.label}</h2>
                    <p>{c.description}</p>
                    <span className="ct">{list.length} {list.length === 1 ? "service" : "services"}</span>
                  </div>
                  <ul className="srows">
                    {list.map((s) => (
                      <li key={s.slug}>
                        <Link className="srow" href={`/services/${s.slug}`}>
                          <b>{s.name}</b>
                          <span>{s.short}</span>
                          <DiagArrow />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessTeaser />

      <section className="sec tint" data-tone="light">
        <div className="wrap">
          <span className="eyebrow">Not sure where to start?</span>
          <h2 className="h2">Tell us the problem. We will point to the service.</h2>
          <div className="guide">
            {guide.map((g) => (
              <Link key={g.to} href={`/services/${g.to}`}>
                <q>{g.q}</q>
                <span>{services.find((s) => s.slug === g.to)?.name}</span>
                <DiagArrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
