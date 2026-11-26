import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Ribbon } from "@/components/ui/Ribbon";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { Approach } from "@/components/services/ServiceDeep";
import { ProcessTeaser } from "@/components/services/ProcessTeaser";

export const metadata: Metadata = {
  title: { absolute: "About Softilect | UK-Led Software Development Company" },
  description:
    "Meet Softilect, a UK-led software studio. Senior people, plain talk and one team from first idea to long-term support. See how we work and why clients stay.",
  keywords: ["about Softilect", "software development company UK", "software studio", "web and app development team", "end to end software partner"],
  alternates: { canonical: "/about" },
  openGraph: { title: "About Softilect", description: "A UK-led software studio built for end-to-end ownership.", url: "/about" },
};

const principles = [
  { title: "Discovery before code", text: "Briefs, journeys and risk lists come first, so every sprint starts with signal, not guesswork." },
  { title: "Secure by design", text: "Access control, integrations and threat-minded choices are made early, not bolted on late." },
  { title: "Visible delivery", text: "Working previews, QA gates and honest change control from kickoff to support." },
  { title: "Plain talk", text: "Options and trade-offs explained in simple language, so you always make the call." },
];

const models = [
  { t: "Fixed-scope project", d: "Best when the goal is clear. We agree scope, price and timeline up front, then deliver in visible sprints.", href: "/services/custom-software-development", cta: "Custom software" },
  { t: "Dedicated squad", d: "Designers and engineers working only on your product, growing or shrinking as your needs change.", href: "/services/design-and-development", cta: "Design and development" },
  { t: "Ongoing support", d: "A monthly plan for monitoring, security updates, fixes and steady improvements after launch.", href: "/services/maintenance-and-support", cta: "Maintenance and support" },
];

const sectors = ["Fintech", "Healthcare", "Marketplaces", "Ecommerce", "AI SaaS", "Web3", "Logistics", "Education", "Real estate", "Hospitality"];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="About us"
        title="A UK-led software studio that owns the work end to end"
        lead="We help founders and product teams turn ideas into shipped, growing products across web, mobile, AI and Web3, then stay on to keep them healthy."
        aside={<ServiceVisual slug="about" />}
      >
        <PrimaryButton href="/contact">Work with Softilect</PrimaryButton>
        <SecondaryButton href="/work">See our work</SecondaryButton>
      </PageHero>

      <section className="sec pure" data-tone="light">
        <div className="wrap ovw">
          <div className="ovh">
            <span className="eyebrow">Who we are</span>
            <h2 className="h2">One partner from the first idea to the final commit.</h2>
          </div>
          <div className="prose ovp">
            <p>Softilect is a software development company led from the UK. We take raw ideas through discovery, design, architecture and engineering, then stay after launch to keep products fast, secure and improving.</p>
            <p>Our delivery team works across time zones, so projects keep moving while you talk to one person who knows them inside out. Clients come to us from the UK, the US, the UAE and beyond.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="facts">
            {[
              { t: "UK-led", d: "Client-facing leadership in the UK, so briefs, contracts and communication are simple." },
              { t: "Senior delivery", d: "Experienced designers, engineers and testers, supported by a trusted specialist network." },
              { t: "Long-term view", d: "We build for year two, and stay on to support the product after launch." },
            ].map((f, i) => (
              <Reveal key={f.t} index={i}>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rib" data-tone="light" aria-label="Sectors we have worked in">
        <Ribbon items={sectors} />
        <Ribbon items={[...sectors].reverse()} outline />
      </section>

      <ProcessTeaser title="How we deliver, in nine clear phases." />

      <Approach title="Four principles behind every project" items={principles} />

      <section className="sec tint" data-tone="light">
        <div className="wrap">
          <span className="eyebrow">Working together</span>
          <h2 className="h2">Three ways to work with us.</h2>
          <div className="facts">
            {models.map((m, i) => (
              <Reveal key={m.t} index={i}>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
                <Link className="inl" href={m.href}>{m.cta}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title="Tell us what you want to build." />
    </>
  );
}
