"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, MapPin, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/50 via-white to-amber-50/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-16 rounded-3xl glass-card border border-white/90 shadow-2xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Local Thiruvambady Service • Virgin Power EPC Backing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight max-w-3xl mx-auto">
            Ready to Transition to Clean, Low-Cost Solar Power?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Contact Soul Power Energies today to schedule an accurate on-ground site assessment for your property in Kozhikode or Wayanad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact#assessment">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base shadow-xl shadow-amber-500/20">
                <span>Request Free Site Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {siteConfig.contact.phone ? (
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 border-slate-300 text-slate-800 hover:bg-slate-50">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>Call {siteConfig.contact.phone}</span>
                </Button>
              </a>
            ) : (
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 border-slate-300 text-slate-800 hover:bg-slate-50">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>Get In Touch</span>
                </Button>
              </Link>
            )}
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Thiruvambady, Kozhikode, Wayanad • Kerala</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

