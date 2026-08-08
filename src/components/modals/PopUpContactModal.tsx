"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { X, Send, Sparkles, CheckCircle2, AlertCircle, Loader2, PhoneCall, ShieldCheck } from "lucide-react";

export function PopUpContactModal() {
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
      customerType: "residential",
      requiredService: "Residential Rooftop Solar",
      preferredContact: "phone",
      consent: true,
      honeypot: "",
    },
  });

  // Auto Pop-up Timer: Triggers every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen((prev) => {
        // If not already open, open it
        if (!prev) return true;
        return prev;
      });
    }, 20000);

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
        setSubmitError(resData.message || "Failed to submit enquiry. Please try again.");
      } else {
        setSubmitSuccess(resData.message || "Thank you! Our engineering team will contact you shortly.");
        reset();
      }
    } catch (err) {
      console.error(err);
      setSubmitError("An unexpected network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Manual Trigger Badge in Bottom Corner */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-40 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#E5BA73] via-[#F0C987] to-[#EADBC8] text-[#0C0E12] font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(229,186,115,0.5)] flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"
        >
          <Sparkles className="w-4 h-4 fill-current animate-pulse" />
          <span>Request Free Solar Assessment</span>
        </motion.button>
      )}

      {/* Pop-Up Modal Container */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#0C0E12]/85 backdrop-blur-xl"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#131722]/95 backdrop-blur-2xl border border-[#E5BA73]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(229,186,115,0.3)] text-[#F5EFE6] space-y-6 z-10"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#0C0E12]/60 border border-[#EADBC8]/20 text-[#EADBC8] hover:text-[#F5EFE6] hover:bg-[#EADBC8]/20 transition-all cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full nestive-pill text-[#E5BA73] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 fill-[#E5BA73]" />
                  <span>Free Solar Feasibility Check</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-normal font-serif italic text-[#F5EFE6] leading-tight">
                  Calculate Savings & Schedule Site Visit
                </h2>
                <p className="text-xs sm:text-sm text-[#EADBC8]/80 leading-relaxed">
                  Fill out this quick enquiry form for customized rooftop solar & EV charging specs across Kozhikode and Wayanad.
                </p>
              </div>

              {/* Success Alert */}
              {submitSuccess && (
                <div className="p-4 rounded-2xl bg-[#E5BA73]/15 border border-[#E5BA73]/40 text-[#E5BA73] text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E5BA73] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold">Enquiry Received!</span>
                    <p>{submitSuccess}</p>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {submitError && (
                <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-start gap-3">
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
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#0C0E12]/80 placeholder:text-[#EADBC8]/40 focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                        errors.fullName ? "border-red-400" : "border-[#EADBC8]/20"
                      }`}
                    />
                    {errors.fullName && <p className="text-[10px] text-[#E5BA73] font-bold">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      {...register("phone")}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#0C0E12]/80 placeholder:text-[#EADBC8]/40 focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                        errors.phone ? "border-red-400" : "border-[#EADBC8]/20"
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-[#E5BA73] font-bold">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#0C0E12]/80 placeholder:text-[#EADBC8]/40 focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                        errors.email ? "border-red-400" : "border-[#EADBC8]/20"
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-[#E5BA73] font-bold">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                      Location *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kozhikode / Wayanad"
                      {...register("propertyLocation")}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#F5EFE6] bg-[#0C0E12]/80 placeholder:text-[#EADBC8]/40 focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                        errors.propertyLocation ? "border-red-400" : "border-[#EADBC8]/20"
                      }`}
                    />
                    {errors.propertyLocation && <p className="text-[10px] text-[#E5BA73] font-bold">{errors.propertyLocation.message}</p>}
                  </div>
                </div>

                {/* Required Service & Customer Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                      Required Service *
                    </label>
                    <select
                      {...register("requiredService")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBC8]/20 bg-[#0C0E12] text-[#F5EFE6] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                      Preferred Contact *
                    </label>
                    <select
                      {...register("preferredContact")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBC8]/20 bg-[#0C0E12] text-[#F5EFE6] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
                    >
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp Message</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5BA73]">
                    Monthly Bill / Project Note
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us your monthly power bill or preferred site visit timing..."
                    {...register("message")}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#EADBC8]/20 bg-[#0C0E12]/80 text-[#F5EFE6] placeholder:text-[#EADBC8]/40 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73] resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#E5BA73] via-[#F0C987] to-[#EADBC8] text-[#0C0E12] font-black text-sm sm:text-base shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Free Assessment Request</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Footer */}
                <div className="text-[11px] text-[#EADBC8]/70 flex items-center justify-center gap-2 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5BA73]" />
                  <span>Virgin Power Authorized EPC Partner • Thiruvambady HQ</span>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
