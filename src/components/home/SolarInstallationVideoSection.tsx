"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Wrench, Zap, CheckCircle2 } from "lucide-react";

export function SolarInstallationVideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const highlights = [
    {
      icon: Wrench,
      title: "Precision Rooftop Mounting",
      desc: "Heavy-duty aluminum rail structure engineered to withstand tropical coastal winds & rains.",
    },
    {
      icon: Zap,
      title: "High-Efficiency Wiring",
      desc: "DC cable trunking with MC4 waterproof connectors and dedicated lightning surge protection.",
    },
    {
      icon: ShieldCheck,
      title: "KSEB Grid Synchronization",
      desc: "Bi-directional net metering calibration and safe grid injection compliance inspection.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0C0E12] text-[#F5EFE6]">
      {/* Background Video Layer with Glass Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/residential-solar.png"
          className="w-full h-full object-cover scale-105 filter brightness-[0.4] contrast-[1.1] opacity-40 transition-opacity duration-1000"
        >
          <source src="https://cdn.coverr.co/videos/coverr-workers-installing-solar-panels-on-a-roof-5784/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-workers-installing-solar-panels-on-a-roof-41560-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-[#0C0E12]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="gold" className="px-3.5 py-1 nestive-pill text-[#E5BA73]">
              Engineering In Action
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif italic tracking-tight text-[#F5EFE6] leading-tight">
              On-Ground Solar Installation Standards
            </h2>
            <p className="text-base text-[#EADBC8]/80 leading-relaxed">
              Watch our local certified technical team mount, wire, and commission rooftop photovoltaic systems across Kozhikode and Wayanad.
            </p>
          </div>

          {/* Interactive Video Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={togglePlay}
              className="p-3.5 rounded-full nestive-card border border-[#EADBC8]/20 text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#0C0E12] transition-all cursor-pointer shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-3.5 rounded-full nestive-card border border-[#EADBC8]/20 text-[#EADBC8] hover:text-[#F5EFE6] hover:bg-[#EADBC8]/20 transition-all cursor-pointer shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <span className="text-xs font-bold text-[#EADBC8]/70 nestive-pill px-3 py-1.5 rounded-full border border-[#EADBC8]/15">
              Live On-Site Loop
            </span>
          </div>
        </div>

        {/* Process Highlights Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl nestive-card border border-[#EADBC8]/20 backdrop-blur-xl shadow-2xl space-y-4 group hover:border-[#E5BA73]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EADBC8]/10 text-[#E5BA73] border border-[#EADBC8]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#F5EFE6] font-heading group-hover:text-[#E5BA73] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EADBC8]/75 leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#E5BA73]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Inspected</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
