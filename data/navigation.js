/**
 * Approved Brand X Navigation Categories & Links
 * Strictly follows the client-approved store taxonomy without invention.
 */

export const ANNOUNCEMENT_TEXT = {
  desktop: {
    left: "BrandX Offers | Get extra 10% off on your first order",
    links: [
      { label: "Help", href: "/contact" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  mobile: "BrandX Offers | Get extra 10% off on your first order",
};

export const NAVIGATION_CATEGORIES = [
  {
    id: "jeans",
    name: "Jeans",
    href: "/collections/jeans",
  },
  {
    id: "cotton-pants",
    name: "Cotton Pants",
    href: "/collections/cotton-pants",
  },
  {
    id: "formal-pants",
    name: "Formal Pants",
    href: "/collections/formal-pants",
  },
  {
    id: "lowers",
    name: "Lowers",
    href: "/collections/lowers",
  },
  {
    id: "shirts",
    name: "Shirts",
    href: "/collections/shirts",
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    href: "/collections/t-shirts",
  },
  {
    id: "shoes",
    name: "Shoes",
    href: "/collections/shoes",
    children: [
      { id: "shoes-sale", name: "Sale", href: "/collections/shoes-sale" },
      { id: "imported-shoes", name: "Imported Shoes", href: "/collections/imported-shoes" },
    ],
  },
  {
    id: "winter-wear",
    name: "Winter Wear",
    href: "/collections/winter-wear",
    children: [
      { id: "hoodies", name: "Hoodies", href: "/collections/hoodies" },
      { id: "zippers", name: "Zippers", href: "/collections/zippers" },
      { id: "sweatshirts", name: "Sweatshirts", href: "/collections/sweatshirts" },
      { id: "pullovers", name: "Pullovers", href: "/collections/pullovers" },
      { id: "jackets", name: "Jackets", href: "/collections/jackets" },
    ],
  },
  {
    id: "watches",
    name: "Watches",
    href: "/collections/watches",
  },
  {
    id: "more",
    name: "More",
    href: "/collections",
    children: [
      { id: "goggles", name: "Goggles", href: "/collections/goggles" },
      { id: "belts", name: "Belts", href: "/collections/belts" },
      { id: "caps", name: "Caps", href: "/collections/caps" },
      { id: "wallets", name: "Wallets", href: "/collections/wallets" },
      { id: "perfumes", name: "Perfumes", href: "/collections/perfumes" },
    ],
  },
];
