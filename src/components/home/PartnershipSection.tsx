"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2, Award, ExternalLink } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-[#000000] text-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden nestive-card bg-[#000000] border border-white/10 shadow-xl group">
                <Image
                  src={siteImages.virginPowerPartner.src}
                  alt={siteImages.virginPowerPartner.alt}
                  width={siteImages.virginPowerPartner.width}
                  height={siteImages.virginPowerPartner.height}
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-100 filter brightness-90"
                />

                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl nestive-card bg-[#000000]/90 backdrop-blur-md text-[#F5EFE6] space-y-1 border border-white/15 shadow-xl">
                  <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Virgin Power EPC Network</span>
                  </div>
                  <p className="text-xs text-[#EADBC8]">Engineering capabilities & quality assurance</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Copy & Compliant Wording */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 space-y-6"
            >
              <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#131722] text-[#E5BA73] border border-white/10">
                Authorized Engineering Partner
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight leading-tight">
                Backing Local Execution with Proven EPC Capabilities
              </h2>

              <p className="text-base text-[#EADBC8] leading-relaxed font-medium">
                {siteConfig.partner.wording}
              </p>

              {/* Technical Capabilities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#131722] border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Quality Procurement</span>
                  </div>
                  <p className="text-xs text-[#EADBC8]">Direct supply chain access to Tier-1 solar modules & certified inverters.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#131722] border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>KSEB Grid Sync</span>
                  </div>
                  <p className="text-xs text-[#EADBC8]">Streamlined net-metering approvals and utility grid inspection compliance.</p>
                </div>
              </div>

              {/* Local Service SLA Tag */}
              <div className="p-4 rounded-2xl bg-[#000000] border border-white/10 text-xs text-[#EADBC8] flex items-center justify-between">
                <span>Local Head Office: <strong>Thiruvambady, Kozhikode</strong></span>
                <span className="text-[#E5BA73] font-bold">Kerala Operations</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
