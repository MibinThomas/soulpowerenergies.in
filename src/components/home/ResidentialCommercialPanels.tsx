"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Building2 } from "lucide-react";

export function ResidentialCommercialPanels() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Residential Solar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden glass-card border border-white/90 group flex flex-col justify-end p-8 sm:p-10 min-h-[440px] shadow-xl"
          >
            <Image
              src={siteImages.residentialSolar.src}
              alt={siteImages.residentialSolar.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

            <div className="relative z-10 space-y-4 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Home className="w-4 h-4" />
                <span>Residential Solar Power</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                Eliminate rising electricity costs with a custom home rooftop solar system.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                Custom rooftop layouts engineered to power all household appliances, safeguard against power cuts, and cut monthly utility bills by up to 90%.
              </p>

              <div className="pt-2">
                <Link href="/solutions#residential-rooftop-solar">
                  <Button variant="primary" size="md" className="shadow-lg shadow-amber-500/20">
                    <span>Explore Residential Solar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Commercial Solar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden glass-card border border-white/90 group flex flex-col justify-end p-8 sm:p-10 min-h-[440px] shadow-xl"
          >
            <Image
              src={siteImages.commercialSolar.src}
              alt={siteImages.commercialSolar.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

            <div className="relative z-10 space-y-4 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Building2 className="w-4 h-4" />
                <span>Commercial Power Plants</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                Turn idle rooftop space into a high-yielding energy asset for your enterprise.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                Scalable commercial power plants engineered for offices, factories, retail complexes, and schools to drastically reduce operational expenses.
              </p>

              <div className="pt-2">
                <Link href="/solutions#commercial-industrial-solar">
                  <Button variant="secondary" size="md" className="bg-emerald-600 hover:bg-emerald-700 border-emerald-500 shadow-lg">
                    <span>Explore Commercial Solar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

