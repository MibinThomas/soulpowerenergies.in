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
  }, [pathname, onClose]);

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
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-slate-900 text-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <Logo variant="dark" />
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      className={`flex items-center justify-between p-3.5 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              {/* Trust Badge */}
              <div className="mt-8 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorized Virgin Power Partner</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Serving Kozhikode & Wayanad</span>
                </div>
              </div>
            </div>

            {/* CTA in Mobile Drawer */}
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <Link href="/contact#assessment" onClick={onClose} className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-between">
                  <span>Request Site Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <p className="text-center text-[11px] text-slate-400">
                Thiruvambady, Kozhikode, Kerala
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
