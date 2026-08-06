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
    <section className="py-20 bg-[#888D83] text-white relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-amber-300">Our Core Solutions</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-white tracking-tight">
            Comprehensive Solar & EV Infrastructure
          </h2>
          <p className="text-base text-white/80 leading-relaxed">
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
                className="relative flex flex-col justify-between p-8 rounded-3xl nestive-card nestive-card-hover border border-white/25 shadow-xl group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center border border-white/25 shadow-xs group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-amber-300" />
                    </div>

                    {service.isComingSoon && (
                      <Badge variant="comingSoon" className="nestive-pill text-xs">
                        {service.badge || "Coming Soon"}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <Link
                    href={`/solutions#${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-amber-300 rounded-lg py-1 transition-colors"
                  >
                    <span>{service.isComingSoon ? "Register Interest" : "Explore Solution Details"}</span>
                    <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
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

