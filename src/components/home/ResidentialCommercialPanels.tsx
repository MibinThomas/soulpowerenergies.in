"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Building2 } from "lucide-react";

export function ResidentialCommercialPanels() {
  return (
    <section className="py-20 bg-[#0C0E12] text-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Residential Solar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden nestive-card border border-[#EADBC8]/20 group flex flex-col justify-end p-8 sm:p-10 min-h-[440px] shadow-xl"
          >
            <Image
              src={siteImages.residentialSolar.src}
              alt={siteImages.residentialSolar.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/85 to-transparent" />

            <div className="relative z-10 space-y-4 text-[#F5EFE6]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill text-[#E5BA73] text-xs font-bold uppercase tracking-wider">
                <Home className="w-4 h-4" />
                <span>Residential Solar Power</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] leading-tight">
                Eliminate rising electricity costs with a custom home rooftop solar system.
              </h3>

              <p className="text-sm text-[#EADBC8]/85 leading-relaxed max-w-lg">
                Custom rooftop layouts engineered to power all household appliances, safeguard against power cuts, and cut monthly utility bills by up to 90%.
              </p>

              <div className="pt-2">
                <Link href="/solutions#residential-rooftop-solar">
                  <Button variant="primary" size="md" className="font-bold rounded-xl shadow-lg">
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
            className="relative rounded-3xl overflow-hidden nestive-card border border-[#EADBC8]/20 group flex flex-col justify-end p-8 sm:p-10 min-h-[440px] shadow-xl"
          >
            <Image
              src={siteImages.commercialSolar.src}
              alt={siteImages.commercialSolar.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/85 to-transparent" />

            <div className="relative z-10 space-y-4 text-[#F5EFE6]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill text-[#E5BA73] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Commercial Power Plants</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] leading-tight">
                Turn idle rooftop space into a high-yielding energy asset for your enterprise.
              </h3>

              <p className="text-sm text-[#EADBC8]/85 leading-relaxed max-w-lg">
                Scalable commercial power plants engineered for offices, factories, retail complexes, and schools to drastically reduce operational expenses.
              </p>

              <div className="pt-2">
                <Link href="/solutions#commercial-industrial-solar">
                  <Button variant="secondary" size="md" className="font-bold rounded-xl shadow-lg">
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

