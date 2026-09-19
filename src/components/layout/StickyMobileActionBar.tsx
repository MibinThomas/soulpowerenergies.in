"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  FileText,
  X,
  MessageSquare,
} from "lucide-react";

export function StickyMobileActionBar() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = siteConfig.contact.phone || "+919876543210";
  const whatsapp = siteConfig.contact.whatsapp || "+919876543210";
  const email = siteConfig.contact.email || "info@soulpowerenergies.in";

  const actionItems = [
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      icon: MessageCircle,
      href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`,
      isExternal: true,
      color: "bg-[#25D366] text-white",
    },
    {
      id: "call",
      label: "Call Us Now",
      icon: Phone,
      href: `tel:${phone}`,
      isExternal: false,
      color: "bg-[#0F172A] text-white",
    },
    {
      id: "email",
      label: "Email Enquiry",
      icon: Mail,
      href: `mailto:${email}`,
      isExternal: false,
      color: "bg-[#0F172A] text-white",
    },
    {
      id: "location",
      label: "Thiruvambadi Location",
      icon: MapPin,
      href: siteConfig.contact.mapUrl,
      isExternal: true,
      color: "bg-[#0F172A] text-white",
    },
    {
      id: "enquire",
      label: "Site Assessment",
      icon: FileText,
      href: "/contact#assessment",
      isExternal: false,
      color: "bg-[#D97706] text-white font-bold",
    },
  ];

  return (
    <div className="floating-action-bar fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Vertical Floating Actions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-end gap-3 mb-3"
          >
            {actionItems.map((item, idx) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 group">
                  {/* Tooltip Label */}
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.label}
                  </span>

                  {/* Icon Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all duration-200 ${item.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </div>
              );

              return item.isExternal ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {content}
                </a>
              ) : (
                <Link key={item.id} href={item.href} aria-label={item.label} onClick={() => setIsOpen(false)}>
                  {content}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Golden Amber Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer border-2 border-white hover:scale-105 active:scale-95 ${
          isOpen ? "rotate-90 bg-[#B45309]" : ""
        }`}
        aria-label={isOpen ? "Close floating contact menu" : "Open floating contact menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white font-bold" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 text-white fill-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#D97706] animate-ping" />
          </>
        )}
      </button>
    </div>
  );
}
