import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  MapPin,
  Target,
  Eye,
  ArrowRight,
  Award,
  Users,
  Wrench,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Soul Power Energies",
  description:
    "Soul Power Energies is an authorized partner of Virgin Power and Engineering Pvt. Ltd., bringing solar and EV solutions to Kozhikode & Wayanad.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Quality",
      desc: "Installing Tier-1 solar modules, inverters, and certified EV chargers built for longevity.",
      icon: Award,
    },
    {
      title: "Reliability",
      desc: "Dependable engineering standards supported by Virgin Power and Engineering Pvt. Ltd.",
      icon: ShieldCheck,
    },
    {
      title: "Transparency",
      desc: "Clear upfront proposals, preliminary estimates, and honest site feasibility evaluations.",
      icon: Sparkles,
    },
    {
      title: "Customer Support",
      desc: "Responsive on-ground service team based right here in Thiruvambady.",
      icon: Users,
    },
    {
      title: "Sustainability",
      desc: "Empowering homes and businesses to transition to clean, zero-emission power.",
      icon: Target,
    },
    {
      title: "Technical Responsibility",
      desc: "Adherence to electrical safety standards and official KSEB grid synchronization protocols.",
      icon: Wrench,
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-50/60 via-white to-amber-50/30 py-16 lg:py-24 border-b border-slate-200/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="navy" className="bg-white/80 border-slate-200 text-slate-900 shadow-2xs">
              About Soul Power Energies
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-slate-900">
              Local Renewable Service, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600">Proven Engineering Backing</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Based in Thiruvambady, Kozhikode, delivering customized rooftop solar and EV charging infrastructure across Kozhikode and Wayanad.
            </p>
          </div>
        </section>

        {/* Company Background */}
        <section className="py-20 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <Badge variant="green" className="px-3.5 py-1">Company Overview</Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                  Empowering Northern Kerala With Clean Energy Solutions
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Soul Power Energies is an authorized partner of {siteConfig.partner.fullName}. Based in Thiruvambady, Kozhikode, the company brings established renewable-energy expertise, quality-focused solutions, and personalized local service to homes, businesses, and industries across the region.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  We believe that adopting solar power should be simple, transparent, and dependable. By combining Tier-1 equipment selection with responsive on-ground engineering support, we help local property owners take control of their electricity costs.
                </p>

                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Regional Commitment: </span>
                    Serving Kozhikode, Wayanad, Thiruvambady, and neighboring northern Kerala districts.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden glass-card border border-white/90 shadow-2xl">
                  <Image
                    src={siteImages.keralaLandscape.src}
                    alt={siteImages.keralaLandscape.alt}
                    width={siteImages.keralaLandscape.width}
                    height={siteImages.keralaLandscape.height}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white space-y-1">
                    <p className="text-xs font-bold text-amber-400">Northern Kerala Environment</p>
                    <p className="text-xs text-slate-300">Customized solar structural mounting for local tropical climate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-20 bg-gradient-to-b from-sky-50/40 via-white to-amber-50/30 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/90 space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-heading block">Our Mission</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading leading-snug">
                  &ldquo;To make clean, reliable and affordable solar energy accessible to homes and businesses while helping customers reduce energy costs and contribute to a more sustainable future.&rdquo;
                </h3>
              </div>

              {/* Vision */}
              <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/90 space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center border border-sky-500/20">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 font-heading block">Our Vision</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading leading-snug">
                  &ldquo;To become the most trusted renewable-energy solutions provider across northern Kerala, recognized for technical excellence, customer care, and sustainable innovation.&rdquo;
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-20 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="gold" className="px-3.5 py-1">Our Core Principles</Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                The Values That Drive Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl glass-card glass-card-hover border border-white/90 shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership & Engineering Backing */}
        <section className="py-20 bg-gradient-to-b from-sky-50/50 to-white" id="partnership">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl space-y-4">
              <Badge variant="navy" className="text-amber-600 bg-amber-50 border-amber-200">
                Authorized Engineering Partnership
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                Supported by Virgin Power and Engineering Pvt. Ltd.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                As an authorized partner of Virgin Power and Engineering Pvt. Ltd., Soul Power Energies operates with access to seasoned engineering workflows, proven technical benchmarks, and complete EPC execution standards.
              </p>
            </div>

            <div className="p-6 rounded-3xl dark-glass-card text-white text-xs space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Accreditation Notice</span>
              </div>
              <p className="text-slate-300">{siteConfig.partner.wording}</p>
            </div>

            <div className="pt-4">
              <Link href="/contact#assessment">
                <Button variant="primary" size="lg" className="shadow-xl shadow-amber-500/20">
                  <span>Speak to Our Engineering Team</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}

