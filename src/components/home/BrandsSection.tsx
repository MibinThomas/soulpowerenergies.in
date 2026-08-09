"use client";

import { motion } from "framer-motion";
import { brandsData } from "@/config/brands";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function BrandsSection() {
  return (
    <section className="py-20 bg-[#000000] text-[#F5EFE6] relative" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#0C0E12] text-[#E5BA73] border border-white/10">
            Tier-1 Global Equipment
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight">
            Authorized Tier-1 Technology Partners
          </h2>
          <p className="text-base text-[#EADBC8] leading-relaxed font-medium">
            We deploy proven, high-durability equipment from top Indian and international solar & EV manufacturers, ensuring long-term generation performance.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {brandsData.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 shadow-lg flex flex-col justify-between items-center text-center group hover:border-[#E5BA73] transition-all min-h-[180px]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#131722] text-[#E5BA73] flex items-center justify-center font-bold text-sm font-heading border border-white/10 group-hover:scale-110 transition-transform">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#F5EFE6] font-heading group-hover:text-[#E5BA73] transition-colors mt-2">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-[#9CA3AF] mt-1 font-medium line-clamp-1">{brand.categoryLabel}</p>
              </div>

              <div className="pt-2 border-t border-white/10 w-full flex items-center justify-center gap-1 text-[10px] text-[#E5BA73] font-bold">
                <CheckCircle2 className="w-3 h-3" />
                <span>Tier-1 Rated</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Assurance Note */}
        <div className="p-6 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-2xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F5EFE6]">Backed by Manufacturer Warranty & Local Servicing</h4>
              <p className="text-xs text-[#EADBC8]">All PV modules carry a 25-year linear performance warranty. Thiruvambady HQ handles on-ground warranty claims.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
