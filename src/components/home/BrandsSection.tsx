import Link from "next/link";
import { brandsData } from "@/config/brands";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function BrandsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="green">Tier-1 Equipment Partners</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Proven Brands & Cutting-Edge Technology
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We install reliable solar modules, high-efficiency string inverters, and certified EV charging hardware from leading manufacturers.
            </p>
          </div>

          <Link href="/brands">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-amber-600 transition-colors">
              <span>View Full Brand Directory</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Clean Responsive Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandsData.map((brand, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {brand.categoryLabel}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 font-heading group-hover:text-amber-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  {brand.origin}
                </span>
                <span className="text-slate-400 text-[10px]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
