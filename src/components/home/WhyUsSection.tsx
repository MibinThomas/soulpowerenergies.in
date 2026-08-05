import { Shield, MapPin, Layers, Home, CheckCircle, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";

export function WhyUsSection() {
  const points = [
    {
      icon: Shield,
      title: "Trusted Technology",
      description: "Proven components from leading brands (Waaree, Adani, Sungrow, FoxESS) with manufacturer backed warranties.",
    },
    {
      icon: MapPin,
      title: "Local Customer Support",
      description: "Based in Thiruvambady, delivering fast, accessible on-ground service across Kozhikode and Wayanad.",
    },
    {
      icon: Layers,
      title: "End-to-End Coordination",
      description: "Complete handling of site assessment, engineering design, net-metering approvals, and commissioning.",
    },
    {
      icon: Home,
      title: "Solutions for Every Property",
      description: "Customized rooftop solar layouts tailored specifically for independent homes, shops, offices, and factories.",
    },
    {
      icon: CheckCircle,
      title: "Quality-Focused Execution",
      description: "Engineering standards supported by Virgin Power and Engineering Pvt. Ltd., adhering to strict safety protocols.",
    },
    {
      icon: Wrench,
      title: "Ongoing Maintenance Assistance",
      description: "Scheduled panel cleaning, electrical inspection, and system health checks for long-term generation efficiency.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Asymmetrical Heading & Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="green">Why Choose Soul Power Energies</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Reliable Local Service, Backed By Engineering Excellence
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We combine the technical capabilities of {siteConfig.partner.fullName} with dedicated, responsive local service right here in northern Kerala.
            </p>

            {/* Asymmetrical Featured Callout Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-3 text-amber-400 font-bold text-sm">
                <Shield className="w-5 h-5" />
                <span>Authorized Virgin Power Partnership</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {siteConfig.partner.wording}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-amber-300 font-medium">
                <span className="px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20">KSEB Standards</span>
                <span className="px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20">ANERT Guidelines</span>
                <span className="px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20">MNRE Framework</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-emerald-800 flex items-center justify-center shadow-xs border border-slate-200 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 font-heading">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
