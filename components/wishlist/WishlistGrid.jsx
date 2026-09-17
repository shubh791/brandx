import React, { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { TrashIcon, ArrowRightIcon } from "@/components/common/Icons";

export function WishlistGrid({ items = [], onClearWishlist }) {
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  return (
    <div className="w-full py-6 sm:py-8">
      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#eae8e3]">
        <span className="text-xs sm:text-sm font-medium text-[#666666]">
          Showing {items.length} saved {items.length === 1 ? "item" : "items"}
        </span>

        <div className="flex items-center gap-3">
          {showClearConfirm ? (
            <div className="flex items-center gap-2 animate-in fade-in duration-150">
              <span className="text-xs text-[#dc2626] font-medium">
                Remove all items?
              </span>
              <button
                type="button"
                onClick={() => {
                  if (onClearWishlist) onClearWishlist();
                  setShowClearConfirm(false);
                }}
                className="px-2.5 py-1 text-xs font-semibold rounded-[2px] bg-[#dc2626] text-white hover:bg-red-700 transition-colors cursor-pointer"
              >
                Yes, clear
              </button>
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="px-2.5 py-1 text-xs font-medium rounded-[2px] bg-[#f5f5f5] text-[#333333] hover:bg-[#e5e5e5] transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowClearConfirm(true)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-[#dc2626] transition-colors cursor-pointer"
            >
              <TrashIcon className="h-3.5 w-3.5" />
              <span>Clear all</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid: 2 cols Mobile -> 3 cols Tablet -> 4 cols Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {items.map((product) => (
          <ProductCard
            key={product.id || product.handle}
            product={product}
          />
        ))}
      </div>

      {/* Bottom helper */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-[#eae8e3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs sm:text-sm text-[#737373]">
          Items in your wishlist remain saved on this device for your convenience.
        </p>
        <Link
          href="/collections/jeans"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#e11d48] transition-colors"
        >
          <span>Continue browsing</span>
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
