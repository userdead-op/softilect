import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildStages } from "@/data/process";

export const metadata: Metadata = {
  title: { absolute: "About Softilect | Software Development Company" },
  description:
    "Learn about Softilect, a software development company helping startups and enterprises design, build and launch AI, SaaS, Web3, healthcare and ecommerce products.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Softilect", description: "A software studio built for end-to-end ownership.", url: "/about" },
};

const principles = [
  { title: "Discovery before code", copy: "BRDs, SRS, journeys and risk logs come first, so every sprint starts with signal, not guesswork." },
  { title: "Secure architecture", copy: "We choose foundations that survive year-two growth: access control, integrations and threat-minded design." },
  { title: "Visible delivery", copy: "Standups, velocity, QA gates, retros and change control keep accountability tight from kickoff through maintenance." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="About"
        title="A software studio built for end-to-end ownership."
        lead="Softilect partners with founders and product teams across AI, SaaS, Web2, Web3, healthcare, fintech and ecommerce to turn ideas into scalable, shipped products."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <PrimaryButton href="/contact">Work with Softilect</PrimaryButton>
        <SecondaryButton href="/work">See our work</SecondaryButton>
      </PageHero>

      <section className="sec" data-tone="light">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="h2">One partner from the first idea to the final commit.</h2>
          </div>
          <div className="prose">
            <p>
              Softilect is an end-to-end development partner for AI, Web3, web and mobile products. We take raw ideas through discovery, design, architecture and engineering, and we stay on after launch to keep products fast, secure and growing.
            </p>
            <p>
              Our teams have shipped products across fintech, healthcare, marketplaces, ecommerce operations and AI SaaS. Every engagement runs on the same delivery cycle, so you always know what happens next.
            </p>
          </div>
        </div>
      </section>

      <section className="sec appr" style={{ background: "var(--white)" }} data-tone="light">
        <div className="wrap">
          <span className="eyebrow">How we work</span>
          <h2 className="h2">Three principles behind every project.</h2>
          <div className="agrid">
            {principles.map((p) => (
              <div className="ag" key={p.title} style={{ background: "var(--bg)" }}>
                <div className="ic" aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" data-tone="light">
        <div className="wrap">
          <span className="eyebrow">Delivery cycle</span>
          <h2 className="h2">Nine phases, from discovery to maintenance.</h2>
          <div className="cards3">
            {buildStages.map((s) => (
              <article className="card" key={s.id}>
                <span className="num">Phase {s.id}</span>
                <h3>{s.title}</h3>
                <p>{s.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
