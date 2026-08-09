"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import {
  MessageSquare,
  ClipboardCheck,
  Compass,
  ShieldCheck,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  Info,
  Volume2,
} from "lucide-react";

function playPageFlipSound() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Synthesize realistic paper page flip audio using filtered noise & gain envelope
    const bufferSize = Math.floor(ctx.sampleRate * 0.35); // 350ms flip
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1; // White noise
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to simulate crisp paper texture sweep
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(550, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3200, ctx.currentTime + 0.15);
    filter.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.35);
    filter.Q.setValueAtTime(1.6, ctx.currentTime);

    // Gain envelope (soft attack, paper rustle, release)
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 0.35);
  } catch {
    // Ignore audio policy restrictions
  }
}

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFlipping, setIsFlipping] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const steps = [
    {
      number: "01",
      chapterTitle: "Consultation",
      title: "Initial Requirement & Power Audit",
      desc: "Reach out via our website form, phone, or email to outline your power requirements. Our solar advisors analyze your monthly electricity bill to estimate potential savings.",
      image: "/images/hero.png",
      icon: MessageSquare,
      deliverables: [
        "Historical electricity consumption analysis",
        "Estimated solar system capacity (3kW - 100kW+)",
        "Preliminary ROI & payback period forecast",
      ],
      hotspots: [
        { id: "bill", title: "Bill Optimization", top: "35%", left: "40%", desc: "Calculate exact annual savings from KSEB electricity tariffs." },
        { id: "capacity", title: "Capacity Sizing", top: "60%", left: "65%", desc: "Match inverter output to daily peak power usage." },
      ],
    },
    {
      number: "02",
      chapterTitle: "Site Audit",
      title: "On-Site Structural & Shade Assessment",
      desc: "Our local engineering team visits your property in Kozhikode or Wayanad to evaluate roof strength, sun-path trajectory, shade patterns, and electrical distribution panel layout.",
      image: "/images/residential-solar.png",
      icon: ClipboardCheck,
      deliverables: [
        "Roof structural load & wind velocity inspection",
        "Sun-path shade analysis across 365 days",
        "Main distribution board (MDB) & earthing check",
      ],
      hotspots: [
        { id: "roof", title: "Rooftop Load Test", top: "30%", left: "50%", desc: "Inspect concrete RCC slab or sloping Kerala roof tile strength." },
        { id: "shade", title: "Sun Path Scanning", top: "55%", left: "30%", desc: "3D shade modeling to ensure zero foliage or structural obstruction." },
      ],
    },
    {
      number: "03",
      chapterTitle: "Custom Design",
      title: "3D CAD System Design & Proposal",
      desc: "We formulate an optimal solar rooftop or EV charging proposal specifying Tier-1 Mono PERC panels, string inverters, heavy-duty mounting structures, and estimated generation output.",
      image: "/images/commercial-solar.png",
      icon: Compass,
      deliverables: [
        "Detailed CAD structural & electrical single-line diagram",
        "Tier-1 component selection (Virgin Power certified)",
        "Fixed turn-key pricing with zero hidden costs",
      ],
      hotspots: [
        { id: "cad", title: "3D CAD Layout", top: "45%", left: "55%", desc: "Optimized panel tilt angle (10°-15°) for maximum tropical yield." },
        { id: "inverter", title: "Smart Inverter Sync", top: "70%", left: "35%", desc: "High-efficiency string inverter with built-in Wi-Fi monitoring." },
      ],
    },
    {
      number: "04",
      chapterTitle: "Grid Sync",
      title: "Precision Engineering & KSEB Net-Metering",
      desc: "Certified engineers execute structural mounting, DC cabling, lightning protection, safety testing, and official bi-directional net-metering synchronization with the KSEB grid.",
      image: "/images/ev-charging.png",
      icon: ShieldCheck,
      deliverables: [
        "Heavy-duty aluminum & GI structural installation",
        "KSEB net-metering application & grid inspection sync",
        "System commissioning & live mobile app activation",
      ],
      hotspots: [
        { id: "mount", title: "Monsoon Weatherproofing", top: "40%", left: "45%", desc: "Corrosion-resistant anodized aluminum mounting rails." },
        { id: "meter", title: "Net Metering", top: "65%", left: "60%", desc: "Bi-directional KSEB energy meter exporting excess power." },
      ],
    },
    {
      number: "05",
      chapterTitle: "Lifetime Care",
      title: "After-Sales Monitoring & Operation",
      desc: "Continuous local operational support from our Thiruvambady headquarters, periodic de-ionized panel cleaning, performance monitoring, and rapid technical servicing.",
      image: "/images/maintenance.png",
      icon: HeartHandshake,
      deliverables: [
        "25-Year linear performance warranty backing",
        "Scheduled non-abrasive panel cleaning service",
        "24/7 digital generation monitoring & local SLA support",
      ],
      hotspots: [
        { id: "clean", title: "De-ionized Wash", top: "35%", left: "55%", desc: "Restores up to 25% generation lost to dust and monsoonal residue." },
        { id: "sla", title: "Local Service SLA", top: "60%", left: "40%", desc: "Dedicated local technical team based in Thiruvambady." },
      ],
    },
  ];

  const current = steps[activeStep];

  const handleNext = () => {
    if (isFlipping) return;
    playPageFlipSound();
    setIsFlipping(true);
    setDirection("next");
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    setActiveHotspot(null);
    setTimeout(() => setIsFlipping(false), 700);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    playPageFlipSound();
    setIsFlipping(true);
    setDirection("prev");
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
    setActiveHotspot(null);
    setTimeout(() => setIsFlipping(false), 700);
  };

  const goToStep = (idx: number) => {
    if (isFlipping || idx === activeStep) return;
    playPageFlipSound();
    setIsFlipping(true);
    setDirection(idx > activeStep ? "next" : "prev");
    setActiveStep(idx);
    setActiveHotspot(null);
    setTimeout(() => setIsFlipping(false), 700);
  };

  return (
    <section className="py-20 bg-[#FBF9F5] text-[#1C1917] relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#F5EFE6] text-[#D97706] border border-[#E6DEC8]">
            Step-by-Step Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-[#1C1917]">
            3D Interactive Execution Booklet
          </h2>
          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-medium">
            Turn through our engineering protocol portfolio with realistic 3D rolling page transitions and audio page flip sound detailing every milestone.
          </p>
        </div>

        {/* Outer 3D Perspective Book Viewport */}
        <div className="relative max-w-6xl mx-auto [perspective:1800px]">
          
          {/* Top Chapter Tabs (Ribbon Index Markers) */}
          <div className="flex items-center justify-center overflow-x-auto scrollbar-none gap-2 mb-4 px-2">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.number}
                  onClick={() => goToStep(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2.5 border ${
                    isActive
                      ? "bg-[#D97706] text-white border-[#D97706] shadow-lg scale-105 font-black"
                      : "bg-[#FFFFFF] text-[#44403C] border-[#E6DEC8] hover:text-[#1C1917] hover:bg-[#F5EFE6]"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full text-[10px] font-mono flex items-center justify-center font-bold ${isActive ? "bg-white text-[#D97706]" : "bg-[#F5EFE6] text-[#44403C]"}`}>
                    {s.number}
                  </span>
                  <span>{s.chapterTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Luxury Hardcover Book Spine & Page Stacks Container */}
          <div className="relative rounded-3xl bg-[#0D1117] border-2 border-[#D97706]/40 shadow-[0_35px_90px_rgba(0,0,0,0.35)] p-2 sm:p-4 [transform-style:preserve-3d]">
            
            {/* Paper Edges Stack Effect (Bottom & Right) */}
            <div className="absolute -bottom-2 right-6 left-6 h-3 bg-gradient-to-b from-[#EADBC8]/30 via-[#F5EFE6]/20 to-[#EADBC8]/10 rounded-b-xl border-b border-[#EADBC8]/20 pointer-events-none" />
            <div className="absolute -right-2 top-6 bottom-6 w-3 bg-gradient-to-r from-[#EADBC8]/30 via-[#F5EFE6]/20 to-[#EADBC8]/10 rounded-r-xl border-r border-[#EADBC8]/20 pointer-events-none" />

            {/* Book Body (Open 2-Page Spread) */}
            <div className="relative rounded-2xl bg-[#131722] border border-[#EADBC8]/20 overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[550px] [transform-style:preserve-3d]">
              
              {/* Central Spine Binding Crease Shadow (Desktop) */}
              <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-r from-black/60 via-black/20 to-black/60 pointer-events-none z-40 shadow-inner" />

              {/* ======================================================== */}
              {/* LEFT PAGE: Visual Proof & Interactive Photo              */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EADBC8]/15 bg-[#0A0D14]/90 relative z-10">
                
                {/* Header Watermark */}
                <div className="flex items-center justify-between text-[11px] font-bold text-[#E5BA73] mb-4">
                  <span className="uppercase tracking-wider flex items-center gap-1.5 font-heading">
                    <Sparkles className="w-3.5 h-3.5" /> Stage {current.number} Field Visual
                  </span>
                  <span className="font-mono text-[#EADBC8]/50">PROTOCOL // SP-0{current.number}</span>
                </div>

                {/* Photo Frame Container */}
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-[#EADBC8]/25 shadow-2xl bg-[#080A0E]">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    className="object-cover filter brightness-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/30 via-transparent to-transparent opacity-35" />

                  {/* Hotspot Pins overlaid on Image */}
                  {current.hotspots.map((hs) => {
                    const isActive = activeHotspot === hs.id;
                    return (
                      <div
                        key={hs.id}
                        style={{ top: hs.top, left: hs.left }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      >
                        <button
                          onClick={() => setActiveHotspot(isActive ? null : hs.id)}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all cursor-pointer ${
                            isActive
                              ? "bg-[#F5EFE6] text-[#0C0E12] scale-125"
                              : "bg-[#E5BA73] text-[#0C0E12] hover:scale-110 shadow-[#E5BA73]/50"
                          }`}
                        >
                          <Info className="w-4 h-4" />
                        </button>

                        {/* Hotspot Popover Tooltip */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 p-3 rounded-2xl bg-[#131722] border border-[#E5BA73]/40 text-[#F5EFE6] shadow-2xl text-xs z-30"
                            >
                              <div className="flex items-center justify-between font-bold text-[#E5BA73] mb-1">
                                <span>{hs.title}</span>
                                <X className="w-3.5 h-3.5 cursor-pointer text-[#EADBC8]" onClick={() => setActiveHotspot(null)} />
                              </div>
                              <p className="text-[11px] text-[#EADBC8]/80 leading-snug">{hs.desc}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* Expand Image Button */}
                  <button
                    onClick={() => setIsImageExpanded(true)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-[#080A0E]/80 backdrop-blur-md border border-[#EADBC8]/20 text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#0C0E12] transition-all cursor-pointer z-10 shadow-md"
                    aria-label="Expand step image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#EADBC8]/60 font-mono font-semibold">
                  <span>PLATE 0{current.number} — SITE PHOTO</span>
                  <span className="text-[#E5BA73] font-bold">CLICK PINS TO INSPECT</span>
                </div>
              </div>

              {/* ======================================================== */}
              {/* RIGHT PAGE: Detailed Chapter Specs & Deliverables        */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 relative z-10 bg-[#131722] overflow-hidden">
                
                {/* 3D Realistic Rolling Page Turn Motion */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{
                      rotateY: direction === "next" ? 95 : -95,
                      opacity: 0,
                      transformOrigin: direction === "next" ? "left center" : "right center",
                      boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                    }}
                    exit={{
                      rotateY: direction === "next" ? -95 : 95,
                      opacity: 0,
                      transition: { duration: 0.55, ease: [0.55, 0, 1, 0.45] },
                    }}
                    className="h-full flex flex-col justify-between space-y-6 [transform-style:preserve-3d]"
                  >
                    {/* Chapter Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#EADBC8]/10 text-[#E5BA73] flex items-center justify-center border border-[#EADBC8]/20 shadow-md">
                            {(() => {
                              const StepIcon = current.icon;
                              return <StepIcon className="w-6 h-6" />;
                            })()}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#E5BA73] uppercase tracking-wider block font-heading">
                              CHAPTER 0{current.number}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFE6] font-heading leading-tight">
                              {current.title}
                            </h3>
                          </div>
                        </div>

                        <Badge variant="gold" className="nestive-pill text-xs font-mono shrink-0 text-[#E5BA73]">
                          PAGE 0{current.number} / 05
                        </Badge>
                      </div>

                      {/* Step Execution Description */}
                      <p className="text-xs sm:text-sm text-[#EADBC8]/85 leading-relaxed border-l-2 border-[#E5BA73] pl-4 py-1 mb-6">
                        {current.desc}
                      </p>

                      {/* Key Technical Deliverables Checklist */}
                      <div className="space-y-3 bg-[#080A0E]/70 p-4 rounded-2xl border border-[#EADBC8]/15">
                        <span className="text-xs font-bold text-[#E5BA73] uppercase tracking-wider block font-heading mb-2">
                          Key Technical Deliverables:
                        </span>
                        {current.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#F5EFE6]">
                            <CheckCircle2 className="w-4 h-4 text-[#E5BA73] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Page Turner Controls */}
                    <div className="pt-4 border-t border-[#EADBC8]/15 flex items-center justify-between">
                      <button
                        onClick={handlePrev}
                        disabled={isFlipping}
                        className="px-4 py-2.5 rounded-xl border border-[#EADBC8]/20 bg-[#080A0E] text-[#F5EFE6] hover:border-[#E5BA73] hover:text-[#E5BA73] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Page</span>
                      </button>

                      <span className="text-xs font-bold text-[#EADBC8]/70 font-mono hidden sm:flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-[#E5BA73]" />
                        <span>PAGE {activeStep + 1} OF 5</span>
                      </span>

                      <button
                        onClick={handleNext}
                        disabled={isFlipping}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white font-black text-xs transition-all hover:scale-105 flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                      >
                        <span>Next Page</span>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 3D Realistic Corner Curl Hit-Zone with Page Turn Sound */}
                <div
                  onClick={handleNext}
                  className="absolute bottom-0 right-0 w-16 h-16 cursor-pointer group z-40"
                  title="Click corner to flip to next page"
                >
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[44px] border-b-[#E5BA73] border-l-[44px] border-l-transparent group-hover:border-b-[#F5EFE6] group-hover:scale-110 transition-all filter drop-shadow-xl" />
                  <span className="absolute bottom-1 right-1 text-[8px] font-black text-[#0C0E12] uppercase tracking-tighter pointer-events-none">
                    FLIP 📄
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Image Fullscreen Modal */}
      <AnimatePresence>
        {isImageExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080A0E]/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl h-[70vh] rounded-3xl overflow-hidden border border-[#E5BA73]/40 shadow-2xl bg-[#080A0E]"
            >
              <button
                onClick={() => setIsImageExpanded(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#080A0E]/80 border border-[#EADBC8]/30 text-[#F5EFE6] hover:bg-[#E5BA73] hover:text-[#0C0E12] transition-all z-20 cursor-pointer shadow-md"
              >
                <X className="w-6 h-6" />
              </button>

              <Image src={current.image} alt={current.title} fill className="object-contain p-4" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#131722]/90 backdrop-blur-md border border-[#EADBC8]/20 text-[#F5EFE6] text-xs font-bold flex items-center justify-between shadow-lg">
                <span>{current.title} — Detailed Inspection View</span>
                <span className="text-[#E5BA73]">STEP 0{current.number}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
