import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { sendContactNotification } from "@/lib/email/provider";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side Zod Validation
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your inputs.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Spam Protection Honeypot Check
    if (data.honeypot && data.honeypot.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Request received." }, // Silent rejection for bots
        { status: 200 }
      );
    }

    // Process notification
    const emailResult = await sendContactNotification(data);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, message: emailResult.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your site assessment request has been received. Our team will contact you shortly.",
      devLogged: emailResult.devLogged,
    });
  } catch (error) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
