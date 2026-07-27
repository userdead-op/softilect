"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GreenShadeLayers } from "@/components/ui/GreenShadeLayers";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const brief = String(data.get("brief") || "").trim();

    const subject = encodeURIComponent(
      `Softilect project brief${company ? ` · ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nBrief:\n${brief}`,
    );

    window.location.href = `mailto:hello@softilect.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the story you want to ship."
        description="Share a few details about your product, timeline, and ambition. We will reply with next steps for discovery."
      />

      <section className="bg-bg-mist px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <p className="mono text-[11px] text-signal">Direct</p>
              <a
                href="mailto:hello@softilect.com"
                className="display mt-3 block text-2xl tracking-[-0.03em] transition-colors hover:text-signal md:text-3xl"
              >
                hello@softilect.com
              </a>
            </div>
            <div>
              <p className="mono text-[11px] text-signal">Typical start</p>
              <p className="mt-3 max-w-sm text-muted">
                Discovery call → scope narrative → dedicated squad kickoff
                within 1-2 weeks.
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="border border-ink/10 bg-bg p-6 md:p-10"
          >
            {sent ? (
              <div className="py-16 text-center">
                <p className="mono text-[11px] text-signal">
                  Transmission received
                </p>
                <h2 className="display mt-4 text-3xl md:text-4xl">
                  Thanks, your email draft is ready.
                </h2>
                <p className="mt-4 text-muted">
                  If your mail app did not open, write us at{" "}
                  <a
                    href="mailto:hello@softilect.com"
                    className="text-signal underline-offset-2 hover:underline"
                  >
                    hello@softilect.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <label className="block">
                  <span className="mono text-[10px] text-muted">
                    Project brief
                  </span>
                  <textarea
                    name="brief"
                    required
                    rows={5}
                    className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-signal"
                    placeholder="What are you building, and what does success look like?"
                  />
                </label>
                <button
                  type="submit"
                  className="group btn-green-shade display relative w-full overflow-hidden px-6 py-4"
                >
                  <GreenShadeLayers />
                  <span className="relative z-10 text-bg-deep transition-colors duration-500 delay-300 group-hover:text-bg-mist">
                    Send the brief →
                  </span>
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mono text-[10px] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-signal"
      />
    </label>
  );
}
