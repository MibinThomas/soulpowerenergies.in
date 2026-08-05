"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function StickyMobileActionBar() {
  const phone = siteConfig.contact.phone;
  const whatsapp = siteConfig.contact.whatsapp;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        {/* Call Link */}
        {phone ? (
          <a
            href={`tel:${phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 text-slate-100 hover:bg-slate-700 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-1" />
            <span>Call Us</span>
          </a>
        ) : (
          <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800/50 text-slate-500 cursor-not-allowed">
            <Phone className="w-4 h-4 text-slate-500 mb-1" />
            <span>Call (Soon)</span>
          </div>
        )}

        {/* WhatsApp Link */}
        {whatsapp ? (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-800/50 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 mb-1" />
            <span>WhatsApp</span>
          </a>
        ) : (
          <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800/50 text-slate-500 cursor-not-allowed">
            <MessageCircle className="w-4 h-4 text-slate-500 mb-1" />
            <span>Chat (Soon)</span>
          </div>
        )}

        {/* Enquire CTA */}
        <Link
          href="/contact#assessment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-600 font-bold active:scale-95 transition-all shadow-md"
        >
          <FileText className="w-4 h-4 text-slate-950 mb-1" />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
}
