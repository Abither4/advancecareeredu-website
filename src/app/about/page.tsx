import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Star,
  Shield,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import { SITE, STATS, CREDENTIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About ACE | Mansfield TX CDL School Since 2005",
  description:
    "Learn about Advance Career Education (ACE), Mansfield TX's top-rated CDL school. 19+ years experience, 97% pass rate, 856+ five-star reviews. Meet our team.",
  alternates: {
    canonical: "https://advancecareeredu.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            About <span className="text-ace-red">Advance Career Education</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Building careers one driver at a time since 2005.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-ace-red">
                  {stat.value}
                </div>
                <div className="text-sm text-ace-gray-dark font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-ace-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
            <h2 className="text-3xl font-black text-ace-black mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-ace-gray-dark space-y-4">
              <p>
                Advance Career Education (ACE) was founded with a simple
                mission: provide the best CDL training in Texas at an affordable
                price. Located in Mansfield, TX, we&apos;ve been serving the DFW
                metroplex for over 19 years.
              </p>
              <p>
                Our Director brings over 19 years of experience in the
                commercial trucking industry, including 13 years as a CDL
                instructor and 10+ years as a CDL Examiner. This depth of
                experience means our students learn from someone who truly
                understands what it takes to succeed — both on the test and on
                the road.
              </p>
              <p>
                We&apos;re proud to be a Texas Workforce Commission Approved
                training provider, a member of the Federal Training Provider
                Registry, and a Licensed Third Party CDL Testing facility. This
                means our graduates can take their CDL skills test right here at
                our facility.
              </p>
              <p>
                With a 97% first-time pass rate and 856+ five-star Google
                reviews, the numbers speak for themselves. But what really sets
                us apart is our commitment to each student&apos;s success — from
                the first day of class to job placement with top carriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-12">
            Our Credentials
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred}
                className="bg-ace-gray rounded-xl p-6 text-center"
              >
                <Shield className="size-10 text-ace-red mx-auto mb-3" />
                <div className="font-bold text-ace-black text-sm">{cred}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-16 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-12">
            What Sets ACE Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "Highest Rated in DFW",
                desc: "856+ five-star reviews make us the most trusted CDL school in the Dallas-Fort Worth area.",
              },
              {
                icon: Award,
                title: "On-Site CDL Testing",
                desc: "As a Licensed Third Party Testing facility, take your DPS test right here — no need to go elsewhere.",
              },
              {
                icon: Users,
                title: "Small Class Sizes",
                desc: "Personalized attention ensures every student gets the hands-on training they need to succeed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <item.icon className="size-8 text-ace-red mb-4" />
                <h3 className="font-bold text-ace-black mb-2">{item.title}</h3>
                <p className="text-sm text-ace-gray-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ace-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Join the ACE Family?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule a campus tour or enroll in our next class.
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
