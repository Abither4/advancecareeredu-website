import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 prose prose-sm">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> April 2026
        </p>
        <p>
          Advance Career Education LLC (&quot;ACE,&quot; &quot;we,&quot;
          &quot;us&quot;) respects your privacy. This policy describes how we
          collect, use, and protect information when you visit{" "}
          <strong>advancecareeredu.com</strong>.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Contact Information:</strong> Name, phone number, and email
            address when you submit our contact form or enrollment inquiry.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent, and
            referral source via Google Analytics.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to enrollment inquiries</li>
          <li>To provide information about our CDL training programs</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with
          service providers (Google Analytics, Meritize for financing) to
          operate our business.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
          <a href={SITE.phoneTel}>{SITE.phone}</a>.
        </p>
      </div>
    </section>
  );
}
