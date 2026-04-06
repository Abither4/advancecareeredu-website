import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";
import { SITE, PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL Training Financing | Affordable Payment Plans",
  description:
    "Can't pay upfront? ACE offers CDL training financing through Meritize. Flexible payment plans for Class A ($5,095) and Class B ($3,195) programs. Apply today.",
  alternates: {
    canonical: "https://advancecareeredu.com/financing",
  },
};

export default function FinancingPage() {
  return (
    <>
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Affordable CDL Training{" "}
            <span className="text-ace-red">Financing</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don&apos;t let cost hold you back from a career earning $55K-$75K/year.
            We offer flexible financing through Meritize.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-black text-ace-black mb-6">
                Invest in Your Future
              </h2>
              <p className="text-ace-gray-dark mb-6 leading-relaxed">
                A CDL is one of the best investments you can make. With average
                starting salaries of $55,000-$75,000 and sign-on bonuses up to
                $15,000, most graduates recoup their training costs within the
                first few months.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Competitive interest rates through Meritize",
                  "Flexible monthly payment plans",
                  "Quick online application process",
                  "No prepayment penalties",
                  "Covers tuition for all CDL programs",
                  "Most applicants approved within 24 hours",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-ace-red shrink-0 mt-0.5" />
                    <span className="text-ace-gray-dark">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-ace-black mb-3 flex items-center gap-2">
                  <DollarSign className="size-5 text-ace-red" />
                  Return on Investment
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-ace-gray-dark">Training Cost</div>
                    <div className="font-bold text-ace-black text-lg">
                      $3,195 - $5,495
                    </div>
                  </div>
                  <div>
                    <div className="text-ace-gray-dark">Average First-Year Salary</div>
                    <div className="font-bold text-ace-red text-lg">
                      $55,000 - $75,000
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-ace-black mb-4">
                Programs Eligible for Financing
              </h3>
              {PROGRAMS.map((program) => (
                <div
                  key={program.slug}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-ace-black">{program.name}</h4>
                    <span className="text-2xl font-black text-ace-red">
                      ${program.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-ace-gray-dark mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="size-4" />
                      {program.duration}
                    </span>
                  </div>
                  <Link
                    href={`/${program.slug}`}
                    className="inline-flex items-center gap-1 text-ace-red font-semibold text-sm hover:underline"
                  >
                    View Program Details
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}

              <div className="bg-ace-black rounded-xl p-6 text-center">
                <h4 className="font-bold text-white mb-2">
                  Apply for Financing Today
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Quick online application. Most approved within 24 hours.
                </p>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="size-4" />
                  Call to Apply: {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
