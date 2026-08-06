"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, MapPin, ArrowRight, CheckCircle2, Sun, Sparkles } from "lucide-react";
import { SolarPowerSwitchShowcase } from "./SolarPowerSwitchShowcase";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-amber-50/30 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
      {/* Light Theme Background Floating Ambient Glow Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Hero Layout: Copy & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="navy" className="py-1.5 px-3.5 shadow-xs border-slate-200 bg-white/80 backdrop-blur-md text-slate-900">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-xs">Authorized Partner of Virgin Power</span>
              </Badge>

              <Badge variant="outline" className="py-1.5 px-3.5 text-slate-700 border-sky-200 bg-sky-50/80 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-semibold text-xs">Kozhikode & Wayanad</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900 font-heading">
              Power Your Future With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600">
                Clean Solar Energy
              </span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Soul Power Energies delivers high-efficiency rooftop solar, commercial power plants, and EV charging infrastructure tailored for homes and enterprises across Kozhikode and Wayanad.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Tier-1 Solar Modules & Inverters</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Virgin Power EPC Standards</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Local Thiruvambady Service Team</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Complete KSEB Net Metering</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link href="/contact#assessment">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-amber-500/20 text-base">
                  <span>Request Free Site Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link href="#estimator">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-md border-slate-300 text-slate-800 hover:bg-slate-50">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <span>Calculate Solar Savings</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Feature Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/90 shadow-2xl p-6 lg:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
                    <Sun className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-heading">Soul Power Energy Hub</h3>
                    <p className="text-[11px] text-slate-500">Kozhikode • Wayanad • Malabar Region</p>
                  </div>
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Live Operations</span>
                </span>
              </div>

              {/* Stat Highlights Card Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Typical Payback</span>
                  <p className="text-2xl font-black text-amber-600 font-heading">3.5 - 4.5 Yrs</p>
                  <p className="text-[11px] text-slate-500">25-Year Warranty Output</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Annual Reduction</span>
                  <p className="text-2xl font-black text-emerald-600 font-heading">Up to 90%</p>
                  <p className="text-[11px] text-slate-500">On Monthly Electricity Cost</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex items-center justify-between text-xs text-sky-900 font-semibold">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Interactive solar storytelling switch below</span>
                </div>
                <ArrowRight className="w-4 h-4 text-sky-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Storytelling Interactive Feature Showcase embedded in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6"
        >
          <SolarPowerSwitchShowcase />
        </motion.div>
      </div>
    </section>
  );
}

