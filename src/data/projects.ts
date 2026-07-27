export type Project = {
  slug: string;
  name: string;
  sector: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: "zakatcoin-zakpay",
    name: "ZakatCoin / ZakPay",
    sector: "Web3 · Fintech",
    summary:
      "Blockchain charity platform that automates Zakat calculation and distribution through smart contracts, paired with a cross-platform payments experience.",
    challenge:
      "Faith-based giving platforms often struggle with transparent fund flows, accurate calculation rules, and trust between donors and beneficiaries across borders.",
    approach:
      "Softilect shaped a dual-surface product: a smart-contract layer for programmable distribution and a mobile/web payments companion for everyday contribution journeys, with clear audit trails and role-based controls.",
    outcome:
      "A production-ready Web3 fintech product that couples ritual accuracy with modern payment UX, suitable for donors, operators, and compliance stakeholders.",
    services: ["blockchain", "app-development", "ux-ui-design", "saas"],
    stack: ["Smart contracts", "React Native", "Web dashboards", "Wallet flows"],
    image:
      "https://images.unsplash.com/photo-1639763482872-ebb7d1e5e421?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract blockchain network visualization with luminous nodes",
    featured: true,
    seoTitle: "ZakatCoin ZakPay Case Study | Softilect Web3 Fintech",
    seoDescription:
      "How Softilect delivered ZakatCoin and ZakPay: a blockchain Zakat platform with smart-contract distribution and cross-platform payments.",
  },
  {
    slug: "kleenup",
    name: "KLEENUP",
    sector: "Marketplace · Web + Mobile",
    summary:
      "On-demand cleaning marketplace where customers post jobs and vetted local cleaners bid in real time across web and mobile apps.",
    challenge:
      "Two-sided marketplaces fail when trust, matching speed, and ops tooling are treated as afterthoughts instead of core product surfaces.",
    approach:
      "We designed job posting, bidding, cleaner vetting, and fulfillment workflows as one system, web platform, iOS/Android clients, and backend services for identity and ratings.",
    outcome:
      "A launch-ready marketplace that connects demand and supply with real-time bidding and operational guardrails for quality.",
    services: [
      "web-development",
      "app-development",
      "custom-software-development",
      "ux-ui-design",
    ],
    stack: ["Next.js", "Mobile apps", "Realtime bidding", "Admin ops"],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Clean modern interior suggesting on-demand home services",
    featured: true,
    seoTitle: "KLEENUP Marketplace Case Study | Softilect Product Build",
    seoDescription:
      "Softilect case study for KLEENUP, an on-demand cleaning marketplace with realtime bidding, vetting: and multi-platform delivery.",
  },
  {
    slug: "savo-prep-center",
    name: "Savo Prep Center",
    sector: "E-commerce Ops",
    summary:
      "Internal management system and client-facing platform for a multichannel Amazon, Walmart, and eBay fulfillment center.",
    challenge:
      "Multichannel prep centers drown in spreadsheet chaos, inventory mismatches, shipping delays, and clients who cannot see live status.",
    approach:
      "Softilect built an operations core for inventory and shipping plus a client portal for realtime reporting, so warehouse teams and merchants share one source of truth.",
    outcome:
      "Faster fulfillment visibility, fewer handoff errors, and a scalable ops platform for ecommerce logistics growth.",
    services: [
      "ecommerce",
      "custom-software-development",
      "web-development",
      "saas",
    ],
    stack: ["Ops dashboards", "Inventory systems", "Client portals", "Reporting"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Warehouse fulfillment aisles representing ecommerce logistics",
    featured: true,
    seoTitle: "Savo Prep Center Case Study | Softilect Ecommerce Ops",
    seoDescription:
      "How Softilect engineered Savo Prep Center, inventory, shipping: and client reporting for multichannel ecommerce fulfillment.",
  },
  {
    slug: "yana-meals",
    name: "YANA Meals",
    sector: "Healthcare · Web2",
    summary:
      "Patient portal and cross-platform meal-subscription product with HIPAA-aware messaging, PERS device integration, and RCM billing flows.",
    challenge:
      "Healthcare products must balance caregiving UX with strict privacy, device integrations, and revenue-cycle complexity, without slowing clinical operations.",
    approach:
      "As an end-to-end delivery partner, Softilect coordinated portal experiences, subscription logistics, secure messaging, PERS signals (fall detection, GPS), and billing workflows under healthcare constraints.",
    outcome:
      "A cohesive healthcare product surface that supports patients, caregivers, and operations teams with compliance-minded architecture.",
    services: [
      "healthcare",
      "app-development",
      "custom-software-development",
      "quality-assurance",
    ],
    stack: ["Patient portal", "Mobile apps", "PERS integration", "RCM billing"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Healthcare professional using a digital tablet in a clinical setting",
    featured: true,
    seoTitle: "YANA Meals Case Study | Softilect Healthcare Software",
    seoDescription:
      "Softilect healthcare case study for YANA Meals, patient portal, meal subscriptions, HIPAA-aware messaging: and PERS integrations.",
  },
  {
    slug: "the-duh",
    name: "The DUH",
    sector: "Web3 · Sports-tech",
    summary:
      "Fantasy sports platform where users mint, burn, and trade liquid athlete assets tied to real-world performance.",
    challenge:
      "Sports fans want ownership mechanics that feel liquid and fair, without opaque token economics or fragile trading UX.",
    approach:
      "Softilect supported product delivery around athlete-linked digital assets, marketplace trading loops, and performance-tied mechanics that stay understandable to non-crypto users.",
    outcome:
      "A distinctive Web3 sports product concept brought into a coherent build path for minting, trading, and engagement.",
    services: ["blockchain", "dapps", "nft-marketplaces", "ux-ui-design"],
    stack: ["Token mechanics", "Marketplace UX", "Web3 wallets", "Sports data hooks"],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Athletes competing on a track representing sports performance data",
    featured: false,
    seoTitle: "The DUH Case Study | Softilect Web3 Sports Platform",
    seoDescription:
      "Case study: Softilect delivery for The DUH, fantasy sports Web3 platform with mint, burn: and trade flows for athlete assets.",
  },
  {
    slug: "plism-art",
    name: "PLISM Art",
    sector: "Web3 · Creative",
    summary:
      "Web3 creative platform coordinated through product build milestones ahead of a public token launch.",
    challenge:
      "Creative token launches often prioritize hype over product readiness, leaving communities with incomplete experiences at TGE.",
    approach:
      "Softilect sequenced product delivery around launch-critical journeys: creator tooling, community surfaces, and release readiness checkpoints before token go-live.",
    outcome:
      "A coordinated product path that kept creative experience work aligned with launch timing and stakeholder expectations.",
    services: ["blockchain", "nft-marketplaces", "web-development", "devops"],
    stack: ["Web3 product ops", "Launch readiness", "Creative UX", "Release gates"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract colorful digital art composition for creative Web3 platform",
    featured: false,
    seoTitle: "PLISM Art Case Study | Softilect Web3 Creative Launch",
    seoDescription:
      "How Softilect coordinated PLISM Art product delivery ahead of a Web3 creative platform token launch.",
  },
  {
    slug: "peeksta-ai",
    name: "Peeksta AI",
    sector: "SaaS · AI",
    summary:
      "SaaS platform and marketing site for an AI workforce product, automations and AI employees that plug into business workflows.",
    challenge:
      "AI workforce tools must prove usefulness fast: clear onboarding, trustworthy automation, and a website that converts technical buyers.",
    approach:
      "Softilect delivered product and web surfaces together, positioning AI employees as operational teammates while engineering integration-friendly workflow experiences.",
    outcome:
      "A cohesive AI SaaS presence spanning product narrative, conversion site, and automation-ready platform foundations.",
    services: ["gen-ai", "saas", "web-development", "ux-ui-design"],
    stack: ["AI workflows", "SaaS UI", "Marketing site", "Integrations"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Futuristic AI interface glow representing intelligent automation",
    featured: false,
    seoTitle: "Peeksta AI Case Study | Softilect Gen AI SaaS",
    seoDescription:
      "Softilect case study for Peeksta AI: SaaS platform and website for AI workforce automations and digital employees.",
  },
  {
    slug: "adsells",
    name: "Adsells",
    sector: "Enterprise · B2B",
    summary:
      "Custom internal system for marketing-campaign planning and execution across trade marketing, out-of-home, and digital divisions.",
    challenge:
      "Multi-division agencies lose time when campaign planning lives in disconnected tools that cannot reflect real operational handoffs.",
    approach:
      "Softilect engineered a centralized campaign workspace tailored to enterprise advertising workflows, planning, execution tracking, and cross-team visibility.",
    outcome:
      "One operational system for campaign orchestration across trade, OOH, and digital teams, reducing friction and status chasing.",
    services: [
      "crms-cms",
      "custom-software-development",
      "digital-transformation",
      "saas",
    ],
    stack: ["Campaign planning", "Internal CRM workflows", "Reporting", "Role access"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Analytics dashboard on a laptop for enterprise marketing operations",
    featured: false,
    seoTitle: "Adsells Case Study | Softilect Enterprise CRM Software",
    seoDescription:
      "Softilect enterprise case study for Adsells: custom campaign planning and execution software for multi-division advertising groups.",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByService(serviceSlug: string) {
  return projects.filter((p) => p.services.includes(serviceSlug));
}
