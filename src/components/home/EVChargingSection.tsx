"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteImages } from "@/config/images";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Zap, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export function EVChargingSection() {
  const [activeType, setActiveType] = useState<"home" | "commercial" | "public">("home");

  const useCases = {
    home: {
      title: "Home Wallbox Chargers (7.4kW - 11kW)",
      desc: "Compact single-phase & three-phase wallbox chargers installed directly in your garage or carport for safe overnight EV charging.",
      features: [
        "Dynamic load balance with household power draw",
        "Dedicated RCD residual current circuit breaker",
        "IP65 weather-proof outdoor enclosure rating",
      ],
    },
    commercial: {
      title: "Commercial Fleet & Workplace Chargers (11kW - 22kW)",
      desc: "Multi-port AC charging pedestals for office premises, employee parking, and resort guest charging.",
      features: [
        "RFID card & smartphone app access control",
        "Billing integration for commercial premises",
        "Dual-socket simultaneous fast AC charging",
      ],
    },
    public: {
      title: "DC Fast Charging Infrastructure (30kW - 60kW+)",
      desc: "Turnkey DC fast charging station setup for highway stops, commercial hubs, and public parking stations.",
      features: [
        "CCS2 & CHAdeMO dual-gun fast charging",
        "Grid transformer & HT panel integration",
        "24/7 remote monitoring SLA support",
      ],
    },
  };

  const currentCase = useCases[activeType];

  return (
    <section className="py-20 bg-[#000000] text-[#F5EFE6] relative" id="ev-charging">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#131722] text-[#E5BA73] border border-white/10">
                E-Mobility Infrastructure
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight leading-tight">
                Electric Vehicle Charging Station Solutions
              </h2>

              <p className="text-base text-[#EADBC8] leading-relaxed font-medium">
                Soul Power Energies delivers turnkey AC and DC electric vehicle charger installations for private homes, commercial complexes, and public parking hubs across Kerala.
              </p>

              {/* Use Case Tabs */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(["home", "commercial", "public"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer border ${
                      activeType === type
                        ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white border-[#D97706] shadow-md font-black"
                        : "bg-[#131722] text-[#F5EFE6] border-white/10 hover:bg-[#1A1F2C]"
                    }`}
                  >
                    {type} Setup
                  </button>
                ))}
              </div>

              {/* Dynamic Content Panel */}
              <motion.div
                key={activeType}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-[#131722] border border-white/10 space-y-4"
              >
                <h3 className="text-lg font-bold text-[#F5EFE6] font-heading">{currentCase.title}</h3>
                <p className="text-xs text-[#EADBC8] leading-relaxed">{currentCase.desc}</p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {currentCase.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F5EFE6] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="pt-2">
                <Link href="/solutions#ev-charging-station-installation">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto font-black rounded-xl shadow-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white">
                    <span>Explore EV Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image Frame Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[380px] sm:h-[460px] bg-[#000000]">
                <Image
                  src={siteImages.evCharging.src}
                  alt={siteImages.evCharging.alt}
                  fill
                  className="object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#000000]/90 backdrop-blur-md border border-white/15 text-[#F5EFE6] text-xs font-bold flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2 text-[#E5BA73]">
                    <Zap className="w-4 h-4" />
                    <span>VE Charge & Certified Wallbox Integration</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#E5BA73]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
