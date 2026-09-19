"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";
import { Headphones } from "lucide-react";

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleClose = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setMobileNavOpen(true);
  }, []);

  return (
    <header className="relative z-40 w-full bg-transparent">
      {/* Main Transparent Navbar */}
      <div className="w-full py-3 sm:py-4 border-b border-transparent bg-transparent">
        <div className="w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-2">
          {/* Left Aligned Brand Logo */}
          <Logo />

          {/* Right Aligned Header Bar: CONNECT US badge + Modern Hamburger Drawer Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* CONNECT US Call/Contact Badge */}
            <Link
              href="/contact#assessment"
              className="inline-flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-widest text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                CONNECT US
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white flex items-center justify-center shadow-md shadow-[#D97706]/30 group-hover:scale-105 transition-all">
                <Headphones className="w-4 h-4 text-white" />
              </div>
            </Link>

            {/* Modern Hamburger Drawer Trigger Button */}
            <button
              onClick={handleOpen}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 text-[#0F172A] hover:border-[#D97706] hover:text-[#D97706] flex items-center justify-center shadow-xs transition-all cursor-pointer group"
              aria-label="Open navigation menu"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between items-end transition-all group-hover:scale-110">
                <span className="w-full h-[2.5px] bg-current rounded-full transition-all duration-300" />
                <span className="w-3/4 h-[2.5px] bg-[#D97706] rounded-full transition-all duration-300 group-hover:w-full" />
                <span className="w-full h-[2.5px] bg-current rounded-full transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Slide-over Drawer Menu */}
      <MobileNav isOpen={mobileNavOpen} onClose={handleClose} />
    </header>
  );
}
