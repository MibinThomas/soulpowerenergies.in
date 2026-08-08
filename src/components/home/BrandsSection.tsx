"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { brandsData } from "@/config/brands";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function BrandsSection() {
  return (
    <section className="py-20 bg-[#0C0E12] text-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="green" className="px-3.5 py-1 nestive-pill text-[#E5BA73]">Tier-1 Technology Partners</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight">
              Proven Global & Indian Solar Technology
            </h2>
            <p className="text-base text-[#EADBC8]/80 leading-relaxed">
              We deploy ultra-reliable solar modules, high-efficiency string inverters, and certified EV charging hardware from accredited manufacturers.
            </p>
          </div>

          <Link href="/brands">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F5EFE6] hover:text-[#E5BA73] transition-colors py-2.5 px-5 rounded-full nestive-pill">
              <span>View Full Brand Directory</span>
              <ArrowRight className="w-4 h-4 text-[#E5BA73]" />
            </span>
          </Link>
        </div>

        {/* Clean Responsive Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandsData.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl nestive-card nestive-card-hover border border-[#EADBC8]/15 shadow-md flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5BA73] block mb-2">
                  {brand.categoryLabel}
                </span>
                <h3 className="text-lg font-extrabold text-[#F5EFE6] font-heading group-hover:text-[#E5BA73] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#EADBC8]/70 mt-2 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EADBC8]/15 flex items-center justify-between text-[11px] font-semibold text-[#EADBC8]/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5BA73]" />
                  <span>{brand.origin}</span>
                </span>
                <span className="text-[#E5BA73] text-[10px] font-bold nestive-pill px-2.5 py-0.5 rounded-full">
                  Certified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

