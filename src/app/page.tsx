import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { SolarEstimator } from "@/components/home/SolarEstimator";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ResidentialCommercialPanels } from "@/components/home/ResidentialCommercialPanels";
import { EVChargingSection } from "@/components/home/EVChargingSection";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { FAQAccordionSection } from "@/components/home/FAQAccordionSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo/structuredData";

export const metadata: Metadata = {
  title: "Soul Power Energies | Solar & EV Charging Kozhikode & Wayanad",
  description:
    "Locally managed rooftop solar, commercial solar power plants, and EV charging station installations across Kozhikode and Wayanad. Authorized partner of Virgin Power.",
  keywords: siteConfig.meta.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Soul Power Energies | Powered By The Sun",
    description: siteConfig.meta.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();
  const businessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <TrustHighlights />
        <ServicesOverview />
        <WhyUsSection />
        <ProcessTimeline />
        <SolarEstimator />
        <BrandsSection />
        <ResidentialCommercialPanels />
        <EVChargingSection />
        <PartnershipSection />
        <ServiceAreaSection />
        <FAQAccordionSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
