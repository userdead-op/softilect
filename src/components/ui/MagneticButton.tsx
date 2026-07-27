"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";
import { GreenShadeLayers } from "@/components/ui/GreenShadeLayers";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "deep";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "deep",
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isAccent = variant === "deep" || variant === "primary";

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-3.5 text-sm font-medium tracking-wide",
          isAccent && "btn-green-shade text-bg-deep",
          variant === "ghost" &&
            "border border-ink/15 bg-white text-ink hover:border-ink/35 hover:bg-bg-mist",
          className,
        )}
      >
        {isAccent && <GreenShadeLayers />}
        <span
          className={cn(
            "relative z-10 display text-[0.95rem] tracking-[-0.02em] transition-colors duration-500 delay-300",
            isAccent && "text-bg-deep group-hover:text-bg-mist",
            variant === "ghost" && "text-ink",
          )}
        >
          {children}
        </span>
        <span
          className={cn(
            "relative z-10 transition-all duration-500 delay-300 group-hover:translate-x-1",
            isAccent && "text-bg-deep group-hover:text-bg-mist",
            variant === "ghost" && "text-ink",
          )}
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}
