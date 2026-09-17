/**
 * Core Application Constants & Design Tokens for Brand X
 */

export const SITE_NAME = "Brand X";
export const SITE_TAGLINE = "Fashion made for every day";
export const SITE_DESCRIPTION = "Shop premium fashion, streetwear, and everyday essentials curated for modern living.";

export const DEFAULT_CURRENCY = {
  code: "INR",
  symbol: "₹",
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const CONTAINER_MAX_WIDTHS = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-7xl",
  full: "max-w-[1440px]",
};

export const MOTION_TRANSITIONS = {
  default: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] },
  smooth: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  spring: { type: "spring", stiffness: 300, damping: 30 },
};
