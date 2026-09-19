"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandsData } from "@/config/brands";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function BrandsSection() {
  return (
    <section className="py-20 bg-[#F8F9FC] text-[#0F172A] relative" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
            Tier-1 Global Equipment
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A]">
            Authorized Tier-1 Technology Partners<span className="text-[#D97706]">.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            We deploy proven, high-durability equipment from top Indian and international solar & EV manufacturers, ensuring long-term generation performance.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brandsData.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-[28px] sthira-card sthira-card-hover flex flex-col justify-between items-center text-center group"
            >
              {/* Brand Logo Container */}
              <div className="relative w-full h-16 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <Image
                  src={brand.logoUrl}
                  alt={`${brand.name} Authorized Partner Logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{brand.categoryLabel}</p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs text-[#D97706] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Tier-1 Partner</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Assurance Note */}
        <div className="p-6 rounded-[28px] sthira-card text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-2xl bg-[#D97706]/10 text-[#D97706] shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">Backed by Manufacturer Warranty & Local Servicing</h4>
              <p className="text-xs text-slate-600">All PV modules carry a 25-year linear performance warranty. Thiruvambady HQ handles on-ground warranty claims.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
