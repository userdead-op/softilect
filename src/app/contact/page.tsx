"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { GreenShadeLayers } from "@/components/ui/GreenShadeLayers";
import { isValidPhone, PHONE_PATTERN } from "@/lib/phone";
import { cn } from "@/lib/cn";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setPhoneError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").trim();

    if (!isValidPhone(phone)) {
      setPhoneError(
        "Enter a valid phone number (7–15 digits; + and spaces allowed).",
      );
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
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        throw new Error(payload.error || "Could not send your brief.");
      }

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
            className="relative border border-ink/10 bg-bg p-6 md:p-10"
          >
            {sent ? (
              <div className="py-16 text-center">
                <p className="mono text-[11px] text-signal">
                  Transmission received
                </p>
                <h2 className="display mt-4 text-3xl md:text-4xl">
                  Thanks — your brief is on its way.
                </h2>
                <p className="mt-4 text-muted">
                  We received your message and will get back to you ASAP.{" "}
                  {/* <a
                    href="mailto:hello@softilect.com"
                    className="text-signal underline-offset-2 hover:underline"
                  >
                    hello@softilect.com
                  </a> */}
                  
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  pattern={PHONE_PATTERN}
                  placeholder="+1 (555) 123-4567"
                  title="Use 7–15 digits. Optional +, spaces, dashes, or parentheses."
                  error={phoneError}
                  onChange={() => {
                    if (phoneError) setPhoneError(null);
                  }}
                />
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
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />
                {error ? (
                  <p className="text-sm text-ember" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={sending}
                  className="group btn-green-shade display relative w-full overflow-hidden px-6 py-4 disabled:cursor-wait disabled:opacity-70"
                >
                  <GreenShadeLayers />
                  <span className="relative z-10 text-bg-deep transition-colors duration-500 delay-300 group-hover:text-bg-mist">
                    {sending ? "Sending…" : "Send the brief →"}
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
  inputMode,
  autoComplete,
  pattern,
  placeholder,
  title,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  pattern?: string;
  placeholder?: string;
  title?: string;
  error?: string | null;
  onChange?: () => void;
}) {
  return (
    <label className="block">
      <span className="mono text-[10px] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        autoComplete={autoComplete}
        pattern={pattern}
        placeholder={placeholder}
        title={title}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        className={cn(
          "mt-2 w-full border bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-signal",
          error ? "border-ember" : "border-ink/15",
        )}
      />
      {error ? (
        <span className="mt-2 block text-sm text-ember" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
