import { PRODUCTS, getProductByHandle } from "./products";

/**
 * Brand Spotlight Products
 * Re-exports curated spotlight products from central data/products.js
 */
export const SPOTLIGHT_PRODUCTS = [
  getProductByHandle("straight-fit-mid-blue-jeans") || PRODUCTS[0],
  getProductByHandle("linen-blend-casual-shirt") || PRODUCTS[15],
  getProductByHandle("heavyweight-boxy-tee") || PRODUCTS[20],
  getProductByHandle("urban-runner-lifestyle-shoes") || PRODUCTS[25],
  getProductByHandle("minimalist-chrono-watch") || PRODUCTS[35],
].filter(Boolean);
