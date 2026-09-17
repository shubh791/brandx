"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { WishlistHero } from "./WishlistHero";
import { WishlistEmptyState } from "./WishlistEmptyState";
import { WishlistGrid } from "./WishlistGrid";
import { WishlistLockedState } from "./WishlistLockedState";

export function WishlistView() {
  const { isAuthenticated } = useAuth();
  const { wishlistItems, wishlistCount, isHydrated, clearWishlist } =
    useWishlist();

  return (
    <div className="w-full bg-white flex flex-col flex-1">
      {/* 1. Header Hero */}
      <WishlistHero count={wishlistCount} isHydrated={isHydrated && isAuthenticated} />

      {/* 2. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {!isHydrated ? (
          // Hydration placeholder
          <div className="py-12">
            <div className="h-6 w-36 bg-[#f0f0f0] rounded animate-pulse mb-8" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex flex-col gap-2">
                  <div className="aspect-[4/5] bg-[#f5f5f5] rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-[#f0f0f0] rounded animate-pulse mt-1" />
                  <div className="h-3 w-1/3 bg-[#f0f0f0] rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        ) : !isAuthenticated ? (
          // Locked State: Login required
          <WishlistLockedState />
        ) : wishlistItems.length === 0 ? (
          // Empty State
          <WishlistEmptyState />
        ) : (
          // Populated Grid
          <WishlistGrid
            items={wishlistItems}
            onClearWishlist={clearWishlist}
          />
        )}
      </main>
    </div>
  );
}
