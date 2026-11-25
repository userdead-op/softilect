import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; className?: string };

/** Primary call to action: white pill that turns green, with a diamond that spins into an arrow. */
export function PrimaryButton({ href, children, className = "", size }: Props & { size?: "sm" }) {
  return (
    <Link href={href} className={`btn-p${size === "sm" ? " sm" : ""} ${className}`.trim()}>
      {children}
      <svg className="mo" viewBox="0 0 24 24" aria-hidden="true">
        <path />
      </svg>
    </Link>
  );
}

/** Secondary action: text on a hairline, with a diamond that travels along it on hover. */
export function SecondaryButton({ href, children, className = "" }: Props) {
  return (
    <Link href={href} className={`btn-s ${className}`.trim()}>
      {children}
    </Link>
  );
}
