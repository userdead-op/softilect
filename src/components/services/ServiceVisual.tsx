import type { ReactNode } from "react";

/**
 * Hero art for service pages. Every service gets its own animated core, its own labels and one of four
 * frame styles, all drawn in the home page language: mint lines, diamonds and floating plates.
 */
type Plate = { label: string; x: number; y: number };

const slots: [number, number][][] = [
  [[18, 20], [80, 16], [87, 54], [74, 86], [16, 76]],
  [[14, 38], [48, 8], [84, 28], [84, 74], [30, 91]],
  [[22, 13], [78, 11], [86, 47], [64, 92], [14, 66]],
];

const meta: Record<string, { labels: string[]; core: () => ReactNode }> = {
  "digital-transformation": {
    labels: ["Legacy", "Automation", "Data", "Adoption", "Results"],
    core: () => (
      <g className="c-bob">
        <rect x="150" y="130" width="64" height="64" rx="6" className="c-line c-dash" />
        <rect x="186" y="150" width="64" height="64" rx="6" className="c-soft c-line c-turn" />
        <path d="M222 128l20-16M242 112h-14M242 112v14" className="c-line" />
      </g>
    ),
  },
  "web-development": {
    labels: ["Fast pages", "SEO-ready", "Secure", "Easy to edit", "Checkout"],
    core: () => (
      <g className="c-bob">
        <rect x="148" y="140" width="104" height="76" rx="10" className="c-white" />
        <path d="M148 158h104" className="c-line" />
        <circle cx="160" cy="149" r="2.6" className="c-fill" />
        <circle cx="170" cy="149" r="2.6" className="c-fill" />
        <rect x="160" y="168" width="48" height="10" rx="3" className="c-fill c-rise" style={{ animationDelay: "0s" }} />
        <rect x="160" y="184" width="80" height="6" rx="3" className="c-soft c-rise" style={{ animationDelay: "0.4s" }} />
        <rect x="160" y="196" width="60" height="6" rx="3" className="c-soft c-rise" style={{ animationDelay: "0.8s" }} />
        <path d="M232 190l0 22l6-5l5 10l4-2l-5-10l8 0z" className="c-cursor" />
      </g>
    ),
  },
  "app-development": {
    labels: ["iOS", "Android", "Backend", "Admin panel", "Store release"],
    core: () => (
      <g className="c-bob">
        <rect x="172" y="124" width="56" height="106" rx="12" className="c-white" />
        <rect x="190" y="130" width="20" height="4" rx="2" className="c-soft" />
        <rect x="180" y="144" width="40" height="24" rx="6" className="c-fill c-rise" />
        <rect x="180" y="174" width="40" height="9" rx="4" className="c-soft c-rise" style={{ animationDelay: "0.5s" }} />
        <rect x="180" y="188" width="40" height="9" rx="4" className="c-soft c-rise" style={{ animationDelay: "0.9s" }} />
        <circle cx="200" cy="216" r="4" className="c-fill" />
      </g>
    ),
  },
  "custom-software-development": {
    labels: ["Workflows", "Portals", "Integrations", "Reports", "Secure"],
    core: () => (
      <g className="c-bob">
        <rect x="160" y="170" width="40" height="40" rx="6" className="c-white" />
        <rect x="204" y="170" width="40" height="40" rx="6" className="c-fill c-drop" />
        <rect x="182" y="126" width="40" height="40" rx="6" className="c-soft c-line c-drop" style={{ animationDelay: "0.6s" }} />
      </g>
    ),
  },
  "ux-ui-design": {
    labels: ["Research", "Wireframes", "Prototype", "Design system", "Testing"],
    core: () => (
      <g className="c-bob">
        <path d="M150 210C170 130 230 130 250 210" className="c-line c-draw" />
        <rect x="145" y="205" width="10" height="10" className="c-white" />
        <rect x="245" y="205" width="10" height="10" className="c-white" />
        <circle cx="200" cy="146" r="6" className="c-fill c-pulse" />
        <path d="M214 176l0 22l6-5l5 10l4-2l-5-10l8 0z" className="c-cursor" />
      </g>
    ),
  },
  "design-and-development": {
    labels: ["Design", "Build", "One squad", "No handoff gaps", "Launch"],
    core: () => (
      <g className="c-bob">
        <rect x="150" y="146" width="62" height="62" rx="6" className="c-soft c-line c-turn" />
        <rect x="188" y="146" width="62" height="62" rx="6" className="c-fill c-turn2" style={{ opacity: 0.85 }} />
      </g>
    ),
  },
  ecommerce: {
    labels: ["Checkout", "Catalogue", "Stock sync", "Shipping", "Marketplace"],
    core: () => (
      <g className="c-bob">
        <path d="M158 156h84l-8 62h-68z" className="c-white" />
        <path d="M178 156v-10a22 22 0 0144 0v10" className="c-line" />
        <circle cx="200" cy="186" r="9" className="c-fill c-pulse" />
        <path d="M195 186l4 4 7-8" className="c-tick" />
      </g>
    ),
  },
  healthcare: {
    labels: ["Patient portal", "Secure messaging", "Bookings", "Records", "Privacy"],
    core: () => (
      <g className="c-bob">
        <path d="M200 218C150 186 148 148 176 144c12-1 20 6 24 14 4-8 12-15 24-14 28 4 26 42-24 74z" className="c-white" />
        <path d="M156 182h22l8-16 12 32 8-16h30" className="c-line c-draw" />
      </g>
    ),
  },
  "crms-cms": {
    labels: ["Pipelines", "Contacts", "Content", "Automation", "Reports"],
    core: () => (
      <g className="c-bob">
        <path d="M152 140h96l-34 40v36l-28-14v-22z" className="c-white" />
        <circle cx="176" cy="126" r="5" className="c-fill c-rise" />
        <circle cx="200" cy="120" r="5" className="c-soft c-line c-rise" style={{ animationDelay: "0.5s" }} />
        <circle cx="224" cy="126" r="5" className="c-fill c-rise" style={{ animationDelay: "1s" }} />
      </g>
    ),
  },
  blockchain: {
    labels: ["Smart contracts", "Tokens", "Audited", "Multi-chain", "Wallet connect"],
    core: () => (
      <g className="c-bob">
        <rect x="140" y="160" width="44" height="44" rx="6" className="c-white" />
        <rect x="178" y="160" width="44" height="44" rx="6" className="c-fill" />
        <rect x="216" y="160" width="44" height="44" rx="6" className="c-white" />
        <path d="M184 182h-6M222 182h-6" className="c-line c-dash" />
        <rect x="178" y="122" width="44" height="30" rx="6" className="c-soft c-line c-drop" />
      </g>
    ),
  },
  exchanges: {
    labels: ["Order book", "Matching engine", "Wallets", "Liquidity", "KYC"],
    core: () => (
      <g className="c-bob">
        <rect x="150" y="150" width="14" height="50" rx="3" className="c-fill c-rise" />
        <rect x="170" y="134" width="14" height="66" rx="3" className="c-soft c-line c-rise" style={{ animationDelay: "0.4s" }} />
        <rect x="190" y="160" width="14" height="40" rx="3" className="c-fill c-rise" style={{ animationDelay: "0.8s" }} />
        <path d="M222 148h28m0 0l-8-8m8 8l-8 8M250 196h-28m0 0l8-8m-8 8l8 8" className="c-line" />
      </g>
    ),
  },
  "decentralized-wallets": {
    labels: ["Self-custody", "Recovery", "Multi-chain", "Clear signing", "Portfolio"],
    core: () => (
      <g className="c-bob">
        <rect x="148" y="146" width="104" height="72" rx="12" className="c-white" />
        <path d="M148 164h104" className="c-line" />
        <rect x="214" y="180" width="38" height="24" rx="8" className="c-fill" />
        <circle cx="228" cy="192" r="3" className="c-white" />
        <path d="M164 146l8-18h56l8 18" className="c-line c-dash" />
      </g>
    ),
  },
  dapps: {
    labels: ["On-chain logic", "Wallet connect", "Indexed data", "Governance", "Cross-chain"],
    core: () => (
      <g className="c-bob">
        <path d="M200 124l46 26v52l-46 26-46-26v-52z" className="c-white" />
        <circle cx="200" cy="176" r="10" className="c-fill c-pulse" />
        <circle cx="200" cy="140" r="4" className="c-line" />
        <circle cx="234" cy="196" r="4" className="c-line" />
        <circle cx="166" cy="196" r="4" className="c-line" />
        <path d="M200 144v22M231 194l-22-12M169 194l22-12" className="c-line" />
      </g>
    ),
  },
  "nft-marketplaces": {
    labels: ["Mint", "List", "Auctions", "Royalties", "Creator tools"],
    core: () => (
      <g className="c-bob">
        <rect x="152" y="130" width="96" height="92" rx="10" className="c-white" />
        <rect x="164" y="142" width="72" height="56" rx="6" className="c-soft" />
        <path d="M200 152l16 16-16 16-16-16z" className="c-fill c-turn" />
        <rect x="164" y="206" width="36" height="8" rx="4" className="c-soft c-line" />
      </g>
    ),
  },
  "gen-ai": {
    labels: ["Copilots", "Your data", "Automation", "Evaluated", "Private"],
    core: () => (
      <g className="c-bob">
        <path d="M200 124c4 28 14 38 42 42-28 4-38 14-42 42-4-28-14-38-42-42 28-4 38-14 42-42z" className="c-fill c-pulse" />
        <path d="M244 128c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" className="c-line" />
        <circle cx="150" cy="206" r="4" className="c-line c-pulse" />
      </g>
    ),
  },
  saas: {
    labels: ["Multi-tenant", "Billing", "Teams and roles", "Analytics", "API"],
    core: () => (
      <g className="c-bob">
        <path d="M200 192l56-28-56-28-56 28z" className="c-white c-drop" style={{ animationDelay: "0.8s" }} />
        <path d="M144 180l56 28 56-28" className="c-line" />
        <path d="M144 196l56 28 56-28" className="c-line" />
        <path d="M200 164l30-15-30-15-30 15z" className="c-fill" />
      </g>
    ),
  },
  "quality-assurance": {
    labels: ["Manual", "Automated", "Devices", "Performance", "Release gate"],
    core: () => (
      <g className="c-bob">
        <path d="M200 124l50 18v36c0 28-22 42-50 52-28-10-50-24-50-52v-36z" className="c-white" />
        <path d="M178 182l16 16 30-34" className="c-tick c-draw" />
        <path d="M156 160h88" className="c-scan" />
      </g>
    ),
  },
  devops: {
    labels: ["CI/CD", "Cloud", "Monitoring", "Rollbacks", "Infrastructure as code"],
    core: () => (
      <g className="c-bob">
        <path d="M146 180c0-32 42-32 54 0s54 32 54 0-42-32-54 0-54 32-54 0z" className="c-line c-dash2" />
        <rect x="150" y="196" width="12" height="12" rx="2" className="c-fill c-pulse" />
        <rect x="238" y="140" width="12" height="12" rx="2" className="c-fill c-pulse" style={{ animationDelay: "1s" }} />
      </g>
    ),
  },
  "maintenance-and-support": {
    labels: ["Monitoring", "Security patches", "Bug fixes", "Improvements", "Reports"],
    core: () => (
      <g className="c-bob">
        <circle cx="200" cy="176" r="34" className="c-gear c-turn" />
        <circle cx="200" cy="176" r="20" className="c-white" />
        <path d="M188 176h8l5-10 6 20 4-10h8" className="c-line c-draw" />
      </g>
    ),
  },
  services: {
    labels: ["Strategy", "Design", "Engineering", "Web3", "AI"],
    core: () => (
      <g className="c-bob">
        <path d="M200 124l36 36-36 36-36-36z" className="c-fill c-pulse" />
        <path d="M152 176l24 24-24 24-24-24z" className="c-white" />
        <path d="M248 176l24 24-24 24-24-24z" className="c-white" />
        <path d="M176 200h48" className="c-line c-dash" />
      </g>
    ),
  },
  about: {
    labels: ["UK-led", "Senior people", "Plain talk", "Long-term", "Global team"],
    core: () => (
      <g className="c-bob">
        <circle cx="178" cy="176" r="38" className="c-soft c-line" />
        <circle cx="222" cy="176" r="38" className="c-white" style={{ fillOpacity: 0.7 }} />
        <path d="M200 160l16 16-16 16-16-16z" className="c-fill c-turn" />
      </g>
    ),
  },
  work: {
    labels: ["Fintech", "Web3", "Healthcare", "Marketplaces", "AI SaaS"],
    core: () => (
      <g className="c-bob">
        <rect x="156" y="130" width="88" height="64" rx="8" className="c-soft c-line c-drop" style={{ animationDelay: "0.8s" }} />
        <rect x="148" y="148" width="88" height="64" rx="8" className="c-white" />
        <path d="M168 182l14-14 12 10 22-24" className="c-tick c-draw" />
      </g>
    ),
  },
  process: {
    labels: ["Discover", "Design", "Build", "Test", "Launch"],
    core: () => (
      <g className="c-bob">
        <path d="M150 176h100" className="c-line c-dash" />
        <path d="M156 160l22 16-22 16z" className="c-fill c-rise" />
        <path d="M190 160l22 16-22 16z" className="c-soft c-line c-rise" style={{ animationDelay: "0.5s" }} />
        <path d="M224 160l22 16-22 16z" className="c-white c-rise" style={{ animationDelay: "1s" }} />
      </g>
    ),
  },
  contact: {
    labels: ["Real people", "Clear plan", "NDA on request", "No pressure", "Plain answers"],
    core: () => (
      <g className="c-bob">
        <rect x="148" y="146" width="104" height="72" rx="10" className="c-white" />
        <path d="M152 152l48 38 48-38" className="c-line c-draw" />
        <path d="M242 134l8 8-8 8-8-8z" className="c-fill c-turn" />
      </g>
    ),
  },
};

export function hasServiceVisual(slug: string) {
  return slug in meta;
}

const order = Object.keys(meta);

export function ServiceVisual({ slug }: { slug: string }) {
  const m = meta[slug];
  if (!m) return null;
  const idx = order.indexOf(slug);
  const frame = idx % 4;
  const pos = slots[idx % slots.length];
  const plates: Plate[] = m.labels.map((label, i) => ({ label, x: pos[i][0], y: pos[i][1] }));
  const px = (v: number, max: number) => (v / 100) * max;
  return (
    <div className={`orb f${frame}`}>
      <svg viewBox="0 0 400 360" fill="none" role="presentation">
        {frame === 0 && (
          <>
            <ellipse className="o-ring r1" cx="200" cy="180" rx="150" ry="118" />
            <ellipse className="o-ring r2" cx="200" cy="180" rx="104" ry="80" />
          </>
        )}
        {frame === 1 && (
          <>
            <circle className="o-ring r2" cx="200" cy="180" r="128" />
            <circle className="o-ring r1" cx="200" cy="180" r="86" />
            <g className="o-orbit"><circle cx="200" cy="52" r="5" className="o-sat" /></g>
          </>
        )}
        {frame === 2 && (
          <>
            <rect className="o-ring r1" x="76" y="56" width="248" height="248" transform="rotate(45 200 180)" />
            <rect className="o-ring r2" x="118" y="98" width="164" height="164" transform="rotate(45 200 180)" />
          </>
        )}
        {frame === 3 && (
          <>
            <ellipse className="o-ring r2" cx="200" cy="180" rx="150" ry="100" transform="rotate(-18 200 180)" />
            <ellipse className="o-ring r1" cx="200" cy="180" rx="120" ry="70" transform="rotate(26 200 180)" />
          </>
        )}
        {plates.map((p, i) => (
          <line key={p.label} className="o-link" x1="200" y1="180" x2={px(p.x, 400)} y2={px(p.y, 360)} style={{ animationDelay: `${i * -0.7}s` }} />
        ))}
        {plates.map((p, i) => (
          <rect key={`n-${p.label}`} className="o-node" x={px(p.x, 400) - 4} y={px(p.y, 360) - 4} width="8" height="8" style={{ animationDelay: `${i * -0.5}s` }} />
        ))}
        <circle cx="200" cy="180" r="62" className="o-halo" />
        {m.core()}
        {[[40, 150], [360, 130], [120, 330], [300, 40], [250, 335]].map(([x, y], i) => (
          <circle key={i} className="o-dot" cx={x} cy={y} r="2.5" style={{ animationDelay: `${i * -0.9}s` }} />
        ))}
      </svg>
      {plates.map((p, i) => (
        <span className="o-plate" key={p.label} style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${i * -1.1}s` }}>
          {p.label}
        </span>
      ))}
    </div>
  );
}
