"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Zap, Lightbulb, BatteryCharging, Sparkles, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

export function SolarPowerSwitchShowcase() {
  const [isPowered, setIsPowered] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: "rooftop",
      title: "Rooftop Solar Panel Array",
      top: "14%",
      left: "52%",
      icon: Sun,
      stat: "5.8 kW Peak Output",
      desc: "Tier-1 Mono PERC panels capturing maximum daily solar irradiance on high-angle rooftop mounts.",
    },
    {
      id: "suite",
      title: "Upper Master Suite",
      top: "32%",
      left: "58%",
      icon: Lightbulb,
      stat: "Ambient Comfort",
      desc: "Clean solar electricity powering bedroom climate control, smart shading, and soft ambient light.",
    },
    {
      id: "living",
      title: "Grand Living Room",
      top: "60%",
      left: "58%",
      icon: Lightbulb,
      stat: "100% Clean Energy",
      desc: "Brilliant lighting and entertainment systems running entirely on zero-cost solar power.",
    },
    {
      id: "kitchen",
      title: "Gourmet Open Kitchen",
      top: "65%",
      left: "72%",
      icon: Sparkles,
      stat: "High Efficiency",
      desc: "Induction ranges, refrigeration, and under-cabinet lighting powered seamlessly from solar energy.",
    },
    {
      id: "garage",
      title: "EV Fast Charging Station",
      top: "72%",
      left: "32%",
      icon: Zap,
      stat: "Free EV Miles",
      desc: "7.4kW AC EV Charger replenishing electric vehicle range daily directly from rooftop generation.",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Outer Container with Nestive Glass Elevation */}
      <div className="relative rounded-3xl overflow-hidden nestive-card p-6 sm:p-8 transition-all duration-500">
        
        {/* Top Control Bar Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nestive-pill text-amber-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
              <span>3D Smart Home Energy Showcase</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal font-serif italic text-white">
              Flip the Switch to Power Your Space
            </h3>
            <p className="text-xs text-white/70">
              {isPowered
                ? "Solar Energy Active: Warm golden light illuminating every room with zero grid bill."
                : "Traditional Grid: Dim unpowered state, grid dependence, higher monthly costs."}
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="flex items-center gap-3 shrink-0">
            <span className={`text-xs font-bold transition-colors ${!isPowered ? "text-amber-300 font-black" : "text-white/50"}`}>
              Traditional Grid
            </span>
            
            <button
              onClick={() => setIsPowered(!isPowered)}
              className={`relative w-22 h-11 rounded-full p-1.5 transition-colors duration-500 focus:outline-none cursor-pointer ${
                isPowered
                  ? "bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400"
                  : "bg-white/20"
              }`}
              aria-label="Toggle Solar Power Switch"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center ${
                  isPowered ? "translate-x-11 text-amber-600" : "translate-x-0 text-slate-700"
                }`}
              >
                {isPowered ? <Sun className="w-5 h-5 fill-amber-400" /> : <Zap className="w-4 h-4" />}
              </motion.div>
            </button>

            <span className={`text-xs font-bold transition-colors ${isPowered ? "text-emerald-300 font-black" : "text-white/50"}`}>
              Solar Energized
            </span>
          </div>
        </div>

        {/* 3D Modern Solar Home Stage */}
        <div className="relative rounded-2xl overflow-hidden min-h-[440px] sm:min-h-[540px] bg-[#6F746A] shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          
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
              className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl z-2 pointer-events-none"
            />
          )}

          {/* Top Status Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-bold">
              <span className={`w-2.5 h-2.5 rounded-full ${isPowered ? "bg-emerald-400 animate-ping" : "bg-amber-500"}`} />
              <span>{isPowered ? "100% Solar Power Live" : "Night Grid Dependency"}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-medium text-slate-300">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Hover hotspot pins to inspect rooms</span>
            </div>
          </div>

          {/* Interactive Room Hotspot Pins on Home Canvas */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {hotspots.map((hs) => {
              const IconComp = hs.icon;
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
                    className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 cursor-pointer ${
                      isPowered
                        ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/40 hover:scale-125"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                    aria-label={`Inspect ${hs.title}`}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isPowered && (
                      <span className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping" style={{ animationDuration: "3s" }} />
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
                const IconComp = hs.icon;
                return (
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-amber-500 text-slate-950 shrink-0 mt-0.5 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-base font-extrabold text-slate-900 font-heading">{hs.title}</h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                          {hs.stat}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">{hs.desc}</p>
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

