"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { AnnouncementBar } from "./AnnouncementBar";
import { MobileNav } from "./MobileNav";
import { Menu, Phone } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

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
            ? "nestive-nav py-3 shadow-xl"
            : "bg-[#888D83]/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="dark" showTagline={!isScrolled} />

          {/* Desktop Nestive Dot Navigation */}
          <nav className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80" aria-label="Main Navigation">
            {mainNav.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-white/40 font-bold">•</span>}
                  <Link
                    href={item.href}
                    className={`transition-colors py-1 px-2 rounded-lg ${
                      isActive
                        ? "text-white font-bold underline underline-offset-4 decoration-amber-400"
                        : "hover:text-white hover:bg-white/10"
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
            <Link href="/contact#assessment">
              <Button variant="primary" size="md" className="shadow-lg bg-white text-slate-900 hover:bg-amber-100 border-none font-bold rounded-xl px-3 sm:px-5 text-xs sm:text-sm py-1.5 sm:py-2">
                <span className="hidden sm:inline">Site Assessment</span>
                <span className="sm:hidden">Assess</span>
              </Button>
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2 rounded-xl border border-white/25 bg-white/15 text-white hover:bg-white/25 focus:outline-none cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}

