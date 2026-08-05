"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";
import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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

      if (!response.ok || !resData.success) {
        setSubmitError(resData.message || "Failed to submit enquiry. Please try again.");
      } else {
        setSubmitSuccess(resData.message);
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
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6" id="assessment">
      <div className="space-y-1 pb-4 border-b border-slate-100">
        <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
          Request a Free Site Assessment
        </h2>
        <p className="text-xs text-slate-500">
          Fill out the form below to receive a personalized solar or EV feasibility evaluation for your property.
        </p>
      </div>

      {/* Success Notification */}
      {submitSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Request Submitted Successfully!</span>
            <p className="text-xs">{submitSuccess}</p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitError && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Submission Failed</span>
            <p className="text-xs">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Hidden Honeypot Field */}
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Full Name <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Anjali Nair"
              {...register("fullName")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
            />
            {errors.fullName && <p className="text-[11px] text-red-600 font-semibold">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Phone Number <span className="text-amber-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              {...register("phone")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-600 font-semibold">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email & Customer Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Email Address <span className="text-amber-600">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. name@example.com"
              {...register("email")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-600 font-semibold">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Customer Type <span className="text-amber-600">*</span>
            </label>
            <select
              {...register("customerType")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="residential">Residential Homeowner</option>
              <option value="commercial">Commercial Business / Office</option>
              <option value="industrial">Industrial Facility / Factory</option>
            </select>
          </div>
        </div>

        {/* Required Service & Property Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Required Service <span className="text-amber-600">*</span>
            </label>
            <select
              {...register("requiredService")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} {s.isComingSoon ? "(Coming Soon)" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Property Location <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Thiruvambady, Kozhikode"
              {...register("propertyLocation")}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.propertyLocation ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
            />
            {errors.propertyLocation && <p className="text-[11px] text-red-600 font-semibold">{errors.propertyLocation.message}</p>}
          </div>
        </div>

        {/* Monthly Bill & Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Avg. Monthly Bill (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 4500"
              {...register("monthlyBill")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Preferred Contact Method <span className="text-amber-600">*</span>
            </label>
            <select
              {...register("preferredContact")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp Message</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Additional Message / Project Details
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your rooftop area, specific energy needs, or preferred site visit timing..."
            {...register("message")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="space-y-1.5 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-500 accent-amber-500"
            />
            <span className="text-xs text-slate-600 leading-normal">
              I consent to Soul Power Energies contacting me regarding this site assessment request.
            </span>
          </label>
          {errors.consent && <p className="text-[11px] text-red-600 font-semibold">{errors.consent.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full justify-center">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Site Assessment Request</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
