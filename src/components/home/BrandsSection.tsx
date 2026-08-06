"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { brandsData } from "@/config/brands";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function BrandsSection() {
  return (
    <section className="py-20 bg-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="green" className="px-3.5 py-1">Tier-1 Technology Partners</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Proven Global & Indian Solar Technology
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We deploy ultra-reliable solar modules, high-efficiency string inverters, and certified EV charging hardware from accredited manufacturers.
            </p>
          </div>

          <Link href="/brands">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors py-2 px-4 rounded-xl glass-pill shadow-2xs">
              <span>View Full Brand Directory</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
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
              className="p-6 rounded-3xl glass-card glass-card-hover border border-white/90 shadow-md flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {brand.categoryLabel}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 font-heading group-hover:text-amber-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>{brand.origin}</span>
                </span>
                <span className="text-emerald-700 text-[10px] font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
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

