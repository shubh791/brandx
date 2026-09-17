"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { LoginForm } from "./LoginForm";
import { XIcon } from "@/components/common/Icons";

export function LoginModal() {
  const { authModal, closeAuthModal } = useAuth();

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Sign In Modal"
    >
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={closeAuthModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-md z-10 animate-in zoom-in-95 fade-in duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full text-[#666666] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <XIcon className="h-5 w-5" />
        </button>

        {/* BrandX Unified Login Form Component */}
        <LoginForm
          customMessage={authModal.message}
          isModal={true}
          onSuccess={closeAuthModal}
        />
      </div>
    </div>
  );
}

// Alias for backwards compatibility
export const AuthModal = LoginModal;
