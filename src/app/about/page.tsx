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
      <main id="main-content" className="flex-1 bg-[#F8F9FC] text-[#0F172A]">
        {/* Hero Banner Section */}
        <section className="py-20 relative overflow-hidden sthira-hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
            <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
              About Soul Power Energies
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A]">
              Local Renewable Service, <span className="text-[#D97706]">Proven Engineering Backing</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Based in Thiruvambady, Kozhikode, delivering customized rooftop solar and EV charging infrastructure across Kozhikode and Wayanad.
            </p>
          </div>
        </section>

        {/* Company Background */}
        <section className="py-20 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">Company Overview</Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight">
                  Empowering Northern Kerala With Clean Energy Solutions<span className="text-[#D97706]">.</span>
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  Soul Power Energies is an authorized partner of {siteConfig.partner.fullName}. Based in Thiruvambady, Kozhikode, the company brings established renewable-energy expertise, quality-focused solutions, and personalized local service to homes, businesses, and industries across the region.
                </p>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  We believe that adopting solar power should be simple, transparent, and dependable. By combining Tier-1 equipment selection with responsive on-ground engineering support, we help local property owners take control of their electricity costs.
                </p>

                <div className="p-4 rounded-2xl sthira-card text-[#0F172A] text-xs flex items-start gap-3 border border-slate-200/80 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#D97706]">Regional Commitment: </span>
                    Serving Kozhikode, Wayanad, Thiruvambady, and neighboring northern Kerala districts.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-[32px] overflow-hidden sthira-card bg-white border border-slate-200/80 shadow-xl">
                  <Image
                    src={siteImages.keralaLandscape.src}
                    alt={siteImages.keralaLandscape.alt}
                    width={siteImages.keralaLandscape.width}
                    height={siteImages.keralaLandscape.height}
                    className="w-full h-[400px] object-cover filter brightness-95"
                  />
                  <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-[#0F172A] space-y-1 border border-slate-200/80 shadow-xl">
                    <p className="text-xs font-bold text-[#D97706]">Northern Kerala Environment</p>
                    <p className="text-xs text-slate-600 font-medium">Customized solar structural mounting for local tropical climate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-16 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-8 sm:p-10 rounded-[32px] sthira-card space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">Our Mission</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                  &ldquo;To make clean, reliable and affordable solar energy accessible to homes and businesses while helping customers reduce energy costs and contribute to a more sustainable future.&rdquo;
                </h3>
              </div>

              {/* Vision */}
              <div className="p-8 sm:p-10 rounded-[32px] sthira-card space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">Our Vision</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
                  &ldquo;To become the most trusted renewable-energy solutions provider across northern Kerala, recognized for technical excellence, customer care, and sustainable innovation.&rdquo;
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-16 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">Our Core Principles</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                The Values That Drive Us<span className="text-[#D97706]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-[28px] sthira-card sthira-card-hover space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A]">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership & Engineering Backing */}
        <section className="py-20 bg-[#F8F9FC]" id="partnership">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl space-y-4">
              <Badge variant="gold" className="px-3.5 py-1 sthira-pill bg-white text-[#D97706]">
                Authorized Engineering Partnership
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                Supported by Virgin Power and Engineering Pvt. Ltd<span className="text-[#D97706]">.</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                As an authorized partner of Virgin Power and Engineering Pvt. Ltd., Soul Power Energies operates with access to seasoned engineering workflows, proven technical benchmarks, and complete EPC execution standards.
              </p>
            </div>

            <div className="p-6 rounded-[28px] sthira-card text-[#0F172A] text-xs space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-[#D97706] font-bold">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                <span>Accreditation Notice</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">{siteConfig.partner.wording}</p>
            </div>

            <div className="pt-4">
              <Link href="/contact#assessment">
                <Button variant="primary" size="lg" className="font-extrabold rounded-full shadow-xl">
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
