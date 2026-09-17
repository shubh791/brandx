"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import {
  PackageIcon,
  HeartIcon,
  TruckIcon,
  HelpCircleIcon,
  UserIcon,
  RotateCcwIcon,
  ChevronRightIcon,
  XIcon,
} from "@/components/common/Icons";

export function ProfileDropdown({ isOpen, onClose }) {
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();
  const dropdownRef = useRef(null);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lock scroll ONLY on mobile bottom sheet (not on desktop hover)
  useScrollLock(isOpen && isMobileScreen);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close when clicking outside desktop dropdown
  useEffect(() => {
    if (!isOpen) return;

    const handleDocumentClick = (e) => {
      // If clicking the profile trigger button, let button click handler toggle it
      if (e.target && e.target.closest && e.target.closest("[data-profile-trigger]")) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAuthAction = (message, redirectUrl) => {
    if (!isAuthenticated) {
      openAuthModal({ message, redirectUrl });
    }
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP DROPDOWN (Anchored below Profile icon)          */}
      {/* ========================================================= */}
      <div
        ref={dropdownRef}
        className="hidden sm:block absolute right-0 top-full mt-2 w-[280px] sm:w-[300px] bg-white border border-[#eae8e3] rounded-[4px] shadow-[0_10px_35px_rgba(0,0,0,0.12)] z-50 p-4 sm:p-5 animate-in fade-in zoom-in-95 duration-150 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
        role="menu"
        aria-orientation="vertical"
      >
        {!isAuthenticated ? (
          /* Desktop Logged Out View */
          <div>
            <div className="pb-3 text-left">
              <h3 className="text-sm sm:text-base font-bold text-[#111111] tracking-tight">
                Welcome
              </h3>
              <p className="text-xs text-[#666666] mt-0.5 leading-snug">
                Sign in to access your orders, wishlist and account.
              </p>
            </div>

            <div className="mt-1">
              <button
                type="button"
                onClick={() =>
                  handleAuthAction(
                    "Sign in to access your account and continue shopping.",
                    "/account"
                  )
                }
                className="w-full py-2.5 px-4 bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-all shadow-xs active:scale-[0.99] cursor-pointer text-center"
              >
                LOGIN / SIGN UP
              </button>
            </div>

            <div className="my-3 border-t border-[#f0f0f0]" />

            <nav className="flex flex-col space-y-0.5 text-left" aria-label="Profile navigation">
              <button
                type="button"
                onClick={() =>
                  handleAuthAction("Login to view your orders", "/account/orders")
                }
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors text-left cursor-pointer"
              >
                <PackageIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Orders</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleAuthAction("Login to save your favourites", "/wishlist")
                }
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors text-left cursor-pointer"
              >
                <HeartIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Wishlist</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleAuthAction("Login to track your order", "/track-order")
                }
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors text-left cursor-pointer"
              >
                <TruckIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Track Order</span>
              </button>

              <Link
                href="/contact"
                onClick={onClose}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors text-left"
              >
                <HelpCircleIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        ) : (
          /* Desktop Logged In View */
          <div>
            <div className="pb-3 text-left">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#737373]">
                Account
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#111111] tracking-tight">
                Hi, {user.name || user.firstName || `+91 ${user.mobile}`}
              </h3>
              <p className="text-[11px] text-[#666666] mt-0.5">
                BrandX Member
              </p>
            </div>

            <div className="my-2 border-t border-[#f0f0f0]" />

            <nav className="flex flex-col space-y-0.5 text-left" aria-label="Authenticated account navigation">
              <Link
                href="/account"
                onClick={onClose}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors"
              >
                <UserIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>My Account</span>
              </Link>

              <Link
                href="/account/orders"
                onClick={onClose}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors"
              >
                <PackageIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>My Orders</span>
              </Link>

              <Link
                href="/wishlist"
                onClick={onClose}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors"
              >
                <HeartIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Wishlist</span>
              </Link>

              <Link
                href="/account/addresses"
                onClick={onClose}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors"
              >
                <UserIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Saved Addresses</span>
              </Link>

              <Link
                href="/track-order"
                onClick={onClose}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#333333] hover:text-black hover:bg-[#f7f7f7] rounded-[2px] transition-colors"
              >
                <TruckIcon className="h-4 w-4 text-[#777777] shrink-0" />
                <span>Track Order</span>
              </Link>

              <div className="my-2 border-t border-[#f0f0f0]" />

              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 py-2 px-2 text-xs font-semibold text-[#dc2626] hover:bg-red-50 rounded-[2px] transition-colors text-left cursor-pointer"
              >
                <RotateCcwIcon className="h-4 w-4 text-[#dc2626] shrink-0" />
                <span>Log Out</span>
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE BOTTOM SHEET (Compact, Content-Driven Panel)    */}
      {/* ========================================================= */}
      <div className="sm:hidden fixed inset-0 z-50 flex flex-col justify-end">
        {/* Full Viewport Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 z-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Content-driven Bottom Sheet */}
        <div
          className="relative z-10 w-full max-h-[calc(100dvh-2.5rem)] overflow-y-auto overscroll-contain bg-white rounded-t-[22px] px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] border-t border-[#eae8e3] shadow-2xl animate-in slide-in-from-bottom duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Account Menu"
        >
          {/* Centered Drag Handle + Subtle Close Button */}
          <div className="relative flex items-center justify-center pt-1 pb-3">
            <div className="w-10 h-1 bg-[#dcdcdc] rounded-full" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-[#777777] hover:text-black hover:bg-[#f2f2f2] transition-colors cursor-pointer"
              aria-label="Close account menu"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          {!isAuthenticated ? (
            /* Mobile Logged Out View */
            <div className="space-y-3.5">
              {/* Header */}
              <div className="text-left">
                <h3 className="text-base font-bold text-[#111111] tracking-tight">
                  Welcome
                </h3>
                <p className="text-xs text-[#666666] mt-0.5 leading-snug">
                  Sign in to access your orders, wishlist and account.
                </p>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() =>
                  handleAuthAction(
                    "Sign in to access your account and continue shopping.",
                    "/account"
                  )
                }
                className="w-full py-3 px-4 bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-[3px] transition-all shadow-xs active:scale-[0.99] cursor-pointer text-center"
              >
                LOGIN / SIGN UP
              </button>

              {/* Divider */}
              <div className="border-t border-[#f0f0f0]" />

              {/* Touch-friendly rows (~48-52px height) */}
              <div className="divide-y divide-[#f5f5f5] text-left">
                <button
                  type="button"
                  onClick={() =>
                    handleAuthAction("Login to view your orders", "/account/orders")
                  }
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <PackageIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Orders</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleAuthAction("Login to save your favourites", "/wishlist")
                  }
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HeartIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Wishlist</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleAuthAction("Login to track your order", "/track-order")
                  }
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <TruckIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Track Order</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </button>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircleIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Contact Us</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </Link>
              </div>
            </div>
          ) : (
            /* Mobile Logged In View */
            <div className="space-y-3">
              <div className="text-left pb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#737373]">
                  Account
                </span>
                <h3 className="text-base font-bold text-[#111111] tracking-tight">
                  Hi, {user.name || user.firstName || `+91 ${user.mobile}`}
                </h3>
                <p className="text-[11px] text-[#666666] mt-0.5">
                  BrandX Member
                </p>
              </div>

              <div className="border-t border-[#f0f0f0]" />

              <div className="divide-y divide-[#f5f5f5] text-left">
                <Link
                  href="/account"
                  onClick={onClose}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>My Account</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </Link>

                <Link
                  href="/account/orders"
                  onClick={onClose}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <PackageIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>My Orders</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </Link>

                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HeartIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Wishlist</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </Link>

                <Link
                  href="/account/addresses"
                  onClick={onClose}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Saved Addresses</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </Link>

                <Link
                  href="/track-order"
                  onClick={onClose}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-medium text-[#222222] hover:text-black active:bg-[#f9f9f9] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <TruckIcon className="h-4.5 w-4.5 text-[#666666]" />
                    <span>Track Order</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#aaaaaa]" />
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between min-h-[50px] py-3 text-xs sm:text-sm font-semibold text-[#dc2626] active:bg-red-50 transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <RotateCcwIcon className="h-4.5 w-4.5 text-[#dc2626]" />
                    <span>Log Out</span>
                  </div>
                  <ChevronRightIcon className="h-4 w-4 text-[#dc2626]/50" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
