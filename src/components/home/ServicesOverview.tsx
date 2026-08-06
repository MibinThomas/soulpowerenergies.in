"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sun, Building2, Zap, Sparkles, Wind, BatteryCharging } from "lucide-react";

export function ServicesOverview() {
  const iconMap: Record<string, React.ElementType> = {
    Sun,
    Building2,
    Zap,
    Sparkles,
    Wind,
    BatteryCharging,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-3.5 py-1">Our Core Solutions</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Comprehensive Solar & EV Infrastructure
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Locally managed installations engineered to optimize energy costs and future-proof properties across Kozhikode and Wayanad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Sun;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col justify-between p-8 rounded-3xl glass-card glass-card-hover border border-white/90 shadow-xl group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 via-sky-400/10 to-emerald-400/20 text-slate-900 flex items-center justify-center border border-white/80 shadow-xs group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-amber-600" />
                    </div>

                    {service.isComingSoon && (
                      <Badge variant="comingSoon">
                        {service.badge || "Coming Soon"}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    href={`/solutions#${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg py-1 transition-colors"
                  >
                    <span>{service.isComingSoon ? "Register Interest" : "Explore Solution Details"}</span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

