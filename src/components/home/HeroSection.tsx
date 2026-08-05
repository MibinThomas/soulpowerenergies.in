"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, MapPin, ArrowRight, Sun, Zap, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="navy" className="py-1.5 px-3.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Authorized Partner of Virgin Power</span>
              </Badge>
              <Badge variant="outline" className="py-1.5 px-3.5 text-slate-300 border-slate-700 bg-slate-800/60">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Serving Kozhikode & Wayanad</span>
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white font-heading">
              Power Your Future With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">
                Reliable Solar Energy
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Soul Power Energies delivers professionally designed rooftop solar, commercial solar, and EV charging solutions for homes and businesses across Kozhikode and Wayanad.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tier-1 Solar Modules & Inverters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Virgin Power EPC Capabilities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-Ground Local After-Sales Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Complete Site Assessment to Grid Sync</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link href="/contact#assessment">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-base">
                  <span>Request a Free Site Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800 hover:text-white">
                  <span>Explore Our Solutions</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Panel with Subtle Solar Glow Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <Image
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                width={siteImages.hero.width}
                height={siteImages.hero.height}
                priority
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Energy Flow Animation Indicator */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400">
                  <Sun className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Clean Energy Generation</p>
                  <p className="text-[10px] text-amber-400 font-medium">Kerala Tropical Sunlight</p>
                </div>
              </div>

              {/* Bottom Feature Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Solar & EV Infrastructure</p>
                    <p className="text-[11px] text-slate-300">Thiruvambady • Kozhikode • Wayanad</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
