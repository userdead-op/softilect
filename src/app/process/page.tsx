import type { Metadata } from "next";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { Faq } from "@/components/services/Faq";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildStages, processExtra } from "@/data/process";

const processFaq = [
  { q: "How long does a typical project take?", a: "A focused website often takes four to eight weeks, while an app or platform usually takes three to six months. Discovery and design come first, then sprints of one to two weeks. We give you a dated plan once scope is agreed, and update it openly." },
  { q: "Will I see progress before the end?", a: "Yes. Every sprint ends with something you can see, click or install, such as a staging link or a test build. You review it, give feedback and decide priorities, so there is no long silence followed by a surprise at launch." },
  { q: "What if my requirements change halfway through?", a: "They often do, and that is fine. Changes go through a simple change request, where we explain the effect on time and cost before starting. You stay in control of scope, and the backlog is reprioritised so the most valuable work always comes first." },
  { q: "Who will I be talking to day to day?", a: "You get one lead contact who knows your project, plus access to the designers and engineers working on it. We agree a regular rhythm of calls and updates, and use your preferred tools, so communication stays simple, honest and predictable throughout." },
  { q: "What happens after the product launches?", a: "Launch is the start of the next phase. We monitor the product, fix issues, apply security updates and plan improvements from real usage. Many clients move to a monthly support plan, because the team that built the product already knows it best." },
];

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

      <Faq faq={processFaq} tone="tint" />

      <ClosingCta title="Ready to start with discovery?" />
    </>
  );
}
