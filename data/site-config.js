/**
 * Global Site Configuration & Assurances
 * (No dummy product catalogs or fake products)
 */

export const siteConfig = {
  name: "Brand X",
  tagline: "Fashion made for every day",
  description: "Shop Brand X jeans, shirts, shoes, watches and everyday essentials.",
  url: "https://brandx.store",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  assurances: [
    {
      title: "Authentic products",
      description: "100% genuine brands",
      icon: "shield-check",
    },
    {
      title: "Easy returns",
      description: "Hassle-free returns",
      icon: "rotate-ccw",
    },
    {
      title: "Secure payments",
      description: "Safe & trusted checkout",
      icon: "lock",
    },
    {
      title: "BrandX support",
      description: "Here when you need us",
      icon: "headset",
    },
  ],
  support: {
    email: "support@brandx.com",
    phone: "+91 1800-000-0000",
    hours: "Mon - Sat: 9:00 AM - 8:00 PM IST",
  },
};
