"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { brandsData } from "@/config/brands";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sun,
  Zap,
  Cpu,
} from "lucide-react";

export default function BrandsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredBrands = brandsData.filter((b) => {
    if (activeCategory === "all") return true;
    return b.category === activeCategory;
  });

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-[#0C0E12] text-[#F5EFE6]">
        {/* Page Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-[#E5BA73]">
              Technology Directory
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif italic tracking-tight text-[#F5EFE6]">
              Brands & Solar Technology Selection
            </h1>
            <p className="text-base sm:text-lg text-[#EADBC8]/80 max-w-3xl mx-auto leading-relaxed">
              We install Tier-1 solar photovoltaic panels, string inverters, and certified EV charging hardware engineered for optimal climate performance in Kerala.
            </p>
          </div>
        </section>

        {/* Quality Standards Banner */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl nestive-card border border-[#EADBC8]/15 text-[#F5EFE6] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Quality Assurance Standards</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-normal font-serif italic text-[#F5EFE6]">
                  Tier-1 Hardware & Engineering Support
                </h2>
                <p className="text-xs text-[#EADBC8]/80 max-w-2xl leading-relaxed">
                  All component selections adhere to rigorous efficiency and durability parameters. Engineering and execution standards supported by Virgin Power and Engineering Pvt. Ltd.
                </p>
              </div>

              <Link href="/contact#assessment" className="shrink-0">
                <Button variant="primary" size="md" className="font-bold rounded-xl shadow-lg">
                  <span>Enquire Brand Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Filterable Brand Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Brands", icon: Cpu },
              { id: "panel", label: "Solar Panels", icon: Sun },
              { id: "inverter", label: "Solar Inverters", icon: Cpu },
              { id: "ev-charging", label: "EV Infrastructure", icon: Zap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#E5BA73] text-[#0C0E12] shadow-md font-bold"
                      : "nestive-card text-[#F5EFE6] hover:bg-[#EADBC8]/20 border border-[#EADBC8]/15"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Brands Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl nestive-card border border-[#EADBC8]/15 shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                      {brand.categoryLabel}
                    </span>
                    <Badge variant="gold" className="text-[10px] nestive-pill text-[#E5BA73]">
                      {brand.origin}
                    </Badge>
                  </div>

                  {/* Brand Name */}
                  <h2 className="text-2xl font-normal font-serif italic text-[#F5EFE6]">
                    {brand.name}
                  </h2>

                  <p className="text-sm text-[#EADBC8]/80 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#0C0E12]/60 border border-[#EADBC8]/15 text-xs text-[#F5EFE6] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                    <span>{brand.keyHighlight}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-[#EADBC8]/15 flex flex-col gap-3">
                  <Link href={`/contact#assessment?brand=${encodeURIComponent(brand.name)}`}>
                    <Button variant="primary" size="sm" className="w-full justify-between text-xs font-bold rounded-xl">
                      <span>Enquire System With {brand.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
