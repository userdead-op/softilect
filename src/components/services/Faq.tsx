import { JsonLd } from "@/components/seo/JsonLd";
import { PrimaryButton } from "@/components/ui/Buttons";
import { CONTACT_EMAIL } from "@/lib/site";

type Item = { q: string; a: string };

export function ServiceFaqJsonLd({ faq }: { faq: Item[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }}
    />
  );
}

export function Faq({ faq, tone = "tint" }: { faq: Item[]; tone?: "tint" | "pure" }) {
  return (
    <section className={`sec ${tone}`} data-tone="light">
      <ServiceFaqJsonLd faq={faq} />
      <div className="wrap faqw">
        <div className="faqh">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Questions we hear most.</h2>
          <p className="tlp">Short, straight answers. If yours is not here, ask us directly and we will reply with a clear plan, not a sales script.</p>
          <div className="faqc">
            <span>Still unsure?</span>
            <a className="mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <PrimaryButton href="/contact" size="sm">Talk to us</PrimaryButton>
          </div>
        </div>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q} name="faq">
              <summary>
                <span>{f.q}</span>
                <svg className="fd" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L21 12L12 21L3 12Z" /></svg>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
