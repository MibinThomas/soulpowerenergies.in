import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1 transition-all ${className}`}
      aria-label={`${siteConfig.name} Home`}
    >
      {/* Desktop / Tablet SVG Logo */}
      <div className="hidden sm:block">
        <Image
          src="/logo/SOUL.svg"
          alt="Soul Power Energies - Powered By The Sun"
          width={240}
          height={80}
          priority
          className="h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </div>

      {/* Mobile Animated GIF Logo */}
      <div className="sm:hidden block">
        <Image
          src="/logo/mobile-logo.gif"
          alt="Soul Power Energies"
          width={180}
          height={60}
          priority
          unoptimized
          className="h-10 w-auto object-contain"
        />
      </div>
    </Link>
  );
}
