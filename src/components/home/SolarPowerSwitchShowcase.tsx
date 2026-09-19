"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Zap, Sparkles, Plus, X } from "lucide-react";

export function SolarPowerSwitchShowcase() {
  const [isPowered, setIsPowered] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: "panels",
      title: "Waaree & Premier Tier-1 PV Arrays",
      desc: "Ultra-high efficiency TOPCon solar panels generating clean power from daylight.",
      stat: "+90% Bill Cut",
      top: "28%",
      left: "66%",
    },
    {
      id: "inverter",
      title: "Sungrow / FoxESS Hybrid Inverter",
      desc: "Instant grid sync with smart power flow control and optional battery storage.",
      stat: "0.01s Transfer",
      top: "65%",
      left: "67%",
    },
    {
      id: "ev-dock",
      title: "Integrated EV Charging Wallbox",
      desc: "Charge electric vehicles directly from daytime rooftop solar generation.",
      stat: "7.4kW - 22kW",
      top: "81%",
      left: "61%",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Outer Container with STHIRA Light Theme Card Elevation */}
      <div className="relative rounded-[32px] overflow-hidden sthira-card bg-white p-4 sm:p-8 transition-all duration-500 border border-slate-200/80 shadow-2xl">
        
        {/* Top Control Bar Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full sthira-pill bg-slate-50 text-[#D97706] text-[11px] sm:text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-[#D97706]" style={{ animationDuration: "6s" }} />
              <span>3D Smart Home Showcase</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight">
              Flip the Switch to Power Your Space<span className="text-[#D97706]">.</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">
              {isPowered
                ? "Solar Energy Active: Clean solar power illuminating every room."
                : "Traditional Grid: Dim unpowered state with grid reliance."}
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-3 shrink-0 pt-2 sm:pt-0">
            <span className={`text-[11px] sm:text-xs font-bold transition-colors ${!isPowered ? "text-[#D97706] font-black" : "text-slate-400"}`}>
              Traditional Grid
            </span>
            
            <button
              onClick={() => setIsPowered(!isPowered)}
              className={`relative w-18 sm:w-22 h-9 sm:h-11 rounded-full p-1 transition-colors duration-500 focus:outline-none cursor-pointer shadow-inner ${
                isPowered
                  ? "bg-[#D97706]"
                  : "bg-slate-200 border border-slate-300"
              }`}
              aria-label="Toggle Solar Power Switch"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-lg flex items-center justify-center ${
                  isPowered ? "translate-x-9 sm:translate-x-11 text-[#D97706]" : "translate-x-0 text-slate-600"
                }`}
              >
                {isPowered ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D97706] text-[#D97706]" /> : <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </motion.div>
            </button>

            <span className={`text-[11px] sm:text-xs font-bold transition-colors ${isPowered ? "text-[#D97706] font-black" : "text-slate-400"}`}>
              Solar Energized
            </span>
          </div>
        </div>

        {/* 3D Modern Solar Home Stage */}
        <div className="relative rounded-[24px] overflow-hidden min-h-[340px] sm:min-h-[500px] bg-[#090D16] shadow-2xl flex flex-col justify-between p-4 sm:p-8 border border-slate-200/40">
          
          {/* Base Unpowered Image Layer (LCP Priority Target) */}
          <div className="absolute inset-0 z-0 bg-[#090D16]">
            <Image
              src="/images/nestive-solar-home-off.webp"
              alt="Unpowered 3D Solar Home"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 384px, (max-width: 1024px) 640px, 600px"
              quality={75}
              className="object-cover object-center"
            />
          </div>

          {/* Illuminated Powered Image Layer */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isPowered ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 z-1 bg-[#090D16]"
          >
            <Image
              src="/images/nestive-solar-home-on.webp"
              alt="Illuminated 3D Solar Home"
              fill
              sizes="(max-width: 640px) 384px, (max-width: 1024px) 640px, 600px"
              quality={75}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Sunbeams and Golden Warm Glow effect */}
          {isPowered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#D97706]/20 rounded-full blur-3xl z-2 pointer-events-none"
            />
          )}

          {/* Top Status Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold">
              <span className={`w-2.5 h-2.5 rounded-full ${isPowered ? "bg-[#D97706] animate-ping" : "bg-white/50"}`} />
              <span>{isPowered ? "100% Solar Live" : "Grid Dependency"}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
              <Plus className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Tap + tags to inspect feature</span>
            </div>
          </div>

          {/* Interactive Room Hotspot + Pins on Home Canvas */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {hotspots.map((hs) => {
              const isActive = activeHotspot === hs.id;
              return (
                <div
                  key={hs.id}
                  style={{ top: hs.top, left: hs.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <button
                    onClick={() => setActiveHotspot(isActive ? null : hs.id)}
                    onMouseEnter={() => setActiveHotspot(hs.id)}
                    className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#0F172A] scale-110 shadow-xl"
                        : isPowered
                        ? "bg-[#D97706] text-white shadow-lg shadow-[#D97706]/50 hover:scale-125 font-bold"
                        : "bg-white/40 text-white backdrop-blur-md hover:bg-white/60"
                    }`}
                    aria-label={`Inspect ${hs.title}`}
                  >
                    {isActive ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4 font-black stroke-[3]" />}
                    {isPowered && !isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-[#D97706] animate-ping" style={{ animationDuration: "3s" }} />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hotspot Popup Modal / Tooltip Details */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4 shadow-xl text-[#0F172A]"
            >
              {(() => {
                const hs = hotspots.find((h) => h.id === activeHotspot);
                if (!hs) return null;
                return (
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#D97706] text-white shrink-0 mt-0.5 shadow-md font-bold">
                      <Plus className="w-5 h-5 font-black stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-base font-bold text-[#0F172A]">{hs.title}</h4>
                        <span className="px-2.5 py-0.5 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold">
                          {hs.stat}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">{hs.desc}</p>
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={() => setActiveHotspot(null)}
                className="text-xs font-bold text-slate-500 hover:text-[#D97706] p-1 cursor-pointer"
              >
                Close ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
