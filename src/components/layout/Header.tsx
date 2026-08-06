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
            ? "glass-nav py-3 shadow-lg shadow-sky-900/5"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="light" showTagline={!isScrolled} />

          {/* Desktop Glass Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl glass-pill shadow-2xs" aria-label="Main Navigation">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Phone Contact & CTA */}
          <div className="flex items-center gap-3">
            {siteConfig.contact.phone ? (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-amber-600 bg-slate-100/80 hover:bg-amber-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            ) : (
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-amber-600 bg-slate-100/80 hover:bg-amber-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Contact Us</span>
              </Link>
            )}

            <div className="hidden sm:block">
              <Link href="/contact#assessment">
                <Button variant="primary" size="md" className="shadow-md shadow-amber-500/20">
                  Site Assessment
                </Button>
              </Link>
            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
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

