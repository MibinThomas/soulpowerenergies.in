import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Soul Power Energies",
  description:
    "Get in touch with Soul Power Energies in Thiruvambady, Kozhikode. Request a free solar or EV charging site assessment for your property.",
};

export default function ContactPage() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasEmail = Boolean(siteConfig.contact.email);
  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-slate-50">
        {/* Page Hero */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="navy" className="text-amber-400 border-slate-700">
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
              Contact Our Local Engineering Team
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about solar installation feasibility, EV chargers, or system sizing? We are here to assist you.
            </p>
          </div>
        </section>

        {/* 2-Column Contact Layout */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Details & Info Placeholders */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <Badge variant="green">Thiruvambady HQ</Badge>
                <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                  Local Office & Service Coverage
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our operations team manages site surveys, engineering installations, and after-sales support directly across Kozhikode and Wayanad.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Office Address */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-900 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Location</span>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {siteConfig.contact.address.formatted}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Serving Kozhikode, Wayanad & surrounding regions
                    </p>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Contact</span>
                    {hasPhone ? (
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-base font-bold text-slate-900 hover:text-amber-600 font-heading block">
                        {siteConfig.contact.phone}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 italic">
                        Phone contact details configuration placeholder
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Placeholder */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</span>
                    {hasEmail ? (
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-base font-bold text-slate-900 hover:text-amber-600 font-heading block">
                        {siteConfig.contact.email}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 italic">
                        Email address configuration placeholder
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp Placeholder */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Support</span>
                    {hasWhatsapp ? (
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-emerald-700 hover:text-emerald-800 font-heading block"
                      >
                        Click to chat on WhatsApp
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 italic">
                        WhatsApp number configuration placeholder
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-900 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</span>
                    <p className="text-sm font-bold text-slate-900 font-heading">
                      {siteConfig.contact.businessHours || "Mon - Sat: 9:00 AM - 6:00 PM"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Banner */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3 shadow-lg border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorized Virgin Power Partner</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {siteConfig.partner.wording}
                </p>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
