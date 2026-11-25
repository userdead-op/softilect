"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/Buttons";
import { serviceCategories, services } from "@/data/services";

type Key = "services" | "company" | "contact";
const company = [
  { href: "/about", label: "About Softilect", note: "Who we are and how we work" },
  { href: "/process", label: "Our process", note: "Nine phases, discovery to support" },
  { href: "/work", label: "Case studies", note: "Products we have delivered" },
];
const top: { key: Key; href: string; label: string; match: string[] }[] = [
  { key: "services", href: "/services", label: "Services", match: ["/services"] },
  { key: "company", href: "/about", label: "Company", match: ["/about", "/process", "/work"] },
  { key: "contact", href: "/contact", label: "Contact", match: ["/contact"] },
];
const mobileLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Our process" },
  { href: "/work", label: "Case studies" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<Key | null>(null);
  const closeTimer = useRef<number>(0);
  const navRef = useRef<HTMLElement>(null);
  const ptRef = useRef<HTMLSpanElement>(null);

  const activeKey = top.find((t) => t.match.some((m) => pathname === m || pathname.startsWith(`${m}/`)))?.key;
  const show = (k: Key | null) => { window.clearTimeout(closeTimer.current); setMenu(k); };
  const hide = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setMenu(null), 140); };

  const moveTo = useCallback((el: HTMLElement | null) => {
    const pt = ptRef.current;
    if (!pt) return;
    if (!el) {
      pt.style.opacity = "0";
      return;
    }
    pt.style.opacity = "1";
    const host = (pt.offsetParent as HTMLElement | null) ?? pt.parentElement!;
    const hr = host.getBoundingClientRect(), er = el.getBoundingClientRect();
    pt.style.left = `${er.left - hr.left - host.clientLeft + er.width / 2 - 3}px`;
  }, []);

  const resetDot = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    moveTo(activeKey ? nav.querySelector<HTMLElement>(`a[data-key="${activeKey}"]`) : null);
  }, [activeKey, moveTo]);

  useEffect(() => {
    resetDot();
    document.fonts?.ready.then(resetDot);
    const ro = new ResizeObserver(resetDot);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", resetDot);
    return () => { ro.disconnect(); window.removeEventListener("resize", resetDot); };
  }, [resetDot]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(null); };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 20);
      let isDark = false;
      document.querySelectorAll<HTMLElement>('[data-tone="dark"]').forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= 40 && r.bottom > 40) isDark = true;
      });
      setDark(isDark);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header className={`hd${solid || open ? " solid" : ""}${dark && !open ? " dark" : ""}`}>
      <div className="row">
        <Link className="logo" href="/" aria-label="Softilect home">
          Softilect<i aria-hidden="true" />
        </Link>
        <nav className="nav" aria-label="Main" ref={navRef} onMouseLeave={() => { resetDot(); hide(); }}>
          {top.map((t) => (
            <div
              key={t.key}
              className={`ni${t.key === "company" ? " dd" : ""}${t.key === "services" ? " mg" : ""}${menu === t.key ? " open" : ""}`}
              onMouseEnter={() => show(t.key === "contact" ? null : t.key)}
              onKeyDown={(e) => { if (e.key === "Escape") setMenu(null); }}
            >
              <Link
                href={t.href}
                data-key={t.key}
                className={t.key === activeKey ? "on" : undefined}
                aria-current={t.key === activeKey && t.key !== "company" ? "page" : undefined}
                aria-haspopup={t.key !== "contact" ? "true" : undefined}
                aria-expanded={t.key !== "contact" ? menu === t.key : undefined}
                onMouseEnter={(e) => moveTo(e.currentTarget)}
                onFocus={(e) => { moveTo(e.currentTarget); if (t.key !== "contact") show(t.key); }}
              >
                {t.label}
                {t.key !== "contact" && (
                  <svg className="cv" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5" /></svg>
                )}
              </Link>
              {t.key === "services" && (
                <div className="mega" onMouseEnter={() => show("services")} onClick={() => setMenu(null)}>
                  <div className="mg-in">
                    {serviceCategories.map((c) => (
                      <div key={c.id}>
                        <h4>{c.label}</h4>
                        <ul>
                          {services.filter((x) => x.category === c.id).map((x) => (
                            <li key={x.slug}><Link href={`/services/${x.slug}`}>{x.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link className="mg-all" href="/services">View all services</Link>
                </div>
              )}
              {t.key === "company" && (
                <div className="drop" onMouseEnter={() => show("company")} onClick={() => setMenu(null)}>
                  {company.map((c) => (
                    <Link key={c.href} href={c.href}>
                      <b>{c.label}</b>
                      <span>{c.note}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <span className="pt" ref={ptRef} aria-hidden="true" />
        </nav>
        <PrimaryButton href="/contact" size="sm">
          Book a call
        </PrimaryButton>
        <button
          className="mbtn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mpanel"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      <div id="mpanel" className={`mpanel${open ? " open" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
        {mobileLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
      </div>
    </header>
  );
}
