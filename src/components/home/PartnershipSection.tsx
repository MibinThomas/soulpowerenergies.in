import Image from "next/image";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, CheckCircle2, Award } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-emerald-950 text-white border-b border-emerald-900" id="partnership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-800/80 shadow-2xl bg-emerald-900 group">
              <Image
                src={siteImages.virginPowerPartner.src}
                alt={siteImages.virginPowerPartner.alt}
                width={siteImages.virginPowerPartner.width}
                height={siteImages.virginPowerPartner.height}
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-emerald-950/90 backdrop-blur-md border border-emerald-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Virgin Power Engineering Network</span>
                </div>
                <p className="text-xs text-slate-300">EPC capabilities & quality assurance standards</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Compliant Wording */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="navy" className="border-amber-400/40 text-amber-400 bg-slate-900">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Engineering Authorization</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Local Service, Backed by Proven Engineering Expertise
            </h2>

            <p className="text-base text-slate-200 leading-relaxed">
              As an authorized partner of {siteConfig.partner.fullName}, Soul Power Energies combines established renewable-energy expertise with responsive, on-ground support across Kozhikode and Wayanad.
            </p>

            {/* Official Compliance Box */}
            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-3">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-heading">
                Capabilities & Standards Attribution
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {siteConfig.partner.wording}
              </p>
            </div>

            {/* Supporting Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-ground local technical response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Proven EPC design standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Net-metering coordination support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certified equipment selection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
