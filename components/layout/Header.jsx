"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/common/Logo";
import {
  MenuIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@/components/common/Icons";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { AnnouncementBar } from "./AnnouncementBar";
import { SearchBar } from "./SearchBar";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ProfileDropdown } from "./ProfileDropdown";
import { cn } from "@/lib/utils";

export function Header({ className = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, openAuthModal } = useAuth();
  const { wishlistCount, isHydrated } = useWishlist();
  const closeTimeoutRef = useRef(null);

  const hasWishlist = isAuthenticated && isHydrated && wishlistCount > 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean up any pending close timers on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Desktop hover interactions (instant open, debounced 200ms close to cross gaps)
  const handleProfileMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setIsProfileOpen(true);
    }
  };

  const handleProfileMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      closeTimeoutRef.current = setTimeout(() => {
        setIsProfileOpen(false);
        closeTimeoutRef.current = null;
      }, 200);
    }
  };

  const handleProfileClick = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProfileOpen((prev) => !prev);
  };

  const handleWishlistClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      openAuthModal({
        message: "Login to save your favourites",
        redirectUrl: "/wishlist",
      });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white transition-shadow duration-200",
        isScrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.06)]" : "shadow-none",
        className
      )}
    >
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Header */}
      <div className="w-full border-b border-[#e5e5e5] bg-white">
        <Container size="full">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4 sm:gap-6">
            {/* Left: Mobile Hamburger + Logo */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex lg:hidden h-10 w-10 items-center justify-center rounded-md text-[#222222] hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <MenuIcon className="h-6 w-6" />
              </button>

              <Logo size="md" />
            </div>

            {/* Center: Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 justify-center px-4 max-w-2xl">
              <SearchBar variant="desktop" />
            </div>

            {/* Right: Actions (Account, Wishlist, Cart) */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 text-[#222222]">
              {/* Profile / Account Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={handleProfileMouseEnter}
                onMouseLeave={handleProfileMouseLeave}
              >
                <button
                  type="button"
                  data-profile-trigger="true"
                  onClick={handleProfileClick}
                  aria-label={isAuthenticated ? "Your Account" : "Profile and Sign In"}
                  aria-haspopup="true"
                  aria-expanded={isProfileOpen}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full transition-colors cursor-pointer",
                    isProfileOpen
                      ? "bg-[#f5f5f5] text-[#000000]"
                      : "hover:bg-[#f5f5f5] hover:text-[#000000]"
                  )}
                >
                  <UserIcon className="h-5 w-5" />
                </button>

                {/* Profile Dropdown / Mobile Bottom Sheet */}
                <ProfileDropdown
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                />
              </div>

              {/* Wishlist Link */}
              <Link
                href={isAuthenticated ? "/wishlist" : "/account/login?redirect=/wishlist"}
                onClick={handleWishlistClick}
                aria-label={
                  hasWishlist
                    ? `Wishlist, ${wishlistCount} ${
                        wishlistCount === 1 ? "item" : "items"
                      }`
                    : "Wishlist"
                }
                className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors cursor-pointer"
              >
                <HeartIcon className="h-5 w-5" />
                {hasWishlist && (
                  <span
                    className="absolute top-1.5 right-1.5 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-[#e11d48] text-[10px] font-bold text-white leading-none shadow-xs"
                    aria-hidden="true"
                  >
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart / Shopping Bag Link */}
              <Link
                href="/cart"
                aria-label="Shopping bag"
                className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5] hover:text-[#000000] transition-colors cursor-pointer"
              >
                <ShoppingBagIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Full-Width Search Bar */}
          <div className="lg:hidden pb-3 pt-0.5">
            <SearchBar variant="mobile" />
          </div>
        </Container>

        {/* 3. Desktop Category Navigation */}
        <DesktopNav />
      </div>

      {/* 4. Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
