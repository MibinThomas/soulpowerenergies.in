import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wider uppercase";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] hover:from-[#B45309] hover:to-[#92400E] text-white shadow-lg shadow-[#D97706]/30 hover:shadow-xl hover:shadow-[#D97706]/40 border border-transparent",
      secondary:
        "bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-md border border-transparent",
      outline:
        "border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white bg-transparent",
      ghost:
        "text-[#334155] hover:bg-slate-100 hover:text-[#0F172A] bg-transparent normal-case font-semibold",
      dark:
        "bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-md border border-slate-700",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-6 py-3 text-xs sm:text-sm gap-2",
      lg: "px-8 py-4 text-sm sm:text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
