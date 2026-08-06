"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, MapPin, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-[#888D83] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-16 rounded-3xl nestive-card border border-white/30 text-white shadow-2xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill text-amber-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Local Thiruvambady Service • Virgin Power EPC Backing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Ready to Transition to Clean, Low-Cost Solar Power?
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Contact Soul Power Energies today to schedule an accurate on-ground site assessment for your property in Kozhikode or Wayanad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact#assessment">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base bg-white text-slate-900 hover:bg-amber-100 font-bold border-none rounded-xl shadow-xl">
                <span>Request Free Site Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {siteConfig.contact.phone ? (
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto nestive-pill text-white border-white/30 hover:bg-white/15 rounded-xl">
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>Call {siteConfig.contact.phone}</span>
                </Button>
              </a>
            ) : (
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto nestive-pill text-white border-white/30 hover:bg-white/15 rounded-xl">
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>Get In Touch</span>
                </Button>
              </Link>
            )}
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-white/70 font-semibold">
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Thiruvambady, Kozhikode, Wayanad • Kerala</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

