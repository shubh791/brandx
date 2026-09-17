"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ChevronDownIcon,
  ShieldCheckIcon,
  InstagramIcon,
  FacebookIcon,
  CheckIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const FOOTER_SECTIONS = [
  {
    id: "shop",
    title: "Shop",
    links: [
      { label: "Jeans", href: "/collections/jeans" },
      { label: "Cotton Pants", href: "/collections/cotton-pants" },
      { label: "Formal Pants", href: "/collections/formal-pants" },
      { label: "Shirts", href: "/collections/shirts" },
      { label: "T-Shirts", href: "/collections/t-shirts" },
      { label: "View All →", href: "/collections", isSpecial: true },
    ],
  },
  {
    id: "help",
    title: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Track Order", href: "/track-order" },
      { label: "Returns & Exchange", href: "/returns" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    id: "information",
    title: "Information",
    links: [
      { label: "About BrandX", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    id: "social",
    title: "Follow Us",
    isSocial: true,
    tagline: "Everyday style, made easy.",
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com",
        icon: InstagramIcon,
      },
      {
        label: "Facebook",
        href: "https://facebook.com",
        icon: FacebookIcon,
      },
    ],
  },
];

export function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <footer
      aria-label="Site Footer"
      className="w-full bg-[#111111] text-neutral-300 select-none"
    >
      {/* ========================================================= */}
      {/* 1. COMPACT NEWSLETTER AREA                                */}
      {/* ========================================================= */}
      <div className="border-b border-neutral-800">
        <Container size="full">
          <div className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left: Brand Identity & Subheading */}
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white lowercase leading-none">
                  brand<span className="text-[#e11d48] font-black">x</span>
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] uppercase font-medium tracking-[0.24em] text-neutral-400 mt-[2.5px] leading-none select-none">
                  SAMALKHA
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs sm:text-[13px] font-semibold text-white">
                  Stay in the loop
                </span>
                <span className="text-neutral-600 text-xs">•</span>
                <span className="text-xs text-neutral-400">
                  New drops, offers and updates.
                </span>
              </div>
            </div>

            {/* Right: Email Input + Subscribe Button */}
            <div className="w-full md:w-auto">
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-neutral-700 text-white text-xs rounded-[2px]">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
                >
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full sm:w-64 lg:w-72 px-3 py-1.5 sm:py-2 bg-neutral-900 border border-neutral-700 rounded-[2px] text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 sm:py-2 bg-white text-black font-semibold text-xs rounded-[2px] hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </div>

      {/* ========================================================= */}
      {/* 2. COMPACT FOOTER LINK COLUMNS                           */}
      {/* ========================================================= */}
      <Container size="full">
        {/* Desktop 4-Column Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8 py-7 sm:py-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id} className="flex flex-col">
              <h4 className="text-[11px] uppercase font-bold tracking-wider text-white mb-3">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2 text-xs">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  const isExternal = link.href.startsWith("http");

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={cn(
                          "inline-flex items-center gap-2 transition-colors",
                          link.isSpecial
                            ? "text-neutral-300 font-medium hover:text-white"
                            : "text-neutral-400 hover:text-white"
                        )}
                      >
                        {Icon && <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px] flex-shrink-0" />}
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {section.tagline && (
                <p className="mt-3 text-[11px] text-neutral-400">
                  {section.tagline}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Accordions */}
        <div className="lg:hidden py-2 divide-y divide-neutral-800">
          {FOOTER_SECTIONS.map((section) => {
            const isOpen = openSection === section.id;

            return (
              <div key={section.id} className="py-2.5">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left text-xs uppercase font-bold tracking-wider text-white py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  <span>{section.title}</span>
                  <ChevronDownIcon
                    className={cn(
                      "w-3.5 h-3.5 text-neutral-400 transition-transform duration-200",
                      isOpen && "rotate-180 text-white"
                    )}
                  />
                </button>

                {isOpen && (
                  <ul className="mt-2.5 flex flex-col gap-2 pl-0.5 text-xs text-neutral-400 pb-1.5">
                    {section.links.map((link) => {
                      const Icon = link.icon;
                      const isExternal = link.href.startsWith("http");

                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white py-0.5 transition-colors"
                          >
                            {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. COMPACT BOTTOM COPYRIGHT & LEGAL BAR                   */}
        {/* ========================================================= */}
        <div className="py-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          {/* Left: Copyright */}
          <p>© {currentYear} BrandX. All rights reserved.</p>

          {/* Center: Security Badge */}
          <div className="flex items-center gap-1.5 text-neutral-400">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-normal">Secure checkout</span>
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
