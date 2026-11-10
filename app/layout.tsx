import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { SiteShell } from "@/app/components/site-shell";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibukun-electric.example.com"),
  title: {
    default: "Ibukun Electric | Solar, Inverter & Battery Solutions",
    template: "%s | Ibukun Electric",
  },
  description:
    "Ibukun Electric designs and installs dependable solar, inverter and battery systems for homes, businesses and growing communities across Nigeria.",
  keywords: ["solar Nigeria", "inverter installation", "battery backup", "Ibukun Electric"],
  openGraph: {
    title: "Ibukun Electric",
    description: "Solar, inverter and battery solutions for homes and businesses in Nigeria.",
    url: "https://ibukun-electric.example.com",
    siteName: "Ibukun Electric",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibukun Electric",
    description: "Solar, inverter and battery solutions for homes and businesses in Nigeria.",
  },
};

export const viewport = {
  themeColor: "#0B4F4A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F7F8F8] text-[#0F1F1E]">
        <Suspense fallback={null}>
          <SiteShell>{children}</SiteShell>
        </Suspense>
      </body>
    </html>
  );
}
