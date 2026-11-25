import type { Metadata } from "next";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="nf" data-tone="light">
      <div className="wrap">
        <div className="code" aria-hidden="true">404</div>
        <h1>This page does not exist.</h1>
        <p className="lead" style={{ marginInline: "auto" }}>The page you are looking for has moved or never existed.</p>
        <div className="acts">
          <PrimaryButton href="/">Back home</PrimaryButton>
          <SecondaryButton href="/contact">Contact Softilect</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
