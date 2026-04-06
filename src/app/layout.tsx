import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SchemaMarkup } from "@/components/layout/schema-markup";
import { Analytics } from "@/components/analytics";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ACE CDL School | Truck Driving School in Mansfield, TX",
    template: "%s | ACE CDL School Mansfield TX",
  },
  description:
    "Get your CDL in 2-3 weeks at Advance Career Education in Mansfield, TX. 97% pass rate, 856+ five-star reviews. Class A & B training starting every Monday. Call 817-864-8086.",
  keywords: [
    "CDL school",
    "CDL training",
    "truck driving school",
    "CDL Class A",
    "CDL Class B",
    "Mansfield TX",
    "DFW CDL school",
    "Texas CDL training",
    "commercial drivers license",
    "ELDT training",
    "CDL school near me",
    "truck driver training Texas",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "ACE CDL School | #1 Rated Truck Driving School in DFW",
    description:
      "Get your CDL in 2-3 weeks. 97% pass rate. 856+ five-star reviews. Classes start every Monday. Financing available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE CDL School | Truck Driving School Mansfield TX",
    description:
      "Get your CDL in 2-3 weeks. 97% pass rate. Classes start every Monday.",
  },
  verification: {
    google: SITE.google.verificationId,
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
