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
      className={`inline-flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#D97706] rounded-lg p-0 transition-all ${className}`}
      aria-label={`${siteConfig.name} Home`}
    >
      <Image
        src="/logo/horizontal-logo.png"
        alt="Soul Power Energies - Powered By The Sun"
        width={360}
        height={110}
        priority
        className="h-10 sm:h-16 lg:h-20 w-auto max-w-[200px] sm:max-w-none object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </Link>
  );
}
