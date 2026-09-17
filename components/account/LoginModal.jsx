"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useScrollLock } from "@/hooks/use-scroll-lock";
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
    <div
      className="fixed inset-0 z-[60] flex flex-col justify-end sm:items-center sm:justify-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Sign In Modal"
    >
      {/* Full Viewport Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 z-0"
        onClick={closeAuthModal}
        aria-hidden="true"
      />

      {/* Responsive Modal Card: Mobile Bottom Sheet / Desktop Centered Card */}
      <div className="relative z-10 w-full max-h-[calc(100dvh-2.5rem)] sm:max-h-none sm:max-w-md bg-white rounded-t-[22px] sm:rounded-[4px] border-t sm:border border-[#eae8e3] shadow-2xl overflow-y-auto overscroll-contain animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        {/* Mobile Centered Drag Handle + Close Button */}
        <div className="sm:hidden relative flex items-center justify-center pt-3 pb-1 px-5">
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

        {/* Desktop Close Button */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="hidden sm:flex absolute top-4 right-4 z-20 h-9 w-9 items-center justify-center rounded-full text-[#666666] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <XIcon className="h-5 w-5" />
        </button>

        {/* BrandX Unified Login Form Component */}
        <LoginForm
          customMessage={authModal.message}
          isModal={true}
          onSuccess={closeAuthModal}
          redirectUrl={authModal.redirectUrl}
        />
      </div>
    </div>
  );
}

// Alias for backwards compatibility
export const AuthModal = LoginModal;

