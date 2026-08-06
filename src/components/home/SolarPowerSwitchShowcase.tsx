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
      top: "10%",
      left: "52%",
      icon: Sun,
      stat: "5.8 kW Peak Output",
      desc: "Tier-1 Mono PERC panels capturing maximum daily solar irradiance on high-angle rooftop mounts.",
    },
    {
      id: "bedroom",
      title: "Upper Master Suite",
      top: "30%",
      left: "56%",
      icon: Lightbulb,
      stat: "Ambient Comfort",
      desc: "Clean solar electricity powering bedroom climate control, smart shading, and soft ambient light.",
    },
    {
      id: "office",
      title: "Smart Home Office",
      top: "30%",
      left: "72%",
      icon: Sparkles,
      stat: "Uninterrupted Power",
      desc: "Zero-latency continuous solar power for workstation computers, networking, and home automation.",
    },
    {
      id: "living",
      title: "Grand Living Room",
      top: "58%",
      left: "56%",
      icon: Lightbulb,
      stat: "100% Clean Energy",
      desc: "Brilliant chandelier lighting and entertainment systems running entirely on zero-cost solar power.",
    },
    {
      id: "kitchen",
      title: "Gourmet Open Kitchen",
      top: "72%",
      left: "70%",
      icon: Sparkles,
      stat: "High Power Efficiency",
      desc: "Induction ranges, refrigeration, and under-cabinet lighting powered seamlessly from solar energy.",
    },
    {
      id: "garage",
      title: "EV Fast Charging Hub",
      top: "68%",
      left: "32%",
      icon: Zap,
      stat: "Free EV Miles",
      desc: "7.4kW AC EV Charger replenishing electric vehicle range daily directly from rooftop generation.",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Outer Container with Glassmorphism Elevation */}
      <div className="relative rounded-3xl overflow-hidden glass-card border border-white/90 shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500">
        
        {/* Top Control Bar Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Interactive Storytelling Experience</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
              Flip the Switch to Power Your Home
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {isPowered
                ? "Solar Energy Active: Warm ambient light illuminating every room with zero grid bill."
                : "Grid Dependent: Dim unpowered state, fossil fuel dependence, higher monthly costs."}
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="flex items-center gap-3 shrink-0">
            <span className={`text-xs font-bold transition-colors ${!isPowered ? "text-amber-600 font-black" : "text-slate-400"}`}>
              Traditional Grid
            </span>
            
            <button
              onClick={() => setIsPowered(!isPowered)}
              className={`relative w-22 h-11 rounded-full p-1.5 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-inner ${
                isPowered
                  ? "bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-500 solar-glow"
                  : "bg-slate-300"
              }`}
              aria-label="Toggle Solar Power Switch"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center ${
                  isPowered ? "translate-x-11 text-amber-500" : "translate-x-0 text-slate-500"
                }`}
              >
                {isPowered ? <Sun className="w-5 h-5 fill-amber-400" /> : <Zap className="w-4 h-4" />}
              </motion.div>
            </button>

            <span className={`text-xs font-bold transition-colors ${isPowered ? "text-emerald-700 font-black" : "text-slate-400"}`}>
              Solar Energized
            </span>
          </div>
        </div>

        {/* Photorealistic Modern Home Interactive Showcase Stage */}
        <div className="relative rounded-3xl overflow-hidden min-h-[550px] sm:min-h-[680px] lg:min-h-[780px] bg-slate-950 shadow-2xl flex flex-col justify-between p-6 sm:p-8">
          
          {/* Base Unpowered Image Layer (Without Solar) */}
          <div className="absolute inset-0 z-0 bg-slate-950">
            <Image
              src="/images/without-solar.png"
              alt="Unpowered Modern Home Without Solar"
              fill
              priority
              className="object-contain sm:object-cover object-center"
            />
          </div>

          {/* Illuminated Powered Image Layer (With Solar - Crossfades smoothly on switch) */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isPowered ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 z-1 bg-slate-950"
          >
            <Image
              src="/images/with-solar.png"
              alt="Illuminated Modern Home Powered With Solar"
              fill
              priority
              className="object-contain sm:object-cover object-center"
            />
          </motion.div>

          {/* Gradient Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-2 pointer-events-none" />

          {/* Sunbeams and Glow effect when powered */}
          {isPowered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-96 h-96 bg-amber-400/25 rounded-full blur-3xl z-2 pointer-events-none animate-pulse-glow"
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

          {/* Bottom Metric Dashboard Bar */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
            {/* Metric 1 */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-center space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Solar Generation</span>
              <p className={`text-base sm:text-xl font-black font-heading ${isPowered ? "text-amber-400" : "text-slate-500"}`}>
                {isPowered ? "5.8 kW Peak" : "0.0 kW (Off)"}
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-center space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">KSEB Grid Bill</span>
              <p className={`text-base sm:text-xl font-black font-heading ${isPowered ? "text-emerald-400" : "text-rose-400"}`}>
                {isPowered ? "₹0 / Month" : "₹6,500 / Month"}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-center space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">EV Range Added</span>
              <p className={`text-base sm:text-xl font-black font-heading ${isPowered ? "text-sky-400" : "text-slate-500"}`}>
                {isPowered ? "+180 km / day" : "Grid Charged"}
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-center space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Energy Status</span>
              <p className={`text-base sm:text-xl font-black font-heading ${isPowered ? "text-emerald-400" : "text-amber-500"}`}>
                {isPowered ? "100% Clean Solar" : "Grid Fossil"}
              </p>
            </div>
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

