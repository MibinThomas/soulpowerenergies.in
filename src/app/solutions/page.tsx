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
      <main id="main-content" className="flex-1 bg-[#888D83] text-white">
        {/* Page Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-amber-300">
              Solar & EV Services Directory
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif italic tracking-tight text-white">
              Renewable Energy & EV Charging Solutions
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Tailored renewable engineering solutions for homes, commercial establishments, and industrial facilities across Kozhikode and Wayanad.
            </p>
          </div>
        </section>

        {/* Interactive Solution Selector Bar */}
        <section className="py-6 bg-[#6F746A]/90 backdrop-blur-md sticky top-[73px] z-30 border-y border-white/15 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading shrink-0">
                Filter Solutions:
              </span>

              <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === "all"
                      ? "bg-white text-slate-900 shadow-md"
                      : "nestive-card text-white hover:bg-white/20"
                  }`}
                >
                  All Solutions
                </button>
                {servicesData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToService(s.slug)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      selectedFilter === s.id
                        ? "bg-white text-slate-900 shadow-md"
                        : "nestive-card text-white hover:bg-white/20"
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
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Sun;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-36 p-6 sm:p-10 rounded-3xl nestive-card space-y-8 relative overflow-hidden shadow-xl"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/15">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-300/30 shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-normal font-serif italic text-white">
                          {service.title}
                        </h2>
                        {service.isComingSoon && <Badge variant="comingSoon">Coming Soon</Badge>}
                      </div>
                      <p className="text-sm font-semibold text-amber-300">{service.tagline}</p>
                    </div>
                  </div>

                  <Link href={`/contact#assessment?service=${service.id}`}>
                    <Button variant="primary" size="md" className="bg-white text-slate-900 hover:bg-amber-100 border-none font-bold rounded-xl shadow-lg">
                      <span>{service.isComingSoon ? "Register Interest" : "Request Assessment"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 font-heading">
                      <HelpCircle className="w-4 h-4 text-amber-300" /> Customer Problem
                    </span>
                    <p className="text-sm text-white/80 leading-relaxed">{service.customerProblem}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 font-heading">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" /> Soul Power Solution
                    </span>
                    <p className="text-sm text-white/90 leading-relaxed">{service.solutionOverview}</p>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-base text-white/80 leading-relaxed">{service.fullDescription}</p>

                {/* Suitable Property Types & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  {/* Suitable Property Types */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-amber-300 font-heading uppercase tracking-wider">
                      Suitable Property Types
                    </h3>
                    <ul className="space-y-2">
                      {service.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-amber-300 font-heading uppercase tracking-wider">
                      Key Solution Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Typical Execution Process */}
                {service.processSteps && service.processSteps.length > 0 && (
                  <div className="pt-6 border-t border-white/15 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white/70 font-heading">
                      Typical Service Execution Process
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.processSteps.map((step, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-black/20 border border-white/10 space-y-1">
                          <span className="text-[11px] font-bold text-amber-300 uppercase">Step 0{idx + 1}</span>
                          <h4 className="text-sm font-bold text-white font-heading">{step.title}</h4>
                          <p className="text-xs text-white/70 leading-relaxed">{step.desc}</p>
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
