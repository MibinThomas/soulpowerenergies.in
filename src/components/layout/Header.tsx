"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { AnnouncementBar } from "./AnnouncementBar";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full">
      <AnnouncementBar />

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 text-white py-3"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 text-slate-900 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant={isScrolled ? "dark" : "light"} showTagline={!isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? isScrolled
                        ? "bg-amber-500/20 text-amber-400 font-bold"
                        : "bg-emerald-50 text-emerald-800 font-bold"
                      : isScrolled
                      ? "text-slate-300 hover:text-white hover:bg-slate-800"
                      : "text-slate-700 hover:text-emerald-800 hover:bg-slate-100"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link href="/contact#assessment">
                <Button variant="primary" size="md">
                  Request a Site Assessment
                </Button>
              </Link>
            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className={`md:hidden p-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                isScrolled
                  ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
