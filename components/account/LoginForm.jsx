"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import { ArrowRightIcon, CheckIcon } from "@/components/common/Icons";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

export function LoginForm({
  customMessage = "",
  isModal = false,
  onSuccess = null,
  redirectUrl = null,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const finalRedirectUrl =
    redirectUrl || (searchParams ? searchParams.get("redirect") : null);

  const handleInputChange = (e) => {
    // Only allow digits up to 10
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(val);
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    // Execute authentication state update
    const result = login({ mobile: mobileNumber });
    setIsSuccess(true);

    if (onSuccess) {
      onSuccess(result);
    }

    if (finalRedirectUrl) {
      setTimeout(() => {
        router.push(finalRedirectUrl);
      }, 400);
    }
  };

  return (
    <div className={cn("w-full mx-auto", isModal ? "max-w-md" : "max-w-md")}>
      {/* Container Card */}
      <div className="bg-white border border-[#eae8e3] rounded-[4px] p-6 sm:p-8 shadow-sm relative">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex justify-center mb-3.5">
            <Logo size="md" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
            Welcome to BrandX
          </h1>
          <p className="text-xs sm:text-sm text-[#666666] mt-1.5 leading-normal">
            {customMessage || "Sign in to access your account and continue shopping."}
          </p>
        </div>

        {!isSuccess ? (
          /* Mobile Number Entry Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label
                htmlFor="mobile-number"
                className="block text-xs font-semibold text-[#333333] uppercase tracking-wider mb-1.5"
              >
                Mobile Number
              </label>

              <div className="relative flex rounded-[3px] border border-[#d1d1d1] focus-within:border-[#111111] focus-within:ring-1 focus-within:ring-[#111111] overflow-hidden transition-all">
                {/* Prefix Badge */}
                <div className="flex items-center px-3.5 bg-[#faf9f8] border-r border-[#eae8e3] text-xs sm:text-sm font-semibold text-[#333333] select-none">
                  +91
                </div>

                {/* Number Input */}
                <input
                  id="mobile-number"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  pattern="[0-9]*"
                  value={mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit number"
                  className="w-full px-3.5 py-2.5 sm:py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none bg-white font-medium tracking-wide"
                  aria-invalid={!!error}
                  aria-describedby={error ? "mobile-error" : undefined}
                  autoFocus={isModal}
                />
              </div>

              {error && (
                <p id="mobile-error" className="mt-1.5 text-xs text-[#dc2626] font-medium">
                  {error}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs active:scale-[0.99] cursor-pointer"
            >
              Continue
            </button>

            {/* Reassurance Note */}
            <div className="pt-3 border-t border-[#f0f0f0]">
              <p className="text-[11.5px] sm:text-[12px] text-[#737373] text-center leading-relaxed">
                You can browse and add items to your cart without signing in.
              </p>
            </div>
          </form>
        ) : (
          /* Success confirmation */
          <div className="space-y-4 text-center animate-in fade-in duration-200">
            <div className="p-4 bg-[#faf9f8] border border-[#eae8e3] rounded-[3px]">
              <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-[#111111]">
                Signed In Successfully
              </h2>
              <p className="text-xs text-[#666666] mt-1">
                Connected as <span className="font-semibold text-[#111111]">+91 {mobileNumber}</span>
              </p>
            </div>

            {!isModal && (
              <Link
                href={finalRedirectUrl || "/account"}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[3px] bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Helpful Links Below Card */}
      {!isModal && (
        <div className="mt-6 text-center space-y-2">
          <p className="text-xs text-[#737373]">
            Need help with an order?
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#111111]">
            <Link href="/contact" className="hover:text-[#e11d48] underline transition-colors">
              Contact Support
            </Link>
            <span className="text-[#cccccc]">•</span>
            <Link href="/faq" className="hover:text-[#e11d48] underline transition-colors">
              FAQs
            </Link>
            <span className="text-[#cccccc]">•</span>
            <Link href="/track-order" className="hover:text-[#e11d48] underline transition-colors">
              Track Order
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
