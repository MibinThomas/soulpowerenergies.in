"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { SolarPowerSwitchShowcase } from "./SolarPowerSwitchShowcase";

export function HeroSection() {
  const trustTags = [
    { label: "Virgin Power Partner" },
    { label: "Subsidy Ready" },
    { label: "ISO Certified" },
  ];

  // Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] text-[#0F172A] sthira-hero-bg">
      {/* Solar Panel Texture Background Image with Soft Light Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/carousel-slide-1.jpg"
          alt="Solar Panel Array"
          fill
          priority
          className="object-cover object-center filter brightness-105 contrast-90 opacity-20"
        />
        {/* Soft STHIRA light color overlay (allows solar panel texture to show through cleanly) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FC]/70 via-[#F8F9FC]/85 to-[#F8F9FC]" />
        {/* Soft Angled Golden Tint Geometry Band */}
        <div className="absolute top-1/2 -left-20 w-[120%] h-72 sm:h-96 sthira-banner-stripe pointer-events-none" />
      </div>

      {/* Transparent Header integrated seamlessly at top of Hero Canvas */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-14 lg:py-18 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: STHIRA Aesthetic Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Top Pill Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sthira-pill bg-white/90 backdrop-blur-md text-xs font-bold text-[#D97706] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                <span>SOLAR & ENERGY LEADERS</span>
              </div>
            </motion.div>

            {/* Giant STHIRA-style Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0F172A] leading-[1.02]">
                SOUL POWER<span className="text-[#D97706]">.</span>
              </h1>
              
              <h2 className="text-xl sm:text-3xl font-bold text-[#334155] tracking-tight">
                Rooftop Solar & EV Solutions by SOUL POWER.
              </h2>
              
              <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed font-semibold pt-2">
                SOUL POWER delivers thoughtfully engineered rooftop solar and EV infrastructure that bring together structural strength, precision, and dependable performance for modern Kerala energy needs.
              </p>
            </motion.div>

            {/* Golden Primary CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <Link href="/contact#assessment" className="inline-block">
                <button className="btn-primary-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest cursor-pointer group">
                  <span>CONNECT US</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            {/* Bottom Trust Tag Strip */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs font-bold text-[#0F172A]">
              {trustTags.map((tag) => (
                <div key={tag.label} className="flex items-center gap-1.5 bg-white/60 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200/60 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] stroke-[2.5]" />
                  <span>{tag.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Embedded 3D Lighting House Solar Power Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <SolarPowerSwitchShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
