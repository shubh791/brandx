import React from "react";

export function WishlistHero({ count = 0, isHydrated = false }) {
  return (
    <div className="w-full border-b border-[#eae8e3] bg-gradient-to-b from-[#faf9f8] to-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            {/* Category / Breadcrumb kicker */}
            <span className="inline-block text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#737373] mb-1.5">
              Saved Items
            </span>

            {/* Page Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] flex items-baseline gap-3">
              Your Wishlist
              {isHydrated && count > 0 && (
                <span className="text-sm sm:text-base font-normal text-[#737373]">
                  ({count} {count === 1 ? "item" : "items"})
                </span>
              )}
            </h1>

            {/* Subtext */}
            <p className="mt-1.5 text-xs sm:text-sm text-[#666666]">
              Keep your favourites in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
