"use client";

import { ServiceVisual } from "@/components/services/ServiceVisual";
import { Faq } from "@/components/services/Faq";
import { FormEvent, useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { isValidPhone, PHONE_PATTERN } from "@/lib/phone";
import { CONTACT_EMAIL } from "@/lib/site";

const contactFaq = [
  { q: "What happens after I send my brief?", a: "A real person reads it and replies to arrange a short discovery call. We listen, ask questions and then send a written scope with a clear plan and quote. There is no obligation, and we are happy to sign an NDA before you share sensitive details." },
  { q: "Do I need a finished specification to get in touch?", a: "No. Many clients arrive with just an idea, a rough sketch or a problem to solve. That is exactly what discovery is for. We help you define scope, priorities and a sensible first release, so you do not need technical documents to start the conversation." },
  { q: "Can you work with our timezone and team?", a: "Yes. We are UK-led and work with clients in the UK, the US, the UAE and beyond. We agree a regular rhythm of calls and updates, use your preferred tools, and can slot in beside your in-house designers or developers." },
  { q: "How do you price projects?", a: "We do not publish a flat price because every project differs in scope, integrations and design depth. After discovery we send a fixed scope and quote, so you know the total before work starts. Changes are estimated openly before we begin them." },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setPhoneError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").trim();
    if (!isValidPhone(phone)) {
      setPhoneError("Enter a valid phone number (7 to 15 digits; + and spaces allowed).");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone,
          company: String(data.get("company") || "").trim(),
          brief: String(data.get("brief") || "").trim(),
          website: String(data.get("website") || "").trim(),
          elapsed: Date.now() - startedAt.current,
        }),
      });
      const payload = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(payload.error || "Could not send your brief.");
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your brief.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the product you want to ship."
        lead="Share a few details about your product, timeline and goals. We will reply with next steps for a discovery call."
        aside={<ServiceVisual slug="contact" />}
      />
      <section className="sec pure" data-tone="light">
        <div className="wrap split" style={{ gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)" }}>
          <aside className="sidelist">
            <div>
              <h3>Email</h3>
              <a className="big" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div>
              <h3>What happens next</h3>
              <p>Discovery call, then a written scope, then your dedicated squad kicks off, usually within one to two weeks.</p>
            </div>
            <div>
              <h3>Where we work</h3>
              <p>Remote-first, working with teams in the UK, the UAE, the US and beyond.</p>
            </div>
          </aside>

          {sent ? (
            <div className="done" role="status">
              <span className="eyebrow">Message received</span>
              <h2>Thanks, your brief is on its way.</h2>
              <p>We have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form className="form panel" onSubmit={onSubmit} noValidate={false}>
              <div className="two">
                <label className="field"><span>Name</span><input name="name" required autoComplete="name" maxLength={120} /></label>
                <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" maxLength={200} /></label>
              </div>
              <div className="two">
                <label className="field">
                  <span>Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    pattern={PHONE_PATTERN}
                    placeholder="+44 20 1234 5678"
                    title="Use 7 to 15 digits. Optional +, spaces, dashes or parentheses."
                    aria-invalid={phoneError ? true : undefined}
                    onChange={() => phoneError && setPhoneError(null)}
                  />
                  {phoneError && <small>{phoneError}</small>}
                </label>
                <label className="field"><span>Company</span><input name="company" autoComplete="organization" maxLength={160} /></label>
              </div>
              <label className="field">
                <span>Project brief</span>
                <textarea name="brief" required rows={6} maxLength={8000} placeholder="What are you building, and what does success look like?" />
              </label>
              <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {error && <div className="alert" role="alert">{error}</div>}
              <div>
                <button type="submit" className="btn-p" disabled={sending} style={{ cursor: sending ? "wait" : undefined }}>
                  {sending ? "Sending..." : "Send brief"}
                  <svg className="mo" viewBox="0 0 24 24" aria-hidden="true"><path /></svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Faq faq={contactFaq} />
    </>
  );
}
