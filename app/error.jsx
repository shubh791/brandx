"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcwIcon, ArrowRightIcon } from "@/components/common/Icons";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to monitoring if configured (never expose details to user)
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16 select-none">
      <div className="max-w-md mx-auto text-center">
        {/* Subtle Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f8f8] text-[#111111] border border-[#eae8e3]">
          <RotateCcwIcon className="h-6 w-6 text-[#111111]" />
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
          Something went wrong
        </h1>

        {/* Subtext */}
        <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed max-w-sm mx-auto">
          We couldn&apos;t load this page right now. Please try again or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs active:scale-[0.98] cursor-pointer"
          >
            <RotateCcwIcon className="h-4 w-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[3px] bg-[#f5f5f5] hover:bg-[#eae8e3] text-[#333333] text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Back to Home</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
