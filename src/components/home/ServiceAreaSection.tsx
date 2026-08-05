import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight, Compass, ShieldCheck } from "lucide-react";

export function ServiceAreaSection() {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Regions */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="navy" className="text-amber-400 border-slate-700">
              <MapPin className="w-3.5 h-3.5" />
              <span>Regional Coverage</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Dedicated Local Service Across Kozhikode & Wayanad
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Based in Thiruvambady, our technical team provides rapid on-ground site assessments, installations, and after-sales support for residential homeowners and commercial enterprises throughout the region.
            </p>

            {/* Region Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Primary Base</span>
                <h3 className="text-lg font-bold text-white font-heading">Thiruvambady</h3>
                <p className="text-[11px] text-slate-400">Local Operations Office</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">District Coverage</span>
                <h3 className="text-lg font-bold text-white font-heading">Kozhikode</h3>
                <p className="text-[11px] text-slate-400">Urban & Suburb Service</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">District Coverage</span>
                <h3 className="text-lg font-bold text-white font-heading">Wayanad</h3>
                <p className="text-[11px] text-slate-400">Highland & Commercial</p>
              </div>
            </div>

            {/* Outside Area Notice */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Have a project outside these areas? Contact our team to confirm availability.</span>
              </div>
            </div>

            <div>
              <Link href="/contact">
                <Button variant="outline" size="md" className="text-white border-slate-700 hover:bg-slate-800">
                  <span>Confirm Service For Your Location</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Map-Inspired Visual Graphic */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              {/* Regional Contour Graphic */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">Northern Kerala Solar Network</h3>
                    <p className="text-xs text-slate-400">Soul Power Energies Operations Zone</p>
                  </div>
                </div>
                <Badge variant="green">Active</Badge>
              </div>

              {/* Graphical Service Nodes */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="relative pl-6 border-l-2 border-amber-400 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-slate-900" />
                    <h4 className="text-sm font-bold text-white">Thiruvambady HQ</h4>
                    <p className="text-xs text-slate-400">On-ground local technical hub & dispatch center</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-900" />
                    <h4 className="text-sm font-bold text-white">Kozhikode Service Zone</h4>
                    <p className="text-xs text-slate-400">City residential rooftops, commercial complexes & EV stations</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-900" />
                    <h4 className="text-sm font-bold text-white">Wayanad Service Zone</h4>
                    <p className="text-xs text-slate-400">Hospitality resorts, commercial estates & residential solar setups</p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Rapid Site Visit Capability
                </span>
                <span>Northern Kerala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
