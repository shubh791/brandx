import { merchantConfig } from "@/data/merchant";

/**
 * Contact Us & Customer Support Configuration
 * Centralized with merchantConfig for single-source accuracy and Razorpay compliance.
 */

export const CONTACT_HERO_DATA = {
  eyebrow: "CUSTOMER CARE & ASSISTANCE",
  heading: "How can we help you today?",
  description:
    "Have questions about your order, shipping, returns, or product fits? Our customer care team is here to help.",
  faqLinkText: "Browse FAQs",
  faqHref: "/faq",
  image: {
    src: "/images/contact/contact-hero.webp",
    alt: "BrandX Customer Care & Order Packaging",
  },
};

export const QUICK_HELP_ITEMS = [
  {
    id: "order-status",
    title: "TRACK ORDER",
    description: "Real-time delivery status",
    href: "/track-order",
    icon: "search",
  },
  {
    id: "delivery",
    title: "SHIPPING POLICY",
    description: "Timelines & coverage",
    href: "/shipping",
    icon: "truck",
  },
  {
    id: "return-exchange",
    title: "RETURNS & REFUNDS",
    description: "Hassle-free returns",
    href: "/returns",
    icon: "rotate-ccw",
  },
  {
    id: "common-questions",
    title: "HELP CENTER",
    description: "Frequently asked questions",
    href: "/faq",
    icon: "help-circle",
  },
];

export const HELP_TOPICS = [
  { value: "", label: "Select a topic..." },
  { value: "order", label: "Order Status & Modifications" },
  { value: "delivery", label: "Delivery & Courier Tracking" },
  { value: "return-exchange", label: "Return, Size Exchange & Refund" },
  { value: "payment", label: "Payment, Invoicing & Billing" },
  { value: "product", label: "Product Details & Sizing Advice" },
  { value: "other", label: "Other General Inquiries" },
];

export const SUPPORT_SHORTCUTS = [
  {
    question: "Tracking your package?",
    actionText: "Track Order",
    href: "/track-order",
  },
  {
    question: "Looking for shipping details?",
    actionText: "Shipping Policy",
    href: "/shipping",
  },
  {
    question: "Need to initiate a return or swap size?",
    actionText: "Returns & Exchange",
    href: "/returns",
  },
];

export const APPROVED_SUPPORT_INFO = {
  brandName: merchantConfig.brandName,
  legalEntityName: merchantConfig.legalEntityName,
  proprietorName: merchantConfig.proprietorName,
  address: merchantConfig.address,
  email: merchantConfig.support.email,
  phone: merchantConfig.support.phone,
  hours: merchantConfig.support.hours,
  workingDays: merchantConfig.support.workingDays,
  responseTime: merchantConfig.support.responseTime,
  grievanceOfficer: merchantConfig.grievanceOfficer,
};
