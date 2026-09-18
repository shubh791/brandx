"use client";

import { useSyncExternalStore } from "react";

/**
 * Custom hook to evaluate CSS media queries.
 * @param {string} query - Media query string (e.g. '(min-width: 768px)')
 * @returns {boolean} - Matches state
 */
export function useMediaQuery(query) {
  const subscribe = (callback) => {
    if (typeof window === "undefined") return () => {};
    const media = window.matchMedia(query);
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
  };

  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Helper hook for mobile detection (< 768px).
 */
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

/**
 * Helper hook for tablet detection (768px - 1023px).
 */
export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

/**
 * Helper hook for desktop detection (>= 1024px).
 */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
