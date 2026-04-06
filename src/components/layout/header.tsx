"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/financing", label: "Financing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-ace-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">{SITE.hours}</span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-1 hover:text-ace-red transition-colors font-semibold"
            >
              <Phone className="size-3.5" />
              {SITE.phone}
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:block">{SITE.address.full}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-ace-red text-white font-black text-xl px-3 py-1 rounded">
              ACE
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-ace-black text-sm leading-tight">
                Advance Career
              </div>
              <div className="font-bold text-ace-black text-sm leading-tight">
                Education
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ace-gray-dark hover:text-ace-red transition-colors rounded-md hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneTel}
              className="hidden md:flex items-center gap-2 text-ace-red font-bold text-sm"
            >
              <Phone className="size-4" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-ace-red hover:bg-ace-red-dark text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Enroll Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ace-black"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-ace-gray-dark hover:text-ace-red hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-ace-red text-white font-bold px-4 py-3 rounded-lg text-center"
              >
                Enroll Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-ace-black/95 backdrop-blur-sm border-t border-white/10 p-3 flex items-center justify-between gap-3 sm:hidden">
        <a
          href={SITE.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 bg-white text-ace-black font-bold py-2.5 rounded-lg text-sm"
        >
          <Phone className="size-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-ace-red text-white font-bold py-2.5 rounded-lg text-sm"
        >
          Enroll Now
        </Link>
      </div>
    </>
  );
}
