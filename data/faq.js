import { merchantConfig } from "./merchant";

/**
 * BrandX Frequently Asked Questions Data
 * Fully aligned with Razorpay-ready store policies and merchantConfig parameters.
 */

export const FAQ_HERO_DATA = {
  eyebrow: "HELP CENTER & FAQS",
  heading: "How can we help you?",
  description: "Find quick answers regarding orders, delivery timelines, returns, size exchanges, and secure payments.",
  searchPlaceholder: "Search for an answer (e.g. tracking, returns, sizing, refunds)...",
};

export const FAQ_CATEGORIES = [
  { id: "all", label: "All Topics", icon: "help-circle" },
  { id: "orders", label: "Orders", icon: "search" },
  { id: "delivery", label: "Shipping & Delivery", icon: "truck" },
  { id: "returns", label: "Returns & Refunds", icon: "rotate-ccw" },
  { id: "payments", label: "Payments & Invoicing", icon: "shield-check" },
  { id: "products", label: "Products & Fit", icon: "sparkles" },
  { id: "account", label: "Account & Privacy", icon: "user" },
];

export const FAQ_ITEMS = [
  // --- ORDERS ---
  {
    id: "orders-1",
    categoryId: "orders",
    categoryLabel: "Orders",
    question: "How can I check my order status?",
    answer:
      "You can check the current live status of your order anytime using our dedicated Track Order page (/track-order) with your Order ID or registered mobile/email.",
    keywords: ["status", "check order", "order id", "track", "where is my order"],
  },
  {
    id: "orders-2",
    categoryId: "orders",
    categoryLabel: "Orders",
    question: "Can I cancel my order before dispatch?",
    answer:
      "Yes, orders can be cancelled free of charge before they have been processed and dispatched from our fulfillment facility. Contact customer care immediately with your Order ID. Once dispatched with an active AWB, the order cannot be cancelled in transit.",
    keywords: ["cancel", "cancellation", "modify", "edit order", "stop order"],
  },
  {
    id: "orders-3",
    categoryId: "orders",
    categoryLabel: "Orders",
    question: "Where can I find my order number?",
    answer:
      "Your unique Order ID (e.g. BX-10294) is displayed immediately on the checkout confirmation screen and sent via SMS and email confirmation upon successful order placement.",
    keywords: ["order number", "order id", "confirmation", "receipt", "email"],
  },

  // --- DELIVERY ---
  {
    id: "delivery-1",
    categoryId: "delivery",
    categoryLabel: "Shipping & Delivery",
    question: "What is the estimated delivery timeline?",
    answer:
      `Our standard delivery timeline across serviceable pin codes in India is typically ${merchantConfig.policies.standardDeliveryTimeline} following order dispatch. Metro cities typically receive deliveries in 2–4 business days.`,
    keywords: ["delivery time", "how long", "timelines", "courier", "speed"],
  },
  {
    id: "delivery-2",
    categoryId: "delivery",
    categoryLabel: "Shipping & Delivery",
    question: "Where does BrandX deliver?",
    answer:
      "We deliver to thousands of serviceable postal pin codes across India through premier national logistics carriers including Bluedart, Delhivery, and Ecom Express.",
    keywords: ["deliver", "shipping locations", "pincode", "india", "coverage"],
  },
  {
    id: "delivery-3",
    categoryId: "delivery",
    categoryLabel: "Shipping & Delivery",
    question: "How much are shipping charges?",
    answer:
      `Shipping charges are ${merchantConfig.policies.shippingChargesDescription}. Any applicable shipping fee or promotional free shipping discount is transparently shown in your cart and order summary before payment.`,
    keywords: ["shipping cost", "delivery fee", "charges", "free shipping", "cost"],
  },
  {
    id: "delivery-4",
    categoryId: "delivery",
    categoryLabel: "Shipping & Delivery",
    question: "What happens if I miss my delivery attempt?",
    answer:
      "Our courier delivery executive will make up to three (3) delivery attempts. If you are unavailable, the carrier will contact you to reschedule delivery. Ensure your contact number is active and reachable.",
    keywords: ["unsuccessful", "missed delivery", "reattempt", "not home", "failed"],
  },

  // --- RETURNS & EXCHANGE ---
  {
    id: "returns-1",
    categoryId: "returns",
    categoryLabel: "Returns & Refunds",
    question: "What is the BrandX return window?",
    answer:
      `We offer a customer-friendly return window ${merchantConfig.policies.returnWindowDescription} from the verified date of delivery. Items must be unworn, unwashed, and retain all original BrandX tags and packaging.`,
    keywords: ["return window", "days to return", "policy", "eligibility", "return period"],
  },
  {
    id: "returns-2",
    categoryId: "returns",
    categoryLabel: "Returns & Refunds",
    question: "How do I request a size exchange?",
    answer:
      "If you need a different size or fit, submit an exchange request via our Contact Us page or email support@brandx.com with your Order ID. Once the original item is collected and verified, the replacement size is dispatched promptly.",
    keywords: ["exchange", "swap size", "size change", "fit exchange", "replace"],
  },
  {
    id: "returns-3",
    categoryId: "returns",
    categoryLabel: "Returns & Refunds",
    question: "How and when will I receive my refund?",
    answer:
      `Once your return arrives at our hub and passes quality inspection, the refund is initiated ${merchantConfig.policies.refundInitiationTimeline}. For prepaid orders (Cards, UPI, Net Banking), refunds are credited to the original payment source within ${merchantConfig.policies.prepaidRefundBankSettlement}. For COD orders, refunds are sent via direct bank transfer within ${merchantConfig.policies.codRefundBankSettlement} or issued as store credit.`,
    keywords: ["refund timeline", "money back", "refund status", "bank transfer", "source refund"],
  },
  {
    id: "returns-4",
    categoryId: "returns",
    categoryLabel: "Returns & Refunds",
    question: "Which items are non-returnable?",
    answer:
      "For hygiene reasons, innerwear, socks, perfumes/colognes, and personal grooming items are non-returnable once opened. Items marked as Final Sale or Clearance are also non-returnable unless defective upon delivery.",
    keywords: ["non-returnable", "hygiene", "final sale", "clearance", "exceptions"],
  },

  // --- PAYMENTS ---
  {
    id: "payments-1",
    categoryId: "payments",
    categoryLabel: "Payments & Invoicing",
    question: "What payment methods are accepted?",
    answer:
      "We accept major online payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Debit & Credit Cards (Visa, Mastercard, RuPay, Amex), Net Banking, and Cash on Delivery (where eligible).",
    keywords: ["payment methods", "upi", "cards", "credit card", "debit card", "net banking", "cod"],
  },
  {
    id: "payments-2",
    categoryId: "payments",
    categoryLabel: "Payments & Invoicing",
    question: "Is my payment secure on BrandX?",
    answer:
      `Yes, 100% secure. All online transactions are processed through authorized, PCI-DSS Level 1 compliant payment gateways (${merchantConfig.policies.paymentGateway}) using 256-bit SSL encryption. BrandX does NOT store your full card details, CVV, or banking PINs.`,
    keywords: ["secure", "ssl", "safety", "encryption", "razorpay", "pci-dss"],
  },
  {
    id: "payments-3",
    categoryId: "payments",
    categoryLabel: "Payments & Invoicing",
    question: "What if money is deducted but my order is not confirmed?",
    answer:
      "If a payment is debited during a network interruption without generating an order, your bank will automatically reverse the amount within standard interbank cycles (usually 3 to 5 business days). You can also share your payment reference ID with our support desk for verification.",
    keywords: ["deducted", "payment failed", "debited", "unconfirmed", "double charge"],
  },

  // --- PRODUCTS ---
  {
    id: "products-1",
    categoryId: "products",
    categoryLabel: "Products & Fit",
    question: "How do I find the right size?",
    answer:
      "Each product page includes an accurate BrandX Size Chart with chest, waist, and length measurements in inches and centimeters. If you are between sizes, we generally recommend sizing up for a relaxed fit.",
    keywords: ["size chart", "fit", "measurements", "sizing", "chest size"],
  },
  {
    id: "products-2",
    categoryId: "products",
    categoryLabel: "Products & Fit",
    question: "Are prices inclusive of taxes (GST)?",
    answer:
      `Yes, all product prices listed on BrandX are in ${merchantConfig.policies.currency} and are inclusive of all applicable Goods and Services Tax (GST). There are no unexpected tax additions at checkout.`,
    keywords: ["gst", "taxes", "price inclusive", "hidden charges", "inr"],
  },

  // --- ACCOUNT ---
  {
    id: "account-1",
    categoryId: "account",
    categoryLabel: "Account & Privacy",
    question: "Do I need an account to place an order?",
    answer:
      "No, you can check out quickly using guest checkout with your mobile number and delivery address. Creating an account allows you to track past orders, save addresses, and access your wishlist easily.",
    keywords: ["guest checkout", "account required", "sign in", "register"],
  },
  {
    id: "account-2",
    categoryId: "account",
    categoryLabel: "Account & Privacy",
    question: "How is my personal data protected?",
    answer:
      "We strictly adhere to Indian data privacy regulations and never sell your personal information to third-party marketers. For full details, please review our comprehensive Privacy Policy (/privacy).",
    keywords: ["privacy", "data safety", "spam", "data protection", "security"],
  },
];
