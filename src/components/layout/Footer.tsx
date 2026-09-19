import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";
import { ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasEmail = Boolean(siteConfig.contact.email);

  return (
    <footer className="bg-white text-[#0F172A] pt-16 pb-12 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200/80">
          {/* Col 1 & 2: Brand & Partnership */}
          <div className="lg:col-span-2 space-y-5">
            <Logo showTagline={true} />
            <p className="text-sm text-slate-600 leading-relaxed max-w-md font-medium">
              Locally managed solar rooftop and EV charging solutions for residential homeowners, commercial businesses, and industrial facilities across Kozhikode and Wayanad.
            </p>

            {/* Partnership Disclaimer Box */}
            <div className="p-4 rounded-2xl border border-slate-200/80 space-y-2 bg-slate-50">
              <div className="flex items-center gap-2 text-[#D97706] font-bold text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0 stroke-[2.5]" />
                <span>Authorized Partner of Virgin Power</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {siteConfig.partner.wording}
              </p>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-4">
            <h3 className="text-[#D97706] text-xs font-black tracking-widest uppercase">Our Solutions</h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#D97706] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company Links */}
          <div className="space-y-4">
            <h3 className="text-[#D97706] text-xs font-black tracking-widest uppercase">Company</h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#D97706] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-[#D97706] text-xs font-black tracking-widest uppercase">Local Office</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-1 stroke-[2.5]" />
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D97706] transition-colors"
                >
                  {siteConfig.contact.address.formatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-600">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5]" />
                {hasPhone ? (
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#D97706]">
                    {siteConfig.contact.phone}
                  </a>
                ) : (
                  <span className="text-slate-400 text-xs italic">Phone details on request</span>
                )}
              </li>
              <li className="flex items-center gap-2.5 text-slate-600">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5]" />
                {hasEmail ? (
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#D97706]">
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  <span className="text-slate-400 text-xs italic">Email details on request</span>
                )}
              </li>
              <li className="flex items-center gap-2.5 text-slate-600">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0 stroke-[2.5]" />
                <span>
                  {siteConfig.contact.businessHours || "Mon - Sat: 9:00 AM - 6:00 PM"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Soul Power Energies. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#D97706] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
