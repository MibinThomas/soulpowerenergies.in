import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "green" | "comingSoon" | "outline" | "navy";
}

export function Badge({ className, variant = "green", children, ...props }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full tracking-wide";

  const variants = {
    gold: "bg-amber-100 text-amber-900 border border-amber-300",
    green: "bg-emerald-100 text-emerald-950 border border-emerald-300",
    comingSoon: "bg-amber-500/20 text-amber-900 border border-amber-400 font-bold animate-pulse",
    outline: "bg-transparent text-slate-700 border border-slate-300",
    navy: "bg-slate-900 text-amber-400 border border-slate-700",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
