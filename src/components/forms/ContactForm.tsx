"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/Button";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  User,
  Phone,
  Mail,
  MapPin,
  IndianRupee,
  Sparkles,
  Building,
  Home as HomeIcon,
  Factory,
} from "lucide-react";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      customerType: "residential",
      requiredService: "Residential Rooftop Solar",
      preferredProduct: "3 KWH SINGLE PHASE",
      preferredBrand: "WAREE ENERGY",
      consent: true,
      honeypot: "",
    },
  });

  const selectedCustomerType = watch("customerType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        setSubmitError(resData.message || resData.error || "Failed to submit enquiry. Please try again.");
        return;
      }

      setSubmitSuccess(resData.message || "Thank you! Our engineering team will contact you shortly.");
      reset();
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setSubmitError("An unexpected network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-[32px] sthira-card bg-white border border-slate-200/80 text-slate-900 shadow-xl space-y-6 relative overflow-hidden">
      {/* Ambient Decorative Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Form Header */}
      <div className="space-y-2.5 border-b border-slate-100 pb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full sthira-pill bg-[#FEF3C7] text-[#D97706] text-xs font-bold border border-[#D97706]/30 shadow-sm uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Free Site Assessment</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Request a Free Solar Feasibility Audit<span className="text-[#D97706]">.</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
          Fill out your details below. Our local engineering team in Thiruvambady will analyze your rooftop feasibility and system requirements.
        </p>
      </div>

      {/* Success Alert */}
      {submitSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3 relative z-10">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Enquiry Received!</span>
            <p className="text-xs text-emerald-700">{submitSuccess}</p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {submitError && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3 relative z-10">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Submission Error</span>
            <p className="text-xs text-amber-700">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10" noValidate>
        {/* Honeypot */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Customer Type Segmented Selector */}
        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
            Customer Type <span className="text-[#D97706]">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80">
            <button
              type="button"
              onClick={() => setValue("customerType", "residential")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCustomerType === "residential"
                  ? "bg-white text-[#D97706] shadow-md border border-[#D97706]/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <HomeIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Residential</span>
            </button>
            <button
              type="button"
              onClick={() => setValue("customerType", "commercial")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCustomerType === "commercial"
                  ? "bg-white text-[#D97706] shadow-md border border-[#D97706]/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Building className="w-3.5 h-3.5 shrink-0" />
              <span>Commercial</span>
            </button>
            <button
              type="button"
              onClick={() => setValue("customerType", "industrial")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCustomerType === "industrial"
                  ? "bg-white text-[#D97706] shadow-md border border-[#D97706]/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Factory className="w-3.5 h-3.5 shrink-0" />
              <span>Industrial</span>
            </button>
          </div>
          <input type="hidden" {...register("customerType")} />
        </div>

        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Full Name <span className="text-[#D97706]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Anjali Nair"
                {...register("fullName")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                  errors.fullName ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                }`}
              />
            </div>
            {errors.fullName && <p className="text-[11px] text-amber-600 font-bold">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Phone Number <span className="text-[#D97706]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                {...register("phone")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                  errors.phone ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                }`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-amber-600 font-bold">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email & Property Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Email Address <span className="text-[#D97706]">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                placeholder="e.g. name@example.com"
                {...register("email")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                  errors.email ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                }`}
              />
            </div>
            {errors.email && <p className="text-[11px] text-amber-600 font-bold">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Property Location <span className="text-[#D97706]">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Thiruvambady, Kozhikode"
                {...register("propertyLocation")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                  errors.propertyLocation ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                }`}
              />
            </div>
            {errors.propertyLocation && <p className="text-[11px] text-amber-600 font-bold">{errors.propertyLocation.message}</p>}
          </div>
        </div>

        {/* Service Category */}
        <div className="space-y-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
            Required Service <span className="text-[#D97706]">*</span>
          </label>
          <select
            {...register("requiredService")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all cursor-pointer"
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.title} className="bg-white text-slate-900">
                {s.title} {s.isComingSoon ? "(Coming Soon)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Monthly Bill, Products & Brand */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Avg. Monthly Bill (₹)
            </label>
            <div className="relative">
              <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="number"
                placeholder="e.g. 4500"
                {...register("monthlyBill")}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 placeholder:text-slate-400 font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Product Spec <span className="text-[#D97706]">*</span>
            </label>
            <select
              {...register("preferredProduct")}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all cursor-pointer"
            >
              <option value="3 KWH SINGLE PHASE" className="bg-white text-slate-900">3 KWH SINGLE PHASE</option>
              <option value="5 KWH 3PHASE" className="bg-white text-slate-900">5 KWH 3PHASE</option>
              <option value="6 KWH 3PHASE" className="bg-white text-slate-900">6 KWH 3PHASE</option>
              <option value="8 KWH 3PHASE" className="bg-white text-slate-900">8 KWH 3PHASE</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
              Preferred Brand <span className="text-[#D97706]">*</span>
            </label>
            <select
              {...register("preferredBrand")}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all cursor-pointer"
            >
              <option value="WAREE ENERGY" className="bg-white text-slate-900">WAREE ENERGY</option>
              <option value="ADANI POWER" className="bg-white text-slate-900">ADANI POWER</option>
              <option value="EMMVEE SOLAR" className="bg-white text-slate-900">EMMVEE SOLAR</option>
              <option value="Any / Expert Recommendation" className="bg-white text-slate-900">Expert Recommendation</option>
            </select>
          </div>
        </div>

        {/* Additional Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
            Additional Message / Project Details
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your rooftop area, specific energy needs, or preferred site visit timing..."
            {...register("message")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 placeholder:text-slate-400 font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="space-y-1.5 pt-1">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-0.5 w-4 h-4 text-[#D97706] rounded border-slate-300 accent-[#D97706] focus:ring-[#D97706]"
            />
            <span className="text-xs text-slate-600 leading-relaxed font-medium">
              I consent to Soul Power Energies contacting me regarding this solar site assessment request.
            </span>
          </label>
          {errors.consent && <p className="text-[11px] text-amber-600 font-bold">{errors.consent.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={isSubmitting}
            className="w-full justify-center font-extrabold rounded-full shadow-lg hover:shadow-xl py-4 bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white text-sm uppercase tracking-wider transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>Submit Site Assessment Request</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Trust Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium pt-2">
          <ShieldCheck className="w-4 h-4 text-[#D97706] stroke-[2.5]" />
          <span>Authorized Partner of Virgin Power &amp; Engineering • Zero Spam Guarantee</span>
        </div>
      </form>
    </div>
  );
}
