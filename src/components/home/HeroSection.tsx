"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, MapPin, ArrowRight, CheckCircle2, Sun, Sparkles } from "lucide-react";
import { SolarPowerSwitchShowcase } from "./SolarPowerSwitchShowcase";

export function HeroSection() {
  const steps = [
    { num: "01", label: "Enquiry", desc: "Consultation" },
    { num: "02", label: "Site Audit", desc: "Feasibility" },
    { num: "03", label: "Custom Design", desc: "Engineering" },
    { num: "04", label: "Solar Active", desc: "Grid Sync" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#888D83] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-white/10">
      {/* Background Soft Studio Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Main 2-Column Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Nestive Copy & Steps */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Social Proof Avatar Stack Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full nestive-pill text-xs text-white/90">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-amber-400 border-2 border-[#888D83] flex items-center justify-center text-[10px] font-bold text-slate-950">
                  SP
                </div>
                <div className="w-6 h-6 rounded-full bg-sky-400 border-2 border-[#888D83] flex items-center justify-center text-[10px] font-bold text-slate-950">
                  VP
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-400 border-2 border-[#888D83] flex items-center justify-center text-[10px] font-bold text-slate-950">
                  ★
                </div>
              </div>
              <span className="font-medium">+10,000 People in Kerala Powered by Soul Power</span>
            </div>

            {/* Editorial Serif Display Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white italic font-normal tracking-tight leading-[1.1]">
                Power Your Home <br />
                The Smart Way
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                Ambient control of your rooftop space — without lifting a finger. Your home is just four simple steps away from being completely energy independent!
              </p>
            </div>

            {/* Nestive Glass Pill Button */}
            <div className="pt-2">
              <Link href="/contact#assessment">
                <button className="inline-flex items-center gap-3 p-1.5 pr-6 rounded-full nestive-pill hover:bg-white/25 transition-all group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase text-white">
                    CONNECT YOUR SPACE
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Horizontal Step Cards (01 - 04) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-3.5 rounded-2xl nestive-card space-y-2 hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 font-mono">{step.num}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white font-heading">{step.label}</h3>
                    <p className="text-[10px] text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Embedded 3D Solar Power Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <SolarPowerSwitchShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

