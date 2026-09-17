"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { HeartIcon, PackageIcon, HelpCircleIcon, ArrowRightIcon, RotateCcwIcon } from "@/components/common/Icons";

export function AccountDashboard() {
  const { user, logout } = useAuth();
  const { wishlistCount } = useWishlist();

  if (!user) return null;

  return (
    <div className="w-full max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Account Header */}
      <div className="bg-white border border-[#eae8e3] rounded-[4px] p-6 sm:p-8 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#737373]">
              Customer Account
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#111111] mt-1">
              +91 {user.mobile}
            </h1>
            <p className="text-xs text-[#666666] mt-1">
              Signed in to BrandX • Samalkha
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[3px] border border-[#d1d1d1] hover:border-black text-xs font-semibold text-[#111111] hover:bg-[#f9f9f9] transition-all cursor-pointer"
            >
              <RotateCcwIcon className="h-3.5 w-3.5 text-[#666666]" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Account Quick Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Wishlist Shortcut Card */}
        <Link
          href="/wishlist"
          className="group flex flex-col justify-between p-5 bg-white border border-[#eae8e3] rounded-[4px] hover:border-[#111111] transition-all shadow-xs"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf0f2] text-[#e11d48]">
                <HeartIcon className="h-5 w-5 fill-[#e11d48]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111111]">
                  Your Wishlist
                </h3>
                <p className="text-xs text-[#666666]">
                  {wishlistCount} {wishlistCount === 1 ? "item" : "items"} saved
                </p>
              </div>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 transition-all" />
          </div>
        </Link>

        {/* Support Shortcut Card */}
        <Link
          href="/contact"
          className="group flex flex-col justify-between p-5 bg-white border border-[#eae8e3] rounded-[4px] hover:border-[#111111] transition-all shadow-xs"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] text-[#333333]">
                <HelpCircleIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111111]">
                  Help & Support
                </h3>
                <p className="text-xs text-[#666666]">
                  FAQs & contact channels
                </p>
              </div>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 transition-all" />
          </div>
        </Link>
      </div>

      {/* Orders Section */}
      <div className="bg-white border border-[#eae8e3] rounded-[4px] p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <PackageIcon className="h-5 w-5 text-[#333333]" />
          <h2 className="text-base font-bold text-[#111111]">
            Order History
          </h2>
        </div>

        <div className="py-8 text-center border-t border-[#f0f0f0]">
          <p className="text-xs sm:text-sm text-[#737373]">
            No orders placed yet. Browse our collections to find your style.
          </p>
          <Link
            href="/collections/jeans"
            className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-xs"
          >
            <span>Start Shopping</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
