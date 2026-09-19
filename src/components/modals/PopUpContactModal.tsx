"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { servicesData } from "@/config/services";
import {
  X,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  User,
  Phone,
  Mail,
  MapPin,
  IndianRupee,
  Home as HomeIcon,
  Building,
  Factory,
} from "lucide-react";

export function PopUpContactModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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

  const selectedCustomerType = watch("customerType");

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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Body Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-[32px] sthira-card bg-white border border-slate-200/80 p-6 sm:p-8 shadow-2xl text-slate-900 space-y-6 z-10"
          >
            {/* Ambient Decorative Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#D97706] hover:text-white flex items-center justify-center transition-all cursor-pointer z-20 shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full sthira-pill bg-[#FEF3C7] text-[#D97706] text-xs font-bold border border-[#D97706]/30 shadow-sm uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Free Solar Feasibility Audit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Calculate Savings &amp; Schedule Visit<span className="text-[#D97706]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Fill out this quick enquiry form for customized rooftop solar &amp; EV charging specs across Kozhikode and Wayanad.
              </p>
            </div>

            {/* Success Alert */}
            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 relative z-10">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Enquiry Received!</span>
                  <p className="text-xs text-emerald-700">{submitSuccess}</p>
                </div>
              </div>
            )}

            {/* Error Alert */}
            {submitError && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 relative z-10">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold">Submission Error</span>
                  <p className="text-xs text-amber-700">{submitError}</p>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10" noValidate>
              {/* Honeypot */}
              <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Customer Type Segmented Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                  Customer Type <span className="text-[#D97706]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => setValue("customerType", "residential")}
                    className={`flex items-center justify-center gap-1 py-2 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      selectedCustomerType === "residential"
                        ? "bg-white text-[#D97706] shadow-sm border border-[#D97706]/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <HomeIcon className="w-3 h-3 shrink-0" />
                    <span>Residential</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue("customerType", "commercial")}
                    className={`flex items-center justify-center gap-1 py-2 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      selectedCustomerType === "commercial"
                        ? "bg-white text-[#D97706] shadow-sm border border-[#D97706]/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <Building className="w-3 h-3 shrink-0" />
                    <span>Commercial</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue("customerType", "industrial")}
                    className={`flex items-center justify-center gap-1 py-2 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      selectedCustomerType === "industrial"
                        ? "bg-white text-[#D97706] shadow-sm border border-[#D97706]/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <Factory className="w-3 h-3 shrink-0" />
                    <span>Industrial</span>
                  </button>
                </div>
                <input type="hidden" {...register("customerType")} />
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Full Name <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Anjali Nair"
                      {...register("fullName")}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                        errors.fullName ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-amber-600 font-bold">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Phone Number <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      {...register("phone")}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                        errors.phone ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-amber-600 font-bold">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Email & Property Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Email Address <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      {...register("email")}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                        errors.email ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-amber-600 font-bold">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Property Location <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Thiruvambady, Kozhikode"
                      {...register("propertyLocation")}
                      className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all ${
                        errors.propertyLocation ? "border-amber-500 bg-amber-50/50" : "border-slate-200/80"
                      }`}
                    />
                  </div>
                  {errors.propertyLocation && <p className="text-[10px] text-amber-600 font-bold">{errors.propertyLocation.message}</p>}
                </div>
              </div>

              {/* Service Category */}
              <div className="space-y-1">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                  Required Service <span className="text-[#D97706]">*</span>
                </label>
                <select
                  {...register("requiredService")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all cursor-pointer"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title} className="bg-white text-slate-900">
                      {s.title} {s.isComingSoon ? "(Coming Soon)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Bill, Products & Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Monthly Bill (₹)
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="number"
                      placeholder="e.g. 4500"
                      {...register("monthlyBill")}
                      className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 placeholder:text-slate-400 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Products <span className="text-[#D97706]">*</span>
                  </label>
                  <select
                    {...register("preferredProduct")}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="3 KWH SINGLE PHASE" className="bg-white text-slate-900">3 KWH SINGLE PHASE</option>
                    <option value="5 KWH 3PHASE" className="bg-white text-slate-900">5 KWH 3PHASE</option>
                    <option value="6 KWH 3PHASE" className="bg-white text-slate-900">6 KWH 3PHASE</option>
                    <option value="8 KWH 3PHASE" className="bg-white text-slate-900">8 KWH 3PHASE</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                    Brand <span className="text-[#D97706]">*</span>
                  </label>
                  <select
                    {...register("preferredBrand")}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-900 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="WAREE ENERGY" className="bg-white text-slate-900">WAREE ENERGY</option>
                    <option value="ADANI POWER" className="bg-white text-slate-900">ADANI POWER</option>
                    <option value="EMMVEE SOLAR" className="bg-white text-slate-900">EMMVEE SOLAR</option>
                    <option value="Any / Expert Recommendation" className="bg-white text-slate-900">Expert Rec.</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Solar Proposal &amp; Audit</span>
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
