import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "red" | "outline" | "white" | "dark" | "comingSoon" | "gold" | "green" | "navy";
}

export function Badge({ className, variant = "gold", children, ...props }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold rounded-full tracking-wider uppercase";

  const variants = {
    gold: "bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/25 shadow-xs",
    red: "bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/25 shadow-xs",
    green: "bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/25 shadow-xs",
    outline: "bg-white text-[#D97706] border border-[#D97706]/30 shadow-xs",
    white: "bg-white text-[#0F172A] border border-slate-200 shadow-sm",
    dark: "bg-[#0F172A] text-white border border-transparent shadow-sm",
    navy: "bg-[#0F172A] text-white border border-transparent shadow-sm",
    comingSoon: "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-black animate-pulse shadow-sm",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
