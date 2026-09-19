"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, CheckCircle2, Navigation } from "lucide-react";

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
    <section className="py-20 bg-[#F8F9FC] text-[#0F172A] relative" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
            Regional Footprint
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A]">
            Serving Kozhikode & Wayanad Districts<span className="text-[#D97706]">.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
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
              className="p-8 rounded-[32px] sthira-card space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{region.name}</h3>
                    <span className="text-xs text-[#D97706] font-bold">Active Operational Zone</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {region.desc}
                </p>

                {/* Hub Pills */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block">Major Coverage Towns:</span>
                  <div className="flex flex-wrap gap-2">
                    {region.hubs.map((hub, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1 rounded-full sthira-pill text-xs font-semibold bg-white text-[#0F172A] border border-slate-200/80 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] stroke-[2.5]" />
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
        <div className="p-8 rounded-[32px] sthira-card shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm">
              <MapPin className="w-4 h-4 stroke-[2.5]" />
              <span>Headquarters Location</span>
            </div>
            <h4 className="text-lg font-bold text-[#0F172A]">Soul Power Energies Local Office</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {siteConfig.contact.address.formatted}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-200/80 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full btn-primary-gold text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
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
