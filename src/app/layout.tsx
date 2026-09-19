import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PopUpContactModal } from "@/components/modals/PopUpContactModal";

const artificFont = localFont({
  src: [
    { path: "../../public/fonts/artific-font-family/artifictrial-thin.otf", weight: "100", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-semibold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-superbold.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-artific",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soul Power Energies | Solar & EV Infrastructure Kozhikode & Wayanad",
  description:
    "Rooftop solar, commercial power plants, and EV charging station installations across Kozhikode and Wayanad. Authorized partner of Virgin Power.",
  icons: {
    icon: "/logo/mobile logo.png",
    shortcut: "/logo/mobile logo.png",
    apple: "/logo/mobile logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${artificFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#F8F9FC] text-[#0F172A] selection:bg-[#D97706] selection:text-white font-sans"
        suppressHydrationWarning
      >
        {children}
        <PopUpContactModal />
      </body>
    </html>
  );
}

