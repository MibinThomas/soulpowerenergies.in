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

  // Auto Pop-up Timer: Triggers every 1 minute (60 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen((prev) => {
        if (!prev) return true;
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Body Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white border border-slate-200/80 p-6 sm:p-8 shadow-2xl text-[#0F172A] space-y-6 z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-[#0F172A] hover:bg-[#D97706] hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full sthira-pill bg-[#D97706]/10 text-[#D97706] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Free Solar Feasibility Check</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                Calculate Savings & Schedule Site Visit<span className="text-[#D97706]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Fill out this quick enquiry form for customized rooftop solar & EV charging specs across Kozhikode and Wayanad.
              </p>
            </div>

            {/* Success Alert */}
            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Enquiry Received!</span>
                  <p>{submitSuccess}</p>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {submitError && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anjali Nair"
                    {...register("fullName")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] ${
                      errors.fullName ? "border-amber-500" : "border-slate-200/80"
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-amber-600 font-bold">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    {...register("phone")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] ${
                      errors.phone ? "border-amber-500" : "border-slate-200/80"
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-amber-600 font-bold">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Email & Property Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    {...register("email")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] ${
                      errors.email ? "border-amber-500" : "border-slate-200/80"
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-amber-600 font-bold">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Property Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Thiruvambady, Kozhikode"
                    {...register("propertyLocation")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#0F172A] bg-slate-50 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] ${
                      errors.propertyLocation ? "border-amber-500" : "border-slate-200/80"
                    }`}
                  />
                  {errors.propertyLocation && <p className="text-[10px] text-amber-600 font-bold">{errors.propertyLocation.message}</p>}
                </div>
              </div>

              {/* Service Category */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Service Category *
                </label>
                <select
                  {...register("requiredService")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/80 bg-slate-50 text-[#0F172A] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title} className="bg-white text-[#0F172A]">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Bill, Products & Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Monthly Bill (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 4500"
                    {...register("monthlyBill")}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200/80 bg-slate-50 text-[#0F172A] placeholder:text-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Products *
                  </label>
                  <select
                    {...register("preferredProduct")}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200/80 bg-slate-50 text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  >
                    <option value="3 KWH SINGLE PHASE" className="bg-white">3 KWH SINGLE PHASE</option>
                    <option value="5 KWH 3PHASE" className="bg-white">5 KWH 3PHASE</option>
                    <option value="6 KWH 3PHASE" className="bg-white">6 KWH 3PHASE</option>
                    <option value="8 KWH 3PHASE" className="bg-white">8 KWH 3PHASE</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Brand *
                  </label>
                  <select
                    {...register("preferredBrand")}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200/80 bg-slate-50 text-[#0F172A] text-xs focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  >
                    <option value="WAREE ENERGY" className="bg-white">WAREE ENERGY</option>
                    <option value="ADANI POWER" className="bg-white">ADANI POWER</option>
                    <option value="EMMVEE SOLAR" className="bg-white">EMMVEE SOLAR</option>
                    <option value="Any / Expert Recommendation" className="bg-white">Any / Expert Rec.</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full btn-primary-gold text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D97706] stroke-[2.5]" />
                <span>Authorized Virgin Power Partner • Zero Spam Guarantee</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
