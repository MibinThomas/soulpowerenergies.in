"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SolarPowerSwitchShowcase } from "./SolarPowerSwitchShowcase";

function TypewriterSubtitle() {
  const phrases = ["The Smart Way", "With Clean Solar", "With Zero Grid Cost"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let typingSpeed = isDeleting ? 40 : 85;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Hold full phrase before deleting
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      typingSpeed = 400;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="not-italic font-sans text-amber-300 font-bold inline-flex items-center">
      <span>{phrases[textIndex].substring(0, charIndex)}</span>
      <span className="animate-pulse ml-1 text-amber-300 font-extralight">|</span>
    </span>
  );
}

export function HeroSection() {
  const steps = [
    { num: "01", label: "Enquiry", desc: "Consultation" },
    { num: "02", label: "Site Audit", desc: "Feasibility" },
    { num: "03", label: "Custom Design", desc: "Engineering" },
    { num: "04", label: "Solar Active", desc: "Grid Sync" },
  ];

  // Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#888D83] text-white pt-4 sm:pt-10 pb-10 sm:pb-20">
      {/* Background Soft Ambient Studio Glows */}
      <div className="absolute top-1/4 right-5 sm:right-10 w-[280px] sm:w-[520px] h-[280px] sm:h-[520px] bg-amber-400/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-5 left-5 sm:left-10 w-[220px] sm:w-[420px] h-[220px] sm:h-[420px] bg-white/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-14">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Mobile-Optimized Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-5 sm:space-y-7 text-left"
          >
            {/* Social Proof Trust Badge (Hidden on Mobile) */}
            <motion.div variants={itemVariants} className="hidden sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full nestive-pill text-xs text-white/90 max-w-full">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-400 border-2 border-[#888D83] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-slate-950">
                  SP
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-sky-400 border-2 border-[#888D83] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-slate-950">
                  VP
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-400 border-2 border-[#888D83] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-slate-950">
                  ★
                </div>
              </div>
              <span className="font-medium truncate">+10,000 Kerala Homes Powered</span>
            </motion.div>

            {/* SEO-Optimized Headline Hierarchy with Larger Font & Typewriter Animation */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white italic font-normal tracking-tight leading-[1.08]">
                Power Your Home <br className="hidden sm:inline" />
                <TypewriterSubtitle />
              </h1>
              
              {/* Short & Impactful Value Prop */}
              <p className="text-sm sm:text-lg text-white/85 max-w-xl leading-relaxed">
                Zero grid dependence. Custom rooftop solar & EV charging systems engineered for Kozhikode & Wayanad.
              </p>
            </motion.div>

            {/* Conversion CTA Pill Button */}
            <motion.div variants={itemVariants} className="pt-1 sm:pt-2">
              <Link href="/contact#assessment" className="inline-block">
                <button className="inline-flex items-center gap-3 p-1.5 pr-6 rounded-full nestive-pill bg-white/15 hover:bg-white/25 border border-white/30 transition-all group cursor-pointer shadow-lg shadow-black/10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                    CONNECT YOUR SPACE
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            {/* Desktop Step Cards (01 - 04) */}
            <motion.div variants={itemVariants} className="hidden sm:grid grid-cols-4 gap-3 pt-4 border-t border-white/15">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-3 rounded-2xl nestive-card space-y-1.5 hover:border-white/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 font-mono">{step.num}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white font-heading">{step.label}</h2>
                    <p className="text-[10px] text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Embedded 3D Solar Power Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <SolarPowerSwitchShowcase />
          </motion.div>
        </div>

        {/* Mobile Streamlined 4-Step Pill Strip */}
        <div className="sm:hidden pt-2">
          <div className="grid grid-cols-2 gap-2">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-2.5 rounded-xl nestive-card flex items-center gap-2 border border-white/20"
              >
                <span className="text-[11px] font-bold text-amber-300 font-mono shrink-0">{step.num}</span>
                <div className="truncate">
                  <span className="text-xs font-bold text-white block truncate">{step.label}</span>
                  <span className="text-[10px] text-white/60 block truncate">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
