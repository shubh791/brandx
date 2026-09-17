"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useAuth } from "@/context/AuthContext";
import { ANNOUNCEMENT_TEXT } from "@/data/navigation";

export function AnnouncementBar() {
  const { isAuthenticated, openAuthModal } = useAuth();

  const handleTrackOrderClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      openAuthModal({
        message: "Login to track your order",
        redirectUrl: "/track-order",
      });
    }
  };

  return (
    <div className="w-full bg-[#f5f5f5] text-[#4a4a4a] border-b border-[#e5e5e5] text-[12px] font-normal select-none">
      <Container size="full">
        <div className="flex h-8 sm:h-8.5 items-center justify-between">
          {/* Offer text */}
          <div className="flex-1 text-center sm:text-left truncate">
            <span className="inline-block hover:text-[#111111] transition-colors">
              {ANNOUNCEMENT_TEXT.desktop.left}
            </span>
          </div>

          {/* Quick utility links - Hidden on small mobile */}
          <div className="hidden sm:flex items-center text-[#555555]">
            {/* 1. Help -> /contact (No login required) */}
            <Link
              href="/contact"
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Help
            </Link>

            <span className="mx-2 text-[#cccccc] select-none">|</span>

            {/* 2. Track Order -> /track-order (Authenticated) or /account/login (Logged out) */}
            <Link
              href={
                isAuthenticated
                  ? "/track-order"
                  : "/account/login?redirect=/track-order"
              }
              onClick={handleTrackOrderClick}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Track Order
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
