"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Portal } from "@/components/common/Portal";
import { LoginForm } from "./LoginForm";
import { XIcon } from "@/components/common/Icons";

export function LoginModal() {
  const { authModal, closeAuthModal } = useAuth();

  // Robust, iOS-safe background scroll lock
  useScrollLock(authModal.isOpen);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!authModal.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeAuthModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [authModal.isOpen, closeAuthModal]);

  if (!authModal.isOpen) return null;

  return (
    <Portal>
      {/* Full Viewport Dark Backdrop */}
      <div
        className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-xs transition-opacity duration-200"
        onClick={closeAuthModal}
        aria-hidden="true"
      />

      {/* ========================================================= */}
      {/* 1. MOBILE BOTTOM SHEET (< sm)                              */}
      {/* Fixed to bottom, 100% viewport width, zero transforms    */}
      {/* ========================================================= */}
      <div
        className="sm:hidden fixed inset-x-0 bottom-0 z-[100] w-full max-w-none m-0 p-0 bg-white rounded-t-[22px] border-t border-[#eae8e3] shadow-2xl overflow-y-auto overscroll-contain max-h-[calc(100dvh-2rem)] box-border"
        role="dialog"
        aria-modal="true"
        aria-label="Sign In"
      >
        {/* Mobile Centered Drag Handle + Close Button */}
        <div className="relative flex items-center justify-center pt-3 pb-1 px-5">
          <div className="w-10 h-1 bg-[#dcdcdc] rounded-full" />
          <button
            type="button"
            onClick={closeAuthModal}
            className="absolute right-4 top-2.5 flex h-8 w-8 items-center justify-center rounded-full text-[#777777] hover:text-black hover:bg-[#f2f2f2] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Inner Content Container: clamped padding & min-w-0 */}
        <div className="w-full max-w-[480px] mx-auto min-w-0 box-border">
          <LoginForm
            customMessage={authModal.message}
            isModal={true}
            onSuccess={closeAuthModal}
            redirectUrl={authModal.redirectUrl}
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP CENTERED MODAL (>= sm)                         */}
      {/* ========================================================= */}
      <div
        className="hidden sm:flex fixed inset-0 z-[100] items-center justify-center p-4 md:p-6 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-label="Sign In"
      >
        <div className="pointer-events-auto relative w-full max-w-md bg-white rounded-[4px] border border-[#eae8e3] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-150">
          {/* Desktop Close Button */}
          <button
            type="button"
            onClick={closeAuthModal}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full text-[#666666] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <XIcon className="h-5 w-5" />
          </button>

          {/* Desktop Form */}
          <LoginForm
            customMessage={authModal.message}
            isModal={true}
            onSuccess={closeAuthModal}
            redirectUrl={authModal.redirectUrl}
          />
        </div>
      </div>
    </Portal>
  );
}

// Alias for backwards compatibility
export const AuthModal = LoginModal;


