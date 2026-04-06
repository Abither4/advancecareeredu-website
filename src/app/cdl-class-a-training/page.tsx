import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL Class A Training | Get Your CDL in 3 Weeks",
  description:
    "Earn your CDL Class A license in just 3 weeks at ACE in Mansfield, TX. $5,095 all-inclusive. 97% pass rate, job placement included. New classes every Monday. Call 817-864-8086.",
  alternates: {
    canonical: "https://advancecareeredu.com/cdl-class-a-training",
  },
};

const program = PROGRAMS[0];

export default function CDLClassAPage() {
  return (
    <LandingPage
      heroTitle="CDL Class A Training in"
      heroHighlight="Mansfield, TX"
      heroSubtitle="Get your CDL Class A license in just 3 weeks with hands-on training from experienced instructors. 97% first-time pass rate. Job placement with top carriers paying $55K-$75K."
      programName={program.name}
      price={program.price}
      duration={program.duration}
      schedule="Mon-Fri"
      features={program.features}
    />
  );
}
