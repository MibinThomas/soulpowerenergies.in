import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { PopUpContactModal } from "@/components/modals/PopUpContactModal";

const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Soul Power Energies | Solar & EV Infrastructure Kozhikode & Wayanad",
  description:
    "Rooftop solar, commercial power plants, and EV charging station installations across Kozhikode and Wayanad. Authorized partner of Virgin Power.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#000000] text-[#F5EFE6] selection:bg-[#E5BA73] selection:text-[#000000] font-sans"
        suppressHydrationWarning
      >
        {children}
        <PopUpContactModal />
      </body>
    </html>
  );
}

