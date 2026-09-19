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
      <main id="main-content" className="flex-1 bg-[#F8F9FC] text-[#0F172A]">
        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden sthira-hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A]">
              Contact Our Local Engineering Team<span className="text-[#D97706]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Have questions about solar installation feasibility, EV chargers, or system sizing? We are here to assist you.
            </p>
          </div>
        </section>

        {/* 2-Column Contact Layout */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Details & Info Placeholders */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">Thiruvambady HQ</Badge>
                <h2 className="text-3xl font-black text-[#0F172A]">
                  Local Office & Service Coverage<span className="text-[#D97706]">.</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Our operations team manages site surveys, engineering installations, and after-sales support directly across Kozhikode and Wayanad.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Office Address */}
                <div className="p-5 rounded-2xl sthira-card bg-white shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D97706]/10 text-[#D97706] shrink-0">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Office Location</span>
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {siteConfig.contact.address.formatted}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Serving Kozhikode, Wayanad & surrounding regions
                    </p>
                    <a
                      href={siteConfig.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D97706] hover:underline font-bold pt-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Open in Google Maps &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl sthira-card bg-white shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D97706]/10 text-[#D97706] shrink-0">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Phone Contact</span>
                    {hasPhone ? (
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-base font-bold text-[#0F172A] hover:text-[#D97706] block">
                        {siteConfig.contact.phone}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 italic">
                        Phone contact details configuration
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl sthira-card bg-white shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D97706]/10 text-[#D97706] shrink-0">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Email Address</span>
                    {hasEmail ? (
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-base font-bold text-[#0F172A] hover:text-[#D97706] block">
                        {siteConfig.contact.email}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 italic">
                        Email address configuration
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl sthira-card bg-white shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">WhatsApp Support</span>
                    {hasWhatsapp ? (
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#25D366] hover:underline block"
                      >
                        Click to chat on WhatsApp
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-400 italic">
                        WhatsApp number configuration
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-2xl sthira-card bg-white shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#D97706]/10 text-[#D97706] shrink-0">
                    <Clock className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Business Hours</span>
                    <p className="text-sm font-bold text-[#0F172A]">
                      {siteConfig.contact.businessHours || "Mon - Sat: 9:00 AM - 6:00 PM"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Banner */}
              <div className="p-6 rounded-[28px] sthira-card bg-white text-[#0F172A] space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-[#D97706] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                  <span>Authorized Virgin Power Partner</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
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
