"use client";

import { motion } from "framer-motion";
import { Award, Wrench, Headset, Building2 } from "lucide-react";

export function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Quality Tier-1 Brands",
      description: "Proven solar panels & hybrid inverters from Waaree, Premier Energies & Sungrow.",
    },
    {
      icon: Wrench,
      title: "Full EPC Engineering",
      description: "End-to-end design, KSEB approvals & synchronization powered by Virgin Power.",
    },
    {
      icon: Headset,
      title: "On-Ground Support",
      description: "Local technical team based directly in Thiruvambady for quick field response.",
    },
    {
      icon: Building2,
      title: "Home & Commercial",
      description: "Custom power arrays for residential roofs, schools, resorts & factories.",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-[28px] sthira-card sthira-card-hover flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-medium">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
