import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/common/Icons";

export const metadata = {
  title: "Page Not Found (404) | BrandX — Samalkha",
  description: "The page you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <main className="relative w-full min-h-[72vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden select-none">
      {/* Subtle Background Geometric "X" Accent */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035] -z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[280px] sm:text-[420px] md:text-[520px] font-black leading-none text-[#e11d48] font-mono">
          X
        </span>
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Large Subtle 404 Number */}
        <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-[#111111]/10 select-none mb-2 font-mono">
          404
        </div>

        {/* Small Eyebrow */}
        <span className="inline-block text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.24em] uppercase text-[#737373] mb-2">
          Page Not Found
        </span>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
          Looks like this style moved on.
        </h1>

        {/* Supporting Subtext */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-[#666666] max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs active:scale-[0.98]"
          >
            <span>Back to Home</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

          <Link
            href="/collections/jeans"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] bg-[#f5f5f5] hover:bg-[#eae8e3] text-[#222222] text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Explore Categories</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
