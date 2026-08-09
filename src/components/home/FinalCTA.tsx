"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, MapPin, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-[#000000] text-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-16 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 text-[#F5EFE6] shadow-2xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill bg-[#131722] text-[#E5BA73] border border-white/10 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-[#E5BA73]" />
            <span>Local Thiruvambady Service • Virgin Power EPC Backing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-[#F5EFE6] leading-tight max-w-3xl mx-auto">
            Ready to Transition to Clean, Low-Cost Solar Power?
          </h2>

          <p className="text-base sm:text-lg text-[#EADBC8] max-w-2xl mx-auto leading-relaxed font-medium">
            Contact Soul Power Energies today to schedule an accurate on-ground site assessment for your property in Kozhikode or Wayanad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact#assessment">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base font-black rounded-xl shadow-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white">
                <span>Request Free Site Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {siteConfig.contact.phone ? (
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto nestive-pill text-[#F5EFE6] border-white/15 bg-[#131722] hover:bg-[#1A1F2C] rounded-xl font-bold">
                  <Phone className="w-5 h-5 text-[#E5BA73]" />
                  <span>Call {siteConfig.contact.phone}</span>
                </Button>
              </a>
            ) : (
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto nestive-pill text-[#F5EFE6] border-white/15 bg-[#131722] hover:bg-[#1A1F2C] rounded-xl font-bold">
                  <Phone className="w-5 h-5 text-[#E5BA73]" />
                  <span>Get In Touch</span>
                </Button>
              </Link>
            )}
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#EADBC8]/80 font-bold">
            <MapPin className="w-4 h-4 text-[#E5BA73]" />
            <span>Thiruvambady, Kozhikode, Wayanad • Kerala</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
