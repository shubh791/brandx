"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Container } from "@/components/ui/Container";
import { UserIcon, ArrowRightIcon } from "@/components/common/Icons";

export default function AddressesPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, user } = useAuth();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace("/account/login?redirect=/account/addresses");
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center bg-[#faf9f8]">
        <div className="h-8 w-8 rounded-full border-2 border-[#111111] border-t-transparent animate-spin" />
      </main>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <main className="w-full bg-[#faf9f8] min-h-[70vh] py-8 sm:py-12">
      <Container size="md">
        <div className="bg-white border border-[#eae8e3] rounded-[4px] p-6 sm:p-8 shadow-xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-6 mb-6 border-b border-[#eae8e3] gap-2">
            <div>
              <span className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-[#737373]">
                Customer Account
              </span>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mt-0.5">
                Saved Addresses
              </h1>
            </div>
            <span className="text-xs text-[#666666]">
              +91 {user?.mobile}
            </span>
          </div>

          {/* Addresses State */}
          <div className="py-12 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f6f5f3] text-[#888888]">
              <UserIcon className="h-7 w-7 text-[#888888]" />
            </div>
            <h2 className="text-base font-bold text-[#111111]">
              No addresses saved yet
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#666666] max-w-sm mx-auto">
              Your shipping and billing addresses will be saved here during checkout for faster orders.
            </p>

            <div className="mt-6">
              <Link
                href="/collections/jeans"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
              >
                <span>Browse Products</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
