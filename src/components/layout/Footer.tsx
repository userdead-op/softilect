import Link from "next/link";

const links = [
  { href: "/services", label: "What we offer" },
  { href: "/work", label: "Digital Realm" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-bg-deep text-bg-mist">
      <div className="pointer-events-none absolute inset-0 grid-fade-deep opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mono text-[11px] text-signal-bright">Softilect</p>
            <h2 className="display mt-4 text-4xl tracking-[-0.05em] md:text-6xl">
              Software with
              <br />
              cinematic clarity.
            </h2>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mono text-[11px] text-bg-mist/70 transition-colors hover:text-signal-bright"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-bg-mist/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Softilect. All rights reserved.</p>
          <p className="mono text-[10px]">Built for founders who ship.</p>
        </div>
      </div>
    </footer>
  );
}
