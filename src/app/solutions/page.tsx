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
      <main id="main-content" className="flex-1 bg-[#F8F9FC] text-[#0F172A]">
        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden sthira-hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
              Solar & EV Services Directory
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A]">
              Renewable Energy & EV Charging Solutions<span className="text-[#D97706]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore dedicated solution pages for independent residential homes, commercial enterprises, EV charging setups, and panel maintenance across Kozhikode and Wayanad.
            </p>
          </div>
        </section>

        {/* Interactive Solution Selector Links Bar */}
        <section className="py-4 bg-white/95 backdrop-blur-md sticky top-0 z-30 border-y border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#D97706] shrink-0">
                Explore Solution Pages:
              </span>

              <div className="flex flex-wrap items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === "all"
                      ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md font-black"
                      : "sthira-card bg-white text-[#0F172A] hover:bg-slate-100"
                  }`}
                >
                  All Solutions
                </button>
                {servicesData.map((s) => (
                  <Link
                    key={s.id}
                    href={`/solutions/${s.slug}`}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer sthira-card bg-white text-[#0F172A] hover:bg-slate-100 hover:text-[#D97706] flex items-center gap-1.5"
                  >
                    <span>{s.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
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
                className="p-6 sm:p-10 rounded-[32px] sthira-card space-y-8 relative overflow-hidden shadow-xl group hover:border-[#D97706]/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#D97706]/10 text-[#D97706] shrink-0">
                      <Icon className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <Link href={`/solutions/${service.slug}`}>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] hover:text-[#D97706] transition-colors">
                            {service.title}
                          </h2>
                        </Link>
                        {service.isComingSoon && <Badge variant="comingSoon">Coming Soon</Badge>}
                      </div>
                      <p className="text-sm font-bold text-[#D97706]">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link href={`/solutions/${service.slug}`}>
                      <Button variant="primary" size="md" className="w-full sm:w-auto font-extrabold rounded-full shadow-md">
                        <span>Explore Full Solution Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* On-Grid vs Hybrid Feature Banner preview for Solar services */}
                {service.systemOptions && service.systemOptions.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-[#D97706] shrink-0 stroke-[2.2]" />
                      <div>
                        <span className="font-bold text-[#0F172A] block">
                          Available System Topologies: On-Grid (Net Metering) & Hybrid (Battery Backup)
                        </span>
                        <span className="text-slate-600 font-medium">
                          View detailed breakdown of payback terms, equipment specs, and blackout operations.
                        </span>
                      </div>
                    </div>

                    <Link href={`/solutions/${service.slug}`}>
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#D97706] hover:underline shrink-0">
                        <span>Compare Topologies</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                )}

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-[#D97706] stroke-[2.2]" /> Customer Problem
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{service.customerProblem}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#D97706] stroke-[2.2]" /> Soul Power Solution
                    </span>
                    <p className="text-sm text-[#0F172A] leading-relaxed font-semibold">{service.solutionOverview}</p>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-base text-slate-600 leading-relaxed font-medium">{service.fullDescription}</p>

                {/* Suitable Property Types & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                      Suitable Property Types
                    </h3>
                    <ul className="space-y-2">
                      {service.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-[#0F172A] font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                      Key Solution Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-[#0F172A] font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Authorized Virgin Power EPC Engineering Specs
                  </span>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#D97706] hover:text-[#B45309] transition-colors"
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
