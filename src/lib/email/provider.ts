import { ContactFormData } from "@/lib/validation/contact";

export interface EmailSendResult {
  success: boolean;
  message: string;
  devLogged?: boolean;
}

export async function sendContactNotification(data: ContactFormData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "leads@soulpowerenergies.in";

  // Development / Placeholder fallback when Resend API key is not yet added in .env
  if (!apiKey) {
    console.log("--------------------------------------------------");
    console.log(" [SOUL POWER ENERGIES] VALIDATED LEAD RECEIVED ");
    console.log(" Timestamp:", new Date().toISOString());
    console.log(" Name:", data.fullName);
    console.log(" Phone:", data.phone);
    console.log(" Email:", data.email);
    console.log(" Customer Type:", data.customerType);
    console.log(" Service:", data.requiredService);
    console.log(" Location:", data.propertyLocation);
    console.log(" Monthly Bill:", data.monthlyBill || "Not provided");
    console.log(" Preferred Product:", data.preferredProduct || "Not selected");
    console.log(" Preferred Brand:", data.preferredBrand || "Not selected");
    console.log(" Message:", data.message || "None");
    console.log("--------------------------------------------------");

    return {
      success: true,
      message: "Lead successfully recorded (logged on server). Email provider setup required in .env for live inbox delivery.",
      devLogged: true,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Soul Power Energies Leads <noreply@soulpowerenergies.in>",
        to: [notificationEmail],
        subject: `New Lead: ${data.fullName} - ${data.requiredService} (${data.propertyLocation})`,
        html: `
          <h2>New Site Assessment Request Received</h2>
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Customer Type:</strong> ${data.customerType}</p>
          <p><strong>Required Service:</strong> ${data.requiredService}</p>
          <p><strong>Property Location:</strong> ${data.propertyLocation}</p>
          <p><strong>Monthly Electricity Bill:</strong> ₹${data.monthlyBill || "N/A"}</p>
          <p><strong>Selected Product:</strong> ${data.preferredProduct || "N/A"}</p>
          <p><strong>Selected Brand:</strong> ${data.preferredBrand || "N/A"}</p>
          <p><strong>Message:</strong> ${data.message || "N/A"}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API Error:", errText);
      return {
        success: false,
        message: "Failed to deliver email through service provider.",
      };
    }

    return {
      success: true,
      message: "Your site assessment enquiry has been delivered successfully.",
    };
  } catch (error) {
    console.error("Email send exception:", error);
    return {
      success: false,
      message: "An unexpected error occurred while sending your request.",
    };
  }
}
