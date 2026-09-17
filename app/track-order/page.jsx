"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Container } from "@/components/ui/Container";
import { TruckIcon, SearchIcon, ArrowRightIcon, PackageIcon } from "@/components/common/Icons";

export default function TrackOrderPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, user } = useAuth();
  const [orderNumber, setOrderNumber] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace("/account/login?redirect=/track-order");
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center bg-[#faf9f8]">
        <div className="h-8 w-8 rounded-full border-2 border-[#111111] border-t-transparent animate-spin" />
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <main className="w-full bg-[#faf9f8] min-h-[70vh] py-8 sm:py-12">
      <Container size="md">
        <div className="bg-white border border-[#eae8e3] rounded-[4px] p-6 sm:p-8 shadow-xs">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f5] text-[#111111]">
              <TruckIcon className="h-6 w-6" />
            </div>
            <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#737373]">
              Order Tracking
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mt-1">
              Track Your Order
            </h1>
            <p className="text-xs sm:text-sm text-[#666666] mt-1.5">
              Signed in as <span className="font-semibold text-[#111111]">+91 {user?.mobile}</span>
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleTrack} className="max-w-md mx-auto space-y-4">
            <div>
              <label
                htmlFor="order-id"
                className="block text-xs font-semibold text-[#333333] uppercase tracking-wider mb-1.5"
              >
                Order ID / Tracking Number
              </label>
              <div className="relative flex rounded-[3px] border border-[#d1d1d1] focus-within:border-[#111111] focus-within:ring-1 focus-within:ring-[#111111] overflow-hidden">
                <input
                  id="order-id"
                  type="text"
                  value={orderNumber}
                  onChange={(e) => {
                    setOrderNumber(e.target.value);
                    if (hasSearched) setHasSearched(false);
                  }}
                  placeholder="e.g. BX-89421"
                  required
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none uppercase font-medium tracking-wide"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
            >
              <SearchIcon className="h-4 w-4" />
              <span>Track Status</span>
            </button>
          </form>

          {/* Search result state */}
          {hasSearched && (
            <div className="mt-8 max-w-md mx-auto p-4 bg-[#faf9f8] border border-[#eae8e3] rounded-[3px] text-center animate-in fade-in duration-150">
              <PackageIcon className="h-6 w-6 text-[#777777] mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                No tracking information found for &ldquo;{orderNumber}&rdquo;
              </p>
              <p className="text-xs text-[#666666] mt-1">
                Please verify your order number or contact customer care if your order was placed recently.
              </p>
            </div>
          )}

          {/* Need help */}
          <div className="mt-8 pt-6 border-t border-[#f0f0f0] text-center">
            <p className="text-xs text-[#737373]">
              Need help finding your order details?
            </p>
            <div className="mt-2 flex items-center justify-center gap-4 text-xs font-medium text-[#111111]">
              <Link href="/contact" className="hover:text-[#e11d48] underline transition-colors">
                Contact Support
              </Link>
              <span className="text-[#cccccc]">•</span>
              <Link href="/faq" className="hover:text-[#e11d48] underline transition-colors">
                Delivery FAQs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
