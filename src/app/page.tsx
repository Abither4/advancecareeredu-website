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
  ChevronDown,
  Zap,
  Target,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { SITE, PROGRAMS, STATS, HIRING_COMPANIES, CREDENTIALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO — Full-screen video background
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-ace-black">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ace-black/70 via-ace-black/50 to-ace-black" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32 w-full">
          <div className="max-w-4xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-ace-red/15 border border-ace-red/40 rounded-full px-5 py-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ace-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ace-red" />
              </span>
              <span className="text-ace-red font-bold text-sm uppercase tracking-wider">
                New Classes Start Every Monday
              </span>
            </div>

            {/* Headline — GrappleIQ-style bold uppercase */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 uppercase">
              Get Your CDL
              <span className="text-ace-red">.</span>
              <br />
              Change Your Life
              <span className="text-ace-red">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl leading-relaxed font-light">
              The <strong className="text-white font-bold">#1 rated and reviewed</strong> CDL
              school in the entire DFW metroplex. 97% pass rate. 856+ five-star
              reviews. Your career starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-ace-red hover:bg-ace-red-dark text-white font-black px-10 py-5 rounded-lg transition-all text-lg uppercase tracking-wider hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="size-5" />
              </Link>
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-lg transition-all text-lg border border-white/20 backdrop-blur-sm"
              >
                <Phone className="size-5" />
                {SITE.phone}
              </a>
            </div>

            {/* Stats row — like GrappleIQ's numbers section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-black">
                    <span className="text-white">
                      {stat.value.replace(/[^0-9]/g, "")}
                    </span>
                    <span className="text-ace-red">
                      {stat.value.replace(/[0-9]/g, "")}
                    </span>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="size-8 text-white/30" />
        </div>
      </section>

      {/* ============================================
          SCROLLING MARQUEE — GrappleIQ-style ticker
          ============================================ */}
      <section className="bg-ace-red py-4 overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8 mr-8">
              {[
                "#1 RATED IN DFW",
                "97% PASS RATE",
                "856+ FIVE-STAR REVIEWS",
                "CONCRETE TRAINING YARDS",
                "STATE-OF-THE-ART EQUIPMENT",
                "ON-SITE CDL TESTING",
                "JOB PLACEMENT",
                "TWC GRANTS ACCEPTED",
                "CLASSES EVERY MONDAY",
                "FINANCING AVAILABLE",
              ].map((text) => (
                <span
                  key={`${setIdx}-${text}`}
                  className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-wider"
                >
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          WHY WE'RE #1 — The ACE Difference
          ============================================ */}
      <section className="py-20 md:py-32 bg-ace-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-ace-red font-bold text-sm uppercase tracking-widest">
              The ACE Difference
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase leading-tight">
              Why We&apos;re the<br />
              <span className="text-ace-red">#1 CDL School in DFW</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              Other schools cut corners. We set the standard. Here&apos;s what
              makes ACE different from every other CDL school in Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "Top Rated & Reviewed",
                desc: "856+ five-star Google reviews — more than any CDL school in the DFW metroplex. Our graduates don't just pass, they rave about us.",
                highlight: "856+ Five-Star Reviews",
              },
              {
                icon: Building2,
                title: "Concrete Training Yards",
                desc: "While other schools train you in dirt lots and gravel, ACE trains on professional concrete yards — the same surface you'll test on at DPS.",
                highlight: "Not Dirt. Not Gravel. Concrete.",
              },
              {
                icon: Zap,
                title: "State-of-the-Art Equipment",
                desc: "Clean, well-maintained, modern trucks and trailers. No run-down equipment. You'll train on the same caliber of trucks top carriers use.",
                highlight: "Clean, Modern Fleet",
              },
              {
                icon: Target,
                title: "On-Site CDL Testing",
                desc: "As a Licensed Third Party Testing facility, you take your DPS CDL skills test right here — on the same yard you trained on. No surprises.",
                highlight: "Test Where You Train",
              },
              {
                icon: Users,
                title: "Guaranteed Job Placement",
                desc: "We partner with 12+ major carriers including Werner, Swift, and Schneider. Most graduates get multiple offers before finishing training.",
                highlight: "$55K - $75K Starting Pay",
              },
              {
                icon: BadgeCheck,
                title: "TWC Grants Accepted",
                desc: "Eligible for Texas Workforce Commission grants? We accept them. Qualified students can get their training funded. Ask us how.",
                highlight: "Training Can Be Funded",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-ace-red/30 transition-all duration-300"
              >
                <div className="bg-ace-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-ace-red/20 transition-colors">
                  <item.icon className="size-7 text-ace-red" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="inline-block bg-ace-red/10 text-ace-red text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COMPARISON — Us vs. Other Schools
          ============================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ace-red font-bold text-sm uppercase tracking-widest">
              See The Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-ace-black mt-4 uppercase">
              ACE vs. Other Schools
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-ace-black">
                  <th className="py-4 pr-4 text-sm font-bold text-ace-gray-dark uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-black text-ace-red uppercase tracking-wider text-center">
                    ACE
                  </th>
                  <th className="py-4 pl-4 text-sm font-bold text-ace-gray-dark uppercase tracking-wider text-center">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Training Surface", "Professional Concrete Yards", "Dirt & Gravel Lots"],
                  ["Equipment", "Clean, State-of-the-Art", "Outdated & Run-Down"],
                  ["CDL Testing", "On-Site at Our Facility", "Off-Site at DPS"],
                  ["Google Rating", "5.0 Stars (856+ Reviews)", "3-4 Stars"],
                  ["Pass Rate", "97% First-Time", "Industry Avg ~65%"],
                  ["Job Placement", "12+ Carrier Partners", "Limited or None"],
                  ["TWC Grants", "Accepted", "Often Not Accepted"],
                  ["Class Start", "Every Monday", "Monthly or Quarterly"],
                ].map(([feature, ace, others]) => (
                  <tr
                    key={feature}
                    className="border-b border-gray-100 hover:bg-ace-gray/50 transition-colors"
                  >
                    <td className="py-4 pr-4 font-medium text-ace-black">
                      {feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-ace-red font-bold">
                        <CheckCircle className="size-4" />
                        {ace}
                      </span>
                    </td>
                    <td className="py-4 pl-4 text-center text-ace-gray-dark">
                      {others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================
          PROGRAMS — Pricing cards
          ============================================ */}
      <section className="py-20 md:py-28 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ace-red font-bold text-sm uppercase tracking-widest">
              Programs
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-ace-black mt-4 uppercase">
              CDL Training Programs
            </h2>
            <p className="text-ace-gray-dark text-lg max-w-2xl mx-auto mt-4">
              Transparent pricing. No hidden fees. Financing available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => (
              <div
                key={program.slug}
                className={`relative bg-white rounded-2xl shadow-sm border-2 ${
                  i === 0
                    ? "border-ace-red ring-4 ring-ace-red/10"
                    : "border-gray-200"
                } p-8 flex flex-col`}
              >
                {i === 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ace-red text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-ace-black">
                    {program.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-sm font-semibold text-ace-red uppercase tracking-wider">
                      Call for Pricing
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-ace-gray-dark">
                    <span className="flex items-center gap-1">
                      <Clock className="size-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Every Monday
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
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
                  className={`block text-center font-black py-4 rounded-xl transition-all text-sm uppercase tracking-wider ${
                    i === 0
                      ? "bg-ace-red hover:bg-ace-red-dark text-white hover:scale-105"
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
              className="text-ace-red font-bold hover:underline inline-flex items-center gap-1 uppercase tracking-wider text-sm"
            >
              View All Programs & Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS — Social proof
          ============================================ */}
      <section className="py-20 md:py-28 bg-ace-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-ace-red font-bold text-sm uppercase tracking-widest">
              What Our Graduates Say
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase">
              856+ Five-Star Reviews
            </h2>
            <p className="text-white/50 text-lg mt-2">
              The highest-rated CDL school in DFW. Period.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus J.",
                text: "Best CDL school in Texas! The concrete yard made all the difference — I practiced on the same surface I tested on. Passed first try and had a job within a week!",
              },
              {
                name: "Sarah T.",
                text: "I was nervous about switching careers at 35, but ACE made it easy. The equipment is top-notch and clean. The evening program let me keep my day job while training.",
              },
              {
                name: "David R.",
                text: "97% pass rate is REAL. The on-site testing was huge — no driving to some random DPS location. Mr. Patel is an amazing instructor. Highly recommend ACE!",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">
                    Verified Google Review
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://g.page/advancecareeredu/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ace-red font-bold hover:underline uppercase tracking-wider text-sm"
            >
              Read All 856+ Reviews on Google
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          HIRING PARTNERS
          ============================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ace-red font-bold text-sm uppercase tracking-widest">
              Job Placement
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-ace-black mt-4 uppercase">
              Our Graduates Get Hired
            </h2>
            <p className="text-ace-gray-dark text-lg mt-4 max-w-2xl mx-auto">
              Most graduates receive multiple job offers before finishing
              training. We connect you with top carriers nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {HIRING_COMPANIES.map((company) => (
              <div
                key={company}
                className="bg-ace-gray rounded-xl p-5 flex items-center justify-center text-center hover:shadow-md hover:bg-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <Truck className="size-4 text-ace-red shrink-0" />
                  <span className="font-bold text-sm text-ace-black">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-4 bg-ace-black rounded-2xl px-8 py-5">
              <Award className="size-10 text-ace-red" />
              <div className="text-left">
                <div className="font-black text-white text-lg">
                  $55,000 - $75,000 Starting Pay
                </div>
                <div className="text-sm text-white/60">
                  Sign-on bonuses up to $15,000 from top carriers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="py-20 md:py-28 bg-ace-gray">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-ace-black uppercase">
              FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to get a CDL?",
                a: "Our CDL Class A program takes 3 weeks and our CDL Class B program takes 2 weeks. New classes start every Monday — no waiting for a semester to begin.",
              },
              {
                q: "How much does CDL training cost?",
                a: "We offer competitive pricing on all CDL programs with financing available through Meritize. We also accept TWC grants for eligible students. Call us at 817-864-8086 for current pricing and details.",
              },
              {
                q: "What makes ACE different from other CDL schools?",
                a: "We train on professional concrete yards (not dirt), use state-of-the-art equipment, offer on-site CDL testing, have a 97% pass rate, and provide job placement with 12+ carriers. We're also the highest-rated CDL school in DFW with 856+ five-star reviews.",
              },
              {
                q: "Do you accept TWC grants?",
                a: "Yes! We accept Texas Workforce Commission grants. If you qualify, your training may be partially or fully funded. Contact us to learn about your eligibility.",
              },
              {
                q: "Do you help with job placement?",
                a: "Absolutely! We partner with 12+ major carriers including Werner, Swift, Schneider, and J.B. Hunt. Most graduates receive multiple job offers before completing training, with starting salaries of $55K-$75K.",
              },
              {
                q: "Can I test for my CDL at your facility?",
                a: "Yes! ACE is a Licensed Third Party CDL Testing facility. You take your DPS skills test right here on the same concrete yard where you trained. No surprises.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-ace-black hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className="text-ace-red group-open:rotate-180 transition-transform text-xl ml-4 shrink-0">
                    &#9660;
                  </span>
                </summary>
                <div className="px-6 pb-5 text-ace-gray-dark leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA — Cinematic close
          ============================================ */}
      <section className="relative py-24 md:py-36 bg-ace-black overflow-hidden">
        {/* Subtle video bg reuse */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ace-black via-ace-black/80 to-ace-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-ace-red/15 border border-ace-red/40 rounded-full px-5 py-2 mb-8">
            <Calendar className="size-4 text-ace-red" />
            <span className="text-ace-red font-bold text-sm uppercase tracking-wider">
              Next Class Starts Monday
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight mb-6">
            Your New Career<br />
            is <span className="text-ace-red">3 Weeks Away</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Stop thinking about it. Every week you wait is another week of lost
            income. Call now or enroll online. Financing and TWC grants available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-3 bg-ace-red hover:bg-ace-red-dark text-white font-black px-10 py-5 rounded-lg transition-all text-lg uppercase tracking-wider hover:scale-105"
            >
              <Phone className="size-5" />
              Call {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-ace-black font-black px-10 py-5 rounded-lg transition-all text-lg uppercase tracking-wider"
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
