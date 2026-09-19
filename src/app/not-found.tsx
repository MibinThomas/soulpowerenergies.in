import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-[#0F172A] font-sans antialiased">
      <Header />
      <main id="main-content" className="flex-1 sthira-hero-bg py-20 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="p-8 sm:p-10 rounded-[32px] sthira-card bg-white border border-slate-200/80 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sthira-pill bg-white text-[#D97706] text-xs font-bold border border-[#D97706]/30 shadow-sm uppercase tracking-wider mx-auto">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>404 Error</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Page Not Found<span className="text-[#D97706]">.</span>
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              The renewable solution page you are looking for might have been moved or doesn&apos;t exist. Return home or browse our solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="primary" size="md" className="w-full font-bold rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md hover:shadow-lg transition-all">
                  <Home className="w-4 h-4 mr-2" />
                  <span>Return Home</span>
                </Button>
              </Link>
              <Link href="/solutions" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full font-bold rounded-full border-slate-300 text-slate-800 hover:bg-slate-100 transition-all">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>View Solutions</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
