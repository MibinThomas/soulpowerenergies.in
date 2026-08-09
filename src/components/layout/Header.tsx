"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { AnnouncementBar } from "./AnnouncementBar";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setMobileNavOpen(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      <AnnouncementBar />

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/95 backdrop-blur-xl py-3 shadow-xl border-b border-white/10"
            : "bg-[#000000]/90 backdrop-blur-md py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="light" showTagline={!isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#EADBC8]" aria-label="Main Navigation">
            {mainNav.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-[#E5BA73]/40 font-bold">•</span>}
                  <Link
                    href={item.href}
                    className={`transition-colors py-1 px-2.5 rounded-lg ${
                      isActive
                        ? "text-[#E5BA73] font-bold underline underline-offset-4 decoration-[#E5BA73]"
                        : "hover:text-[#F5EFE6] hover:bg-[#0C0E12]"
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/contact#assessment" className="hidden sm:inline-block">
              <Button variant="primary" size="md" className="shadow-md font-black rounded-xl px-5 text-sm py-2 bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white">
                Site Assessment
              </Button>
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={handleOpen}
              className="md:hidden p-2 rounded-xl border border-white/15 bg-[#0C0E12] text-[#F5EFE6] hover:bg-[#131722] focus:outline-none cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-[#E5BA73]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={handleClose} />
    </header>
  );
}
