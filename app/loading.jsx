import React from "react";
import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="w-full min-h-[65vh] bg-white flex flex-col justify-start">
      {/* Top subtle progress shimmer bar */}
      <div className="w-full h-[2px] bg-[#f0f0f0] overflow-hidden">
        <div className="h-full bg-[#111111] animate-[progress_1.2s_ease-in-out_infinite]" />
      </div>

      <Container size="full">
        {/* Subtle BrandX loading skeleton header */}
        <div className="py-8 sm:py-12 space-y-6">
          <div className="space-y-2">
            <div className="h-3 w-20 bg-[#f4f3f0] rounded-[2px] animate-pulse" />
            <div className="h-7 sm:h-9 w-48 sm:w-64 bg-[#eeebe5] rounded-[2px] animate-pulse" />
          </div>

          {/* Minimal 5-column skeleton grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 pt-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col space-y-2">
                <div className="aspect-[4/5] w-full bg-[#f2f0eb] rounded-[2px] animate-pulse" />
                <div className="h-3 w-3/4 bg-[#eeebe5] rounded-[2px] animate-pulse mt-1" />
                <div className="h-3 w-1/3 bg-[#f2f0eb] rounded-[2px] animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
