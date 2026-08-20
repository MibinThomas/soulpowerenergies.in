"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { servicesData } from "@/config/services";
import { X, Send, Sparkles, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";

export function PopUpContactModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      customerType: "residential",
      requiredService: "Residential Rooftop Solar",
      propertyLocation: "",
      monthlyBill: "",
      preferredProduct: "3 KWH SINGLE PHASE",
      preferredBrand: "WAREE ENERGY",
      message: "",
      consent: true,
      honeypot: "",
    },
  });

  // Auto Pop-up Timer: Triggers every 1 minute if not already submitted/closed
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSubmitted = localStorage.getItem("soulpower_form_submitted");
      const isClosed = sessionStorage.getItem("soulpower_popup_closed");
      if (isSubmitted === "true" || isClosed === "true") {
        return;
      }
    }

    const timer = setInterval(() => {
      if (typeof window !== "undefined") {
        const isSubmitted = localStorage.getItem("soulpower_form_submitted");
        const isClosed = sessionStorage.getItem("soulpower_popup_closed");
        if (isSubmitted === "true" || isClosed === "true") {
          setIsOpen(false);
          return;
        }
      }
      setIsOpen((prev) => (!prev ? true : prev));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("soulpower_popup_closed", "true");
    }
    setIsOpen(false);
  };

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

      if (typeof window !== "undefined") {
        localStorage.getItem("soulpower_form_submitted");
        localStorage.setItem("soulpower_form_submitted", "true");
      }

      setSubmitSuccess(resData.message || "Thank you! Our engineering team will contact you shortly.");
      reset();
      setIsOpen(false);
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setSubmitError("An unexpected network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Body Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0C0E12] border border-white/15 p-6 sm:p-8 shadow-2xl text-[#F5EFE6] space-y-6 z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#131722] border border-white/15 text-[#F5EFE6] hover:bg-[#E5BA73] hover:text-[#000000] transition-all cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nestive-pill bg-[#131722] text-[#E5BA73] text-xs font-bold border border-white/10">
                <Sparkles className="w-3.5 h-3.5 fill-[#E5BA73]" />
                <span>Free Solar Feasibility Check</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] leading-tight">
                Calculate Savings & Schedule Site Visit
              </h2>
              <p className="text-xs sm:text-sm text-[#EADBC8] leading-relaxed font-medium">
                Fill out this quick enquiry form for customized rooftop solar & EV charging specs across Kozhikode and Wayanad.
              </p>
            </div>

            {/* Success Alert */}
            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Enquiry Received!</span>
                  <p>{submitSuccess}</p>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {submitError && (
              <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Submission Error</span>
                  <p>{submitError}</p>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              {/* Honeypot */}
              <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anjali Nair"
                    {...register("fullName")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                      errors.fullName ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-400 font-bold">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    {...register("phone")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-400 font-bold">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Email & Property Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    {...register("email")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-400 font-bold">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Property Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Thiruvambady, Kozhikode"
                    {...register("propertyLocation")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                      errors.propertyLocation ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.propertyLocation && <p className="text-[10px] text-red-400 font-bold">{errors.propertyLocation.message}</p>}
                </div>
              </div>

              {/* Service Category */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                  Service Category *
                </label>
                <select
                  {...register("requiredService")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#0C0E12] text-[#F5EFE6]">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Bill, Products & Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Monthly Bill (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 4500"
                    {...register("monthlyBill")}
                    className="w-full px-3 py-2 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] placeholder:text-[#9CA3AF] text-xs focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Products *
                  </label>
                  <select
                    {...register("preferredProduct")}
                    className="w-full px-3 py-2 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] text-xs focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
                  >
                    <option value="3 KWH SINGLE PHASE" className="bg-[#0C0E12]">3 KWH SINGLE PHASE</option>
                    <option value="5 KWH 3PHASE" className="bg-[#0C0E12]">5 KWH 3PHASE</option>
                    <option value="6 KWH 3PHASE" className="bg-[#0C0E12]">6 KWH 3PHASE</option>
                    <option value="8 KWH 3PHASE" className="bg-[#0C0E12]">8 KWH 3PHASE</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Brand *
                  </label>
                  <select
                    {...register("preferredBrand")}
                    className="w-full px-3 py-2 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] text-xs focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
                  >
                    <option value="WAREE ENERGY" className="bg-[#0C0E12]">WAREE ENERGY</option>
                    <option value="ADANI POWER" className="bg-[#0C0E12]">ADANI POWER</option>
                    <option value="EMMVEE SOLAR" className="bg-[#0C0E12]">EMMVEE SOLAR</option>
                    <option value="Any / Expert Recommendation" className="bg-[#0C0E12]">Any / Expert Rec.</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white font-black text-sm sm:text-base shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Solar Proposal & Audit</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#9CA3AF] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5BA73]" />
                <span>Authorized Virgin Power Partner • Zero Spam Guarantee</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
