"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { MessageSquare, ClipboardCheck, Compass, ShieldCheck, HeartHandshake } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Initial Enquiry",
      desc: "Reach out via our website form, phone, or email to outline your power requirements.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Site Assessment",
      desc: "Our technical team visits your property in Kozhikode or Wayanad to measure roof space, shade, & electrical load.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Custom System Design",
      desc: "We formulate an optimal solar rooftop or EV charging proposal specifying Tier-1 brands and estimated output.",
      icon: Compass,
    },
    {
      number: "04",
      title: "Installation & Grid Sync",
      desc: "Professional engineering installation, safety testing, and net-metering synchronization with KSEB grid.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "After-Sales Support",
      desc: "Continuous local operational support, periodic panel cleaning, and maintenance assistance from Thiruvambady.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-[#888D83] text-white relative overflow-hidden border-b border-white/10" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-amber-300">Step-by-Step Journey</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-white">
            Our Streamlined 5-Step Execution Process
          </h2>
          <p className="text-base text-white/80">
            From initial consultation to grid sync, we coordinate every detail of your clean energy transition.
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative my-12">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-amber-300 via-white/40 to-emerald-300 -translate-y-1/2 z-0 opacity-70" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl nestive-card border border-white/30 shadow-lg text-amber-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 mb-6 relative">
                    <Icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-slate-900 text-[10px] font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-heading group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl nestive-card border border-white/25 shadow-md flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center shrink-0 font-bold border border-white/25">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">{step.title}</h3>
                  <p className="text-xs text-white/75 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

