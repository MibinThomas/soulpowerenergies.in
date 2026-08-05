"use client";

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
    <section className="py-20 bg-slate-900 text-white overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="navy">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
            Our Simple 5-Step Process
          </h2>
          <p className="text-base text-slate-300">
            From initial consultation to clean power generation, we coordinate every detail of your renewable transition.
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative my-8">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-500 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-amber-400/80 text-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
                    Step {step.number}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 font-heading">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold border border-amber-400/40">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">{step.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
