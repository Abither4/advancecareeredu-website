import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 prose prose-sm">
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated:</strong> April 2026
        </p>
        <p>
          By using advancecareeredu.com you agree to these terms. If you do not
          agree, please do not use this website.
        </p>

        <h2>Services</h2>
        <p>
          Advance Career Education LLC provides CDL training programs in
          Mansfield, Texas. Program details, pricing, and schedules are subject
          to change. Contact us for the most current information.
        </p>

        <h2>Enrollment</h2>
        <p>
          Submitting an inquiry through our website does not constitute
          enrollment. Enrollment is finalized upon completion of required
          documentation and payment or financing approval.
        </p>

        <h2>Disclaimer</h2>
        <p>
          While we maintain a 97% pass rate, we cannot guarantee that every
          student will pass the CDL skills test. Results depend on individual
          effort and preparation.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
          <a href={SITE.phoneTel}>{SITE.phone}</a>.
        </p>
      </div>
    </section>
  );
}
