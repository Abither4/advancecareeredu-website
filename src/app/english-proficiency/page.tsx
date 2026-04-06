import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Globe } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "English Proficiency Assessment",
  description:
    "Take the English proficiency assessment for CDL training at ACE in Mansfield, TX. Required for non-native English speakers before enrollment.",
  alternates: {
    canonical: "https://advancecareeredu.com/english-proficiency",
  },
};

export default function EnglishProficiencyPage() {
  return (
    <>
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Globe className="size-12 text-ace-red mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            English Proficiency{" "}
            <span className="text-ace-red">Assessment</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Federal regulations require CDL holders to demonstrate English
            proficiency. Complete this quick assessment as part of your
            enrollment process.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ace-gray">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-ace-black mb-4">
              Start Your Assessment
            </h2>
            <p className="text-ace-gray-dark mb-8 leading-relaxed">
              This assessment evaluates your ability to read and understand
              English as required by the Federal Motor Carrier Safety
              Administration (FMCSA). It typically takes 15-20 minutes to
              complete.
            </p>
            <a
              href="https://advancecareeredu.com/english-prof"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Begin Assessment
              <ArrowRight className="size-5" />
            </a>
            <p className="text-sm text-ace-gray-dark mt-4">
              Questions? Call us at{" "}
              <a href={SITE.phoneTel} className="text-ace-red font-semibold">
                {SITE.phone}
              </a>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="text-ace-red font-semibold hover:underline inline-flex items-center gap-1"
            >
              Ready to enroll? Contact us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
