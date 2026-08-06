"use client";

import { motion } from "framer-motion";
import { Award, Wrench, Headset, Building2 } from "lucide-react";

export function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Quality Tier-1 Brands",
      description: "Proven solar panels & hybrid inverters from Waaree, Premier Energies & Sungrow.",
      color: "from-amber-500/20 to-amber-500/5 text-amber-600 border-amber-500/30",
    },
    {
      icon: Wrench,
      title: "Full EPC Engineering",
      description: "End-to-end design, KSEB approvals & synchronization powered by Virgin Power.",
      color: "from-emerald-500/20 to-emerald-500/5 text-emerald-600 border-emerald-500/30",
    },
    {
      icon: Headset,
      title: "On-Ground Support",
      description: "Local technical team based directly in Thiruvambady for quick field response.",
      color: "from-sky-500/20 to-sky-500/5 text-sky-600 border-sky-500/30",
    },
    {
      icon: Building2,
      title: "Home & Commercial",
      description: "Custom power arrays for residential roofs, schools, resorts & factories.",
      color: "from-amber-500/20 to-emerald-500/10 text-emerald-700 border-emerald-500/30",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="p-6 rounded-3xl glass-card glass-card-hover border border-white/80 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

