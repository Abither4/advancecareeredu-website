import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { SITE, PROGRAMS, ADDITIONAL_SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL Training Programs & Pricing",
  description:
    "View all CDL training programs at ACE Mansfield, TX. Class A, Class B, evening programs, endorsements, and refresher courses. Financing available. Call for pricing.",
  alternates: {
    canonical: "https://advancecareeredu.com/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            CDL Training <span className="text-ace-red">Programs & Pricing</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Financing available through
            Meritize. New classes start every Monday.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-12">
            CDL License Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, i) => (
              <div
                key={program.slug}
                className={`bg-white rounded-2xl shadow-sm border ${
                  i === 0
                    ? "border-ace-red ring-2 ring-ace-red/20"
                    : "border-gray-200"
                } p-8 flex flex-col relative`}
              >
                {i === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ace-red text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-ace-black mb-2">
                  {program.name}
                </h3>
                <div className="text-sm font-bold text-ace-red uppercase tracking-wider mb-1">
                  Call for Pricing
                </div>
                <div className="flex items-center gap-4 text-sm text-ace-gray-dark mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    Every Monday
                  </span>
                </div>
                <p className="text-sm text-ace-gray-dark mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ace-gray-dark"
                    >
                      <CheckCircle className="size-4 text-ace-red shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${program.slug}`}
                  className={`block text-center font-bold py-3.5 rounded-lg transition-colors ${
                    i === 0
                      ? "bg-ace-red hover:bg-ace-red-dark text-white"
                      : "bg-ace-black hover:bg-ace-gray-dark text-white"
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-4">
            Additional Services & Endorsements
          </h2>
          <p className="text-center text-ace-gray-dark mb-12">
            Already have your CDL? We offer endorsements, refresher courses, and
            more.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ADDITIONAL_SERVICES.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between bg-ace-gray rounded-xl px-6 py-4"
              >
                <span className="font-medium text-ace-black">
                  {service.name}
                </span>
                <span className="text-sm text-ace-red font-semibold">
                  Call for Details
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 text-ace-red font-bold hover:underline"
            >
              <Phone className="size-4" />
              Call {SITE.phone} for pricing and availability
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ace-red">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8">
            Classes start every Monday. Financing available through Meritize.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-ace-red font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Enroll Now
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 bg-ace-black text-white font-bold px-8 py-4 rounded-lg hover:bg-ace-black/80 transition-colors text-lg"
            >
              View Financing Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
