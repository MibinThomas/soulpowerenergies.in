import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";

export const metadata: Metadata = {
  title: "Privacy Policy | Soul Power Energies",
  description: "Privacy Policy for Soul Power Energies. Learn how we handle and protect user enquiry information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              At <strong>Soul Power Energies</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), we are committed to respecting your privacy and protecting the personal data shared with us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or submit an enquiry for solar or EV charging services.
            </p>

            <h2 className="text-lg font-bold text-slate-900 font-heading pt-2">1. Information We Collect</h2>
            <p>
              When you fill out our contact or site assessment enquiry form, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Phone Number & WhatsApp contact details</li>
              <li>Email Address</li>
              <li>Property location and electricity bill details</li>
              <li>Services requested and preferred contact methods</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 font-heading pt-2">2. How We Use Your Information</h2>
            <p>We collect and process your information solely for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To evaluate rooftop solar feasibility and schedule requested on-ground site assessments</li>
              <li>To contact you via phone, WhatsApp, or email regarding your enquiry</li>
              <li>To provide customer support and service updates in Kozhikode and Wayanad</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 font-heading pt-2">3. Partnership & Data Protection</h2>
            <p>
              As an authorized partner of {siteConfig.partner.fullName}, technical site assessment data may be reviewed internally with our engineering team for component sizing and system design. We do not sell, rent, or lease your personal information to third-party marketers.
            </p>

            <h2 className="text-lg font-bold text-slate-900 font-heading pt-2">4. Data Security</h2>
            <p>
              We implement appropriate technical security measures to protect your submitted payload against unauthorized access, alteration, or disclosure.
            </p>

            <h2 className="text-lg font-bold text-slate-900 font-heading pt-2">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to update your details, please contact us at Thiruvambady, Kozhikode, Kerala.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
