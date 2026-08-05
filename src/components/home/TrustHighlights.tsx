import { Award, Wrench, Headset, Building } from "lucide-react";

export function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "Quality Solar Brands",
      description: "Proven solar panels and inverters from leading Indian and global manufacturers.",
      iconBg: "bg-amber-100 text-amber-900 border-amber-300",
    },
    {
      icon: Wrench,
      title: "Complete EPC Support",
      description: "End-to-end engineering, procurement, and construction backed by Virgin Power.",
      iconBg: "bg-emerald-100 text-emerald-950 border-emerald-300",
    },
    {
      icon: Headset,
      title: "Local After-Sales Service",
      description: "Dedicated on-ground technical support team based directly in Thiruvambady.",
      iconBg: "bg-amber-100 text-amber-900 border-amber-300",
    },
    {
      icon: Building,
      title: "Residential & Commercial Expertise",
      description: "Custom renewable energy layouts designed for homes, shops, offices, and factories.",
      iconBg: "bg-emerald-100 text-emerald-950 border-emerald-300",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform ${item.iconBg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
