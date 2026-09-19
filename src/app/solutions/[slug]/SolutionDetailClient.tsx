"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Sun,
  Building2,
  Zap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  ZapOff,
  Cpu,
  Layers,
  Sparkle,
  SlidersHorizontal,
} from "lucide-react";

interface SolutionDetailClientProps {
  service: ServiceItem;
  prevService: ServiceItem;
  nextService: ServiceItem;
}

export function SolutionDetailClient({
  service,
  prevService,
  nextService,
}: SolutionDetailClientProps) {
  const iconMap: Record<string, React.ElementType> = {
    Sun,
    Building2,
    Zap,
    Sparkles,
  };

  const Icon = iconMap[service.iconName] || Sun;

  // Active tab state for system options (On-Grid vs Hybrid)
  const [activeOptionId, setActiveOptionId] = useState<string>(
    service.systemOptions?.[0]?.id || ""
  );

  const selectedOption = service.systemOptions?.find((opt) => opt.id === activeOptionId) || service.systemOptions?.[0];

  return (
    <div className="space-y-12 py-10 lg:py-16 bg-[#F8F9FC] text-[#0F172A]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sthira-card bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold border border-slate-200/80">
                <Icon className="w-4 h-4 text-[#D97706] stroke-[2.2]" />
                <span>{service.shortTitle}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                {service.title}<span className="text-[#D97706]">.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {service.tagline}
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href={`/contact#assessment?service=${service.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center font-extrabold rounded-full shadow-xl py-3.5"
                >
                  <span>Request Free Site Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="ghost"
                  size="md"
                  className="w-full justify-center rounded-full text-xs font-bold border border-slate-200/80 text-[#0F172A] hover:bg-slate-100"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Solutions</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl">
            <Image
              src={service.bgImage}
              alt={service.title}
              fill
              priority
              className="object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-bold text-[#0F172A] bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/80 shadow-md">
                Authorized Virgin Power Engineering Specs
              </span>
              <span className="text-xs font-bold text-[#D97706] bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/80 shadow-md">
                Kozhikode & Wayanad On-Ground Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SYSTEM OPTIONS SECTION: ON-GRID VS HYBRID DETAILED TABS */}
      {/* ======================================================== */}
      {service.systemOptions && service.systemOptions.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold border border-slate-200/80">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D97706] stroke-[2.2]" />
              <span>System Topology Selection</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A]">
              Choose Your Solar Setup: On-Grid vs. Hybrid<span className="text-[#D97706]">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Explore the technical advantages, battery backup capabilities, and payback periods of our On-Grid (Net Metering) and Hybrid (Battery Backup) configurations.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-1.5 rounded-2xl bg-white border border-slate-200/80 max-w-2xl mx-auto shadow-xs">
            {service.systemOptions.map((opt) => {
              const isActive = opt.id === activeOptionId;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveOptionId(opt.id)}
                  className={`w-full sm:w-1/2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md font-black"
                      : "text-[#0F172A] hover:bg-slate-100"
                  }`}
                >
                  <Cpu className="w-4 h-4 stroke-[2.2]" />
                  <span>{opt.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Option Content Box */}
          {selectedOption && (
            <div className="p-6 sm:p-10 rounded-[32px] sthira-card bg-white border border-[#D97706]/30 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 border border-[#D97706]/30 text-[#D97706] text-xs font-bold mb-1">
                    {selectedOption.badge}
                  </span>
                  <h3 className="text-2xl font-black text-[#0F172A]">
                    {selectedOption.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#D97706]">
                    {selectedOption.tagline}
                  </p>
                </div>

                <Link href={`/contact#assessment?service=${service.id}&option=${selectedOption.id}`}>
                  <Button variant="primary" size="md" className="font-extrabold rounded-full shadow-md shrink-0">
                    <span>Inquire About {selectedOption.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {selectedOption.description}
              </p>

              {/* How it Works & Ideal For */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* How it works */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D97706] stroke-[2.2]" /> How It Works
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedOption.howItWorks.split("\n").map((step, i) => (
                      <p key={i} className="font-medium">{step}</p>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D97706] stroke-[2.2]" /> Best Suited Candidates
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedOption.idealFor}
                  </p>
                </div>
              </div>

              {/* Key Highlights & Technical Specs Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    Key Advantage Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedOption.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="font-semibold">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    System Technical & Financial Specs
                  </h4>
                  <div className="divide-y divide-slate-200/80 rounded-2xl bg-slate-50 border border-slate-200/80 overflow-hidden text-xs">
                    {selectedOption.specs.map((spec, idx) => (
                      <div key={idx} className="p-3 flex items-center justify-between gap-4">
                        <span className="text-slate-600 font-bold">{spec.label}</span>
                        <span className="text-[#0F172A] font-extrabold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Problem vs Solution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-[32px] sthira-card space-y-3 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#D97706] stroke-[2.2]" /> Common Customer Challenge
            </span>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {service.customerProblem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-[32px] sthira-card space-y-3 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D97706] stroke-[2.2]" /> The Soul Power Advantage
            </span>
            <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-semibold">
              {service.solutionOverview}
            </p>
          </div>
        </div>
      </section>

      {/* Suitable Properties & Solution Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-[32px] sthira-card space-y-8 shadow-2xl">
          <h2 className="text-2xl font-black text-[#0F172A]">
            Application Scope & Core Benefits<span className="text-[#D97706]">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                Suitable Property Premises
              </h3>
              <ul className="space-y-2.5">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#0F172A] font-semibold">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#D97706] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                Key Economic & Operational Benefits
              </h3>
              <ul className="space-y-2.5">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#0F172A] font-semibold">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#D97706] shrink-0 stroke-[2.5]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Process Steps */}
      {service.processSteps && service.processSteps.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-[32px] sthira-card space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Step-by-Step Workflow
              </span>
              <h2 className="text-2xl font-black text-[#0F172A]">
                Our Turnkey Execution Process<span className="text-[#D97706]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold text-[#D97706] uppercase">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Site Assessment CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[32px] sthira-card text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
              Ready to Upgrade Your Property to Solar<span className="text-[#D97706]">?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Schedule a free site assessment with our local engineering team in Kozhikode & Wayanad for custom calculations and equipment specifications.
            </p>
          </div>

          <div className="pt-2">
            <Link href={`/contact#assessment?service=${service.id}`}>
              <Button
                variant="primary"
                size="lg"
                className="font-extrabold rounded-full shadow-xl px-8 py-4 text-base"
              >
                <span>Request Custom Site Proposal & Solar Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pagination Footer Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
          <Link
            href={`/solutions/${prevService.slug}`}
            className="flex items-center gap-3 p-4 rounded-2xl sthira-card text-[#0F172A] hover:text-[#D97706] transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 text-[#D97706] shrink-0" />
            <div className="text-left space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Previous Solution</span>
              <span className="text-sm font-bold block">{prevService.title}</span>
            </div>
          </Link>

          <Link
            href={`/solutions/${nextService.slug}`}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl sthira-card text-[#0F172A] hover:text-[#D97706] transition-all w-full sm:w-auto text-right"
          >
            <div className="text-right space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Next Solution</span>
              <span className="text-sm font-bold block">{nextService.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#D97706] shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
