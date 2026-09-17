"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { AccountDashboard } from "@/components/account";

export default function AccountPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated } = useAuth();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace("/account/login");
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

  return (
    <main className="min-h-[70vh] bg-[#faf9f8] py-8 sm:py-12">
      <AccountDashboard />
    </main>
  );
}
