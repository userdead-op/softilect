const servicePhrases = [
  "Digital Transformation",
  "Web Development",
  "App Development",
  "Blockchain",
  "Gen AI",
  "Ecommerce",
  "Healthcare",
  "CEX / DEX",
  "dApps",
  "NFT Marketplaces",
  "CRM & CMS",
  "DevOps",
  "Quality Assurance",
];

const techStacks = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Express",
  "NestJS",
  "Python",
  "Django",
  "CSS",
  "Tailwind",
  "Flutter",
  "React Native",
  "AWS",
  "EC2",
  "S3",
  "Amplify",
  "Docker",
  "Kubernetes",
  "Azure",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Redis",
  "Firebase",
  "Solidity",
  "Web3.js",
];

function MarqueeRow({
  items,
  reverse = false,
  separator = "◆",
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  separator?: string;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="display text-2xl tracking-[-0.03em] md:text-3xl">
              {item}
            </span>
            <span className="text-signal-bright">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <section className="overflow-hidden border-y border-ink/10 bg-ink text-bg-mist">
      <div className="border-b border-white/10 py-5">
        <MarqueeRow items={servicePhrases} separator="◆" />
      </div>
      <div className="py-4">
        <MarqueeRow
          items={techStacks}
          reverse
          separator="◇"
          className="opacity-90"
        />
      </div>
    </section>
  );
}
