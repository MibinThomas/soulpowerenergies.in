import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp);

  return (
    <div className="bg-[#6F746A] text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span className="truncate">
            Authorized Partner of Virgin Power & Engineering <span className="hidden sm:inline">| Kozhikode & Wayanad</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
          {hasPhone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          )}
          {hasWhatsapp && (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-300" />
              <span>WhatsApp</span>
            </a>
          )}
          {!hasPhone && !hasWhatsapp && (
            <span className="text-white/70 text-[11px]">
              Thiruvambady, Kozhikode, Kerala
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
