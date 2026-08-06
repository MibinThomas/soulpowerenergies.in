"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight, Compass, ShieldCheck } from "lucide-react";

export function ServiceAreaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white relative border-b border-slate-200/60" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Regions */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <Badge variant="navy" className="text-sky-700 bg-sky-50 border-sky-200">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Regional Service Coverage</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              On-Ground Service Across Kozhikode & Wayanad
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Based in Thiruvambady, our local engineering team provides rapid site assessments, installations, and after-sales support for residential homeowners and commercial enterprises throughout northern Kerala.
            </p>

            {/* Region Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-card border border-white/90 space-y-1 shadow-xs">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Primary Base</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Thiruvambady</h3>
                <p className="text-[11px] text-slate-500">HQ Operations Hub</p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-white/90 space-y-1 shadow-xs">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">District Hub</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Kozhikode</h3>
                <p className="text-[11px] text-slate-500">Urban & Suburb Coverage</p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-white/90 space-y-1 shadow-xs">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">District Hub</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Wayanad</h3>
                <p className="text-[11px] text-slate-500">Highland & Commercial</p>
              </div>
            </div>

            {/* Outside Area Notice */}
            <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex items-center justify-between text-xs text-sky-900 font-semibold">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Have a project outside these areas? Contact our team to confirm availability.</span>
              </div>
            </div>

            <div>
              <Link href="/contact">
                <Button variant="outline" size="md" className="bg-white/80 border-slate-300 text-slate-800 hover:bg-slate-50">
                  <span>Confirm Service For Your Location</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Map-Inspired Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl dark-glass-card text-white shadow-2xl relative overflow-hidden space-y-6">
              {/* Regional Contour Graphic */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">Northern Kerala Solar Network</h3>
                    <p className="text-xs text-slate-400">Soul Power Energies Operational Region</p>
                  </div>
                </div>
                <Badge variant="green" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  Active
                </Badge>
              </div>

              {/* Graphical Service Nodes */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="relative pl-6 border-l-2 border-amber-400 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-slate-900" />
                    <h4 className="text-sm font-bold text-white">Thiruvambady HQ</h4>
                    <p className="text-xs text-slate-400">On-ground local technical hub & dispatch center</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-sky-400 ring-4 ring-slate-900" />
                    <h4 className="text-sm font-bold text-white">Kozhikode Service Zone</h4>
                    <p className="text-xs text-slate-400">City residential rooftops, commercial complexes & EV stations</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-900" />
                    <h4 className="text-sm font-bold text-white">Wayanad Service Zone</h4>
                    <p className="text-xs text-slate-400">Hospitality resorts, commercial estates & residential solar setups</p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Fast On-Site Inspection
                </span>
                <span>Northern Kerala</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

