"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Send to your backend or use a form service
    // For now, open mailto as fallback
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const program = data.get("program") as string;
    const message = data.get("message") as string;

    const subject = `New Enrollment Inquiry from ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProgram: ${program}\n\nMessage:\n${message}`;

    window.open(
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );

    // Track conversion
    if (typeof window !== "undefined" && "trackFormSubmission" in window) {
      (window as Record<string, unknown>["trackFormSubmission"] as (name: string) => void)?.("contact_form");
    }

    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <>
      <section className="bg-ace-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact Us & <span className="text-ace-red">Enroll</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to start your CDL career? Fill out the form below, call us, or
            schedule a visit. New classes start every Monday.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ace-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-black text-ace-black mb-6">
                  Enrollment Inquiry
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="size-16 text-ace-red mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-ace-black mb-2">
                      Thank You!
                    </h3>
                    <p className="text-ace-gray-dark mb-6">
                      We&apos;ll contact you within 24 hours. For immediate
                      assistance, call us at{" "}
                      <a href={SITE.phoneTel} className="text-ace-red font-bold">
                        {SITE.phone}
                      </a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-ace-red font-semibold hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-ace-black mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-red/30 focus:border-ace-red outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-ace-black mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-red/30 focus:border-ace-red outline-none transition-colors"
                          placeholder="(817) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-ace-black mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-red/30 focus:border-ace-red outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="program"
                        className="block text-sm font-medium text-ace-black mb-1"
                      >
                        Program of Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-red/30 focus:border-ace-red outline-none transition-colors"
                      >
                        <option value="">Select a program...</option>
                        <option value="class-a-day">
                          CDL Class A - 3 Week Day Program
                        </option>
                        <option value="class-a-evening">
                          CDL Class A - 3 Week Evening Program
                        </option>
                        <option value="class-b">
                          CDL Class B - 2 Week Program
                        </option>
                        <option value="endorsement">
                          Endorsement / Additional Service
                        </option>
                        <option value="refresher">
                          40-Hour CDL Refresher
                        </option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-ace-black mb-1"
                      >
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-red/30 focus:border-ace-red outline-none transition-colors resize-none"
                        placeholder="Any questions or additional information..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-ace-red hover:bg-ace-red-dark text-white font-bold py-4 rounded-lg transition-colors text-lg inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="size-5" />
                      {loading ? "Sending..." : "Submit Enrollment Inquiry"}
                    </button>
                    <p className="text-xs text-ace-gray-dark text-center">
                      We&apos;ll respond within 24 hours. For immediate
                      assistance, call{" "}
                      <a href={SITE.phoneTel} className="text-ace-red">
                        {SITE.phone}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick contact */}
              <div className="bg-ace-black rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">
                  Need Immediate Help?
                </h3>
                <a
                  href={SITE.phoneTel}
                  className="flex items-center gap-3 bg-ace-red hover:bg-ace-red-dark rounded-lg p-4 transition-colors mb-4"
                >
                  <Phone className="size-6" />
                  <div>
                    <div className="font-bold text-lg">{SITE.phone}</div>
                    <div className="text-white/80 text-sm">
                      Call or text anytime
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
                >
                  <Mail className="size-6" />
                  <div>
                    <div className="font-bold">{SITE.email}</div>
                    <div className="text-white/60 text-sm">Email us</div>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-ace-black mb-4">
                  Visit Our Campus
                </h3>
                <div className="space-y-3 text-sm mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-ace-red shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-ace-black">
                        {SITE.address.full}
                      </div>
                      <a
                        href="https://maps.google.com/?q=950+Trinity+Drive+Mansfield+TX+76063"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ace-red hover:underline text-xs"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="size-5 text-ace-red shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-ace-black">
                        Office Hours
                      </div>
                      <div className="text-ace-gray-dark">{SITE.hours}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="size-5 text-ace-red shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-ace-black">
                        Class Schedule
                      </div>
                      <div className="text-ace-gray-dark">
                        New classes start every Monday
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.1!2d-97.1417!3d32.5632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMzJzQ3LjUiTiA5N8KwMDgnMzAuMSJX!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ACE CDL School Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
