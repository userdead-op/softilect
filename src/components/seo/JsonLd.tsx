export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://softilect.com/#organization",
        name: "Softilect",
        url: "https://softilect.com",
        description:
          "Softilect is a software development agency building web, mobile, AI, Web3, healthcare, and ecommerce products.",
        email: "hello@softilect.com",
        areaServed: ["AE", "US", "GB"],
        knowsAbout: [
          "Software Development",
          "Web Development",
          "Mobile App Development",
          "Blockchain",
          "Generative AI",
          "Ecommerce Software",
          "Healthcare Software",
          "SaaS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://softilect.com/#website",
        url: "https://softilect.com",
        name: "Softilect",
        publisher: { "@id": "https://softilect.com/#organization" },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://softilect.com/#service",
        name: "Softilect Software Development Agency",
        image: "https://softilect.com/og.jpg",
        url: "https://softilect.com",
        priceRange: "$$",
        serviceType: [
          "Digital Transformation",
          "Custom Software Development",
          "Blockchain Development",
          "AI Product Development",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
