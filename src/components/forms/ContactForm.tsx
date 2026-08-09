"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";

export function ContactForm() {
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

      if (!response.ok) {
        setSubmitError(resData.error || "Failed to submit enquiry. Please try again.");
        return;
      }

      setSubmitSuccess(resData.message || "Thank you! Our engineering team will contact you shortly.");
      reset();
    } catch (err) {
      console.error(err);
      setSubmitError("An unexpected network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl nestive-card bg-[#0C0E12] border border-white/10 text-[#F5EFE6] shadow-2xl space-y-6">
      <div className="space-y-2 border-b border-white/10 pb-6">
        <h3 className="text-2xl font-bold font-heading text-[#F5EFE6]">Request a Free Site Assessment</h3>
        <p className="text-xs sm:text-sm text-[#EADBC8] leading-relaxed">
          Fill out your contact & property details below. Our local engineering team in Thiruvambady will evaluate your solar potential.
        </p>
      </div>

      {/* Success Alert */}
      {submitSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Enquiry Received!</span>
            <p>{submitSuccess}</p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {submitError && (
        <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Submission Error</span>
            <p>{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Honeypot */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Full Name <span className="text-[#E5BA73]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Anjali Nair"
              {...register("fullName")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                errors.fullName ? "border-red-400 bg-red-950/20" : "border-white/10"
              }`}
            />
            {errors.fullName && <p className="text-[11px] text-red-400 font-bold">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Phone Number <span className="text-[#E5BA73]">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              {...register("phone")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                errors.phone ? "border-red-400 bg-red-950/20" : "border-white/10"
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-400 font-bold">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email & Customer Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Email Address <span className="text-[#E5BA73]">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. name@example.com"
              {...register("email")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                errors.email ? "border-red-400 bg-red-950/20" : "border-white/10"
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-400 font-bold">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Customer Type <span className="text-[#E5BA73]">*</span>
            </label>
            <select
              {...register("customerType")}
              className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
            >
              <option value="residential" className="bg-[#0C0E12]">Residential Homeowner</option>
              <option value="commercial" className="bg-[#0C0E12]">Commercial Business / Office</option>
              <option value="industrial" className="bg-[#0C0E12]">Industrial Facility / Factory</option>
            </select>
          </div>
        </div>

        {/* Required Service & Property Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Required Service <span className="text-[#E5BA73]">*</span>
            </label>
            <select
              {...register("requiredService")}
              className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#0C0E12]">
                  {s.title} {s.isComingSoon ? "(Coming Soon)" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Property Location <span className="text-[#E5BA73]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Thiruvambady, Kozhikode"
              {...register("propertyLocation")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#F5EFE6] bg-[#131722] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E5BA73] ${
                errors.propertyLocation ? "border-red-400 bg-red-950/20" : "border-white/10"
              }`}
            />
            {errors.propertyLocation && <p className="text-[11px] text-red-400 font-bold">{errors.propertyLocation.message}</p>}
          </div>
        </div>

        {/* Monthly Bill & Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Avg. Monthly Bill (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 4500"
              {...register("monthlyBill")}
              className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
              Preferred Contact Method <span className="text-[#E5BA73]">*</span>
            </label>
            <select
              {...register("preferredContact")}
              className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73]"
            >
              <option value="phone" className="bg-[#0C0E12]">Phone Call</option>
              <option value="whatsapp" className="bg-[#0C0E12]">WhatsApp Message</option>
              <option value="email" className="bg-[#0C0E12]">Email</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#E5BA73]">
            Additional Message / Project Details
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your rooftop area, specific energy needs, or preferred site visit timing..."
            {...register("message")}
            className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#131722] text-[#F5EFE6] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#E5BA73] resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="space-y-1.5 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 w-4 h-4 text-[#D97706] rounded border-white/15 accent-[#D97706]"
            />
            <span className="text-xs text-[#EADBC8] leading-normal font-medium">
              I consent to Soul Power Energies contacting me regarding this site assessment request.
            </span>
          </label>
          {errors.consent && <p className="text-[11px] text-red-400 font-bold">{errors.consent.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full justify-center font-black rounded-xl shadow-xl py-3.5 bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706] text-white">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 text-white" />
                <span>Submit Site Assessment Request</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
