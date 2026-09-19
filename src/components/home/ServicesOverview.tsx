"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { servicesData } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sun, Building2, Zap, Sparkles, Wind, BatteryCharging, Sparkle, Layers, ChevronRight, ChevronLeft } from "lucide-react";

export function ServicesOverview() {
  const targetRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

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

  // Transform scroll progress for desktop parallax
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-52%"]);
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["5%", "100%"]);

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const cardWidth = mobileScrollRef.current.clientWidth * 0.85;
      const newIdx = Math.round(scrollLeft / cardWidth);
      setActiveMobileIdx(Math.min(Math.max(newIdx, 0), servicesData.length - 1));
    }
  };

  const scrollMobile = (direction: "left" | "right") => {
    if (mobileScrollRef.current) {
      const scrollAmount = mobileScrollRef.current.clientWidth * 0.85;
      mobileScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* DESKTOP VIEW: Sticky Parallax Horizontal Scroll (lg+)   */}
      {/* ======================================================== */}
      <section
        ref={targetRef}
        className="hidden lg:block relative h-[300vh] bg-[#F8F9FC] text-[#0F172A]"
        id="services"
      >
        {/* Sticky Full-Height Container */}
        <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-14">
          
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full shrink-0 mb-4">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold">
                  <Sparkle className="w-3.5 h-3.5 fill-[#D97706]" />
                  <span>Our Core Solutions</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A]">
                  Comprehensive Solar & EV Infrastructure<span className="text-[#D97706]">.</span>
                </h2>
              </div>

              <p className="text-sm text-slate-600 max-w-md leading-relaxed font-medium">
                Explore our suite of renewable engineering solutions across Kozhikode and Wayanad.
              </p>
            </div>
          </div>

          {/* Desktop Parallax Horizontal Scroll Track */}
          <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8 px-12 items-center">
              {servicesData.map((service, idx) => {
                const Icon = iconMap[service.iconName] || Sun;
                const formattedNumber = String(idx + 1).padStart(2, "0");

                return (
                  <div
                    key={service.id}
                    className="w-[500px] shrink-0 h-[490px] relative rounded-[32px] sthira-card sthira-card-hover p-7 flex flex-col justify-between group overflow-hidden"
                  >
                    <div>
                      {/* Solution Image Header Plate */}
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md mb-4">
                        <Image
                          src={service.bgImage}
                          alt={service.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md text-[#D97706] flex items-center justify-center border border-slate-200/80 shadow-md">
                          <Icon className="w-5 h-5 stroke-[2.5]" />
                        </div>

                        <div className="absolute top-3 right-3">
                          {service.isComingSoon ? (
                            <Badge variant="comingSoon" className="text-xs shadow-md">
                              {service.badge || "Coming Soon"}
                            </Badge>
                          ) : (
                            <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider sthira-pill px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md">
                              Solution {formattedNumber}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tagline & Title */}
                      <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                        {service.shortTitle}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#D97706] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Highlights & Action CTA */}
                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                        <span className="inline-flex items-center gap-1 font-bold text-[#D97706]">
                          <Layers className="w-3.5 h-3.5" /> Core Feature:
                        </span>
                        <span className="truncate max-w-[280px] font-semibold text-[#0F172A]">
                          {service.keyFeatures[0] || "Customized Renewable Engineering"}
                        </span>
                      </div>

                      <Link
                        href={`/solutions/${service.slug}`}
                        className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-slate-50 hover:bg-[#D97706] text-[#0F172A] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all group/btn border border-slate-200/80 shadow-xs"
                      >
                        <span>{service.isComingSoon ? "Register Early Interest" : "Explore Specification"}</span>
                        <ArrowRight className="w-4 h-4 text-[#D97706] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Footer Scroll Progress Track Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full shrink-0 pt-2">
            <div className="flex items-center justify-between text-xs text-slate-600 font-bold mb-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                <span>Scroll Progress</span>
              </span>
              <span>01 / {String(servicesData.length).padStart(2, "0")} Solutions</span>
            </div>

            <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
              <motion.div
                style={{ width: progressBarWidth }}
                className="h-full bg-gradient-to-r from-[#D97706] to-[#B45309] rounded-full shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* MOBILE VIEW: Ultra-Smooth Touch Snap Swipe Carousel (<lg) */}
      {/* ======================================================== */}
      <section className="block lg:hidden py-14 bg-[#F8F9FC] text-[#0F172A] relative overflow-hidden" id="services-mobile">
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-6">
          {/* Mobile Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold">
              <Sparkle className="w-3.5 h-3.5 fill-[#D97706]" />
              <span>Our Core Solutions</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">
              Comprehensive Solar & EV Infrastructure<span className="text-[#D97706]">.</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Swipe left or right to explore our energy solutions across Kozhikode and Wayanad.
            </p>
          </div>

          {/* Touch-Snap Horizontal Carousel Track */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-2 -mx-4 px-4 scroll-smooth"
          >
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Sun;
              const formattedNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={service.id}
                  className="w-[85vw] max-w-[340px] shrink-0 snap-center rounded-[28px] sthira-card p-5 flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    {/* Mobile Solution Image Banner */}
                    <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm mb-3">
                      <Image
                        src={service.bgImage}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-[#D97706] flex items-center justify-center border border-slate-200/80 shadow-md">
                        <Icon className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        {service.isComingSoon ? (
                          <Badge variant="comingSoon" className="text-[10px] shadow-md">
                            {service.badge || "Coming Soon"}
                          </Badge>
                        ) : (
                          <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider sthira-pill px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md shadow-md">
                            {formattedNumber} / {String(servicesData.length).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                      {service.shortTitle}
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5 mt-3">
                    <Link
                      href={`/solutions/${service.slug}`}
                      className="inline-flex items-center justify-between w-full p-3 rounded-full btn-primary-gold text-xs font-bold tracking-wider uppercase transition-all shadow-md"
                    >
                      <span>{service.isComingSoon ? "Register Interest" : "Explore Solution"}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Controls & Indicator Dots */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5">
              {servicesData.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    activeMobileIdx === i ? "w-6 bg-[#D97706]" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollMobile("left")}
                className="p-2.5 rounded-full sthira-card text-[#D97706] active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous solution"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollMobile("right")}
                className="p-2.5 rounded-full sthira-card text-[#D97706] active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next solution"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
