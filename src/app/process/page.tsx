import type { Metadata } from "next";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildStages, processExtra } from "@/data/process";

export const metadata: Metadata = {
  title: { absolute: "Our Software Development Process | Softilect" },
  description:
    "See how Softilect takes your product from idea to launch in nine clear phases, with visible sprints, QA gates and honest timelines. No surprises.",
  alternates: { canonical: "/process" },
  openGraph: { title: "How Softilect builds software", description: "Nine phases from discovery to maintenance.", url: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Process", path: "/process" }]} />
      <PageHero
        eyebrow="Process"
        title="Nine phases from first idea to long-term care."
        lead="Every Softilect project follows the same delivery cycle, so you always know what is happening, what you will receive and what comes next."
        aside={<ServiceVisual slug="process" />}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
        <SecondaryButton href="/services">Explore services</SecondaryButton>
      </PageHero>

      <section className="sec pure" data-tone="light">
        <div className="wrap">
          <ol className="pphases">
            {buildStages.map((s) => {
              const x = processExtra[s.id];
              return (
                <li key={s.id} id={s.title.toLowerCase().replace(/[^a-z]+/g, "-")}>
                  <div className="pn">{s.id}</div>
                  <div className="pb">
                    <h2>{s.title}</h2>
                    <p className="pl">{s.line}</p>
                    <p>{s.detail}</p>
                    <div className="pcols">
                      <div>
                        <h3>What we do</h3>
                        <ul className="dl">{x.we.map((i) => <li key={i}>{i}</li>)}</ul>
                      </div>
                      <div>
                        <h3>What you get</h3>
                        <ul className="dl">{x.you.map((i) => <li key={i}>{i}</li>)}</ul>
                      </div>
                    </div>
                    <span className="tm">Typical time: {x.time}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <ClosingCta title="Ready to start with discovery?" />
    </>
  );
}
