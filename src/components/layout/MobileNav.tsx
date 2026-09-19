"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { X, ArrowRight, ShieldCheck, MapPin, Phone, MessageCircle } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-mobile-nav-open", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-mobile-nav-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-mobile-nav-open");
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
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Slide-over Modern Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white text-[#0F172A] shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-l border-slate-200"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Logo />
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-slate-100 text-[#0F172A] hover:bg-[#D97706] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-2.5">
                {mainNav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between p-4 rounded-2xl text-base font-bold transition-all uppercase tracking-wider ${
                        isActive
                          ? "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md"
                          : "text-[#0F172A] hover:bg-slate-100 bg-slate-50 border border-slate-200/60"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-white" : "text-[#D97706]"}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* Trust Badge & Details */}
              <div className="mt-8 p-4 rounded-2xl border border-slate-200/80 text-xs space-y-3 bg-slate-50">
                <div className="flex items-center gap-2 text-[#D97706] font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Authorized Virgin Power Partner</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Serving Kozhikode & Wayanad</span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Action CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D97706]" />
                    <span>Call Us</span>
                  </a>
                )}
                {siteConfig.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>

              <Link href="/contact#assessment" onClick={onClose} className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-between rounded-full shadow-lg">
                  <span>Connect Your Space</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <p className="text-center text-[11px] text-slate-500 font-medium">
                Thiruvambady, Kozhikode, Kerala
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
