"use client";

import { useState } from "react";
import Image from "next/image";
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
      <main id="main-content" className="flex-1 bg-[#F8F9FC] text-[#0F172A]">
        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden sthira-hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
              Technology Directory
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A]">
              Brands & Solar Technology Selection<span className="text-[#D97706]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We install Tier-1 solar photovoltaic panels, string inverters, and certified EV charging hardware engineered for optimal climate performance in Kerala.
            </p>
          </div>
        </section>

        {/* Quality Standards Banner */}
        <section className="py-8 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-[32px] sthira-card bg-white text-[#0F172A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  <span>Quality Assurance Standards</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                  Tier-1 Hardware & Engineering Support<span className="text-[#D97706]">.</span>
                </h2>
                <p className="text-xs text-slate-600 max-w-2xl leading-relaxed font-medium">
                  All component selections adhere to rigorous efficiency and durability parameters. Engineering and execution standards supported by Virgin Power and Engineering Pvt. Ltd.
                </p>
              </div>

              <Link href="/contact#assessment" className="shrink-0">
                <Button variant="primary" size="md" className="font-extrabold rounded-full shadow-md">
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
                      ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md font-black"
                      : "sthira-card bg-white text-[#0F172A] hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#D97706] stroke-[2.2]" />
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
                className="p-8 rounded-[32px] sthira-card sthira-card-hover bg-white flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Top Category Badge & Origin */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D97706]">
                      {brand.categoryLabel}
                    </span>
                    <Badge variant="gold" className="text-[10px] sthira-pill bg-white text-[#D97706]">
                      {brand.origin}
                    </Badge>
                  </div>

                  {/* Brand Logo Header Box */}
                  <div className="relative w-full h-16 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center p-2 group-hover:scale-[1.02] transition-transform duration-300 shadow-xs">
                    <Image
                      src={brand.logoUrl}
                      alt={`${brand.name} Authorized Partner Logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Brand Name */}
                  <h2 className="text-2xl font-black text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                    {brand.name}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {brand.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-[#0F172A] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5]" />
                    <span>{brand.keyHighlight}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <Link href={`/contact#assessment?brand=${encodeURIComponent(brand.name)}`}>
                    <Button variant="primary" size="sm" className="w-full justify-between text-xs font-black rounded-full shadow-md">
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
