import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "green" | "comingSoon" | "outline" | "navy";
}

export function Badge({ className, variant = "green", children, ...props }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full tracking-wide";

  const variants = {
    gold: "bg-[#E5BA73]/15 text-[#E5BA73] border border-[#E5BA73]/35 shadow-sm",
    green: "bg-[#EADBC8]/15 text-[#F5EFE6] border border-[#EADBC8]/30 shadow-sm",
    comingSoon: "bg-[#E5BA73]/20 text-[#E5BA73] border border-[#E5BA73]/45 font-bold animate-pulse",
    outline: "bg-transparent text-[#EADBC8] border border-[#EADBC8]/30",
    navy: "bg-[#131722] text-[#E5BA73] border border-[#E5BA73]/30",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
