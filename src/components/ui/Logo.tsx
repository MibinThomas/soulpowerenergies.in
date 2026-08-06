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
      <Image
        src="/logo/SOUL.svg"
        alt="Soul Power Energies - Powered By The Sun"
        width={240}
        height={80}
        priority
        className="h-10 sm:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
