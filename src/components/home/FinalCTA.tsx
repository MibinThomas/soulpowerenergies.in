import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Local Service • Virgin Power Engineering Support</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight max-w-3xl mx-auto">
          Ready to Start Your Solar Journey?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Contact Soul Power Energies today to schedule a comprehensive on-ground site assessment for your home or commercial business in Kozhikode or Wayanad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/contact#assessment">
            <Button variant="primary" size="lg" className="w-full sm:w-auto text-base">
              <span>Request a Site Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800 hover:text-white">
              <span>Contact Our Team</span>
            </Button>
          </Link>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Thiruvambady, Kozhikode, Kerala</span>
        </div>
      </div>
    </section>
  );
}
