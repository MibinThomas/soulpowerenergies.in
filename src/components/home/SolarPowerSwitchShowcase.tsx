"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Zap, Lightbulb, Sparkles, Eye, Plus, X } from "lucide-react";

export function SolarPowerSwitchShowcase() {
  const [isPowered, setIsPowered] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: "rooftop",
      title: "Rooftop Solar Panel Array",
      top: "28%",
      left: "50%",
      stat: "5.8 kW Peak Output",
      desc: "Tier-1 Mono PERC panels capturing maximum daily solar irradiance on high-angle rooftop mounts.",
    },
    {
      id: "suite",
      title: "Upper Master Suite",
      top: "44%",
      left: "55%",
      stat: "Ambient Comfort",
      desc: "Clean solar electricity powering bedroom climate control, smart shading, and soft ambient light.",
    },
    {
      id: "living",
      title: "Grand Living Room",
      top: "63%",
      left: "58%",
      stat: "100% Clean Energy",
      desc: "Brilliant lighting and entertainment systems running entirely on zero-cost solar power.",
    },
    {
      id: "garage",
      title: "EV Fast Charging Hub",
      top: "70%",
      left: "32%",
      stat: "Free EV Miles",
      desc: "7.4kW AC EV Charger replenishing electric vehicle range daily directly from rooftop generation.",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Outer Container with Nestive Glass Elevation */}
      <div className="relative rounded-3xl overflow-hidden nestive-card p-4 sm:p-8 transition-all duration-500">
        
        {/* Top Control Bar Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nestive-pill text-amber-300 text-[11px] sm:text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
              <span>3D Smart Home Showcase</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-normal font-serif italic text-white">
              Flip the Switch to Power Your Space
            </h3>
            <p className="text-[11px] sm:text-xs text-white/70 mt-1">
              {isPowered
                ? "Solar Energy Active: Warm golden light illuminating every room."
                : "Traditional Grid: Dim unpowered state with grid reliance."}
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-3 shrink-0 pt-2 sm:pt-0">
            <span className={`text-[11px] sm:text-xs font-bold transition-colors ${!isPowered ? "text-amber-300 font-black" : "text-white/50"}`}>
              Traditional Grid
            </span>
            
            <button
              onClick={() => setIsPowered(!isPowered)}
              className={`relative w-18 sm:w-22 h-9 sm:h-11 rounded-full p-1 transition-colors duration-500 focus:outline-none cursor-pointer ${
                isPowered
                  ? "bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400"
                  : "bg-white/20"
              }`}
              aria-label="Toggle Solar Power Switch"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-lg flex items-center justify-center ${
                  isPowered ? "translate-x-9 sm:translate-x-11 text-amber-600" : "translate-x-0 text-slate-700"
                }`}
              >
                {isPowered ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" /> : <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </motion.div>
            </button>

            <span className={`text-[11px] sm:text-xs font-bold transition-colors ${isPowered ? "text-emerald-300 font-black" : "text-white/50"}`}>
              Solar Energized
            </span>
          </div>
        </div>

        {/* 3D Modern Solar Home Stage */}
        <div className="relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[540px] bg-[#6F746A] shadow-2xl flex flex-col justify-between p-4 sm:p-8">
          
          {/* Base Unpowered Image Layer */}
          <div className="absolute inset-0 z-0 bg-[#6F746A]">
            <Image
              src="/images/nestive-solar-home-off.png"
              alt="Unpowered 3D Solar Home"
              fill
              priority
              className="object-contain object-center"
            />
          </div>

          {/* Illuminated Powered Image Layer */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isPowered ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 z-1 bg-[#6F746A]"
          >
            <Image
              src="/images/nestive-solar-home-on.png"
              alt="Illuminated 3D Solar Home"
              fill
              priority
              className="object-contain object-center"
            />
          </motion.div>

          {/* Sunbeams and Warm Glow effect */}
          {isPowered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-400/20 rounded-full blur-3xl z-2 pointer-events-none"
            />
          )}

          {/* Top Status Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white text-[10px] sm:text-xs font-bold">
              <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${isPowered ? "bg-emerald-400 animate-ping" : "bg-amber-500"}`} />
              <span>{isPowered ? "100% Solar Live" : "Grid Dependency"}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-medium text-slate-300">
              <Plus className="w-3.5 h-3.5 text-amber-400" />
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
                    className={`relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white text-slate-900 scale-110 shadow-xl"
                        : isPowered
                        ? "bg-amber-400/90 text-slate-950 shadow-lg shadow-amber-400/50 hover:scale-125"
                        : "bg-white/30 text-white backdrop-blur-md hover:bg-white/50"
                    }`}
                    aria-label={`Inspect ${hs.title}`}
                  >
                    {isActive ? <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 font-black stroke-[3]" />}
                    {isPowered && !isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping" style={{ animationDuration: "3s" }} />
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
              className="mt-6 p-5 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-start justify-between gap-4"
            >
              {(() => {
                const hs = hotspots.find((h) => h.id === activeHotspot);
                if (!hs) return null;
                return (
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-amber-400 text-slate-950 shrink-0 mt-0.5 shadow-md">
                      <Plus className="w-5 h-5 font-black stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-base font-bold text-white font-heading">{hs.title}</h4>
                        <span className="px-2.5 py-0.5 rounded-full nestive-pill text-amber-300 text-xs font-bold">
                          {hs.stat}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 mt-1">{hs.desc}</p>
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={() => setActiveHotspot(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-800 p-1 cursor-pointer"
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

