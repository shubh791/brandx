/**
 * BrandX Frequently Asked Questions Data
 * Organized into clear, customer-friendly categories without unverified promises.
 */

export const FAQ_HERO_DATA = {
  eyebrow: "HELP CENTER",
  heading: "How can we help?",
  description: "Find quick answers about orders, delivery, returns and more.",
  searchPlaceholder: "Search for an answer (e.g. tracking, returns, sizing)...",
};

export const FAQ_CATEGORIES = [
  { id: "all", label: "All Topics", icon: "help-circle" },
  { id: "orders", label: "Orders", icon: "search" },
  { id: "delivery", label: "Delivery", icon: "truck" },
  { id: "returns", label: "Returns & Exchange", icon: "rotate-ccw" },
  { id: "payments", label: "Payments", icon: "shield-check" },
  { id: "products", label: "Products", icon: "sparkles" },
  { id: "account", label: "Account", icon: "user" },
];

export const FAQ_ITEMS = [
  // --- ORDERS ---
  {
    id: "orders-1",
    categoryId: "orders",
    categoryLabel: "Orders",
    question: "How can I check my order status?",
    answer:
      "You can check the current status of your order anytime using our dedicated Track Order page with your order ID or registered phone/email.",
    keywords: ["status", "check order", "order id", "track", "where is my order"],
  },
  {
    id: "orders-2",
    categoryId: "orders",
    categoryLabel: "Orders",
    question: "Can I change my order after placing it?",
    answer:
      "Once an order is processed for packing, changes cannot be made directly. Please reach out to our customer care team promptly if you need urgent updates.",
    keywords: ["change", "modify", "cancel", "edit order", "address change"],
  },
  {
    id: "orders-3",
    categoryId: "orders",
    categoryLabel: "Orders",
    question: "Where can I find my order number?",
    answer:
      "Your order number is included in your order confirmation email and SMS sent immediately after a successful purchase.",
    keywords: ["order number", "order id", "confirmation", "receipt", "email"],
  },

  // --- DELIVERY ---
  {
    id: "delivery-1",
    categoryId: "delivery",
    categoryLabel: "Delivery",
    question: "How can I track my order?",
    answer:
      "Once your package is dispatched, tracking details and updates are sent via SMS/email and can also be tracked directly on our Track Order page.",
    keywords: ["track", "courier", "tracking number", "airway bill", "awb"],
  },
  {
    id: "delivery-2",
    categoryId: "delivery",
    categoryLabel: "Delivery",
    question: "Where does BrandX deliver?",
    answer:
      "We deliver across all major cities, towns, and serviceable pin codes throughout India via trusted courier partners.",
    keywords: ["deliver", "shipping locations", "pincode", "india", "coverage"],
  },
  {
    id: "delivery-3",
    categoryId: "delivery",
    categoryLabel: "Delivery",
    question: "What happens if delivery is unsuccessful?",
    answer:
      "Our courier partner will attempt delivery again. You will receive notifications to reschedule or confirm your availability.",
    keywords: ["unsuccessful", "missed delivery", "reattempt", "not home", "failed"],
  },

  // --- RETURNS & EXCHANGE ---
  {
    id: "returns-1",
    categoryId: "returns",
    categoryLabel: "Returns & Exchange",
    question: "How do I request a return or exchange?",
    answer:
      "You can submit a return or exchange request through our customer support page or by contacting our customer care team.",
    keywords: ["return", "exchange", "refund", "replace", "size exchange"],
  },
  {
    id: "returns-2",
    categoryId: "returns",
    categoryLabel: "Returns & Exchange",
    question: "Which items may not be eligible for return?",
    answer:
      "Items must be in their original, unused condition with all tags and packaging intact. Certain intimate or hygiene-sensitive items may be non-returnable.",
    keywords: ["ineligible", "policy", "condition", "tags", "hygiene"],
  },
  {
    id: "returns-3",
    categoryId: "returns",
    categoryLabel: "Returns & Exchange",
    question: "How will I know my request status?",
    answer:
      "You will receive real-time email and SMS status notifications once your request is received, inspected, and processed.",
    keywords: ["return status", "updates", "approval", "inspection", "refund status"],
  },

  // --- PAYMENTS ---
  {
    id: "payments-1",
    categoryId: "payments",
    categoryLabel: "Payments",
    question: "What payment methods can I use?",
    answer:
      "We support major UPI apps, credit/debit cards, net banking, and secure online payment options during checkout.",
    keywords: ["payment", "upi", "card", "credit card", "debit card", "net banking"],
  },
  {
    id: "payments-2",
    categoryId: "payments",
    categoryLabel: "Payments",
    question: "What should I do if payment is deducted but my order is not confirmed?",
    answer:
      "If payment was debited without an order confirmation, it typically auto-reverses or confirms within a few hours. Reach out to our support team with your transaction reference.",
    keywords: ["deducted", "payment failed", "debited", "unconfirmed", "transaction"],
  },
  {
    id: "payments-3",
    categoryId: "payments",
    categoryLabel: "Payments",
    question: "Is checkout secure?",
    answer:
      "Yes, all transactions are processed through encrypted, industry-standard secure payment gateways.",
    keywords: ["secure", "ssl", "safety", "encryption", "checkout safety"],
  },

  // --- PRODUCTS ---
  {
    id: "products-1",
    categoryId: "products",
    categoryLabel: "Products",
    question: "How do I choose the right size?",
    answer:
      "Refer to our detailed size chart on product pages for precise chest, waist, and length measurements to ensure the best fit.",
    keywords: ["size", "fit", "measurements", "size chart", "fitting"],
  },
  {
    id: "products-2",
    categoryId: "products",
    categoryLabel: "Products",
    question: "How can I check if an item is available?",
    answer:
      "Available sizes and stock are updated in real time on each product page.",
    keywords: ["stock", "availability", "in stock", "sizes available"],
  },
  {
    id: "products-3",
    categoryId: "products",
    categoryLabel: "Products",
    question: "Will sold-out products return?",
    answer:
      "Many popular styles and seasonal drops are restocked. You can check back regularly or subscribe to our newsletter for restock alerts.",
    keywords: ["sold out", "restock", "back in stock", "notify"],
  },

  // --- ACCOUNT ---
  {
    id: "account-1",
    categoryId: "account",
    categoryLabel: "Account",
    question: "Do I need an account to shop?",
    answer:
      "No, you can easily check out as a guest. Creating an account allows you to save addresses and view order history faster.",
    keywords: ["guest checkout", "login", "create account", "sign up"],
  },
  {
    id: "account-2",
    categoryId: "account",
    categoryLabel: "Account",
    question: "How can I view my orders?",
    answer:
      "If you checked out with an account, log in to view your past purchases. You can also track any order as a guest on our Track Order page.",
    keywords: ["order history", "past orders", "view orders", "my account"],
  },
  {
    id: "account-3",
    categoryId: "account",
    categoryLabel: "Account",
    question: "How can I update my account details?",
    answer:
      "Log in to your account dashboard to edit your profile, saved shipping addresses, and preferences.",
    keywords: ["update profile", "change address", "edit details", "account settings"],
  },
];
