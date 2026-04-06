import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, FileText, Download } from "lucide-react";
import { SITE, PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Course Catalog",
  description:
    "Download the ACE CDL School course catalog. View all programs, pricing, schedules, and requirements for CDL Class A and Class B training in Mansfield, TX.",
  alternates: {
    canonical: "https://advancecareeredu.com/catalog",
  },
};

export default function CatalogPage() {
  return (
    <>
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FileText className="size-12 text-ace-red mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Course <span className="text-ace-red">Catalog</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about our CDL training programs,
            pricing, and requirements.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ace-gray">
        <div className="max-w-4xl mx-auto px-4">
          {/* Programs overview */}
          <div className="space-y-6 mb-12">
            {PROGRAMS.map((program) => (
              <div
                key={program.slug}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-ace-black">
                      {program.name}
                    </h2>
                    <div className="text-sm text-ace-gray-dark">
                      {program.duration} | {program.schedule}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-ace-red uppercase tracking-wider">
                    Call for Pricing
                  </div>
                </div>
                <p className="text-ace-gray-dark text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                <Link
                  href={`/${program.slug}`}
                  className="inline-flex items-center gap-1 text-ace-red font-semibold text-sm hover:underline"
                >
                  Full Program Details
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-ace-black rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Enroll?
            </h3>
            <p className="text-white/70 mb-6">
              New classes start every Monday. Call or enroll online today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ace-red hover:bg-ace-red-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Enroll Now
                <ArrowRight className="size-5" />
              </Link>
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center gap-2 text-white font-bold hover:text-ace-red transition-colors"
              >
                <Phone className="size-5" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
