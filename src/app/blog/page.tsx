import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { BlogListingClient } from "./BlogListingClient";

export const metadata: Metadata = {
  title: "Solar Power & EV Infrastructure Blog | Soul Power Energies Kozhikode",
  description:
    "Explore expert guides, PM Surya Ghar subsidy updates, KSEB net metering tips, and solar panel maintenance advice for Kozhikode, Wayanad, and Northern Kerala.",
  keywords: [
    "Solar blog Kerala",
    "PM Surya Ghar subsidy Kozhikode",
    "KSEB solar net metering guide",
    "Solar panel maintenance tips Kerala",
    "EV charger installation guide Kozhikode",
    "Soul Power Energies blog",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Solar & EV Charging Insights | Soul Power Energies",
    description:
      "Actionable solar buying guides, government subsidy updates, and technical insights for Kerala homeowners and businesses.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-[#0F172A] font-sans antialiased">
      <Header />
      <main id="main-content" className="flex-1">
        <BlogListingClient />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </div>
  );
}
