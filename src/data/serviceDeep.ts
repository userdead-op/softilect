export type DeepService = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  ribbon: string[];
  story: string[];
  buildTitle: string;
  build: { title: string; text: string; items: string[] }[];
  approachTitle: string;
  approach: { title: string; text: string }[];
  flowTitle: string;
  flow: { title: string; text: string; out: string }[];
  stack: { label: string; items: string[] }[];
  faq: { q: string; a: string }[];
};

const base: Record<string, DeepService> = {
  "web-development": {
    metaTitle: "Web Development Company UK | Websites That Rank & Convert",
    metaDescription:
      "UK-led web development company building fast, SEO-ready websites, web apps and online stores that win customers. Book a discovery call with Softilect.",
    keywords: ["web development company", "web development UK", "custom website development", "web application development", "Next.js development", "SEO-friendly website", "ecommerce website development", "website redesign"],
    h1: "Web development company for websites that rank and convert",
    lead: "We design and build websites, web apps and online stores that load quickly, rank well and turn visitors into customers. One team handles the design, the code, the hosting and the support.",
    ribbon: ["Fast by design", "SEO-ready", "Mobile-first", "Secure by default", "Easy to edit", "You own the code", "Built to convert"],
    story: [
      "Your website is the first thing a customer judges you by. If it is slow, confusing or buried on Google, the work behind your product never gets seen. We build sites that load fast, read clearly and are structured so search engines understand every page.",
      "Whether it is a ten-page company site or a store with thousands of products, we run it the same way: agree the goal, design it, build it in short cycles you can follow, test it properly and launch calmly. You see a live preview early, not a big reveal at the end.",
    ],
    buildTitle: "Everything your business needs online",
    build: [
      { title: "Company and brand websites", text: "Sites that explain what you do, build trust and make it easy to get in touch. We handle structure, copy support, design and the technical SEO that helps people find you.", items: ["Company and product sites", "Campaign landing pages", "Multilingual sites", "Blogs and resource hubs"] },
      { title: "Web applications and portals", text: "Software that runs in the browser: dashboards, customer accounts, booking systems and internal tools that replace spreadsheets and email chains.", items: ["SaaS dashboards", "Customer and partner portals", "Marketplaces and directories", "Admin panels"] },
      { title: "Online stores", text: "Stores that are quick on mobile and simple at checkout, connected to payments, stock, couriers and your accounting tools.", items: ["Headless and custom storefronts", "Shopify and WooCommerce", "Subscriptions and payments", "Order and stock integrations"] },
      { title: "Content management", text: "A back end your team can actually use. Editors update pages, publish posts and manage products without calling a developer.", items: ["Headless CMS setup", "Page builders for editors", "Moving off old WordPress sites", "Roles and approval flows"] },
      { title: "APIs and integrations", text: "The plumbing behind the site: login, payments, CRM, email, ERP and any other system your business already runs on.", items: ["REST and GraphQL APIs", "Authentication and roles", "Webhooks and background jobs", "Third-party integrations"] },
      { title: "Speed, SEO and care", text: "Work that keeps the site healthy: faster pages, cleaner structure, accessibility fixes, monitoring, backups and regular updates.", items: ["Core Web Vitals tuning", "Technical SEO and schema", "Accessibility checks", "Monitoring and support"] },
    ],
    approachTitle: "Websites built to be found and built to convert",
    approach: [
      { title: "Built to be found", text: "Clean structure, fast loading, metadata and schema are part of the build, not an add-on." },
      { title: "Fast on a bad connection", text: "We set a speed budget up front and test on mid-range phones, not office fibre." },
      { title: "Easy for your team to run", text: "Change a headline or publish a post without calling a developer." },
      { title: "Honest about scope", text: "We list what is in and out, and say what any change does to time and cost first." },
    ],
    flowTitle: "How a web project runs, step by step",
    flow: [
      { title: "Brief and scope", text: "We agree your goals, your audience, the pages or features you need and how you will measure success. Anything unknown goes on a list instead of being guessed.", out: "A scope document and plan to sign off" },
      { title: "Structure and design", text: "We map the sitemap and user journeys, sketch wireframes, then design the pages and a reusable set of components so the site stays consistent as it grows.", out: "Clickable prototype and design system" },
      { title: "Build in short cycles", text: "Front end and back end are built in sprints of one to two weeks. You get a link to a live staging site that updates as we go.", out: "A working preview after every sprint" },
      { title: "Test and harden", text: "We test across browsers and devices, check speed and accessibility, review security and load in your real content.", out: "Test report and launch checklist" },
      { title: "Launch", text: "We set up hosting, redirects from the old site, analytics and monitoring, and keep a rollback plan ready on launch day.", out: "A live site and handover notes" },
      { title: "Support and growth", text: "After launch we fix issues, keep everything updated and improve pages using real traffic data.", out: "Support plan and a prioritised roadmap" },
    ],
    stack: [
      { label: "Front end", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { label: "Back end", items: ["Node.js", "Python", "PostgreSQL", "REST and GraphQL"] },
      { label: "Content and commerce", items: ["Headless CMS", "Shopify", "WooCommerce", "Stripe"] },
      { label: "Hosting and delivery", items: ["Cloudflare", "Vercel", "AWS", "GitHub Actions"] },
    ],
    faq: [
      { q: "How much does a website cost?", a: "The cost depends on the number of pages, the features, the integrations and how much custom design you need, so we do not publish a flat price. A simple company site costs far less than a custom web application. After a short discovery call we send a fixed scope and quote before any work starts." },
      { q: "How long does it take to build a website?", a: "A focused company website usually takes four to eight weeks from brief to launch. A custom web application or online store takes longer, often three to six months, depending on features. We give you a dated plan after discovery, and you see a working preview from the first sprint onward." },
      { q: "Which technology do you use to build websites?", a: "Most of our websites use Next.js and React on the front end, with Node.js or Python behind them and a headless CMS for content. This gives fast pages that search engines read easily. If you already use WordPress, Shopify or another platform, we can work with it too." },
      { q: "Will my website rank on Google?", a: "We build the technical foundation Google needs: clean structure, fast loading, metadata, schema markup, sitemaps and mobile-friendly pages. Rankings also depend on your content, competitors and links, and nobody can promise a position. We can support content and SEO work after launch to keep improving results." },
      { q: "Do you build ecommerce websites?", a: "Yes. We build online stores on Shopify and WooCommerce, or fully custom headless storefronts when you need more control. We connect payments, shipping, stock and accounting tools, and we tune the checkout for mobile, because that is where most of your customers will buy." },
      { q: "Can you redesign my site without losing SEO?", a: "Yes. Before changing anything we record your current rankings, top pages and links. We then keep important URLs, set up 301 redirects for any that change, carry over titles and descriptions, and check Search Console after launch, so you keep your traffic while the design improves." },
      { q: "Do I own the website and the code?", a: "Yes. When the project is paid for, you own the code, the designs and the content. Domain, hosting and analytics accounts are set up in your name, and we hand over written notes on how everything is deployed, so you are never locked in to us." },
      { q: "Do you support the website after launch?", a: "Yes. We offer monthly care plans covering security updates, backups, uptime monitoring, bug fixes and small improvements, and we can add larger features whenever you are ready. Many clients stay with us for years because the team that built the site already knows how it works." },
    ],
  },
  "app-development": {
    metaTitle: "Mobile App Development UK | iOS & Android Apps That Scale",
    metaDescription:
      "UK-led mobile app development company. We design, build and launch iOS and Android apps, backend and admin included. Book a discovery call.",
    keywords: ["mobile app development company", "app development UK", "iOS app development", "Android app development", "cross-platform app development", "Flutter app development", "React Native development", "custom mobile app"],
    h1: "Mobile app development company for iOS and Android apps that grow",
    lead: "We take an app from idea to the App Store and Google Play. Design, the app itself, the backend, the admin panel and the release come from one team, so nothing gets lost between them.",
    ribbon: ["iOS and Android", "Backend included", "Admin panel", "Store release", "Tested on real phones", "You own the code", "Built to grow"],
    story: [
      "A good app feels obvious: people open it, know what to do and come back. Getting there takes clear flows, a backend that holds up and a release that passes store review first time.",
      "We agree the smallest first release that proves your idea, build it properly, then grow it from what real users do. Every sprint ends with a build you can install on your own phone.",
    ],
    buildTitle: "Apps for every kind of customer",
    build: [
      { title: "Consumer apps", text: "Apps people use every day: community, lifestyle, wellness, learning and on-demand services, designed so a new user understands them in seconds.", items: ["Social and community apps", "On-demand and delivery", "Fitness and education", "Subscriptions and loyalty"] },
      { title: "Marketplaces", text: "Two-sided apps that connect buyers and sellers or customers and providers, with the chat, bookings, reviews and payouts that make them work.", items: ["Service booking", "In-app chat", "Ratings and reviews", "Payments and payouts"] },
      { title: "Business and field apps", text: "Tools for staff who work away from a desk: orders, inventory, inspections and reports, even where the signal is poor.", items: ["Field-service apps", "Inventory and tracking", "Offline data capture", "Manager dashboards"] },
      { title: "Healthcare and fintech", text: "Apps where privacy and trust matter most: appointments, secure messaging, wallets and identity checks, with access rules and audit trails built in.", items: ["Patient apps", "Wallets and payments", "KYC and verification", "Audit trails"] },
      { title: "Backend and admin", text: "The parts users never see but you rely on: accounts, data, notifications and a web panel for your team to manage content, users and orders.", items: ["API design", "Authentication", "Push notifications", "Admin panel"] },
      { title: "Release and growth", text: "Store submission and everything after it: tracking crashes, learning from usage, and shipping updates when new phones and system versions arrive.", items: ["App Store and Google Play", "Analytics and crash reports", "Feature flags and tests", "Updates and support"] },
    ],
    approachTitle: "Apps built to launch well and grow steadily",
    approach: [
      { title: "Start small, learn fast", text: "Launch the smallest version that proves the idea, then grow it from real behaviour." },
      { title: "One team, whole product", text: "Design, app, backend and admin are planned together, so the pieces fit." },
      { title: "Tested on real phones", text: "Real devices and system versions, plus speed and battery checks." },
      { title: "Plain-language decisions", text: "Native or cross-platform, which database: we explain the options, you decide." },
    ],
    flowTitle: "How an app project runs, step by step",
    flow: [
      { title: "Idea and platform choice", text: "We define who the app is for, what it must do in version one, and whether native or cross-platform fits your goals and budget.", out: "Feature list and platform recommendation" },
      { title: "Flows and design", text: "We map user flows, draw wireframes and build a tappable prototype you can test on your own phone before any code is written.", out: "Prototype and UI kit" },
      { title: "Architecture", text: "We plan the backend, data, security and outside services so the app can grow well beyond version one.", out: "Technical plan and API contracts" },
      { title: "Build in short cycles", text: "App and backend are built together in sprints. Each sprint ends with a build you can install and try.", out: "An installable test build every sprint" },
      { title: "Test on real devices", text: "We test across devices and system versions, check performance and fix issues against agreed acceptance criteria.", out: "Test report and release candidate" },
      { title: "Store release", text: "We prepare listings, screenshots and privacy details, submit the app and handle any feedback from store review.", out: "Your app live on the stores" },
      { title: "Monitor and improve", text: "We watch crashes and usage after launch, and ship updates based on what real people do in the app.", out: "Monitoring plan and next-release roadmap" },
    ],
    stack: [
      { label: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
      { label: "Back end", items: ["Node.js", "Python", "PostgreSQL", "Firebase"] },
      { label: "Services", items: ["Push notifications", "Stripe and in-app purchases", "Maps and location", "Analytics"] },
      { label: "Release", items: ["App Store Connect", "Google Play Console", "Fastlane", "CI/CD pipelines"] },
    ],
    faq: [
      { q: "How much does it cost to develop a mobile app?", a: "Cost depends on the features, the number of screens, integrations and whether you build for one platform or two, so we do not publish a flat price. A focused first version costs much less than a full marketplace. After discovery we send a fixed scope and quote before any work begins." },
      { q: "How long does it take to build an app?", a: "A focused first version usually takes three to five months from discovery to store release. Larger apps with payments, chat or complex backends take longer. We give you a dated plan after discovery, and you can install a working build on your phone after each sprint." },
      { q: "Should I choose native or cross-platform?", a: "Cross-platform tools like Flutter and React Native let one team ship iOS and Android together, which saves time and money, and they suit most products. Native Swift and Kotlin make sense for heavy graphics or deep hardware features. We recommend one after learning what your app needs." },
      { q: "Do you build the backend and admin panel too?", a: "Yes. We build the app, the API, the database and a web admin panel together, so your team can manage users, content and orders without a developer. Planning them as one product avoids the gaps and delays that happen when separate teams build each part." },
      { q: "Will you publish the app to the App Store and Google Play?", a: "Yes. We prepare your store listings, screenshots, privacy details and test builds, submit the app and handle any questions from Apple or Google during review. Developer accounts are set up in your name, so the app always belongs to you." },
      { q: "Can the app work offline?", a: "Yes, where it makes sense. We store the data people need on the device and sync it when the connection returns. This suits field work, delivery, inspections and travel apps, where signal is unreliable. We design the sync carefully so changes never overwrite each other by mistake." },
      { q: "Is my app idea kept confidential?", a: "Yes. We are happy to sign a non-disclosure agreement before you share details. Your code, designs and data belong to you, we only work on them for your project, and access is limited to the people who need it on our team." },
      { q: "What happens after the app launches?", a: "We monitor crashes and performance, fix bugs, update the app for new iOS and Android versions, and add features based on how people use it. Many clients keep us on a monthly support plan, since the team that built the app already knows it well." },
    ],
  },
};

import { deepA } from "./serviceDeepA";
import { deepB } from "./serviceDeepB";
import { deepC } from "./serviceDeepC";
import { deepD } from "./serviceDeepD";

export const serviceDeep: Record<string, DeepService> = { ...base, ...deepA, ...deepB, ...deepC, ...deepD };
