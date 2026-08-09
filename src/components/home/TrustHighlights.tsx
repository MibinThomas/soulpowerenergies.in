"use client";

import { motion } from "framer-motion";
import { Award, Wrench, Headset, Building2 } from "lucide-react";

export function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Quality Tier-1 Brands",
      description: "Proven solar panels & hybrid inverters from Waaree, Premier Energies & Sungrow.",
      color: "text-[#E5BA73] bg-[#131722] border-white/15",
    },
    {
      icon: Wrench,
      title: "Full EPC Engineering",
      description: "End-to-end design, KSEB approvals & synchronization powered by Virgin Power.",
      color: "text-[#E5BA73] bg-[#131722] border-white/15",
    },
    {
      icon: Headset,
      title: "On-Ground Support",
      description: "Local technical team based directly in Thiruvambady for quick field response.",
      color: "text-[#E5BA73] bg-[#131722] border-white/15",
    },
    {
      icon: Building2,
      title: "Home & Commercial",
      description: "Custom power arrays for residential roofs, schools, resorts & factories.",
      color: "text-[#E5BA73] bg-[#131722] border-white/15",
    },
  ];

  return (
    <section className="relative z-20 mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 shadow-xl flex flex-col justify-between group hover:border-[#E5BA73] transition-all"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5EFE6] font-heading group-hover:text-[#E5BA73] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EADBC8] leading-relaxed mt-1.5 font-medium">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
