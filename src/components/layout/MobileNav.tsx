"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { X, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close nav on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-[#0C0E12] text-[#F5EFE6] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-l border-[#EADBC8]/20"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#EADBC8]/15">
                <Logo variant="dark" />
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl border border-[#EADBC8]/20 bg-[#EADBC8]/10 text-[#F5EFE6] hover:bg-[#EADBC8]/20 focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-2">
                {mainNav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-[#E5BA73] text-[#0C0E12] shadow-md font-bold"
                          : "text-[#F5EFE6] hover:bg-[#EADBC8]/10 nestive-card border border-[#EADBC8]/12"
                      }`}
                    >
                      <span className="font-heading">{item.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </Link>
                  );
                })}
              </nav>

              {/* Trust Badge */}
              <div className="mt-8 p-4 rounded-2xl nestive-card border border-[#EADBC8]/20 text-xs text-[#F5EFE6] space-y-2">
                <div className="flex items-center gap-2 text-[#E5BA73] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorized Virgin Power Partner</span>
                </div>
                <div className="flex items-center gap-2 text-[#EADBC8]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#E5BA73]" />
                  <span>Serving Kozhikode & Wayanad</span>
                </div>
              </div>
            </div>

            {/* CTA in Mobile Drawer */}
            <div className="mt-8 pt-6 border-t border-[#EADBC8]/15 space-y-3">
              <Link href="/contact#assessment" onClick={onClose} className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-between font-bold rounded-xl shadow-xl">
                  <span>Request Site Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <p className="text-center text-[11px] text-[#EADBC8]/70">
                Thiruvambady, Kozhikode, Kerala
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
