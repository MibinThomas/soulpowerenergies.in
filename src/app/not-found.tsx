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
      <main id="main-content" className="flex-1 bg-[#0C0E12] text-[#F5EFE6] py-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <Badge variant="navy" className="text-[#E5BA73] nestive-pill">
            404 Error
          </Badge>

          <h1 className="text-4xl font-extrabold font-heading text-[#F5EFE6]">
            Page Not Found
          </h1>

          <p className="text-sm text-[#EADBC8]/80 leading-relaxed">
            The renewable solution page you are looking for might have been moved or doesn&apos;t exist. Return home or browse our solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/">
              <Button variant="primary" size="md" className="font-bold rounded-xl">
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" size="md" className="font-bold rounded-xl">
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
