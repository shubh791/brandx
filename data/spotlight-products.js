/**
 * Brand Spotlight Products
 * Structured cleanly to mirror Shopify Storefront API Product schema.
 */

export const SPOTLIGHT_PRODUCTS = [
  {
    id: "prod_01",
    handle: "relaxed-fit-denim",
    title: "Relaxed Fit Denim Jeans",
    featuredImage: {
      url: "/images/products/relaxed-fit-denim/primary.webp",
      altText: "BrandX Relaxed Fit Denim Jeans",
    },
    price: {
      amount: 1499,
      currencyCode: "INR",
    },
    compareAtPrice: {
      amount: 1999,
      currencyCode: "INR",
    },
    availableForSale: true,
    badge: "SALE",
    vendor: "BrandX",
    category: "Jeans",
  },
  {
    id: "prod_02",
    handle: "linen-blend-overshirt",
    title: "Linen Blend Casual Shirt",
    featuredImage: {
      url: "/images/products/linen-blend-overshirt/primary.webp",
      altText: "BrandX Linen Blend Casual Shirt",
    },
    price: {
      amount: 1299,
      currencyCode: "INR",
    },
    compareAtPrice: {
      amount: 1699,
      currencyCode: "INR",
    },
    availableForSale: true,
    badge: "SALE",
    vendor: "BrandX",
    category: "Shirts",
  },
  {
    id: "prod_03",
    handle: "heavyweight-boxy-tee",
    title: "Heavyweight Boxy T-Shirt",
    featuredImage: {
      url: "/images/products/heavyweight-boxy-tee/primary.webp",
      altText: "BrandX Heavyweight Boxy T-Shirt",
    },
    price: {
      amount: 799,
      currencyCode: "INR",
    },
    compareAtPrice: {
      amount: 999,
      currencyCode: "INR",
    },
    availableForSale: true,
    badge: "NEW",
    vendor: "BrandX",
    category: "T-Shirts",
  },
  {
    id: "prod_04",
    handle: "urban-runner-sneaker",
    title: "Urban Runner Lifestyle Shoes",
    featuredImage: {
      url: "/images/products/urban-runner-sneaker/primary.webp",
      altText: "BrandX Urban Runner Lifestyle Shoes",
    },
    price: {
      amount: 2499,
      currencyCode: "INR",
    },
    compareAtPrice: {
      amount: 3499,
      currencyCode: "INR",
    },
    availableForSale: true,
    badge: "SALE",
    vendor: "BrandX",
    category: "Shoes",
  },
  {
    id: "prod_05",
    handle: "minimalist-chronograph",
    title: "Minimalist Chrono Watch",
    featuredImage: {
      url: "/images/products/minimalist-chronograph/primary.webp",
      altText: "BrandX Minimalist Chrono Watch",
    },
    price: {
      amount: 3999,
      currencyCode: "INR",
    },
    compareAtPrice: {
      amount: 4999,
      currencyCode: "INR",
    },
    availableForSale: true,
    badge: null,
    vendor: "BrandX",
    category: "Watches",
  },
];
