import { siteConfig } from "@/config/site";
import { faqsData } from "@/config/faqs";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.primaryLocation.town,
      addressRegion: siteConfig.primaryLocation.district,
      addressCountry: siteConfig.primaryLocation.country,
    },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.partner.fullName,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SolarEnergySystemInstaller",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone || "",
    email: siteConfig.contact.email || "",
    hasMap: siteConfig.contact.mapUrl,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.town,
      addressRegion: siteConfig.contact.address.district,
      addressCountry: siteConfig.primaryLocation.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.3651, // Thiruvambady / Kozhikode region approximate coordinates
      longitude: 76.0125,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
