import { merchantConfig } from "./merchant";

/**
 * Global Site Configuration & Assurances
 * Centrally connected with merchantConfig
 */

export const siteConfig = {
  name: merchantConfig.brandName,
  tagline: "Fashion made for every day",
  description: "Shop Brand X jeans, shirts, trousers, and everyday wardrobe essentials.",
  url: "https://brandx.store",
  ogImage: "/og-image.jpg",
  links: merchantConfig.social,
  merchant: merchantConfig,
  assurances: [
    {
      title: "Authentic products",
      description: "100% genuine apparel",
      icon: "shield-check",
    },
    {
      title: "Easy returns",
      description: `Hassle-free ${merchantConfig.policies.returnWindowDescription}`,
      icon: "rotate-ccw",
    },
    {
      title: "Secure payments",
      description: "Safe & trusted checkout via Razorpay",
      icon: "lock",
    },
    {
      title: "BrandX support",
      description: "Dedicated customer care",
      icon: "headset",
    },
  ],
  support: merchantConfig.support,
};
