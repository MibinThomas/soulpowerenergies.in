"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2, Award } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-[#0C0E12] text-[#F5EFE6] relative" id="partnership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden nestive-card border border-[#EADBC8]/20 shadow-2xl group">
              <Image
                src={siteImages.virginPowerPartner.src}
                alt={siteImages.virginPowerPartner.alt}
                width={siteImages.virginPowerPartner.width}
                height={siteImages.virginPowerPartner.height}
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl nestive-card space-y-1 text-[#F5EFE6] border border-[#EADBC8]/20">
                <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Virgin Power EPC Network</span>
                </div>
                <p className="text-xs text-[#EADBC8]/80">Engineering capabilities & quality assurance</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Compliant Wording */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <Badge variant="navy" className="nestive-pill text-[#E5BA73]">
              <Award className="w-4 h-4 text-[#E5BA73]" />
              <span>Authorized Engineering Partnership</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight leading-tight">
              Local Service Excellence, Backed by Proven EPC Engineering
            </h2>

            <p className="text-base text-[#EADBC8]/80 leading-relaxed">
              As an authorized partner of {siteConfig.partner.fullName}, Soul Power Energies combines established renewable-energy expertise with responsive, on-ground support across Kozhikode and Wayanad.
            </p>

            {/* Official Compliance Box */}
            <div className="p-6 rounded-3xl nestive-card border border-[#EADBC8]/20 text-[#F5EFE6] space-y-3 shadow-xl">
              <h3 className="text-sm font-bold text-[#E5BA73] uppercase tracking-wider font-heading">
                Capabilities & Standards Attribution
              </h3>
              <p className="text-xs text-[#EADBC8]/80 leading-relaxed">
                {siteConfig.partner.wording}
              </p>
            </div>

            {/* Supporting Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#F5EFE6] font-semibold">
              <div className="flex items-center gap-2.5 p-3 rounded-xl nestive-card border border-[#EADBC8]/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                <span>On-ground local technical response</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl nestive-card border border-[#EADBC8]/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                <span>Proven EPC design standards</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl nestive-card border border-[#EADBC8]/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                <span>Net-metering coordination support</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl nestive-card border border-[#EADBC8]/15">
                <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                <span>Certified equipment selection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

