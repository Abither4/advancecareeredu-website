import Link from "next/link";
import {
  Phone,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Award,
} from "lucide-react";
import { SITE, STATS, CREDENTIALS } from "@/lib/constants";

interface LandingPageProps {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  programName: string;

  duration: string;
  schedule: string;
  features: readonly string[];
  additionalKeywords?: string;
}

export function LandingPage({
  heroTitle,
  heroHighlight,
  heroSubtitle,
  programName,

  duration,
  schedule,
  features,
}: LandingPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-ace-black">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-ace-red/10 border border-ace-red/30 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ace-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ace-red" />
                </span>
                <span className="text-ace-red font-semibold text-sm">
                  New Classes Start Every Monday
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {heroTitle}{" "}
                <span className="text-ace-red">{heroHighlight}</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  Enroll Now
                  <ArrowRight className="size-5" />
                </Link>
                <a
                  href={SITE.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border border-white/20"
                >
                  <Phone className="size-5" />
                  {SITE.phone}
                </a>
              </div>

              {/* Stats inline */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-ace-red">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-ace-black mb-1">
                  {programName}
                </h2>
                <div className="mt-1">
                  <span className="text-ace-red font-bold uppercase tracking-wider">
                    Call for Pricing: {SITE.phone}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 text-sm text-ace-gray-dark">
                  <span className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    {schedule}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-ace-gray-dark"
                  >
                    <CheckCircle className="size-5 text-ace-red shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full bg-ace-red hover:bg-ace-red-dark text-white font-bold py-4 rounded-lg text-center text-lg transition-colors"
              >
                Enroll Now — Start Monday
              </Link>
              <p className="text-center text-sm text-ace-gray-dark mt-3">
                Financing available through Meritize
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-ace-gray-dark">
                  Rated 5.0 from 856+ Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-ace-gray-dark">
            {CREDENTIALS.map((cred) => (
              <span key={cred} className="flex items-center gap-1.5">
                <Shield className="size-4 text-ace-red" />
                <span className="font-medium">{cred}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-12">
            What You&apos;ll Learn
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ELDT Theory Training",
                desc: "Master the knowledge required by FMCSA Entry-Level Driver Training regulations.",
              },
              {
                title: "Pre-Trip Inspection",
                desc: "Learn to perform thorough vehicle inspections — a critical part of the CDL skills test.",
              },
              {
                title: "Backing Maneuvers",
                desc: "Master straight-line, offset, and parallel parking with our dedicated practice course.",
              },
              {
                title: "Road & Highway Driving",
                desc: "Build confidence on real roads with experienced instructors riding alongside you.",
              },
              {
                title: "DPS Test Preparation",
                desc: "Take your CDL skills test right at our facility — we're a Licensed Third Party Testing center.",
              },
              {
                title: "Job Placement Support",
                desc: "Get connected with top carriers offering competitive starting pay and sign-on bonuses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-ace-black mb-2">{item.title}</h3>
                <p className="text-sm text-ace-gray-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-7 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <h2 className="text-3xl font-black text-ace-black mb-8">
            What Our Graduates Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Marcus J.",
                text: "Best CDL school in Texas! I passed my test on the first try and had a job offer within a week.",
              },
              {
                name: "Sarah T.",
                text: "The evening program let me keep my day job while training. Now I'm making more than I ever did.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-ace-gray rounded-xl p-6 text-left"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-ace-gray-dark text-sm mb-3">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="font-bold text-ace-black text-sm">
                  {r.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-ace-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="size-12 text-ace-red mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Don&apos;t Wait — Start Monday
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Every week you wait is another week of lost earning potential. New
            New CDL drivers start earning right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Phone className="size-5" />
              Call {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-ace-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Enroll Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
