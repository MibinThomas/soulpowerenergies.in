import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { servicesData, ServiceItem } from "@/config/services";
import { SolutionDetailClient } from "./SolutionDetailClient";
import { ArrowLeft, ChevronRight, Sun, Building2, Zap, Sparkles } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Solution Not Found | Soul Power Energies",
    };
  }

  return {
    title: `${service.title} | Soul Power Energies Kozhikode & Wayanad`,
    description: service.description,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Calculate next and previous services for pagination footer
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#000000] text-[#F5EFE6]">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0C0E12] border-b border-white/10 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-[#EADBC8] font-medium">
            <Link href="/" className="hover:text-[#E5BA73] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <Link href="/solutions" className="hover:text-[#E5BA73] transition-colors">
              Solutions
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <span className="text-[#E5BA73] font-bold truncate">{service.title}</span>
          </div>
        </div>

        {/* Client Interactive Detail Component */}
        <SolutionDetailClient
          service={service}
          prevService={prevService}
          nextService={nextService}
        />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
