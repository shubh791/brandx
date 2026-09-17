/**
 * Shop Your Style Data
 * Features core approved BrandX categories with real collection routes.
 */

export const SHOP_YOUR_STYLE_DATA = {
  heading: "Shop Your Style",
  subheading: "Find your look. Shop it your way.",
  tiles: [
    {
      id: "jeans",
      title: "JEANS",
      subtitle: "Everyday denim, made easy.",
      linkText: "Shop Jeans",
      href: "/collections/jeans",
      image: "/images/home/shop-your-style/brandx-jeans-v2.webp",
      alt: "BrandX Jeans — Everyday denim, made easy",
      objectPosition: "object-[75%_center] sm:object-center",
      priority: true,
    },
    {
      id: "shirts",
      title: "SHIRTS",
      subtitle: "Styles for every day.",
      linkText: "Shop Shirts",
      href: "/collections/shirts",
      image: "/images/home/shop-your-style/brandx-shirts-v2.webp",
      alt: "BrandX Shirts — Styles for every day",
      objectPosition: "object-[85%_20%] sm:object-[80%_25%]",
      priority: false,
    },
    {
      id: "shoes",
      title: "SHOES",
      subtitle: "Complete your look.",
      linkText: "Shop Shoes",
      href: "/collections/shoes",
      image: "/images/home/shop-your-style/brandx-shoes-v2.webp",
      alt: "BrandX Shoes — Complete your look",
      objectPosition: "object-center",
      priority: false,
    },
  ],
};
