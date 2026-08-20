"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

interface SlideData {
  id: number;
  badge: string;
  subtitle: string;
  title: string;
  highlightText: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageSrc: string;
  tags: string[];
}

const carouselSlides: SlideData[] = [
  {
    id: 1,
    badge: "AUTHORIZED PARTNER • VIRGIN POWER",
    subtitle: "INNOVATION TO INVENTION",
    title: "VIRGIN SOLAR & SOUL POWER",
    highlightText: "70-80% ENERGY REDUCTION",
    description:
      "VIRGIN POWER & ENGINEERING PVT LTD solar products that can help you to reduce energy consumption level by 70-80% with solar energy.",
    primaryCtaText: "Read More",
    primaryCtaLink: "/about",
    secondaryCtaText: "Free Site Audit",
    secondaryCtaLink: "/contact#assessment",
    imageSrc: "/images/carousel-slide-1.jpg",
    tags: ["Virgin Power Partner", "Rooftop Solar", "KSEB Approved"],
  },
  {
    id: 2,
    badge: "TIER-1 AUTHORIZED PRODUCTS",
    subtitle: "WAREE • ADANI POWER • EMMVEE",
    title: "PREMIUM SOLAR MODULES",
    highlightText: "25-YEAR PERFORMANCE WARRANTY",
    description:
      "Deploying industry-leading solar panels from Waaree Energies, Adani Power, and Emmvee Solar with maximum degradation resistance and high module efficiency.",
    primaryCtaText: "Calculate Savings",
    primaryCtaLink: "#estimator",
    secondaryCtaText: "View Products",
    secondaryCtaLink: "#brands",
    imageSrc: "/images/carousel-slide-2.jpg",
    tags: ["Waaree Energy", "Adani Power", "Emmvee Solar"],
  },
  {
    id: 3,
    badge: "FUTURE-READY CLEAN ENERGY",
    subtitle: "SOLAR & EV CHARGING ECOSYSTEM",
    title: "SMART EV CHARGING STATIONS",
    highlightText: "FAST AC/DC CHARGERS",
    description:
      "Turnkey AC & DC EV charging station setups for residential villas, commercial complexes, and public hubs across Kozhikode & Wayanad.",
    primaryCtaText: "Request Service",
    primaryCtaLink: "/contact",
    secondaryCtaText: "EV Charging Specs",
    secondaryCtaLink: "/solutions",
    imageSrc: "/images/carousel-slide-3.jpg",
    tags: ["VE Charge Partner", "Smart Solar EV", "Zero Outage"],
  },
];

export function HeroCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer (6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = carouselSlides[currentIndex];

  return (
    <section
      aria-label="Hero Carousel Banner"
      className="relative w-full bg-[#000000] text-[#F5EFE6] overflow-hidden border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Aspect Ratio Container for Desktop/Tablet (Min-h: 500px, Max-h: 680px) */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center">
        
        {/* Background Image Carousel with AnimatePresence */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.imageSrc}
              alt={slide.title}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Multi-layer Gradient Overlays - Reduced Opacity for Brighter Image Clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/65 via-[#000000]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-[#000000]/30" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D97706]/10 blur-[130px] pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl space-y-5 sm:space-y-6 text-left">
            
            {/* Top Badge & Tags */}
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full nestive-pill bg-[#0C0E12]/90 backdrop-blur-md text-[#E5BA73] text-xs font-extrabold tracking-wider border border-[#E5BA73]/30 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#E5BA73] fill-[#E5BA73]" />
                <span>{slide.badge}</span>
              </div>

              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="hidden sm:inline-block text-[11px] font-semibold text-[#EADBC8] bg-[#000000]/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Subtitle & Title */}
            <motion.div
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#E5BA73]">
                {slide.subtitle}
              </p>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif italic text-white leading-[1.1] tracking-tight drop-shadow-lg">
                {slide.title}
              </h2>

              <div className="inline-block px-3 py-1 rounded-lg bg-[#D97706]/30 backdrop-blur-md border border-[#D97706]/50 text-[#E5BA73] text-xs sm:text-sm font-extrabold font-mono mt-1 shadow-md">
                ⚡ {slide.highlightText}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-[#F5EFE6] max-w-xl leading-relaxed font-medium drop-shadow-md"
            >
              {slide.description}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              key={`cta-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Link href={slide.primaryCtaLink}>
                <button className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all group cursor-pointer border border-[#E5BA73]/40">
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href={slide.secondaryCtaLink}>
                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0C0E12]/80 backdrop-blur-md text-[#F5EFE6] font-bold text-xs sm:text-sm border border-white/20 hover:border-[#E5BA73] hover:text-[#E5BA73] transition-all cursor-pointer">
                  <span>{slide.secondaryCtaText}</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Carousel Left / Right Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-[#0C0E12]/70 backdrop-blur-md border border-white/15 text-[#F5EFE6] hover:bg-[#D97706] hover:text-white hover:border-[#E5BA73] transition-all cursor-pointer shadow-2xl group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-[#0C0E12]/70 backdrop-blur-md border border-white/15 text-[#F5EFE6] hover:bg-[#D97706] hover:text-white hover:border-[#E5BA73] transition-all cursor-pointer shadow-2xl group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Bottom Slide Indicators & Auto-play Timer Progress Bar */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-20 flex flex-col items-center gap-2">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000]/70 backdrop-blur-md border border-white/15">
            <span className="text-xs font-mono text-[#E5BA73] font-bold mr-1">
              0{currentIndex + 1} / 0{carouselSlides.length}
            </span>

            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-[#E5BA73] shadow-md shadow-[#E5BA73]/50"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Timer Indicator Line */}
          <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={`progress-${currentIndex}-${isPaused}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: isPaused ? 0 : 6, ease: "linear" }}
              className="h-full bg-[#D97706]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
