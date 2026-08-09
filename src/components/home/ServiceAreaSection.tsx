"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Navigation } from "lucide-react";

export function ServiceAreaSection() {
  const regions = [
    {
      name: "Kozhikode District",
      hubs: ["Kozhikode City", "Thiruvambady", "Mukkam", "Kunnamangalam", "Koduvally", "Balussery", "Feroke", "Vadakara"],
      desc: "Full residential rooftop, commercial solar power plants, and EV charging installation Coverage across Kozhikode district.",
    },
    {
      name: "Wayanad District",
      hubs: ["Kalpetta", "Sulthan Bathery", "Mananthavady", "Vythiri", "Meppadi", "Panamaram"],
      desc: "Specialized high-durability rooftop solar arrays for resorts, plantations, homes, and commercial units across Wayanad.",
    },
  ];

  return (
    <section className="py-20 bg-[#000000] text-[#F5EFE6] relative" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#0C0E12] text-[#E5BA73] border border-white/10">
            Regional Footprint
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight">
            Serving Kozhikode & Wayanad Districts
          </h2>
          <p className="text-base text-[#EADBC8] leading-relaxed font-medium">
            Based in Thiruvambady, our technical team provides prompt site audits, engineering installations, and rapid maintenance support across northern Kerala.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#131722] text-[#E5BA73] flex items-center justify-center border border-white/10 shrink-0">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F5EFE6] font-heading">{region.name}</h3>
                    <span className="text-xs text-[#E5BA73] font-bold">Active Operational Zone</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#EADBC8] leading-relaxed font-medium">
                  {region.desc}
                </p>

                {/* Hub Pills */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-bold text-[#E5BA73] uppercase tracking-wider block">Major Coverage Towns:</span>
                  <div className="flex flex-wrap gap-2">
                    {region.hubs.map((hub, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1 rounded-full nestive-pill text-xs font-semibold bg-[#131722] text-[#F5EFE6] border border-white/10 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5BA73]" />
                        <span>{hub}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Office Information Card */}
        <div className="p-8 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Headquarters Location</span>
            </div>
            <h4 className="text-lg font-bold text-[#F5EFE6] font-heading">Soul Power Energies Local Office</h4>
            <p className="text-xs text-[#EADBC8] leading-relaxed">
              {siteConfig.contact.address.formatted}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="px-5 py-3 rounded-2xl bg-[#131722] hover:bg-[#E5BA73] text-[#F5EFE6] hover:text-[#000000] text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/10 shadow-md"
            >
              <Phone className="w-4 h-4 text-[#E5BA73]" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Google Maps Direction</span>
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
