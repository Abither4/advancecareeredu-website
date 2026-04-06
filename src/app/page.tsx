import Link from "next/link";
import {
  Phone,
  Star,
  Clock,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Award,
  Truck,
} from "lucide-react";
import { SITE, PROGRAMS, STATS, HIRING_COMPANIES, CREDENTIALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ace-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ace-black via-ace-black/95 to-ace-red/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-ace-red/10 border border-ace-red/30 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ace-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ace-red" />
              </span>
              <span className="text-ace-red font-semibold text-sm">
                New Classes Start Every Monday
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Get Your CDL in{" "}
              <span className="text-ace-red">2-3 Weeks</span>
              <br />
              <span className="text-white/80">Start Earning $60K+</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
              Join 1,000+ graduates from the #1 rated CDL school in DFW.{" "}
              <strong className="text-white">97% pass rate</strong>,{" "}
              <strong className="text-white">856+ five-star reviews</strong>,
              and job placement with top carriers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Enroll Now — Classes Start Monday
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

            {/* Trust badges inline */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              {CREDENTIALS.map((cred) => (
                <span key={cred} className="flex items-center gap-1.5">
                  <Shield className="size-3.5 text-ace-red" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-ace-red">
                  {stat.value}
                </div>
                <div className="text-sm text-ace-gray-dark font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-ace-black mb-4">
              CDL Training Programs
            </h2>
            <p className="text-ace-gray-dark text-lg max-w-2xl mx-auto">
              Affordable, fast-track CDL training with transparent pricing. No
              hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => (
              <div
                key={program.slug}
                className={`relative bg-white rounded-xl shadow-sm border ${
                  i === 0
                    ? "border-ace-red ring-2 ring-ace-red/20"
                    : "border-gray-200"
                } p-6 flex flex-col`}
              >
                {i === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ace-red text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-ace-black">
                    {program.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-black text-ace-red">
                      ${program.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-ace-gray-dark">
                    <span className="flex items-center gap-1">
                      <Clock className="size-4" />
                      {program.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
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
                  className={`block text-center font-bold py-3 rounded-lg transition-colors ${
                    i === 0
                      ? "bg-ace-red hover:bg-ace-red-dark text-white"
                      : "bg-ace-black hover:bg-ace-gray-dark text-white"
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/programs"
              className="text-ace-red font-semibold hover:underline inline-flex items-center gap-1"
            >
              View All Programs & Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ACE Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-ace-black mb-4">
              Why Choose ACE?
            </h2>
            <p className="text-ace-gray-dark text-lg max-w-2xl mx-auto">
              We&apos;re not just a CDL school — we&apos;re your career
              launchpad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "856+ Five-Star Reviews",
                desc: "The highest-rated CDL school in the DFW metroplex. Our students love us because we deliver results.",
              },
              {
                icon: TrendingUp,
                title: "97% Pass Rate",
                desc: "Our proven training method prepares you to pass the DPS CDL skills test on your first attempt.",
              },
              {
                icon: Clock,
                title: "Start Every Monday",
                desc: "No waiting for the next semester. New CDL classes begin every Monday so you can start right away.",
              },
              {
                icon: Shield,
                title: "Licensed Testing Facility",
                desc: "Take your DPS CDL skills test right here at our facility. No need to travel to a separate testing location.",
              },
              {
                icon: Users,
                title: "Job Placement Assistance",
                desc: "We partner with 12+ major carriers. Most graduates receive job offers before they even finish training.",
              },
              {
                icon: DollarSign,
                title: "Financing Available",
                desc: "Don't let cost hold you back. We offer financing through Meritize with flexible payment plans.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-ace-gray rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="bg-ace-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="size-6 text-ace-red" />
                </div>
                <h3 className="text-lg font-bold text-ace-black mb-2">
                  {item.title}
                </h3>
                <p className="text-ace-gray-dark text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-7 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-ace-black mb-2">
              856+ Five-Star Reviews
            </h2>
            <p className="text-ace-gray-dark text-lg">
              Don&apos;t take our word for it — hear from our graduates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus J.",
                text: "Best CDL school in Texas! The instructors really care about your success. I passed my test on the first try and had a job offer within a week. Worth every penny!",
              },
              {
                name: "Sarah T.",
                text: "I was nervous about switching careers at 35, but ACE made it easy. The evening program let me keep my day job while training. Now I'm making more than I ever did.",
              },
              {
                name: "David R.",
                text: "97% pass rate is real. The training is hands-on from day one. Mr. Patel is an amazing instructor with real-world experience. Highly recommend ACE to anyone wanting their CDL.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-ace-gray-dark text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="font-bold text-ace-black text-sm">
                  {review.name}
                </div>
                <div className="text-xs text-ace-gray-dark">Google Review</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://g.page/advancecareeredu/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ace-red font-semibold hover:underline"
            >
              Read All Reviews on Google
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-ace-black mb-4">
              Our Graduates Get Hired
            </h2>
            <p className="text-ace-gray-dark text-lg max-w-2xl mx-auto">
              We partner with top trucking companies across the country. Most
              graduates receive multiple job offers before completing training.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {HIRING_COMPANIES.map((company) => (
              <div
                key={company}
                className="bg-ace-gray rounded-lg p-4 flex items-center justify-center text-center"
              >
                <div className="flex items-center gap-2">
                  <Truck className="size-4 text-ace-red shrink-0" />
                  <span className="font-semibold text-sm text-ace-black">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 bg-ace-gray rounded-xl px-6 py-4">
              <Award className="size-8 text-ace-red" />
              <div className="text-left">
                <div className="font-bold text-ace-black">
                  Average Starting Salary: $55,000 - $75,000/year
                </div>
                <div className="text-sm text-ace-gray-dark">
                  Many companies offer sign-on bonuses up to $15,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-ace-gray">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-ace-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to get a CDL?",
                a: "Our CDL Class A program takes 3 weeks and our CDL Class B program takes 2 weeks. New classes start every Monday — no waiting for a semester to begin.",
              },
              {
                q: "How much does CDL training cost?",
                a: "CDL Class A Day Program is $5,095, CDL Class A Evening Program is $5,495, and CDL Class B Program is $3,195. We offer financing through Meritize with flexible payment plans.",
              },
              {
                q: "What is your pass rate?",
                a: "ACE has a 97% first-time pass rate on the DPS CDL skills test. As a Licensed Third Party Testing facility, you can take your test right here at our location.",
              },
              {
                q: "Do you help with job placement?",
                a: "Absolutely! We partner with 12+ major carriers including Werner, Swift, Schneider, and J.B. Hunt. Most graduates receive multiple job offers before completing training.",
              },
              {
                q: "Do I need any experience to enroll?",
                a: "No prior experience is needed! We train you from the ground up — from permit preparation to passing your CDL skills test.",
              },
              {
                q: "Is financing available?",
                a: "Yes! We offer financing through Meritize with competitive rates. Apply online or call us at 817-864-8086 for details.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-bold text-ace-black hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className="text-ace-red group-open:rotate-180 transition-transform text-xl ml-4 shrink-0">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-4 text-ace-gray-dark leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-ace-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-ace-red/20 border border-ace-red/30 rounded-full px-4 py-1.5 mb-6">
            <Calendar className="size-4 text-ace-red" />
            <span className="text-ace-red font-semibold text-sm">
              Next Class Starts Monday
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Your New Career is{" "}
            <span className="text-ace-red">3 Weeks Away</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Stop thinking about it and start doing it. Call now or enroll online.
            Financing available.
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
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
