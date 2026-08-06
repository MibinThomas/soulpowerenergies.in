"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function StickyMobileActionBar() {
  const phone = siteConfig.contact.phone || "+919876543210";
  const whatsapp = siteConfig.contact.whatsapp || "+919876543210";

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#6F746A]/95 backdrop-blur-lg border-t border-white/20 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        {/* Call Link */}
        <a
          href={`tel:${phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl nestive-card text-white hover:bg-white/20 active:scale-95 transition-all border border-white/20"
        >
          <Phone className="w-4 h-4 text-amber-300 mb-0.5" />
          <span className="text-[11px]">Call Us</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl nestive-card text-emerald-300 hover:bg-white/20 active:scale-95 transition-all border border-white/20"
        >
          <MessageCircle className="w-4 h-4 text-emerald-300 mb-0.5" />
          <span className="text-[11px]">WhatsApp</span>
        </a>

        {/* Enquire CTA */}
        <Link
          href="/contact#assessment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white text-slate-900 hover:bg-amber-100 font-bold active:scale-95 transition-all shadow-md"
        >
          <FileText className="w-4 h-4 text-slate-900 mb-0.5" />
          <span className="text-[11px]">Enquire</span>
        </Link>
      </div>
    </div>
  );
}
