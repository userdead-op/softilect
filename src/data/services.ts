export type ServiceBlock = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  short: string;
  hero: string;
  intro: string;
  whoFor: string[];
  howWeHelp: ServiceBlock[];
  deliverables: string[];
  niches: string[];
  relatedProjects: string[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
};

export const serviceCategories = [
  {
    id: "strategy",
    label: "Strategy & Transformation",
    description: "Clarity before code. Roadmaps that survive contact with reality.",
  },
  {
    id: "design",
    label: "Design & Experience",
    description: "Interfaces and systems that feel intentional from first click.",
  },
  {
    id: "engineering",
    label: "Product Engineering",
    description: "Web, mobile, SaaS, and custom platforms built to scale.",
  },
  {
    id: "industry",
    label: "Industry Platforms",
    description: "Specialist builds for commerce, healthcare, CRM/CMS, and ops.",
  },
  {
    id: "web3",
    label: "Blockchain & Web3",
    description: "CEX/DEX, wallets, dApps, and NFT marketplaces with secure foundations.",
  },
  {
    id: "intelligence",
    label: "AI & Reliability",
    description: "Gen AI products, QA, DevOps, and long-term maintenance.",
  },
] as const;

export const services: Service[] = [
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    category: "strategy",
    short:
      "Modernize legacy workflows into connected digital products your teams will actually use.",
    hero: "Transform operations into software that compounds.",
    intro:
      "Digital transformation at Softilect is not a buzzword deck. We map how work happens today, isolate friction, and rebuild processes as secure, measurable product systems, so leadership gets visibility and teams get tools that reduce manual load.",
    whoFor: [
      "Operators drowning in spreadsheets and shadow IT",
      "Founders consolidating tools after rapid growth",
      "Enterprises replacing brittle legacy modules",
    ],
    howWeHelp: [
      {
        title: "Process & systems discovery",
        body: "We document current-state journeys, data ownership, and integration debt before proposing architecture.",
      },
      {
        title: "Transformation roadmap",
        body: "Phased delivery plans prioritize high-ROI workflows first while protecting continuity for day-to-day operations.",
      },
      {
        title: "Change-ready rollout",
        body: "Training, access models, and release sequencing so adoption sticks after go-live.",
      },
    ],
    deliverables: [
      "Current-state audit",
      "Target architecture",
      "Phased delivery plan",
      "KPI framework",
    ],
    niches: ["Healthcare", "Ecommerce ops", "Enterprise CRM", "Internal tools"],
    relatedProjects: ["adsells", "savo-prep-center", "yana-meals"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team collaborating around strategy boards during digital transformation",
    seoTitle: "Digital Transformation Services | Softilect",
    seoDescription:
      "Softilect digital transformation services, process discovery, secure architecture: and phased software modernization for growing companies.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "engineering",
    short:
      "High-performance websites and web apps engineered for speed, SEO, and conversion.",
    hero: "Web platforms that load fast and earn trust.",
    intro:
      "From marketing sites to complex web applications, Softilect builds modern frontends and APIs with clean architecture, accessibility baselines, and performance budgets that protect both brand and search visibility.",
    whoFor: [
      "Startups needing a conversion-ready product site",
      "Teams replacing outdated CMS frontends",
      "Companies launching customer portals",
    ],
    howWeHelp: [
      {
        title: "Experience-led engineering",
        body: "We implement design systems and interaction patterns that stay maintainable as content and features grow.",
      },
      {
        title: "SEO-ready foundations",
        body: "Semantic structure, metadata strategy, and Core Web Vitals-minded delivery from the first release.",
      },
      {
        title: "Secure integrations",
        body: "Payments, auth, CMS, CRM, and analytics wired with least-privilege access and auditability.",
      },
    ],
    deliverables: [
      "Responsive web app / site",
      "CMS or headless content model",
      "Performance report",
      "Deployment pipeline",
    ],
    niches: ["Custom websites", "Ecommerce storefronts", "SaaS marketing", "Portals"],
    relatedProjects: ["kleenup", "peeksta-ai", "plism-art"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Developer workstation with code on screen for web development",
    seoTitle: "Web Development Company | Softilect",
    seoDescription:
      "Softilect web development services for fast, SEO-friendly websites and web applications, Next.js, APIs, CMS: and secure integrations.",
  },
  {
    slug: "app-development",
    name: "App Development",
    category: "engineering",
    short:
      "iOS, Android, and cross-platform apps with production-grade UX and backend pairing.",
    hero: "Mobile products that feel native and ship reliably.",
    intro:
      "Softilect designs and engineers mobile experiences for marketplaces, healthcare, fintech, and SaaS, with release discipline, offline-aware patterns where needed, and analytics that inform the next iteration.",
    whoFor: [
      "Marketplace founders building two-sided mobile demand",
      "Healthcare and fintech teams needing compliant UX",
      "SaaS products expanding into mobile workflows",
    ],
    howWeHelp: [
      {
        title: "Platform strategy",
        body: "Native vs cross-platform decisions based on UX ambition, timeline, and long-term maintenance cost.",
      },
      {
        title: "End-to-end delivery",
        body: "App clients, APIs, push/notification strategy, and store-ready release packaging.",
      },
      {
        title: "Quality gates",
        body: "Device matrix testing, crash monitoring hooks, and acceptance criteria before public release.",
      },
    ],
    deliverables: [
      "iOS / Android builds",
      "API contracts",
      "Store submission support",
      "Post-launch monitoring plan",
    ],
    niches: ["Marketplaces", "Healthcare apps", "Fintech wallets", "Field ops"],
    relatedProjects: ["kleenup", "yana-meals", "zakatcoin-zakpay"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Smartphone in hand displaying a modern mobile application interface",
    seoTitle: "Mobile App Development | Softilect",
    seoDescription:
      "Softilect app development for iOS, Android, and cross-platform products, marketplaces, healthcare, fintech: and SaaS mobile experiences.",
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    category: "engineering",
    short:
      "Bespoke platforms engineered around your operations, not forced into generic templates.",
    hero: "Software shaped to your business logic.",
    intro:
      "When off-the-shelf tools create more work than they remove, Softilect builds custom systems: internal platforms, customer portals, workflow engines, and domain-specific products with secure architecture and clear ownership models.",
    whoFor: [
      "Ops-heavy businesses with unique workflows",
      "Agencies and enterprises needing internal systems",
      "Product teams validating a custom platform thesis",
    ],
    howWeHelp: [
      {
        title: "Domain modeling",
        body: "We translate how your teams really work into data models, permissions, and automations.",
      },
      {
        title: "Robust architecture",
        body: "Modular services, audit trails, and scalable data patterns designed for growth and compliance.",
      },
      {
        title: "Iterative delivery",
        body: "Ship usable slices early, then expand modules without rewriting the foundation.",
      },
    ],
    deliverables: [
      "Custom platform MVP / V1",
      "Admin & role systems",
      "Integration layer",
      "Technical documentation",
    ],
    niches: ["Ecommerce ops", "CRM workflows", "Healthcare portals", "Enterprise tools"],
    relatedProjects: ["savo-prep-center", "adsells", "yana-meals"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Product team working on custom software at a collaborative desk",
    seoTitle: "Custom Software Development | Softilect",
    seoDescription:
      "Softilect custom software development for internal platforms, portals: and domain-specific systems with secure scalable architecture.",
  },
  {
    slug: "ux-ui-design",
    name: "UX/UI Design",
    category: "design",
    short:
      "Research-backed interfaces and design systems that make complex products feel simple.",
    hero: "Design that reduces friction and raises conversion.",
    intro:
      "Softilect UX/UI work pairs product strategy with visual craft. We map journeys, prototype critical flows, and deliver design systems that engineering can implement without guesswork, including motion guidelines for premium product feel.",
    whoFor: [
      "Founders validating product direction before heavy build",
      "Teams redesigning confusing legacy UX",
      "Brands needing a cohesive multi-surface system",
    ],
    howWeHelp: [
      {
        title: "Journey & information architecture",
        body: "We clarify user goals, edge cases, and navigation models before pixels lock in.",
      },
      {
        title: "High-fidelity systems",
        body: "Components, states, and responsive rules that survive real engineering constraints.",
      },
      {
        title: "Motion with purpose",
        body: "Interaction cues that guide attention, cinematic where it helps, quiet where focus matters.",
      },
    ],
    deliverables: [
      "UX flows & wireframes",
      "UI kits / design system",
      "Interactive prototypes",
      "Handoff specs",
    ],
    niches: ["SaaS", "Marketplaces", "Fintech", "Healthcare"],
    relatedProjects: ["kleenup", "peeksta-ai", "the-duh"],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "UX designer reviewing interface layouts on a digital canvas",
    seoTitle: "UX UI Design Agency | Softilect",
    seoDescription:
      "Softilect UX/UI design services, user journeys, design systems, prototypes, and motion guidelines for SaaS, fintech: and marketplace products.",
  },
  {
    slug: "design-and-development",
    name: "Design & Development",
    category: "design",
    short:
      "One squad from visual concept through production code, no handoff gaps.",
    hero: "Design and engineering in the same production.",
    intro:
      "Many projects lose quality between Figma and production. Softilect runs design and development as a single sequence so interaction intent, performance, and accessibility survive implementation.",
    whoFor: [
      "Teams tired of design-dev misalignment",
      "Startups needing a unified product studio",
      "Brands launching a flagship digital experience",
    ],
    howWeHelp: [
      {
        title: "Shared component language",
        body: "Design tokens and coded primitives evolve together, reducing rework and visual drift.",
      },
      {
        title: "Build-ready design decisions",
        body: "We prioritize patterns that are beautiful and implementable under real timeline pressure.",
      },
      {
        title: "Continuous review loops",
        body: "Design QA sits beside engineering reviews so the shipped product matches the intended experience.",
      },
    ],
    deliverables: [
      "Unified design + build sprint plan",
      "Production UI implementation",
      "Design QA checklist",
      "Component library seed",
    ],
    niches: ["Product websites", "SaaS apps", "Web3 products", "Portals"],
    relatedProjects: ["peeksta-ai", "kleenup", "plism-art"],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Design and development collaboration with sketches and screens",
    seoTitle: "Design and Development Services | Softilect",
    seoDescription:
      "Softilect design and development services unite UX/UI craft with production engineering for cohesive digital product launches.",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    category: "industry",
    short:
      "Storefronts, marketplaces, and fulfillment ops software for multichannel commerce.",
    hero: "Commerce systems that sell, fulfill, and report cleanly.",
    intro:
      "Softilect builds ecommerce experiences beyond theme installs, catalog architecture, checkout integrity, marketplace dynamics, and back-office tools for inventory, prep, and client reporting across Amazon, Walmart, eBay, and owned channels.",
    whoFor: [
      "DTC brands scaling beyond basic storefronts",
      "Prep centers and 3PLs needing ops software",
      "Marketplace founders launching two-sided commerce",
    ],
    howWeHelp: [
      {
        title: "Commerce architecture",
        body: "Catalog, pricing, inventory, and order flows designed for your channel mix, not a generic template.",
      },
      {
        title: "Ops visibility",
        body: "Internal tools and client portals that reduce status tickets and shipping surprises.",
      },
      {
        title: "Conversion engineering",
        body: "Performance, trust signals, and checkout UX tuned for measurable revenue impact.",
      },
    ],
    deliverables: [
      "Store / marketplace build",
      "Ops dashboard",
      "Integrations (payments, shipping, marketplaces)",
      "Analytics setup",
    ],
    niches: ["DTC", "Marketplaces", "Fulfillment centers", "B2B commerce"],
    relatedProjects: ["savo-prep-center", "kleenup"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Retail checkout scene representing modern ecommerce experiences",
    seoTitle: "Ecommerce Development Services | Softilect",
    seoDescription:
      "Softilect ecommerce development for storefronts, marketplaces, and fulfillment operations, inventory, checkout: and multichannel reporting.",
  },
  {
    slug: "healthcare",
    name: "Healthcare Software",
    category: "industry",
    short:
      "Patient portals, care workflows, and health products built with privacy-minded architecture.",
    hero: "Healthcare software that respects care and compliance.",
    intro:
      "Softilect delivers healthcare product experiences with security, consent, and operational reality in frame, patient portals, subscription care logistics, secure messaging, device integrations, and billing-adjacent workflows.",
    whoFor: [
      "Digital health startups",
      "Care providers modernizing patient access",
      "Health ops teams automating manual processes",
    ],
    howWeHelp: [
      {
        title: "Compliance-aware design",
        body: "Privacy, access control, and auditability considered during discovery, not bolted on before launch.",
      },
      {
        title: "Care journey engineering",
        body: "We model patient, caregiver, and operations paths so features support real clinical logistics.",
      },
      {
        title: "Integration readiness",
        body: "Devices, messaging, and revenue workflows connected through stable contracts and monitoring.",
      },
    ],
    deliverables: [
      "Healthcare web/app product",
      "Role-based access model",
      "Integration plan",
      "QA & release checklist",
    ],
    niches: ["Patient portals", "Meal / care logistics", "PERS integrations", "RCM-adjacent tools"],
    relatedProjects: ["yana-meals"],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern hospital corridor suggesting digital healthcare delivery",
    seoTitle: "Healthcare Software Development | Softilect",
    seoDescription:
      "Softilect healthcare software services for patient portals, care workflows, secure messaging: and privacy-minded product architecture.",
  },
  {
    slug: "crms-cms",
    name: "CRMs & CMS",
    category: "industry",
    short:
      "Custom CRM workflows and content platforms tailored to how your organization sells and publishes.",
    hero: "CRM and CMS systems that match your operating model.",
    intro:
      "Generic CRM and CMS tools break when your process is the product. Softilect builds and customizes customer, campaign, and content systems so teams plan, execute, and report without spreadsheet sprawl.",
    whoFor: [
      "Agencies managing complex campaign pipelines",
      "Enterprises needing role-based CRM workflows",
      "Brands wanting structured content operations",
    ],
    howWeHelp: [
      {
        title: "Workflow-first modeling",
        body: "Pipelines, statuses, and permissions reflect how your teams actually hand work across divisions.",
      },
      {
        title: "Content architecture",
        body: "CMS models that keep marketing agile without breaking SEO structure or brand consistency.",
      },
      {
        title: "Automation & reporting",
        body: "Reduce manual updates with integrations, alerts, and leadership-ready dashboards.",
      },
    ],
    deliverables: [
      "CRM / CMS platform",
      "Role & permission matrix",
      "Content or pipeline model",
      "Admin training pack",
    ],
    niches: ["Campaign CRM", "Enterprise content", "Trade marketing ops", "Publishing"],
    relatedProjects: ["adsells", "peeksta-ai"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Business analytics charts representing CRM and CMS operations",
    seoTitle: "CRM and CMS Development | Softilect",
    seoDescription:
      "Softilect CRM and CMS development, custom pipelines, content models: and admin workflows for agencies and growing enterprises.",
  },
  {
    slug: "blockchain",
    name: "Blockchain",
    category: "web3",
    short:
      "Secure Web3 product delivery across tokens, smart contracts, and on-chain user journeys.",
    hero: "Blockchain products with usable journeys and hard security basics.",
    intro:
      "Softilect helps teams ship Web3 products that non-crypto users can understand, pairing smart-contract strategy, wallet UX, and operational readiness for launches that must withstand real scrutiny.",
    whoFor: [
      "Founders launching token-enabled products",
      "Fintech teams exploring on-chain rails",
      "Creative platforms preparing for public launches",
    ],
    howWeHelp: [
      {
        title: "Trust-first product design",
        body: "We clarify what happens on-chain vs off-chain so users always know what they are signing.",
      },
      {
        title: "Secure architecture decisions",
        body: "Threat-minded patterns for keys, roles, upgrade paths, and operational controls.",
      },
      {
        title: "Launch sequencing",
        body: "Product readiness checkpoints before TGE or public release, not vibes-based go-live.",
      },
    ],
    deliverables: [
      "Web3 product architecture",
      "Wallet / dApp UX",
      "Smart-contract integration plan",
      "Launch readiness checklist",
    ],
    niches: ["Fintech", "Charity / payments", "Creative tokens", "Sports-tech"],
    relatedProjects: ["zakatcoin-zakpay", "plism-art", "the-duh"],
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Close-up of cryptocurrency hardware and digital finance concept",
    seoTitle: "Blockchain Development Services | Softilect",
    seoDescription:
      "Softilect blockchain development for Web3 products, smart-contract integrations, wallet UX: and secure launch-ready architecture.",
  },
  {
    slug: "exchanges",
    name: "Centralized & Decentralized Exchanges",
    category: "web3",
    short:
      "CEX and DEX product surfaces with liquidity UX, security controls, and operational clarity.",
    hero: "Exchange experiences engineered for trust and throughput.",
    intro:
      "Whether you are building centralized trading operations or decentralized swap experiences, Softilect focuses on order/trade UX, risk controls, wallet connectivity, and the operational tooling teams need after day one.",
    whoFor: [
      "Teams launching trading or swap products",
      "Fintech founders entering digital asset markets",
      "Projects needing exchange-grade UX without chaos",
    ],
    howWeHelp: [
      {
        title: "Trading journey design",
        body: "Deposit, trade, withdraw, and portfolio views shaped for clarity under pressure.",
      },
      {
        title: "Security & controls",
        body: "Role separation, monitoring hooks, and architecture choices that respect exchange risk realities.",
      },
      {
        title: "Liquidity-facing UX",
        body: "For DEX flows: wallet states, slippage communication, and transaction feedback that reduces user error.",
      },
    ],
    deliverables: [
      "CEX/DEX UX architecture",
      "Trading UI implementation",
      "Wallet connection flows",
      "Ops & monitoring recommendations",
    ],
    niches: ["CEX", "DEX", "Hybrid models", "Asset dashboards"],
    relatedProjects: ["zakatcoin-zakpay", "the-duh"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Financial trading charts on multiple screens",
    seoTitle: "CEX and DEX Development | Softilect",
    seoDescription:
      "Softilect services for centralized and decentralized exchange products, trading UX, wallet flows: and security-minded architecture.",
  },
  {
    slug: "decentralized-wallets",
    name: "Decentralized Wallets",
    category: "web3",
    short:
      "Wallet experiences that make key management, signing, and portfolio views understandable.",
    hero: "Wallet products people can trust with their attention, and assets.",
    intro:
      "Softilect designs and builds wallet-oriented experiences: onboarding, recovery education, transaction previews, portfolio clarity, and dApp connection patterns that reduce costly user mistakes.",
    whoFor: [
      "Web3 products needing embedded wallet UX",
      "Fintech teams adding self-custody journeys",
      "dApp platforms improving connection success rates",
    ],
    howWeHelp: [
      {
        title: "Safety-centered UX",
        body: "Clear signing previews, network context, and recovery guidance written for humans.",
      },
      {
        title: "Integration engineering",
        body: "Wallet connect patterns, session handling, and fallback states for real device conditions.",
      },
      {
        title: "Trust packaging",
        body: "Security messaging and product copy that support confidence without overclaiming.",
      },
    ],
    deliverables: [
      "Wallet UX flows",
      "Connection & signing UI",
      "Portfolio / activity views",
      "Security checklist",
    ],
    niches: ["Self-custody", "Embedded wallets", "Payments", "dApp access"],
    relatedProjects: ["zakatcoin-zakpay", "the-duh"],
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract secure digital vault concept for crypto wallets",
    seoTitle: "Decentralized Wallet Development | Softilect",
    seoDescription:
      "Softilect decentralized wallet development, secure onboarding, signing UX, portfolio views: and dApp connection experiences.",
  },
  {
    slug: "dapps",
    name: "dApps",
    category: "web3",
    short:
      "Decentralized applications with coherent product UX on top of on-chain logic.",
    hero: "dApps that behave like real products, not demos.",
    intro:
      "Softilect builds dApp experiences where transaction states, wallet context, and domain features (sports, creative, payments) form a complete product narrative users can follow without a crypto dictionary.",
    whoFor: [
      "Web3 startups moving from concept to usable product",
      "Teams needing consumer-grade dApp interfaces",
      "Projects combining on-chain and off-chain data",
    ],
    howWeHelp: [
      {
        title: "Product framing",
        body: "We translate protocol capabilities into user jobs-to-be-done and measurable flows.",
      },
      {
        title: "State-aware interfaces",
        body: "Pending, failed, and confirmed transaction UX that keeps users oriented.",
      },
      {
        title: "Hybrid architecture",
        body: "Indexer/API layers and caching strategies so the app stays responsive at peak moments.",
      },
    ],
    deliverables: [
      "dApp frontend",
      "Wallet interaction layer",
      "On-chain/off-chain data plan",
      "Release & monitoring guide",
    ],
    niches: ["Sports-tech", "Fintech", "Creative platforms", "Community products"],
    relatedProjects: ["the-duh", "zakatcoin-zakpay", "plism-art"],
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract network connections representing decentralized applications",
    seoTitle: "dApp Development Company | Softilect",
    seoDescription:
      "Softilect dApp development services, usable decentralized apps with wallet UX, hybrid architecture: and production-ready release practices.",
  },
  {
    slug: "nft-marketplaces",
    name: "NFT Marketplaces",
    category: "web3",
    short:
      "Mint, list, buy, and collect experiences with marketplace trust patterns.",
    hero: "NFT marketplaces built for creators and collectors alike.",
    intro:
      "Softilect delivers NFT marketplace products with discovery, minting, listing, bidding/buying, and creator tooling, focused on clarity, fee transparency, and launch readiness rather than hype-only drops.",
    whoFor: [
      "Creative platforms launching collectible economies",
      "Sports and media brands exploring digital ownership",
      "Communities needing secondary-market infrastructure",
    ],
    howWeHelp: [
      {
        title: "Marketplace loop design",
        body: "Mint → list → discover → transact → collect, with edge cases designed in advance.",
      },
      {
        title: "Creator operations",
        body: "Tools and roles that help teams manage drops without chaotic spreadsheets.",
      },
      {
        title: "Trust & fees clarity",
        body: "Transparent economics and status feedback that reduce support load after launch.",
      },
    ],
    deliverables: [
      "Marketplace UX + build",
      "Mint / list flows",
      "Creator admin basics",
      "Launch checklist",
    ],
    niches: ["Art", "Sports assets", "Community collectibles", "Brand drops"],
    relatedProjects: ["the-duh", "plism-art"],
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Digital collectible art aesthetic for NFT marketplace products",
    seoTitle: "NFT Marketplace Development | Softilect",
    seoDescription:
      "Softilect NFT marketplace development, minting, listing, discovery, and creator tooling for art, sports: and community platforms.",
  },
  {
    slug: "gen-ai",
    name: "Gen AI",
    category: "intelligence",
    short:
      "AI copilots, automations, and intelligent workflows embedded into real products.",
    hero: "Generative AI that earns a place in the workflow.",
    intro:
      "Softilect builds Gen AI features as product capabilities, retrieval-backed assistants, AI workforce automations, and workflow copilots, with evaluation loops, permission boundaries, and UX that sets correct expectations.",
    whoFor: [
      "SaaS teams adding AI employees or copilots",
      "Ops leaders automating repetitive knowledge work",
      "Products needing trustworthy LLM integrations",
    ],
    howWeHelp: [
      {
        title: "Use-case selection",
        body: "We pick AI surfaces with clear ROI and measurable success criteria, not novelty chat boxes.",
      },
      {
        title: "Grounded architecture",
        body: "Retrieval, tool calling, and guardrails designed around your data boundaries.",
      },
      {
        title: "Human-in-the-loop UX",
        body: "Review, edit, and approval patterns so AI accelerates teams without silent failure.",
      },
    ],
    deliverables: [
      "AI feature / copilot MVP",
      "Prompt & evaluation baseline",
      "Integration plan",
      "Monitoring recommendations",
    ],
    niches: ["AI workforce", "Support automation", "Internal copilots", "SaaS AI"],
    relatedProjects: ["peeksta-ai"],
    image:
      "https://images.unsplash.com/photo-1676299251950-0d7063d5b5c4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract neural glow representing generative AI systems",
    seoTitle: "Generative AI Development | Softilect",
    seoDescription:
      "Softilect Gen AI services for copilots, AI workforce automations: and LLM-powered workflows with grounded architecture and human review loops.",
  },
  {
    slug: "saas",
    name: "SaaS",
    category: "engineering",
    short:
      "Multi-tenant SaaS foundations, billing-ready UX, roles, and scalable product architecture.",
    hero: "SaaS products structured for retention and iteration.",
    intro:
      "Softilect helps teams ship SaaS the way buyers expect: onboarding that activates, role models that scale, admin controls that reduce support, and architecture that can absorb the next feature wave.",
    whoFor: [
      "Founders validating a SaaS wedge",
      "Teams rebuilding MVP debt into durable product",
      "AI / B2B products needing subscription-ready UX",
    ],
    howWeHelp: [
      {
        title: "Activation-first product design",
        body: "We prioritize the first-session path that proves value before advanced settings.",
      },
      {
        title: "Multi-tenant thinking",
        body: "Data isolation, roles, and workspace patterns designed early to avoid painful rewrites.",
      },
      {
        title: "Iteration systems",
        body: "Analytics, feedback loops, and release habits that keep the roadmap honest.",
      },
    ],
    deliverables: [
      "SaaS web product",
      "Auth & roles",
      "Admin surfaces",
      "Analytics instrumentation",
    ],
    niches: ["AI SaaS", "B2B tools", "Vertical SaaS", "Internal platforms"],
    relatedProjects: ["peeksta-ai", "adsells", "savo-prep-center"],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Startup workspace representing modern SaaS product teams",
    seoTitle: "SaaS Development Company | Softilect",
    seoDescription:
      "Softilect SaaS development, multi-tenant architecture, onboarding UX, roles: and scalable product engineering for B2B and AI platforms.",
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    category: "intelligence",
    short:
      "Manual and automated QA that protects releases before users ever see them.",
    hero: "Quality as a release gate, not a hope.",
    intro:
      "Softilect treats QA as part of delivery management: acceptance criteria, regression coverage, exploratory testing, and release notes discipline so shipping feels controlled instead of chaotic.",
    whoFor: [
      "Teams with fragile release confidence",
      "Products in healthcare, fintech, or payments",
      "Squads needing QA process without bureaucracy theater",
    ],
    howWeHelp: [
      {
        title: "Acceptance-driven testing",
        body: "Tests map to what 'done' means, not vanity coverage metrics.",
      },
      {
        title: "Automation where it pays",
        body: "Critical path automation with Cypress/Postman-style workflows plus human exploratory depth.",
      },
      {
        title: "Release readiness",
        body: "Defect triage, severity calls, and go/no-go recommendations before production.",
      },
    ],
    deliverables: [
      "Test plans",
      "Automated critical-path suites",
      "Bug reports & severity model",
      "Release QA sign-off",
    ],
    niches: ["Healthcare", "Fintech", "Marketplaces", "SaaS"],
    relatedProjects: ["yana-meals", "kleenup", "zakatcoin-zakpay"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Quality assurance testing session on laptop and notes",
    seoTitle: "Quality Assurance Services | Softilect",
    seoDescription:
      "Softilect QA services, acceptance testing, automation, exploratory coverage: and release readiness for mission-critical software.",
  },
  {
    slug: "devops",
    name: "DevOps",
    category: "intelligence",
    short:
      "CI/CD, environments, and observability so shipping stays repeatable under pressure.",
    hero: "Delivery infrastructure that keeps premieres on schedule.",
    intro:
      "Softilect sets up the rails behind reliable software: pipelines, environment parity, secrets hygiene, and monitoring so releases are boring in the best way.",
    whoFor: [
      "Teams still deploying by hand",
      "Products preparing for higher traffic",
      "Squads needing safer rollback paths",
    ],
    howWeHelp: [
      {
        title: "Pipeline design",
        body: "Build, test, and deploy stages matched to your risk profile and release cadence.",
      },
      {
        title: "Environment strategy",
        body: "Dev/stage/prod clarity with data and secrets handled intentionally.",
      },
      {
        title: "Observability basics",
        body: "Logging, alerts, and health checks that shorten incident time after launch.",
      },
    ],
    deliverables: [
      "CI/CD pipelines",
      "Environment setup",
      "Monitoring starter pack",
      "Deployment runbook",
    ],
    niches: ["SaaS", "Web3 launches", "Ecommerce", "Enterprise apps"],
    relatedProjects: ["plism-art", "peeksta-ai", "savo-prep-center"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Server room lights representing DevOps infrastructure",
    seoTitle: "DevOps Services | Softilect",
    seoDescription:
      "Softilect DevOps services for CI/CD, environment strategy, secrets hygiene: and production observability.",
  },
  {
    slug: "maintenance-and-support",
    name: "Maintenance & Support",
    category: "intelligence",
    short:
      "Post-launch care: monitoring, iteration, and change management after premiere day.",
    hero: "Shipped is act one, we stay for the sequel.",
    intro:
      "Softilect maintenance engagements keep products healthy after launch: incident response habits, backlog grooming, dependency updates, and roadmap planning so your software does not quietly decay.",
    whoFor: [
      "Teams without an internal platform squad",
      "Products entering growth after MVP",
      "Leaders wanting accountable post-launch ownership",
    ],
    howWeHelp: [
      {
        title: "Care plans",
        body: "Defined response windows, release cadence, and ownership so support never becomes a black box.",
      },
      {
        title: "Continuous improvement",
        body: "Feedback → backlog → sprint loops that convert real usage into product progress.",
      },
      {
        title: "Stability work",
        body: "Dependency hygiene, performance watchpoints, and preventive fixes between feature waves.",
      },
    ],
    deliverables: [
      "Support retainer plan",
      "Monitoring ownership",
      "Monthly improvement report",
      "Roadmap refresh sessions",
    ],
    niches: ["SaaS", "Ecommerce", "Healthcare", "Enterprise tools"],
    relatedProjects: ["yana-meals", "savo-prep-center", "adsells"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Supportive product team collaborating after software launch",
    seoTitle: "Software Maintenance and Support | Softilect",
    seoDescription:
      "Softilect maintenance and support services, monitoring, iteration, change management: and long-term product care after launch.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(categoryId: string) {
  return services.filter((s) => s.category === categoryId);
}
