import React from "react";
import { cn } from "@/lib/utils";

export function ProductCardSkeleton({ className = "" }) {
  return (
    <div className={cn("flex flex-col w-full select-none", className)}>
      {/* 4:5 Aspect Ratio Image Skeleton */}
      <div className="relative w-full aspect-[4/5] bg-[#f2f1ee] rounded-[2px] overflow-hidden animate-pulse border border-[#eae8e3]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_1.6s_infinite]" />
      </div>

      {/* Details Skeleton */}
      <div className="mt-2.5 sm:mt-3 flex flex-col space-y-1.5">
        <div className="h-3 sm:h-3.5 w-3/4 bg-[#f0eee9] rounded-[2px] animate-pulse" />
        <div className="h-3 sm:h-3.5 w-2/5 bg-[#f0eee9] rounded-[2px] animate-pulse" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 5, className = "" }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
