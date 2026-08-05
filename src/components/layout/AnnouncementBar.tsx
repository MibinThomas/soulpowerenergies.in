import { siteConfig } from "@/config/site";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp);

  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            Authorized Partner of Virgin Power & Engineering | Serving Kozhikode & Wayanad
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          {hasPhone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          )}
          {hasWhatsapp && (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          )}
          {!hasPhone && !hasWhatsapp && (
            <span className="text-slate-400 text-[11px] font-normal">
              Thiruvambady, Kozhikode, Kerala
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
