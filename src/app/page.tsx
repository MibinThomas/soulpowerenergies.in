import { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo/structuredData";

// Dynamically import below-the-fold components to reduce initial JavaScript bundle size & TBT
const ServicesOverview = dynamic(
  () => import("@/components/home/ServicesOverview").then((mod) => mod.ServicesOverview),
  { loading: () => <div className="min-h-[400px] bg-[#F8F9FC]" /> }
);

const WhyUsSection = dynamic(
  () => import("@/components/home/WhyUsSection").then((mod) => mod.WhyUsSection),
  { loading: () => <div className="min-h-[400px] bg-[#F8F9FC]" /> }
);

const SolarInstallationVideoSection = dynamic(
  () => import("@/components/home/SolarInstallationVideoSection").then((mod) => mod.SolarInstallationVideoSection),
  { loading: () => <div className="min-h-[300px] bg-[#F8F9FC]" /> }
);

const SolarEstimator = dynamic(
  () => import("@/components/home/SolarEstimator").then((mod) => mod.SolarEstimator),
  { loading: () => <div className="min-h-[400px] bg-[#F8F9FC]" /> }
);

const BrandsSection = dynamic(
  () => import("@/components/home/BrandsSection").then((mod) => mod.BrandsSection),
  { loading: () => <div className="min-h-[300px] bg-[#F8F9FC]" /> }
);

const ResidentialCommercialPanels = dynamic(
  () => import("@/components/home/ResidentialCommercialPanels").then((mod) => mod.ResidentialCommercialPanels),
  { loading: () => <div className="min-h-[400px] bg-[#F8F9FC]" /> }
);

const EVChargingSection = dynamic(
  () => import("@/components/home/EVChargingSection").then((mod) => mod.EVChargingSection),
  { loading: () => <div className="min-h-[400px] bg-[#F8F9FC]" /> }
);

const PartnershipSection = dynamic(
  () => import("@/components/home/PartnershipSection").then((mod) => mod.PartnershipSection),
  { loading: () => <div className="min-h-[300px] bg-[#F8F9FC]" /> }
);

const ServiceAreaSection = dynamic(
  () => import("@/components/home/ServiceAreaSection").then((mod) => mod.ServiceAreaSection),
  { loading: () => <div className="min-h-[300px] bg-[#F8F9FC]" /> }
);

const FAQAccordionSection = dynamic(
  () => import("@/components/home/FAQAccordionSection").then((mod) => mod.FAQAccordionSection),
  { loading: () => <div className="min-h-[400px] bg-[#F8F9FC]" /> }
);

const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((mod) => mod.FinalCTA),
  { loading: () => <div className="min-h-[300px] bg-[#F8F9FC]" /> }
);

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

      <main id="main-content" className="flex-1">
        <HeroSection />
        <TrustHighlights />
        <ServicesOverview />
        <WhyUsSection />
        <SolarInstallationVideoSection />
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

