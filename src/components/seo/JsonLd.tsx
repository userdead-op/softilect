import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Softilect",
            url: SITE_URL,
            logo: `${SITE_URL}/icon`,
            description: "Softilect is a software development company building web, mobile, AI, Web3, healthcare and ecommerce products.",
            email: CONTACT_EMAIL,
            areaServed: ["GB", "AE", "US"],
            knowsAbout: ["Software Development", "Web Development", "Mobile App Development", "UX/UI Design", "Blockchain", "Generative AI", "Ecommerce Software", "Healthcare Software", "SaaS", "DevOps"],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "Softilect",
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
          },
        ],
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
      }}
    />
  );
}
