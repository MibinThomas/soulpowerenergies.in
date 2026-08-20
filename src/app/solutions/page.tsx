"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { servicesData } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Sun,
  Building2,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

export default function SolutionsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const iconMap: Record<string, React.ElementType> = {
    Sun,
    Building2,
    Zap,
    Sparkles,
  };

  const filteredServices = servicesData.filter((service) => {
    if (selectedFilter === "all") return true;
    return service.id === selectedFilter || service.slug === selectedFilter;
  });

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#000000] text-[#F5EFE6]">
        {/* Page Hero */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#0C0E12] text-[#E5BA73] border border-white/10">
              Solar & EV Services Directory
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif italic tracking-tight text-[#F5EFE6]">
              Renewable Energy & EV Charging Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#EADBC8] max-w-3xl mx-auto leading-relaxed font-medium">
              Explore dedicated solution pages for independent residential homes, commercial enterprises, EV charging setups, and panel maintenance across Kozhikode and Wayanad.
            </p>
          </div>
        </section>

        {/* Interactive Solution Selector Links Bar */}
        <section className="py-5 bg-[#000000]/95 backdrop-blur-md sticky top-[73px] z-30 border-y border-white/10 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] font-heading shrink-0">
                Explore Solution Pages:
              </span>

              <div className="flex flex-wrap items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === "all"
                      ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md font-black"
                      : "nestive-card bg-[#0C0E12] text-[#F5EFE6] hover:bg-[#131722] border border-white/10"
                  }`}
                >
                  All Solutions
                </button>
                {servicesData.map((s) => (
                  <Link
                    key={s.id}
                    href={`/solutions/${s.slug}`}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer nestive-card bg-[#0C0E12] text-[#F5EFE6] hover:bg-[#131722] hover:text-[#E5BA73] border border-white/10 flex items-center gap-1.5"
                  >
                    <span>{s.shortTitle}</span>
                    <ArrowRight className="w-3 h-3 text-[#E5BA73]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards Grid linking to dedicated pages */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Sun;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-10 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 space-y-8 relative overflow-hidden shadow-2xl group hover:border-[#E5BA73]/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <Link href={`/solutions/${service.slug}`}>
                          <h2 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] hover:text-[#E5BA73] transition-colors">
                            {service.title}
                          </h2>
                        </Link>
                        {service.isComingSoon && <Badge variant="comingSoon">Coming Soon</Badge>}
                      </div>
                      <p className="text-sm font-bold text-[#E5BA73]">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link href={`/solutions/${service.slug}`}>
                      <Button variant="primary" size="md" className="w-full sm:w-auto font-black rounded-xl shadow-lg bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white">
                        <span>Explore Full Solution Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* On-Grid vs Hybrid Feature Banner preview for Solar services */}
                {service.systemOptions && service.systemOptions.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#131722] border border-[#E5BA73]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-[#E5BA73] shrink-0" />
                      <div>
                        <span className="font-bold text-[#F5EFE6] block">
                          Available System Topologies: On-Grid (Net Metering) & Hybrid (Battery Backup)
                        </span>
                        <span className="text-[#EADBC8]">
                          View detailed breakdown of payback terms, equipment specs, and blackout operations.
                        </span>
                      </div>
                    </div>

                    <Link href={`/solutions/${service.slug}`}>
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#E5BA73] hover:underline shrink-0">
                        <span>Compare Topologies</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                )}

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-[#131722] border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] flex items-center gap-1.5 font-heading">
                      <HelpCircle className="w-4 h-4 text-[#E5BA73]" /> Customer Problem
                    </span>
                    <p className="text-sm text-[#EADBC8] leading-relaxed font-medium">{service.customerProblem}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#131722] border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] flex items-center gap-1.5 font-heading">
                      <ShieldCheck className="w-4 h-4 text-[#E5BA73]" /> Soul Power Solution
                    </span>
                    <p className="text-sm text-[#F5EFE6] leading-relaxed font-medium">{service.solutionOverview}</p>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-base text-[#EADBC8] leading-relaxed font-medium">{service.fullDescription}</p>

                {/* Suitable Property Types & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#E5BA73] font-heading uppercase tracking-wider">
                      Suitable Property Types
                    </h3>
                    <ul className="space-y-2">
                      {service.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-[#F5EFE6]">
                          <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#E5BA73] font-heading uppercase tracking-wider">
                      Key Solution Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-[#F5EFE6]">
                          <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#9CA3AF] font-medium">
                    Authorized Virgin Power EPC Engineering Specs
                  </span>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#E5BA73] hover:text-white transition-colors"
                  >
                    <span>View Dedicated {service.shortTitle} Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
