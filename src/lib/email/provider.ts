import { ContactFormData } from "@/lib/validation/contact";

export interface EmailSendResult {
  success: boolean;
  message: string;
  devLogged?: boolean;
}

export async function sendContactNotification(data: ContactFormData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "info@soulpowerenergies.in";
  // Default to onboarding@resend.dev unless custom domain is verified and RESEND_FROM_EMAIL is set
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Soul Power Energies Leads <onboarding@resend.dev>";

  // Always log validated lead details to server console as fail-safe lead backup
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

  if (!apiKey) {
    return {
      success: true,
      message: "Your site assessment request has been received. Our team will contact you shortly.",
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
        from: fromEmail,
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
      console.error("[Resend API Notice]:", errText);
      return {
        success: true,
        message: "Your site assessment request has been received. Our team will contact you shortly.",
        devLogged: true,
      };
    }

    return {
      success: true,
      message: "Your site assessment request has been delivered successfully. Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("[Email send exception]:", error);
    return {
      success: true,
      message: "Your site assessment request has been received. Our team will contact you shortly.",
      devLogged: true,
    };
  }
}
