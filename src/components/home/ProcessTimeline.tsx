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
    <section className="py-20 bg-[#0C0E12] text-[#F5EFE6] relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-[#E5BA73]">Step-by-Step Journey</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-[#F5EFE6]">
            Our Streamlined 5-Step Execution Process
          </h2>
          <p className="text-base text-[#EADBC8]/80">
            From initial consultation to grid sync, we coordinate every detail of your clean energy transition.
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative my-12">
          {/* Base Background Track Line */}
          <div className="absolute top-8 left-16 right-16 h-[2px] bg-[#EADBC8]/15 z-0" />

          {/* Animated Glowing Connection Line (Animates Left to Right) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-8 left-16 right-16 h-[2px] bg-gradient-to-r from-[#E5BA73] via-[#F0C987] to-[#EADBC8] z-0 origin-left shadow-[0_0_10px_rgba(229,186,115,0.6)]"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center group relative z-10"
                >
                  <div className="w-16 h-16 rounded-2xl nestive-card border border-[#EADBC8]/25 shadow-lg text-[#E5BA73] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E5BA73] group-hover:text-[#0C0E12] transition-all duration-300 mb-6 relative bg-[#0C0E12] backdrop-blur-md">
                    <Icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#E5BA73] text-[#0C0E12] text-[10px] font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F5EFE6] mb-2 font-heading group-hover:text-[#E5BA73] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#EADBC8]/70 leading-relaxed max-w-[200px]">{step.desc}</p>
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
                className="p-6 rounded-3xl nestive-card border border-[#EADBC8]/15 shadow-md flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EADBC8]/10 text-[#E5BA73] flex items-center justify-center shrink-0 font-bold border border-[#EADBC8]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#F5EFE6] font-heading">{step.title}</h3>
                  <p className="text-xs text-[#EADBC8]/75 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

