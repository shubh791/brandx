"use client";

import React from "react";
import Link from "next/link";
import { HeartIcon, ArrowRightIcon, UserIcon } from "@/components/common/Icons";
import { ProductCard } from "@/components/product/ProductCard";
import { useAuth } from "@/context/AuthContext";
import { SPOTLIGHT_PRODUCTS } from "@/data/spotlight-products";

export function WishlistLockedState() {
  const { openAuthModal } = useAuth();

  return (
    <div className="w-full py-8 sm:py-12">
      {/* Centered Locked Card */}
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mx-auto mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#fbf0f2] text-[#e11d48] shadow-xs">
          <HeartIcon className="h-8 w-8 sm:h-9 sm:w-9 text-[#e11d48] stroke-[1.5]" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
          Login to save your favourites
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed max-w-sm mx-auto">
          Sign in with your mobile number to access your saved BrandX items and keep your favourites in one place.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() =>
              openAuthModal({
                message: "Login to save your favourites",
                redirectUrl: "/wishlist",
              })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs active:scale-[0.98] cursor-pointer"
          >
            <UserIcon className="h-4 w-4" />
            <span>Sign In to Wishlist</span>
          </button>

          <Link
            href="/collections/jeans"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[3px] bg-[#f5f5f5] hover:bg-[#eae8e3] text-[#333333] text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Browse Catalog</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-[11.5px] text-[#888888]">
          Browsing, searching, and adding to cart never requires signing in.
        </p>
      </div>

      {/* Discover Spotlight Section */}
      <div className="mt-16 sm:mt-20 pt-12 border-t border-[#eae8e3]">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6 gap-1">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111]">
              Explore BrandX Essentials
            </h3>
            <p className="text-xs sm:text-sm text-[#737373]">
              Tap the heart on any item to save it to your account
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {SPOTLIGHT_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
