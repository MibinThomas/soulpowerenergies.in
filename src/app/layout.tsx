import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";
import { siteConfig } from "@/config/site";

const PopUpContactModal = dynamic(
  () => import("@/components/modals/PopUpContactModal").then((mod) => mod.PopUpContactModal)
);

const artificFont = localFont({
  src: [
    { path: "../../public/fonts/artific-font-family/artifictrial-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-semibold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/artific-font-family/artifictrial-black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-artific",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.meta.defaultTitle,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.defaultDescription,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: "Soul Power Energies" }],
  creator: "Soul Power Energies",
  publisher: "Virgin Power and Engineering Pvt. Ltd.",
  icons: {
    icon: [
      { url: "/logo/mobile logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo/mobile logo.png",
    apple: "/logo/mobile logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.defaultDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Soul Power Energies - Solar & EV Infrastructure Kozhikode & Wayanad",
      },
      {
        url: "/og-whatsapp.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Soul Power Energies - WhatsApp Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.defaultDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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


