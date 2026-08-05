import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-slate-900 text-white py-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <Badge variant="navy" className="text-amber-400 border-amber-400/40">
            404 Error
          </Badge>

          <h1 className="text-4xl font-extrabold font-heading text-white">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed">
            The renewable solution page you are looking for might have been moved or doesn&apos;t exist. Return home or browse our solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/">
              <Button variant="primary" size="md">
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" size="md" className="text-white border-slate-700 hover:bg-slate-800">
                <ArrowLeft className="w-4 h-4" />
                <span>View Solutions</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
