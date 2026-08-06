import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function Logo({ className = "", variant = "dark", showTagline = false }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1 transition-all ${className}`}
      aria-label={`${siteConfig.name} Home`}
    >
      {/* Desktop / Tablet Horizontal Image Logo */}
      <div className="hidden sm:block">
        <Image
          src="/logo/horizontal-logo.png"
          alt="Soul Power Energies - Powered By The Sun"
          width={360}
          height={90}
          priority
          className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02] -my-2"
        />
      </div>

      {/* Mobile Compact Emblem & Text Logo */}
      <div className="sm:hidden flex items-center gap-2.5">
        {/* Centralized Brand Icon - Sun Rays & Power Emblem */}
        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-emerald-700 shadow-md group-hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-white"
          >
            {/* Sun center */}
            <circle cx="12" cy="12" r="4" fill="currentColor" className="text-amber-300" />
            {/* Energy Rays */}
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <div className="absolute inset-0 rounded-xl bg-amber-400 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
        </div>

        <div className="flex flex-col">
          <span
            className={`font-bold text-base leading-tight tracking-tight font-heading ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Soul Power <span className="text-amber-400 font-extrabold">Energies</span>
          </span>
          {showTagline && (
            <span className="text-[9px] tracking-wider uppercase font-semibold text-emerald-300">
              {siteConfig.tagline}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
