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
    <div className="space-y-12 py-10 lg:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full nestive-pill bg-[#131722] text-[#E5BA73] text-xs font-bold border border-white/10">
                <Icon className="w-4 h-4 text-[#E5BA73]" />
                <span>{service.shortTitle}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-[#F5EFE6] leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-[#EADBC8] leading-relaxed font-medium">
                {service.tagline}
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href={`/contact#assessment?service=${service.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center font-black rounded-2xl shadow-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white py-3.5"
                >
                  <span>Request Free Site Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full justify-center rounded-2xl text-xs font-bold border-white/15 text-[#F5EFE6] hover:bg-[#131722]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Solutions</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
            <Image
              src={service.bgImage}
              alt={service.title}
              fill
              priority
              className="object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-bold text-[#F5EFE6] bg-[#000000]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
                Authorized Virgin Power Engineering Specs
              </span>
              <span className="text-xs font-bold text-[#E5BA73] bg-[#000000]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full nestive-pill bg-[#0C0E12] text-[#E5BA73] text-xs font-bold border border-white/10">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#E5BA73]" />
              <span>System Topology Selection</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal font-serif italic text-[#F5EFE6]">
              Choose Your Solar Setup: On-Grid vs. Hybrid
            </h2>
            <p className="text-xs sm:text-sm text-[#EADBC8] leading-relaxed font-medium">
              Explore the technical advantages, battery backup capabilities, and payback periods of our On-Grid (Net Metering) and Hybrid (Battery Backup) configurations.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-1.5 rounded-2xl bg-[#0C0E12] border border-white/10 max-w-2xl mx-auto">
            {service.systemOptions.map((opt) => {
              const isActive = opt.id === activeOptionId;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveOptionId(opt.id)}
                  className={`w-full sm:w-1/2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-lg font-black"
                      : "text-[#EADBC8] hover:text-[#F5EFE6] hover:bg-[#131722]"
                  }`}
                >
                  <Cpu className="w-4 h-4" />
                  <span>{opt.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Option Content Box */}
          {selectedOption && (
            <div className="p-6 sm:p-10 rounded-3xl nestive-card bg-[#0C0E12] border border-[#E5BA73]/30 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#131722] border border-[#E5BA73]/40 text-[#E5BA73] text-xs font-bold mb-1">
                    {selectedOption.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-serif italic text-[#F5EFE6]">
                    {selectedOption.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#E5BA73]">
                    {selectedOption.tagline}
                  </p>
                </div>

                <Link href={`/contact#assessment?service=${service.id}&option=${selectedOption.id}`}>
                  <Button variant="primary" size="md" className="font-black rounded-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white shadow-md shrink-0">
                    <span>Inquire About {selectedOption.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#EADBC8] leading-relaxed font-medium">
                {selectedOption.description}
              </p>

              {/* How it Works & Ideal For */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* How it works */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#131722] border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] font-heading flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#E5BA73]" /> How It Works
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-[#F5EFE6] leading-relaxed">
                    {selectedOption.howItWorks.split("\n").map((step, i) => (
                      <p key={i} className="font-medium">{step}</p>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#131722] border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] font-heading flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E5BA73]" /> Best Suited Candidates
                  </h4>
                  <p className="text-xs sm:text-sm text-[#EADBC8] leading-relaxed font-medium">
                    {selectedOption.idealFor}
                  </p>
                </div>
              </div>

              {/* Key Highlights & Technical Specs Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] font-heading">
                    Key Advantage Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedOption.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5EFE6]">
                        <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0 mt-0.5" />
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] font-heading">
                    System Technical & Financial Specs
                  </h4>
                  <div className="divide-y divide-white/10 rounded-2xl bg-[#131722] border border-white/10 overflow-hidden text-xs">
                    {selectedOption.specs.map((spec, idx) => (
                      <div key={idx} className="p-3 flex items-center justify-between gap-4">
                        <span className="text-[#EADBC8] font-bold">{spec.label}</span>
                        <span className="text-[#F5EFE6] font-semibold text-right">{spec.value}</span>
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
          <div className="p-6 sm:p-8 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 space-y-3 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] flex items-center gap-2 font-heading">
              <HelpCircle className="w-4 h-4 text-[#E5BA73]" /> Common Customer Challenge
            </span>
            <p className="text-sm sm:text-base text-[#EADBC8] leading-relaxed font-medium">
              {service.customerProblem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 space-y-3 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] flex items-center gap-2 font-heading">
              <ShieldCheck className="w-4 h-4 text-[#E5BA73]" /> The Soul Power Advantage
            </span>
            <p className="text-sm sm:text-base text-[#F5EFE6] leading-relaxed font-medium">
              {service.solutionOverview}
            </p>
          </div>
        </div>
      </section>

      {/* Suitable Properties & Solution Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 space-y-8 shadow-2xl">
          <h2 className="text-2xl font-bold font-serif italic text-[#F5EFE6]">
            Application Scope & Core Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#E5BA73] font-heading uppercase tracking-wider">
                Suitable Property Premises
              </h3>
              <ul className="space-y-2.5">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#F5EFE6]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#E5BA73] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#E5BA73] font-heading uppercase tracking-wider">
                Key Economic & Operational Benefits
              </h3>
              <ul className="space-y-2.5">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#F5EFE6]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#E5BA73] shrink-0" />
                    <span className="font-medium">{benefit}</span>
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
          <div className="p-6 sm:p-10 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73] font-heading">
                Step-by-Step Workflow
              </span>
              <h2 className="text-2xl font-bold font-serif italic text-[#F5EFE6]">
                Our Turnkey Execution Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#131722] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-[#E5BA73] uppercase">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#F5EFE6] font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#EADBC8] leading-relaxed font-medium">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#131722] via-[#0C0E12] to-[#131722] border border-[#E5BA73]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-normal font-serif italic text-[#F5EFE6]">
              Ready to Upgrade Your Property to Solar?
            </h2>
            <p className="text-sm sm:text-base text-[#EADBC8] leading-relaxed font-medium">
              Schedule a free site assessment with our local engineering team in Kozhikode & Wayanad for custom calculations and equipment specifications.
            </p>
          </div>

          <div className="pt-2">
            <Link href={`/contact#assessment?service=${service.id}`}>
              <Button
                variant="primary"
                size="lg"
                className="font-black rounded-2xl shadow-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white px-8 py-4 text-base"
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <Link
            href={`/solutions/${prevService.slug}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-[#0C0E12] border border-white/10 hover:border-[#E5BA73] text-[#F5EFE6] hover:text-[#E5BA73] transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 text-[#E5BA73] shrink-0" />
            <div className="text-left space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-[#9CA3AF] block">Previous Solution</span>
              <span className="text-sm font-bold block">{prevService.title}</span>
            </div>
          </Link>

          <Link
            href={`/solutions/${nextService.slug}`}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-[#0C0E12] border border-white/10 hover:border-[#E5BA73] text-[#F5EFE6] hover:text-[#E5BA73] transition-all w-full sm:w-auto text-right"
          >
            <div className="text-right space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-[#9CA3AF] block">Next Solution</span>
              <span className="text-sm font-bold block">{nextService.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#E5BA73] shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
