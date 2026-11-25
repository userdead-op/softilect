import { Ribbon } from "@/components/ui/Ribbon";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGlobe, type GlobeService } from "@/components/home/ServiceGlobe";
import { HowWeBuild } from "@/components/home/HowWeBuild";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { WorkCard } from "@/components/ui/WorkCard";
import { DiagArrow } from "@/components/ui/Icons";
import { getService, getServicesByCategory, serviceCategories } from "@/data/services";
import { getFeaturedProjects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const GLOBE: [string, string][] = [
  ["web-development", "Web Development"],
  ["app-development", "App Development"],
  ["ux-ui-design", "UX/UI Design"],
  ["saas", "SaaS"],
  ["gen-ai", "Gen AI"],
  ["ecommerce", "Ecommerce"],
  ["blockchain", "Blockchain"],
  ["devops", "DevOps"],
  ["custom-software-development", "Custom Software"],
  ["quality-assurance", "Quality Assurance"],
];

const RIBBON_SERVICES = ["Digital Transformation", "Web Development", "App Development", "UX/UI Design", "SaaS", "Ecommerce", "Gen AI", "Blockchain", "dApps", "CRM & CMS", "DevOps", "Quality Assurance"];
const RIBBON_TECH = ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Node.js", "NestJS", "Python", "Django", "Flutter", "React Native", "Tailwind", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "GraphQL", "Redis", "Firebase", "Solidity", "Web3.js"];

export default function Home() {
  const globe: GlobeService[] = GLOBE.map(([slug, label]) => ({ slug, label, short: getService(slug)?.short ?? "" }));
  const featured = getFeaturedProjects().slice(0, 4);

  return (
    <>
      <section className="hero" data-tone="light">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap in">
          <div>
            <span className="eyebrow">Software development company</span>
            <h1>
              Code with a pulse. <span>Products with a premiere.</span>
            </h1>
            <p className="sub">
              An end-to-end development partner for AI, Web3, web and mobile. We take your product from raw idea to final commit, and a confident launch.
            </p>
            <div className="acts">
              <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
              <SecondaryButton href="/services">Explore services</SecondaryButton>
            </div>
            <div className="proof">
              <div><b>Discovery to maintenance</b><span>One partner across the full cycle</span></div>
              <div><b>18 services</b><span>Web, mobile, AI, Web3 and more</span></div>
              <div><b>Shipped products</b><span>Fintech, healthcare, marketplaces</span></div>
            </div>
          </div>
          <ServiceGlobe items={globe} />
        </div>
      </section>

      <section className="rib" data-tone="light" aria-label="Services and technologies">
        <Ribbon items={RIBBON_SERVICES} />
        <Ribbon items={RIBBON_TECH} outline />
      </section>

      <section className="sec svc" data-tone="light" aria-labelledby="services-title">
        <div className="wrap in">
          <div className="side">
            <span className="eyebrow">What we offer</span>
            <h2 className="h2" id="services-title">Capabilities across strategy, product, Web3 and AI.</h2>
            <p className="lead">Six practices, eighteen services, one team accountable from first workshop to long-term support.</p>
            <div className="acts">
              <SecondaryButton href="/services">View all services</SecondaryButton>
            </div>
          </div>
          <div>
            {serviceCategories.map((c) => (
              <div className="cat" key={c.id}>
                <div>
                  <h3>{c.label}</h3>
                  <p>{c.description}</p>
                </div>
                <ul>
                  {getServicesByCategory(c.id).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>
                        {s.name}
                        <DiagArrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowWeBuild />

      <section className="sec" style={{ background: "var(--white)" }} data-tone="light" aria-labelledby="work-title">
        <div className="wrap">
          <div className="cathead" style={{ borderBottom: 0, paddingBottom: 0 }}>
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="h2" id="work-title">Products delivered end to end.</h2>
            </div>
            <SecondaryButton href="/work">All case studies</SecondaryButton>
          </div>
          <div className="wgrid">
            {featured.map((p, i) => (
              <WorkCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec appr" data-tone="light" aria-labelledby="about-title">
        <div className="wrap">
          <div className="in">
            <div>
              <span className="eyebrow">About Softilect</span>
              <h2 className="h2" id="about-title">A software studio built for end-to-end ownership.</h2>
            </div>
            <p className="lead" style={{ margin: 0 }}>
              Softilect partners with founders and product teams across AI, SaaS, Web2, Web3, healthcare, fintech and ecommerce to turn ideas into scalable, shipped products.
            </p>
          </div>
          <div className="agrid">
            <div className="ag"><div className="ic" aria-hidden="true" /><h3>Signal before sprint</h3><p>BRDs, SRS, journeys and risk logs come first, so every sprint starts with signal, not guesswork.</p></div>
            <div className="ag"><div className="ic" aria-hidden="true" /><h3>Year-two foundations</h3><p>We choose foundations that survive year-two growth: access control, integrations and threat-minded design.</p></div>
            <div className="ag"><div className="ic" aria-hidden="true" /><h3>Rituals that hold</h3><p>Standups, velocity, QA gates, retros and change control keep accountability tight from kickoff through maintenance.</p></div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
