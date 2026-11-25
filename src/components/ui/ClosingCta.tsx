import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";

export function ClosingCta({
  title = "Ready for a product that feels like a film premiere?",
  text = "Tell us about your roadmap. We'll respond with a clear path from discovery to launch.",
  secondary = { href: "/work", label: "See our work" },
}: {
  title?: string;
  text?: string;
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section className="cta dk" data-tone="dark">
      <div className="glow" aria-hidden="true" />
      <NetworkCanvas />
      <div className="wrap">
        <div className="in">
          <span className="eyebrow">Start a project</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="acts">
            <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
            {secondary && <SecondaryButton href={secondary.href}>{secondary.label}</SecondaryButton>}
          </div>
        </div>
      </div>
    </section>
  );
}
