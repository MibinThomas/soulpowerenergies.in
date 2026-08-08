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
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5BA73] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0E12] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#E5BA73] hover:bg-[#F0C987] text-[#0C0E12] font-bold shadow-lg shadow-[#E5BA73]/20 hover:shadow-xl hover:shadow-[#E5BA73]/30 border border-[#F5EFE6]/30",
      secondary:
        "bg-[#1E2433] hover:bg-[#272F42] text-[#F5EFE6] shadow-md border border-[#EADBC8]/20 hover:border-[#E5BA73]/40",
      outline:
        "border-2 border-[#E5BA73] text-[#E5BA73] hover:bg-[#E5BA73] hover:text-[#0C0E12] bg-transparent font-semibold",
      ghost:
        "text-[#EADBC8] hover:bg-[#EADBC8]/10 hover:text-[#F5EFE6] bg-transparent",
      dark:
        "bg-[#131722] hover:bg-[#1A1F2C] text-[#F5EFE6] border border-[#EADBC8]/20 shadow-md hover:border-[#E5BA73]/30",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5 font-bold",
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
