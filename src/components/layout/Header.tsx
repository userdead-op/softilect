"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/Buttons";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const ptRef = useRef<HTMLSpanElement>(null);

  const activeHref = links.find((l) => !l.href.startsWith("/#") && (pathname === l.href || pathname.startsWith(`${l.href}/`)))?.href;

  const moveTo = useCallback((el: HTMLElement | null) => {
    const pt = ptRef.current;
    if (!pt) return;
    if (!el) {
      pt.style.opacity = "0";
      return;
    }
    pt.style.opacity = "1";
    pt.style.left = `${el.offsetLeft + el.offsetWidth / 2 - 3}px`;
  }, []);

  const resetDot = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    moveTo(activeHref ? nav.querySelector<HTMLElement>(`a[href="${activeHref}"]`) : null);
  }, [activeHref, moveTo]);

  useEffect(() => {
    resetDot();
    document.fonts?.ready.then(resetDot);
    const ro = new ResizeObserver(resetDot);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", resetDot);
    return () => { ro.disconnect(); window.removeEventListener("resize", resetDot); };
  }, [resetDot]);

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
        <nav className="nav" aria-label="Main" ref={navRef} onMouseLeave={resetDot}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === activeHref ? "on" : undefined}
              aria-current={l.href === activeHref ? "page" : undefined}
              onMouseEnter={(e) => moveTo(e.currentTarget)}
              onFocus={(e) => moveTo(e.currentTarget)}
            >
              {l.label}
            </Link>
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
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
      </div>
    </header>
  );
}
