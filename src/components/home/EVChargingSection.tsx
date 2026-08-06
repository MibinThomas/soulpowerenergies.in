"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Zap, ShieldCheck, ArrowRight, Home, Building, Car, Sparkles } from "lucide-react";

export function EVChargingSection() {
  const [activeUseCase, setActiveUseCase] = useState<number>(0);

  const useCases = [
    {
      icon: Home,
      title: "Private Residential Garages",
      desc: "Compact 7.4 kW to 11 kW AC wallbox installations for independent homes, enabling fast overnight charging.",
    },
    {
      icon: Building,
      title: "Apartments & Gated Communities",
      desc: "Multi-user charging hubs with individual metering, smart access control, and dedicated safety distribution.",
    },
    {
      icon: Car,
      title: "Workplaces & Corporate Offices",
      desc: "Provide EV charging amenities for employees and clients during business hours with reliable load management.",
    },
    {
      icon: Sparkles,
      title: "Commercial & Retail Outlets",
      desc: "Attract high-value EV drivers to hotels, resorts, shopping centers, and restaurants with fast charging points.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white relative overflow-hidden border-b border-slate-200/60" id="ev-charging">
      {/* Background Electric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Use Case Selector */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <Badge variant="navy" className="border-sky-300 text-sky-700 bg-sky-50/80 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>Electric Vehicle Infrastructure</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-slate-900">
              Prepare Your Property For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600">
                Electric Mobility
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Soul Power Energies installs certified EV charging chargers (including VE Charge systems) for homes, apartments, commercial facilities, and parking premises across Kozhikode and Wayanad.
            </p>

            {/* Interactive Use Case Tabs */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Select Use Case Application:
              </span>
              <div className="space-y-2">
                {useCases.map((uc, idx) => {
                  const Icon = uc.icon;
                  const isSelected = activeUseCase === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveUseCase(idx)}
                      className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-sky-900/10"
                          : "bg-white/80 text-slate-600 border-slate-200/80 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl border ${
                            isSelected
                              ? "bg-sky-500/20 border-sky-500/40 text-sky-400"
                              : "bg-slate-100 border-slate-200 text-slate-500"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm sm:text-base font-heading">{uc.title}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-1 text-sky-400" : "opacity-30"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/solutions#ev-charging-station-installation">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-amber-500/20">
                  <span>Enquire EV Charger Setup</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Charging Visual Animation Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl dark-glass-card text-white shadow-2xl space-y-8 relative overflow-hidden">
              {/* Animated Charge Pulse Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40">
                    <Zap className="w-6 h-6 animate-pulse text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {useCases[activeUseCase].title}
                    </h3>
                    <p className="text-xs text-sky-400 font-semibold">VE Charge Partner Ecosystem</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono font-bold animate-pulse">
                  Ready to Install
                </span>
              </div>

              {/* Dynamic Description Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {useCases[activeUseCase].desc}
                </p>

                {/* Simulated Charger Status Indicators */}
                <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-500 text-[10px] uppercase font-bold">Electrical Safety</span>
                    <p className="text-slate-200 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Ground Fault Protected
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-500 text-[10px] uppercase font-bold">Supported Output</span>
                    <p className="text-amber-400 font-bold font-mono">7.4kW / 11kW / 22kW+</p>
                  </div>
                </div>
              </div>

              {/* Solar Integration Note */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-3">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-400">Solar + EV Synergy: </strong> Charge your electric vehicle directly using zero-cost solar power generated from your rooftop solar panels during daytime hours.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

