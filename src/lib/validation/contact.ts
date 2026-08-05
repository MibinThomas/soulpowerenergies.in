import { z } from "zod";

// Phone validation accepting Indian format (10 digits / +91) as well as valid international numbers
const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d-.\s]{7,15}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(100, { message: "Full name is too long." }),

  phone: z
    .string()
    .min(7, { message: "Please enter a valid phone number." })
    .regex(phoneRegex, { message: "Please enter a valid phone number (Indian or International format)." }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),

  customerType: z.enum(["residential", "commercial", "industrial"], {
    message: "Please select a customer type.",
  }),

  requiredService: z.string().min(1, { message: "Please select your required service." }),

  propertyLocation: z
    .string()
    .min(2, { message: "Please enter your property location (e.g. Kozhikode, Wayanad, Thiruvambady)." }),

  monthlyBill: z
    .string()
    .optional()
    .or(z.literal("")),

  preferredContact: z.enum(["phone", "whatsapp", "email"], {
    message: "Please select a preferred contact method.",
  }),

  message: z
    .string()
    .max(1000, { message: "Message cannot exceed 1000 characters." })
    .optional()
    .or(z.literal("")),

  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to be contacted regarding your site assessment request.",
  }),

  // Honeypot field for spam prevention
  honeypot: z.string().max(0, { message: "Spam detected." }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
