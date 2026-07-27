import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden mesh-hero px-5 py-32 text-center">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <p className="mono relative text-[11px] text-signal">404</p>
      <h1 className="display relative mt-4 max-w-2xl text-4xl md:text-6xl">
        This scene never made the cut.
      </h1>
      <p className="relative mt-5 max-w-md text-muted">
        The page you are looking for does not exist or has moved. Head back to
        the premiere.
      </p>
      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
        <MagneticButton href="/">Back home</MagneticButton>
        <Link
          href="/contact"
          className="display border border-ink/15 bg-white px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink/35"
        >
          Contact Softilect →
        </Link>
      </div>
    </section>
  );
}
