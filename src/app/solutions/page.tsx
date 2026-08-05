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
  Wind,
  BatteryCharging,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export default function SolutionsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const iconMap: Record<string, React.ElementType> = {
    Sun,
    Building2,
    Zap,
    Sparkles,
    Wind,
    BatteryCharging,
  };

  const filteredServices = servicesData.filter((service) => {
    if (selectedFilter === "all") return true;
    return service.id === selectedFilter || service.slug === selectedFilter;
  });

  const scrollToService = (slug: string) => {
    setSelectedFilter("all");
    setTimeout(() => {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-slate-50">
        {/* Page Hero */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="navy" className="text-amber-400 border-slate-700">
              Solar & EV Services Directory
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
              Renewable Energy & EV Charging Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Tailored renewable engineering solutions for homes, commercial establishments, and industrial facilities across Kozhikode and Wayanad.
            </p>
          </div>
        </section>

        {/* Interactive Solution Selector Bar */}
        <section className="py-8 bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading shrink-0">
                What solution are you looking for?
              </span>

              <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === "all"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  All Solutions
                </button>
                {servicesData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToService(s.slug)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
                      selectedFilter === s.id
                        ? "bg-emerald-800 text-white border-emerald-800"
                        : "bg-white text-slate-700 border-slate-200 hover:border-emerald-500"
                    }`}
                  >
                    {s.shortTitle} {s.isComingSoon && "• Soon"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Deep-Dives */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Sun;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-8 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-900 border border-emerald-200 shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                          {service.title}
                        </h2>
                        {service.isComingSoon && <Badge variant="comingSoon">Coming Soon</Badge>}
                      </div>
                      <p className="text-sm font-semibold text-emerald-800">{service.tagline}</p>
                    </div>
                  </div>

                  <Link href={`/contact#assessment?service=${service.id}`}>
                    <Button variant={service.isComingSoon ? "secondary" : "primary"} size="md">
                      <span>{service.isComingSoon ? "Register Interest" : "Request Assessment"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-amber-700" /> Customer Problem
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{service.customerProblem}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" /> Soul Power Solution
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{service.solutionOverview}</p>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-base text-slate-600 leading-relaxed">{service.fullDescription}</p>

                {/* Suitable Property Types & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Suitable Property Types */}
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900 font-heading uppercase tracking-wider text-xs">
                      Suitable Property Types
                    </h3>
                    <ul className="space-y-2">
                      {service.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-slate-900 font-heading uppercase tracking-wider text-xs">
                      Key Solution Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Typical Execution Process */}
                {service.processSteps && service.processSteps.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                      Typical Service Execution Process
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.processSteps.map((step, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <span className="text-[11px] font-bold text-amber-600 uppercase">Step 0{idx + 1}</span>
                          <h4 className="text-sm font-bold text-slate-900 font-heading">{step.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
