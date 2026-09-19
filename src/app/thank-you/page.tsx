import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  CalendarCheck,
  FileCheck2,
  Home,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry Received | Soul Power Energies",
  description:
    "Thank you for submitting your site assessment request. Our local engineering team in Thiruvambady will evaluate your solar requirements and contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-[#0F172A] font-sans antialiased">
      <Header />
      <main id="main-content" className="flex-1 sthira-hero-bg py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Thank You Card */}
          <div className="p-8 sm:p-12 lg:p-16 rounded-[32px] sthira-card bg-white border border-slate-200/80 text-center space-y-8 shadow-xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FEF3C7] border-2 border-[#D97706] text-[#D97706] shadow-md relative z-10 mx-auto">
              <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2]" />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3 relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold border border-[#D97706]/30 shadow-sm uppercase tracking-wider">
                Request Confirmed
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Enquiry Received! Thank You<span className="text-[#D97706]">.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Your solar &amp; EV infrastructure feasibility request has been logged successfully. Our local engineering team in Kozhikode and Wayanad is preparing your customized site proposal.
              </p>
            </div>

            {/* Next Steps Roadmap */}
            <div className="pt-8 border-t border-slate-100 text-left space-y-4 relative z-10">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#D97706] text-center sm:text-left">
                What Happens Next?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <FileCheck2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase">Step 01</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Feasibility Evaluation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Our engineers assess your rooftop space, monthly power usage, and electrical phase requirements.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <CalendarCheck className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase">Step 02</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Custom Proposal</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    We select Tier-1 modules (Waaree, Adani, Emmvee) and calculate your payback period and KSEB net metering return.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <PhoneCall className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase">Step 03</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Engineer Callback</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    A technical specialist will reach out via Phone/WhatsApp within 24 business hours to schedule your site audit.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Support & Contact Options */}
            <div className="p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10 text-left">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#D97706] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Need Immediate Assistance?</span>
                  <span className="text-slate-600">
                    Speak directly to our local office in Thiruvambady, Kozhikode.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <a
                  href="tel:+919656063369"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#D97706] font-bold text-center hover:bg-[#D97706] hover:text-white transition-all shadow-sm"
                >
                  Call +91 96560 63369
                </a>
                <a
                  href="https://wa.me/919656063369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-center hover:bg-emerald-700 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-bold rounded-full shadow-lg bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white px-8 py-3.5 hover:shadow-xl transition-all"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Return to Homepage</span>
                </Button>
              </Link>

              <Link href="/solutions">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-slate-300 text-slate-800 hover:bg-slate-100 px-8 py-3.5 font-bold transition-all"
                >
                  <span>Explore Solar Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </div>
  );
}
