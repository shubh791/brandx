import { siteConfig } from "@/data/site-config";

/**
 * Contact Us & Customer Support Configuration
 * Strictly relies on approved store policies and support data.
 */

export const CONTACT_HERO_DATA = {
  eyebrow: "CUSTOMER CARE",
  heading: "How can we help?",
  description:
    "Questions about your order, delivery or return? We're here to help.",
  faqLinkText: "View FAQs",
  faqHref: "/faqs",
  image: {
    src: "/images/contact/contact-hero.webp",
    alt: "BrandX Customer Care & Order Packaging",
  },
};

export const QUICK_HELP_ITEMS = [
  {
    id: "order-status",
    title: "ORDER STATUS",
    description: "Track your order",
    href: "/track-order",
    icon: "search",
  },
  {
    id: "delivery",
    title: "DELIVERY",
    description: "Shipping information",
    href: "/shipping",
    icon: "truck",
  },
  {
    id: "return-exchange",
    title: "RETURN / EXCHANGE",
    description: "Returns & exchange",
    href: "/returns",
    icon: "rotate-ccw",
  },
  {
    id: "common-questions",
    title: "COMMON QUESTIONS",
    description: "View FAQs",
    href: "/faqs",
    icon: "help-circle",
  },
];

export const HELP_TOPICS = [
  { value: "", label: "Select a topic..." },
  { value: "order", label: "Order" },
  { value: "delivery", label: "Delivery" },
  { value: "return-exchange", label: "Return / Exchange" },
  { value: "payment", label: "Payment" },
  { value: "product", label: "Product" },
  { value: "other", label: "Other" },
];

export const SUPPORT_SHORTCUTS = [
  {
    question: "Tracking an order?",
    actionText: "Track Order",
    href: "/track-order",
  },
  {
    question: "Looking for delivery details?",
    actionText: "Shipping Information",
    href: "/shipping",
  },
  {
    question: "Need to return something?",
    actionText: "Returns & Exchange",
    href: "/returns",
  },
];

export const APPROVED_SUPPORT_INFO = {
  email: siteConfig.support?.email || "support@brandx.com",
  phone: siteConfig.support?.phone || "+91 1800-000-0000",
  hours: siteConfig.support?.hours || "Mon - Sat: 9:00 AM - 8:00 PM IST",
};
