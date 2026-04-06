import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Award,
  Truck,
} from "lucide-react";
import { SITE, PROGRAMS, STATS, CREDENTIALS, HIRING_COMPANIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CDL School in Mansfield TX | Truck Driving School Near Me",
  description:
    "Looking for a CDL school near Mansfield, Arlington, or Fort Worth TX? ACE offers 2-3 week CDL training, 97% pass rate, 856+ 5-star reviews. Call 817-864-8086.",
  alternates: {
    canonical: "https://advancecareeredu.com/cdl-school-mansfield-tx",
  },
  keywords: [
    "CDL school Mansfield TX",
    "CDL school near me",
    "truck driving school Arlington TX",
    "truck driving school Fort Worth",
    "CDL training DFW",
    "CDL school Dallas Fort Worth",
  ],
};

export default function LocalLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ace-black">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ace-red/10 border border-ace-red/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="size-4 text-ace-red" />
              <span className="text-ace-red font-semibold text-sm">
                Mansfield, TX — Serving DFW Since 2005
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              #1 Rated CDL School in{" "}
              <span className="text-ace-red">Mansfield, Texas</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
              Serving Mansfield, Arlington, Fort Worth, Dallas, and the entire
              DFW metroplex. Get your CDL in 2-3 weeks with the area&apos;s
              highest-rated truck driving school.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-ace-red">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </section>

      {/* Location info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-black text-ace-black mb-4">
                Conveniently Located in Mansfield, TX
              </h2>
              <p className="text-ace-gray-dark mb-4 leading-relaxed">
                Our training facility at{" "}
                <strong>{SITE.address.full}</strong> is easily accessible from
                anywhere in the DFW metroplex. We&apos;re just minutes from
                Arlington, Fort Worth, Grand Prairie, and Cedar Hill.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-ace-red" />
                  <span>
                    <strong>Hours:</strong> {SITE.hours}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-ace-red" />
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a href={SITE.phoneTel} className="text-ace-red">
                      {SITE.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-ace-red" />
                  <span>
                    <strong>New classes</strong> start every Monday
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-ace-gray rounded-xl overflow-hidden h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.1!2d-97.1417!3d32.5632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMzJzQ3LjUiTiA5N8KwMDgnMzAuMSJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ACE CDL School Location in Mansfield TX"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-ace-black text-center mb-12">
            CDL Programs Available in Mansfield
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <div
                key={program.slug}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-ace-black mb-2">
                  {program.name}
                </h3>
                <div className="text-sm font-bold text-ace-red uppercase tracking-wider mb-2">
                  Call for Pricing
                </div>
                <div className="flex items-center gap-2 text-sm text-ace-gray-dark mb-4">
                  <Clock className="size-4" /> {program.duration}
                </div>
                <ul className="space-y-2 mb-6">
                  {program.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ace-gray-dark"
                    >
                      <CheckCircle className="size-4 text-ace-red shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${program.slug}`}
                  className="block text-center bg-ace-red hover:bg-ace-red-dark text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-ace-black mb-4">
            Serving the Entire DFW Metroplex
          </h2>
          <p className="text-ace-gray-dark mb-8 max-w-2xl mx-auto">
            Students come to ACE from across North Texas. We&apos;re proud to
            serve:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Mansfield",
              "Arlington",
              "Fort Worth",
              "Dallas",
              "Grand Prairie",
              "Cedar Hill",
              "Midlothian",
              "Burleson",
              "Waxahachie",
              "Cleburne",
              "Kennedale",
              "Crowley",
              "Duncanville",
              "DeSoto",
              "Lancaster",
              "Ennis",
            ].map((city) => (
              <span
                key={city}
                className="bg-ace-gray px-4 py-2 rounded-full text-sm font-medium text-ace-gray-dark"
              >
                {city}, TX
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ace-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Visit Our Mansfield Campus Today
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule a tour or enroll in our next class starting Monday.
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
