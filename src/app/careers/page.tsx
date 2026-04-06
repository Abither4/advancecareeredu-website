import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Truck,
  DollarSign,
  Award,
  TrendingUp,
} from "lucide-react";
import { SITE, HIRING_COMPANIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL Job Placement | Start Earning $55K-$75K",
  description:
    "ACE CDL School helps graduates get hired with top trucking companies. Werner, Swift, Schneider, J.B. Hunt and more. $55K-$75K starting pay + sign-on bonuses.",
  alternates: {
    canonical: "https://advancecareeredu.com/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            CDL Job <span className="text-ace-red">Placement</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our graduates don&apos;t just get their CDL — they launch careers.
            Most receive multiple job offers before completing training.
          </p>
        </div>
      </section>

      {/* Salary info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                value: "$55K - $75K",
                label: "Average Starting Salary",
              },
              {
                icon: Award,
                value: "Up to $15K",
                label: "Sign-On Bonuses",
              },
              {
                icon: TrendingUp,
                value: "$80K+",
                label: "Experienced Driver Salary",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="size-8 text-ace-red mx-auto mb-2" />
                <div className="text-3xl font-black text-ace-black">
                  {stat.value}
                </div>
                <div className="text-sm text-ace-gray-dark">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring companies */}
      <section className="py-16 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-4">
            Companies Hiring Our Graduates
          </h2>
          <p className="text-center text-ace-gray-dark mb-12 max-w-2xl mx-auto">
            We&apos;ve built relationships with top carriers across the country.
            These companies actively recruit from ACE.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {HIRING_COMPANIES.map((company) => (
              <div
                key={company}
                className="bg-white rounded-xl p-5 flex items-center justify-center text-center border border-gray-200 hover:border-ace-red/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <Truck className="size-5 text-ace-red shrink-0" />
                  <span className="font-bold text-sm text-ace-black">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-12">
            How Job Placement Works
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Complete Your Training",
                desc: "Finish your CDL Class A or Class B program and pass your skills test at our facility.",
              },
              {
                step: "2",
                title: "Meet with Recruiters",
                desc: "Top carriers send recruiters directly to our campus. You'll have the opportunity to meet with multiple companies.",
              },
              {
                step: "3",
                title: "Choose Your Offer",
                desc: "Compare offers based on pay, routes, home time, benefits, and sign-on bonuses. Pick the best fit for your life.",
              },
              {
                step: "4",
                title: "Start Earning",
                desc: "Hit the road with your new employer. Most graduates start earning within 1-2 weeks of completing training.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-ace-red text-white font-black text-xl flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ace-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-ace-gray-dark leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ace-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Start Your High-Paying CDL Career
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Enroll today and start earning $55K-$75K within weeks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Enroll Now
              <ArrowRight className="size-5" />
            </Link>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border border-white/20"
            >
              <Phone className="size-5" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
