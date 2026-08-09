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
      <main id="main-content" className="flex-1 bg-[#000000] text-[#F5EFE6]">
        {/* Page Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#0C0E12] text-[#E5BA73] border border-white/10">
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif italic tracking-tight text-[#F5EFE6]">
              Contact Our Local Engineering Team
            </h1>
            <p className="text-base sm:text-lg text-[#EADBC8] max-w-3xl mx-auto leading-relaxed font-medium">
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
                <Badge variant="gold" className="px-3.5 py-1 nestive-pill bg-[#0C0E12] text-[#E5BA73] border border-white/10">Thiruvambady HQ</Badge>
                <h2 className="text-3xl font-normal font-serif italic text-[#F5EFE6]">
                  Local Office & Service Coverage
                </h2>
                <p className="text-sm text-[#EADBC8] leading-relaxed font-medium">
                  Our operations team manages site surveys, engineering installations, and after-sales support directly across Kozhikode and Wayanad.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Office Address */}
                <div className="p-5 rounded-2xl nestive-card bg-[#0C0E12] border border-white/10 shadow-md flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">Office Location</span>
                    <h3 className="text-base font-bold text-[#F5EFE6] font-heading">
                      {siteConfig.contact.address.formatted}
                    </h3>
                    <p className="text-xs text-[#9CA3AF]">
                      Serving Kozhikode, Wayanad & surrounding regions
                    </p>
                    <a
                      href={siteConfig.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#E5BA73] hover:underline font-bold pt-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Open in Google Maps &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl nestive-card bg-[#0C0E12] border border-white/10 shadow-md flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">Phone Contact</span>
                    {hasPhone ? (
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-base font-bold text-[#F5EFE6] hover:text-[#E5BA73] font-heading block">
                        {siteConfig.contact.phone}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#9CA3AF] italic">
                        Phone contact details configuration
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl nestive-card bg-[#0C0E12] border border-white/10 shadow-md flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">Email Address</span>
                    {hasEmail ? (
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-base font-bold text-[#F5EFE6] hover:text-[#E5BA73] font-heading block">
                        {siteConfig.contact.email}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#9CA3AF] italic">
                        Email address configuration
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl nestive-card bg-[#0C0E12] border border-white/10 shadow-md flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#E5BA73]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">WhatsApp Support</span>
                    {hasWhatsapp ? (
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#E5BA73] hover:underline font-heading block"
                      >
                        Click to chat on WhatsApp
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#9CA3AF] italic">
                        WhatsApp number configuration
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-2xl nestive-card bg-[#0C0E12] border border-white/10 shadow-md flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#131722] text-[#E5BA73] border border-white/10 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">Business Hours</span>
                    <p className="text-sm font-bold text-[#F5EFE6] font-heading">
                      {siteConfig.contact.businessHours || "Mon - Sat: 9:00 AM - 6:00 PM"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Banner */}
              <div className="p-6 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 text-[#F5EFE6] space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-[#E5BA73] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorized Virgin Power Partner</span>
                </div>
                <p className="text-xs text-[#EADBC8]/80 leading-relaxed">
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
