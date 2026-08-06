"use client";

import { motion } from "framer-motion";
import { Shield, MapPin, Layers, Home, CheckCircle, Wrench, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";

export function WhyUsSection() {
  const points = [
    {
      icon: Shield,
      title: "Trusted Technology",
      description: "Proven components from leading brands (Waaree, Adani, Sungrow, FoxESS) with manufacturer backed warranties.",
    },
    {
      icon: MapPin,
      title: "Local Customer Support",
      description: "Based in Thiruvambady, delivering fast, accessible on-ground service across Kozhikode and Wayanad.",
    },
    {
      icon: Layers,
      title: "End-to-End Coordination",
      description: "Complete handling of site assessment, engineering design, net-metering approvals, and commissioning.",
    },
    {
      icon: Home,
      title: "Solutions for Every Property",
      description: "Customized rooftop solar layouts tailored specifically for independent homes, shops, offices, and factories.",
    },
    {
      icon: CheckCircle,
      title: "Quality-Focused Execution",
      description: "Engineering standards supported by Virgin Power and Engineering Pvt. Ltd., adhering to strict safety protocols.",
    },
    {
      icon: Wrench,
      title: "Ongoing Maintenance Assistance",
      description: "Scheduled panel cleaning, electrical inspection, and system health checks for long-term generation efficiency.",
    },
  ];

  return (
    <section className="py-20 bg-[#888D83] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <Badge variant="green" className="px-3.5 py-1 nestive-pill text-emerald-300">Why Choose Soul Power</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-white tracking-tight leading-tight">
              Local Service Excellence, Supported by Proven Engineering
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              We combine the technical capabilities of {siteConfig.partner.fullName} with dedicated, responsive local service right here in northern Kerala.
            </p>

            {/* Featured Callout Card */}
            <div className="p-6 rounded-3xl nestive-card border border-white/30 text-white space-y-4 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-300 font-bold text-sm">
                <Sparkles className="w-5 h-5" />
                <span>Authorized Virgin Power Partnership</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {siteConfig.partner.wording}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-amber-300 font-semibold">
                <span className="px-3 py-1 rounded-full nestive-pill">KSEB Compliant</span>
                <span className="px-3 py-1 rounded-full nestive-pill">ANERT Guidelines</span>
                <span className="px-3 py-1 rounded-full nestive-pill">MNRE Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 6 Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl nestive-card nestive-card-hover border border-white/25 shadow-md group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center border border-white/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 font-heading group-hover:text-amber-300 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {pt.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

