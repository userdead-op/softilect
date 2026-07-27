"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { GreenShadeLayers } from "@/components/ui/GreenShadeLayers";

const desktopLinks = [
  { href: "/services", label: "What we offer" },
  { href: "/work", label: "Digital Realm" },
  { href: "/about", label: "About" },
];

const mobileLinks = [
  { href: "/services", label: "What we offer" },
  { href: "/work", label: "Digital Realm" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const darkHero =
    pathname.startsWith("/work/") || pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const lightChrome = darkHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "border-b border-ink/8 bg-bg/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="group relative z-50 flex items-baseline gap-2"
        >
          <span
            className={cn(
              "display text-2xl tracking-[-0.05em] transition-colors md:text-[1.75rem]",
              lightChrome ? "text-bg-mist" : "text-ink",
            )}
          >
            Softilect
          </span>
          <span
            className={cn(
              "mono hidden text-[10px] sm:inline",
              lightChrome ? "text-bg-mist/60" : "text-muted",
            )}
          >
            / studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "mono text-[11px] transition-colors",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-signal-bright"
                  : lightChrome
                    ? "text-bg-mist/75 hover:text-bg-mist"
                    : "text-ink-soft hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group btn-green-shade inline-flex items-center justify-center px-5 py-2.5 text-sm"
          >
            <GreenShadeLayers />
            <span className="relative z-10 display tracking-[-0.02em] text-bg-deep transition-colors duration-500 delay-300 group-hover:text-bg-mist">
              Start a project
            </span>
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "relative z-50 flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_8px_30px_rgba(16,24,32,0.08)] backdrop-blur-xl lg:hidden",
            lightChrome
              ? "border-white/20 bg-white/10"
              : "border-ink/10 bg-white/40",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative flex h-3.5 w-5 flex-col justify-between">
            <span
              className={cn(
                "block h-[1.5px] w-full origin-center rounded-full transition-transform duration-300",
                lightChrome ? "bg-bg-mist" : "bg-ink",
                open && "translate-y-[6px] rotate-45 !bg-ink",
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-full rounded-full transition-opacity duration-200",
                lightChrome ? "bg-bg-mist" : "bg-ink",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-full origin-center rounded-full transition-transform duration-300",
                lightChrome ? "bg-bg-mist" : "bg-ink",
                open && "-translate-y-[6px] -rotate-45 !bg-ink",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-[#0b1218]/35 backdrop-blur-md"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="absolute inset-x-4 top-[4.75rem] overflow-hidden rounded-[2rem] border border-white/50 bg-white/45 p-6 shadow-[0_30px_80px_rgba(16,24,32,0.18)] backdrop-blur-2xl md:inset-x-8 md:p-8"
              style={{
                backgroundImage:
                  "linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,255,255,0.28) 45%, rgba(46,196,160,0.12))",
              }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal-bright/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-ember/20 blur-3xl" />

              <div className="relative">
                <p className="mono text-[10px] text-ink-soft">Navigate</p>
                <nav className="mt-6 flex flex-col gap-2">
                  {mobileLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          "display flex items-center justify-between rounded-2xl px-4 py-3.5 text-3xl tracking-[-0.04em] transition-colors md:text-4xl",
                          pathname === link.href ||
                            pathname.startsWith(`${link.href}/`)
                            ? "bg-white/50 text-signal"
                            : "text-ink hover:bg-white/35",
                        )}
                      >
                        <span>{link.label}</span>
                        <span className="mono text-[10px] text-muted">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="group btn-green-shade display flex w-full items-center justify-center rounded-full px-6 py-4 text-base shadow-lg shadow-signal/25"
                  >
                    <GreenShadeLayers />
                    <span className="relative z-10 text-bg-deep transition-colors duration-500 delay-300 group-hover:text-bg-mist">
                      Start a project →
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
