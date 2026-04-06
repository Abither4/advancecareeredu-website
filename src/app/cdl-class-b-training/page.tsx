import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL Class B Training | 2 Weeks - $3,195",
  description:
    "Get your CDL Class B license in 2 weeks at ACE Mansfield, TX. Only $3,195. Bus driving, delivery, straight truck. 97% pass rate. Call 817-864-8086.",
  alternates: {
    canonical: "https://advancecareeredu.com/cdl-class-b-training",
  },
};

const program = PROGRAMS[2];

export default function CDLClassBPage() {
  return (
    <LandingPage
      heroTitle="CDL Class B in"
      heroHighlight="Just 2 Weeks"
      heroSubtitle="Start a career in bus driving, delivery, or straight truck operations. Only $3,195 with financing available. New classes start every Monday."
      programName={program.name}
      price={program.price}
      duration={program.duration}
      schedule="Mon-Fri"
      features={program.features}
    />
  );
}
