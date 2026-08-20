"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Building2 } from "lucide-react";

export function ResidentialCommercialPanels() {
  return (
    <section className="py-20 bg-[#000000] text-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Residential Solar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 group flex flex-col justify-between p-6 sm:p-8 shadow-xl"
          >
            <div>
              {/* Photo Banner */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 shadow-sm mb-6">
                <Image
                  src={siteImages.residentialSolar.src}
                  alt={siteImages.residentialSolar.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill bg-[#000000]/90 backdrop-blur-md text-[#E5BA73] border border-white/15 text-xs font-bold uppercase tracking-wider shadow-md">
                  <Home className="w-4 h-4" />
                  <span>Residential Solar Power</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] leading-tight">
                  Eliminate rising electricity costs with a custom home rooftop solar system.
                </h3>

                <p className="text-sm text-[#EADBC8] leading-relaxed font-medium">
                  Custom rooftop layouts engineered to power all household appliances, safeguard against power cuts, and cut monthly utility bills by up to 90%.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/solutions/residential-rooftop-solar">
                <Button variant="primary" size="md" className="w-full justify-between font-black rounded-xl shadow-lg bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white">
                  <span>Explore Residential Solar</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Panel 2: Commercial Solar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 group flex flex-col justify-between p-6 sm:p-8 shadow-xl"
          >
            <div>
              {/* Photo Banner */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 shadow-sm mb-6">
                <Image
                  src={siteImages.commercialSolar.src}
                  alt={siteImages.commercialSolar.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill bg-[#000000]/90 backdrop-blur-md text-[#E5BA73] border border-white/15 text-xs font-bold uppercase tracking-wider shadow-md">
                  <Building2 className="w-4 h-4" />
                  <span>Commercial Power Plants</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] leading-tight">
                  Turn idle rooftop space into a high-yielding energy asset for your enterprise.
                </h3>

                <p className="text-sm text-[#EADBC8] leading-relaxed font-medium">
                  Scalable commercial power plants engineered for offices, factories, retail complexes, and schools to drastically reduce operational expenses.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/solutions/commercial-industrial-solar">
                <Button variant="secondary" size="md" className="w-full justify-between font-black rounded-xl shadow-lg bg-[#131722] text-white border border-white/10">
                  <span>Explore Commercial Solar</span>
                  <ArrowRight className="w-4 h-4 text-[#E5BA73]" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
