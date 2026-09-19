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
    <section className="py-20 relative overflow-hidden bg-[#F8F9FC] text-[#0F172A]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/residential-solar.png"
          className="w-full h-full object-cover scale-105 filter brightness-95 opacity-25 transition-opacity duration-1000"
        >
          <source src="https://cdn.coverr.co/videos/coverr-workers-installing-solar-panels-on-a-roof-5784/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-workers-installing-solar-panels-on-a-roof-41560-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FC] via-[#F8F9FC]/80 to-[#F8F9FC]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
              Engineering In Action
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A]">
              On-Ground Solar Installation Standards<span className="text-[#D97706]">.</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Watch our local certified technical team mount, wire, and commission rooftop photovoltaic systems across Kozhikode and Wayanad.
            </p>
          </div>

          {/* Interactive Video Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={togglePlay}
              className="p-3.5 rounded-full sthira-card text-[#D97706] hover:bg-[#D97706] hover:text-white transition-all cursor-pointer shadow-md"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-3.5 rounded-full sthira-card text-[#0F172A] hover:text-[#D97706] hover:bg-slate-100 transition-all cursor-pointer shadow-md"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <span className="text-xs font-bold text-[#D97706] sthira-pill px-3.5 py-1.5 rounded-full bg-white">
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
                className="p-6 rounded-[28px] sthira-card sthira-card-hover space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#D97706]">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
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
