import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Building2 } from "lucide-react";

export function ResidentialCommercialPanels() {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Residential Solar */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 group flex flex-col justify-end p-8 sm:p-10 min-h-[420px] shadow-2xl">
            <Image
              src={siteImages.residentialSolar.src}
              alt={siteImages.residentialSolar.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Home className="w-4 h-4" />
                <span>Residential Solutions</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                Reduce dependence on rising electricity costs with a system designed for your home.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                Custom rooftop layouts engineered to power your household appliances, safeguard against power cuts, and cut daily electricity expenses.
              </p>

              <div className="pt-2">
                <Link href="/solutions#residential-rooftop-solar">
                  <Button variant="primary" size="md">
                    <span>Explore Residential Solar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Panel 2: Commercial Solar */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 group flex flex-col justify-end p-8 sm:p-10 min-h-[420px] shadow-2xl">
            <Image
              src={siteImages.commercialSolar.src}
              alt={siteImages.commercialSolar.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Commercial Solutions</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                Turn unused rooftop space into a long-term energy asset for your business.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                Scalable commercial power plants engineered for offices, factories, retail complexes, and institutions to optimize operating overheads.
              </p>

              <div className="pt-2">
                <Link href="/solutions#commercial-industrial-solar">
                  <Button variant="secondary" size="md">
                    <span>Explore Commercial Solar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
