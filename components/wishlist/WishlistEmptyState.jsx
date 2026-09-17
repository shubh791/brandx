import React from "react";
import Link from "next/link";
import { HeartIcon, ArrowRightIcon } from "@/components/common/Icons";
import { ProductCard } from "@/components/product/ProductCard";
import { SPOTLIGHT_PRODUCTS } from "@/data/spotlight-products";

export function WishlistEmptyState() {
  return (
    <div className="w-full py-8 sm:py-12">
      {/* Centered Empty State Box */}
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mx-auto mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#f6f5f3] text-[#888888] shadow-xs">
          <HeartIcon className="h-8 w-8 sm:h-9 sm:w-9 text-[#888888] stroke-[1.5]" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
          Nothing saved yet
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed max-w-sm mx-auto">
          Save items you love by tapping the heart icon while browsing.
        </p>

        <div className="mt-6">
          <Link
            href="/collections/jeans"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-xs active:scale-[0.98]"
          >
            <span>Start Shopping</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Discover Spotlight Section */}
      <div className="mt-16 sm:mt-20 pt-12 border-t border-[#eae8e3]">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6 gap-1">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111]">
              Explore BrandX Essentials
            </h3>
            <p className="text-xs sm:text-sm text-[#737373]">
              Popular pieces curated for everyday style
            </p>
          </div>
          <Link
            href="/collections/jeans"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#e11d48] transition-colors mt-2 sm:mt-0"
          >
            View all collections
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Product Grid: 2 cols Mobile -> 3 cols Tablet -> 4 cols Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {SPOTLIGHT_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
