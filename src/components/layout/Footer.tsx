import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";
import { ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasEmail = Boolean(siteConfig.contact.email);

  return (
    <footer className="bg-[#6F746A] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Col 1 & 2: Brand & Partnership */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="dark" showTagline={true} />
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Locally managed solar rooftop and EV charging solutions for residential homeowners, commercial businesses, and industrial facilities across Kozhikode and Wayanad.
            </p>

            {/* Partnership Disclaimer Box */}
            <div className="p-4 rounded-2xl nestive-card border border-white/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Authorized Partner of Virgin Power</span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                {siteConfig.partner.wording}
              </p>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase font-heading">Our Solutions</h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-amber-300 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company Links */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase font-heading">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-amber-300 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold tracking-widest uppercase font-heading">Local Office</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0 mt-1" />
                <span>{siteConfig.contact.address.formatted}</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                {hasPhone ? (
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-amber-300">
                    {siteConfig.contact.phone}
                  </a>
                ) : (
                  <span className="text-white/50 text-xs italic">Phone details on request</span>
                )}
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
                {hasEmail ? (
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-300">
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  <span className="text-white/50 text-xs italic">Email details on request</span>
                )}
              </li>
              <li className="flex items-center gap-2.5 text-white/80">
                <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>
                  {siteConfig.contact.businessHours || "Mon - Sat: 9:00 AM - 6:00 PM"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Soul Power Energies. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-amber-300 transition-colors"
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

