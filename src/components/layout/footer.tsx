import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, CREDENTIALS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ace-black text-white pb-20 sm:pb-0">
      {/* CTA banner */}
      <div className="bg-ace-red">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Start Your CDL Career?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            New classes start every Monday. Call now or enroll online to reserve
            your spot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 bg-white text-ace-red font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="size-5" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ace-black text-white font-bold px-8 py-3 rounded-lg hover:bg-ace-black/80 transition-colors"
            >
              Enroll Online
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-ace-red text-white font-black text-xl px-3 py-1 rounded">
                ACE
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">
                  Advance Career
                </div>
                <div className="font-bold text-sm leading-tight">
                  Education
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional CDL training in Mansfield, Texas. Building careers
              one driver at a time since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/programs", label: "Programs & Pricing" },
                { href: "/financing", label: "Financing Options" },
                { href: "/cdl-class-a-training", label: "CDL Class A" },
                { href: "/cdl-class-b-training", label: "CDL Class B" },
                { href: "/careers", label: "Job Placement" },
                { href: "/about", label: "About ACE" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a
                href={SITE.phoneTel}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Phone className="size-4 mt-0.5 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail className="size-4 mt-0.5 shrink-0" />
                {SITE.email}
              </a>
              <a
                href="https://maps.google.com/?q=950+Trinity+Drive+Mansfield+TX+76063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin className="size-4 mt-0.5 shrink-0" />
                {SITE.address.full}
              </a>
              <p className="text-white/40">{SITE.hours}</p>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Credentials
            </h3>
            <div className="flex flex-col gap-2">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred}
                  className="text-sm text-white/60 flex items-start gap-2"
                >
                  <span className="text-ace-red mt-1 shrink-0">&#10003;</span>
                  {cred}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Advance Career Education LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
