import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL Class A Evening Program | Train While You Work",
  description:
    "Evening CDL Class A training at ACE Mansfield, TX. Train 5-10 PM while keeping your day job. $5,495 with financing available. 97% pass rate. Call 817-864-8086.",
  alternates: {
    canonical: "https://advancecareeredu.com/cdl-class-a-evening",
  },
};

const program = PROGRAMS[1];

export default function CDLClassAEveningPage() {
  return (
    <LandingPage
      heroTitle="Evening CDL Training —"
      heroHighlight="Keep Your Day Job"
      heroSubtitle="Get your CDL Class A in 3 weeks with our evening program (5-10 PM). Perfect for working professionals ready for a career change. Financing available."
      programName={program.name}
      price={program.price}
      duration={program.duration}
      schedule="Mon-Fri Evenings"
      features={program.features}
    />
  );
}
