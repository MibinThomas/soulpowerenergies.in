"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2, Award } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-[#F8F9FC] text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[32px] sthira-card bg-white p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[28px] overflow-hidden sthira-card bg-white border border-slate-200/80 shadow-xl group">
                <Image
                  src={siteImages.virginPowerPartner.src}
                  alt={siteImages.virginPowerPartner.alt}
                  width={siteImages.virginPowerPartner.width}
                  height={siteImages.virginPowerPartner.height}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-[#0F172A] space-y-1 border border-slate-200/80 shadow-xl">
                  <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    <span>Virgin Power EPC Network</span>
                  </div>
                  <p className="text-xs text-slate-600">Engineering capabilities & quality assurance</p>
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
              <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
                Authorized Engineering Partner
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                Backing Local Execution with Proven EPC Capabilities<span className="text-[#D97706]">.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {siteConfig.partner.wording}
              </p>

              {/* Technical Capabilities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
                    <Award className="w-4 h-4 stroke-[2.5]" />
                    <span>Quality Procurement</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Direct supply chain access to Tier-1 solar modules & certified inverters.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    <span>KSEB Grid Sync</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Streamlined net-metering approvals and utility grid inspection compliance.</p>
                </div>
              </div>

              {/* Local Service SLA Tag */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between font-medium">
                <span>Local Head Office: <strong className="text-[#0F172A]">Thiruvambady, Kozhikode</strong></span>
                <span className="text-[#D97706] font-bold">Kerala Operations</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
