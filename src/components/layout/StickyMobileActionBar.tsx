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
      id: "email",
      label: "Email Enquiry",
      icon: Mail,
      href: `mailto:${email}`,
      isExternal: false,
      color: "hover:border-[#E5BA73] text-[#E5BA73]",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      icon: MessageCircle,
      href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`,
      isExternal: true,
      color: "hover:border-[#E5BA73] text-[#E5BA73]",
    },
    {
      id: "call",
      label: "Call Us Now",
      icon: Phone,
      href: `tel:${phone}`,
      isExternal: false,
      color: "hover:border-[#E5BA73] text-[#E5BA73]",
    },
    {
      id: "location",
      label: "Thiruvambadi HQ Location",
      icon: MapPin,
      href: siteConfig.contact.mapUrl,
      isExternal: true,
      color: "hover:border-[#E5BA73] text-[#E5BA73]",
    },
    {
      id: "enquire",
      label: "Free Site Assessment",
      icon: FileText,
      href: "/contact#assessment",
      isExternal: false,
      color: "hover:border-[#E5BA73] text-[#E5BA73] font-bold",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
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
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#000000] text-[#F5EFE6] text-xs font-semibold backdrop-blur-md border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.label}
                  </span>

                  {/* Icon Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className={`w-12 h-12 rounded-full bg-[#0C0E12]/95 backdrop-blur-md border-2 border-white/15 shadow-2xl flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all duration-200 ${item.color}`}
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

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer border-2 ${
          isOpen
            ? "bg-[#D97706] border-white rotate-90 scale-105"
            : "bg-[#0C0E12] backdrop-blur-md border-white/15 hover:scale-110 hover:border-[#E5BA73]"
        }`}
        aria-label={isOpen ? "Close floating contact menu" : "Open floating contact menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white font-bold" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 text-[#E5BA73]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E5BA73] border-2 border-[#000000] animate-ping" />
          </>
        )}
      </button>
    </div>
  );
}
