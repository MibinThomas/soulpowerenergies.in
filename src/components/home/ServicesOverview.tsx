"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { servicesData } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sun, Building2, Zap, Sparkles, Wind, BatteryCharging, Sparkle, Layers } from "lucide-react";

export function ServicesOverview() {
  const targetRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ElementType> = {
    Sun,
    Building2,
    Zap,
    Sparkles,
    Wind,
    BatteryCharging,
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Transform scroll progress to horizontal translation percentage for desktop
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-68%"]);
  // Counter-parallax movement for background decorative elements
  const bgParallaxX = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  // Progress bar width
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["5%", "100%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[#0C0E12] text-[#F5EFE6] id-services"
      id="services"
    >
      {/* Sticky Full-Height Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-12 sm:py-16">
        
        {/* Background Ambient Parallax Glows */}
        <motion.div
          style={{ x: bgParallaxX }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E5BA73]/10 rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div
          style={{ x: bgParallaxX }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F0C987]/10 rounded-full blur-3xl pointer-events-none z-0"
        />

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full shrink-0 mb-4 sm:mb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full nestive-pill text-[#E5BA73] text-xs font-bold">
                <Sparkle className="w-3.5 h-3.5 fill-[#E5BA73]" />
                <span>Our Core Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic text-[#F5EFE6] tracking-tight">
                Comprehensive Solar & EV Infrastructure
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#EADBC8]/80 max-w-md leading-relaxed">
              Scroll down to explore our complete suite of renewable engineering solutions across Kozhikode and Wayanad.
            </p>
          </div>
        </div>

        {/* Desktop Parallax Horizontal Scroll Track */}
        <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-4 sm:px-12 items-center">
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Sun;
              const formattedNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={service.id}
                  className="w-[85vw] sm:w-[480px] lg:w-[520px] shrink-0 h-[440px] sm:h-[480px] relative rounded-3xl nestive-card border border-[#EADBC8]/20 p-6 sm:p-10 shadow-2xl flex flex-col justify-between group hover:border-[#E5BA73]/50 transition-all duration-500 bg-[#131722]/80 backdrop-blur-2xl overflow-hidden"
                >
                  {/* Background Step Number Overlay */}
                  <span className="absolute -right-4 -bottom-6 text-9xl font-black font-heading text-[#EADBC8]/5 select-none pointer-events-none group-hover:text-[#E5BA73]/10 transition-colors duration-500">
                    {formattedNumber}
                  </span>

                  <div>
                    {/* Top Bar: Icon & Badges */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-[#EADBC8]/10 text-[#E5BA73] flex items-center justify-center border border-[#EADBC8]/20 shadow-md group-hover:scale-110 group-hover:bg-[#E5BA73] group-hover:text-[#0C0E12] transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      {service.isComingSoon ? (
                        <Badge variant="comingSoon" className="nestive-pill text-xs">
                          {service.badge || "Coming Soon"}
                        </Badge>
                      ) : (
                        <span className="text-[11px] font-bold text-[#E5BA73] uppercase tracking-wider nestive-pill px-3 py-1 rounded-full border border-[#EADBC8]/15">
                          Solution {formattedNumber}
                        </span>
                      )}
                    </div>

                    {/* Tagline & Title */}
                    <span className="text-xs font-bold text-[#E5BA73] uppercase tracking-wider block mb-1 font-heading">
                      {service.shortTitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFE6] mb-3 font-heading group-hover:text-[#E5BA73] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#EADBC8]/80 leading-relaxed line-clamp-3 mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Highlights & Action CTA */}
                  <div className="relative z-10 pt-4 border-t border-[#EADBC8]/15 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#EADBC8]/75">
                      <span className="inline-flex items-center gap-1 font-semibold text-[#E5BA73]">
                        <Layers className="w-3.5 h-3.5" /> Core Feature:
                      </span>
                      <span className="truncate max-w-[280px]">
                        {service.keyFeatures[0] || "Customized Renewable Engineering"}
                      </span>
                    </div>

                    <Link
                      href={`/solutions#${service.slug}`}
                      className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-[#EADBC8]/10 hover:bg-[#E5BA73] text-[#F5EFE6] hover:text-[#0C0E12] text-xs sm:text-sm font-bold transition-all group/btn border border-[#EADBC8]/15"
                    >
                      <span>{service.isComingSoon ? "Register Early Interest" : "Explore Full Specification"}</span>
                      <ArrowRight className="w-4 h-4 text-[#E5BA73] group-hover/btn:text-[#0C0E12] group-hover/btn:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer Scroll Progress Track Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full shrink-0 pt-4">
          <div className="flex items-center justify-between text-xs text-[#EADBC8]/70 font-semibold mb-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5BA73] animate-pulse" />
              <span>Horizontal Scroll Progress</span>
            </span>
            <span>01 / 06 Solutions</span>
          </div>

          <div className="w-full h-1.5 rounded-full bg-[#EADBC8]/15 overflow-hidden">
            <motion.div
              style={{ width: progressBarWidth }}
              className="h-full bg-gradient-to-r from-[#E5BA73] via-[#F0C987] to-[#EADBC8] rounded-full shadow-[0_0_10px_rgba(229,186,115,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
