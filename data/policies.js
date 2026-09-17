/**
 * BrandX Customer & Legal Policy Data
 * Strictly factual, realistic e-commerce policies aligned with approved store details.
 * No manufactured timelines, fake legal entities, or unverified claims.
 */

// ==========================================
// 1. SHIPPING POLICY DATA
// ==========================================
export const SHIPPING_POLICY_DATA = {
  id: "shipping",
  title: "Shipping Policy",
  eyebrow: "CUSTOMER CARE & POLICIES",
  subtitle:
    "Clear information about order processing, tracking, delivery coverage, and shipping across India.",
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/faq" },
    { label: "Shipping Policy", href: "/shipping", current: true },
  ],
  journeySteps: [
    {
      step: "01",
      title: "Order Placed",
      description:
        "Your order is received and confirmed. You receive an instant confirmation via email and SMS.",
      badge: "Instant",
    },
    {
      step: "02",
      title: "Processing & Packing",
      description:
        "Items are carefully picked, inspected for quality, and packed securely for transit.",
      badge: "Quality Checked",
    },
    {
      step: "03",
      title: "Dispatched with Courier",
      description:
        "Handed over to our trusted logistics partner. A live tracking link and AWB are generated and sent to you.",
      badge: "Live Tracking",
    },
    {
      step: "04",
      title: "Delivered to Doorstep",
      description:
        "Safely delivered to your address with contactless or OTP confirmation.",
      badge: "Doorstep Delivery",
    },
  ],
  sections: [
    {
      id: "order-processing",
      title: "Order Processing & Dispatch",
      content: [
        "All confirmed orders undergo verification and quality checks prior to dispatch from our fulfillment centers.",
        "Orders placed during standard business hours are prepared promptly. If an order is placed on a Sunday or public holiday, processing begins on the subsequent business working day.",
        "Once your order is handed over to our courier partner, you will receive an automated dispatch notification containing the courier name and tracking ID.",
      ],
    },
    {
      id: "delivery-coverage",
      title: "Delivery Coverage Across India",
      content: [
        "BrandX delivers to serviceable pin codes throughout India in partnership with reputable national logistics carriers.",
        "We serve major metropolitan cities, Tier-2 and Tier-3 cities, and regional destinations across the country.",
        "To verify delivery feasibility for your specific location, enter your 6-digit postal pin code during checkout or check the product details page.",
      ],
    },
    {
      id: "shipping-charges",
      title: "Shipping Charges & Estimated Timelines",
      content: [
        "Applicable shipping charges and promotional free-shipping eligibility are calculated transparently and displayed in your cart before final payment confirmation.",
        "Estimated delivery timelines depend on the destination pin code, courier serviceability, and distance from our dispatch hubs.",
        "During festive periods, extreme weather conditions, or unforeseen regional logistics disruptions, transit times may experience minor delays. We keep you informed throughout.",
      ],
    },
    {
      id: "order-tracking",
      title: "Real-Time Tracking & Notifications",
      content: [
        "As soon as your shipment is dispatched, a unique Airway Bill (AWB) number and direct tracking link are shared via email and SMS.",
        "You can check the real-time movement and transit milestones of your package directly on our Track Order page at any time.",
        "Tracking updates reflect live status milestones: Order Dispatched, In Transit, Arrived at Local Hub, and Out for Delivery.",
      ],
    },
    {
      id: "delivery-attempts",
      title: "Delivery Attempts & Undeliverable Shipments",
      content: [
        "Our courier delivery executive will attempt delivery at your specified shipping address. In the event you are unavailable, the carrier will re-attempt delivery or contact you to reschedule.",
        "Please ensure the provided delivery address, recipient contact number, and landmark details are accurate to avoid delivery failures.",
        "If a package remains undelivered after multiple verified attempts, it may be returned to our warehouse. Our support team will assist you in re-shipping or resolving the order.",
      ],
    },
    {
      id: "damaged-packages",
      title: "Damaged or Tampered Shipments",
      content: [
        "If the outer package appears visibly opened, damaged, or severely tampered with upon delivery, we recommend refusing acceptance or requesting the delivery partner note the damage on the delivery receipt.",
        "Please report any transit discrepancies or damaged items to BrandX Customer Care within 48 hours of delivery along with clear photographs of the package.",
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Returns & Exchange",
      description: "Learn how easy it is to initiate returns or swap sizes.",
      href: "/returns",
    },
    {
      title: "Track Your Order",
      description: "Check the current location and delivery status of your package.",
      href: "/track-order",
    },
    {
      title: "Terms & Conditions",
      description: "Review standard terms regarding orders and purchases.",
      href: "/terms",
    },
  ],
};

// ==========================================
// 2. RETURNS & EXCHANGE POLICY DATA
// ==========================================
export const RETURNS_POLICY_DATA = {
  id: "returns",
  title: "Returns & Exchange Policy",
  eyebrow: "CUSTOMER CARE & POLICIES",
  subtitle:
    "We want you to love what you wear. Enjoy straightforward, transparent returns and size exchanges.",
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/faq" },
    { label: "Returns & Exchange", href: "/returns", current: true },
  ],
  processSteps: [
    {
      step: "01",
      title: "Initiate Request",
      description:
        "Contact Customer Care or submit a request with your Order ID and reason for return or size exchange.",
      icon: "rotate-ccw",
    },
    {
      step: "02",
      title: "Pickup & Inspection",
      description:
        "Our courier partner collects the package from your doorstep. Items are checked to ensure original condition.",
      icon: "truck",
    },
    {
      step: "03",
      title: "Exchange or Refund",
      description:
        "Once verified, the replacement size is dispatched promptly or your refund is credited to your payment source.",
      icon: "shield-check",
    },
  ],
  sections: [
    {
      id: "eligibility",
      title: "Return & Exchange Eligibility",
      content: [
        "To qualify for a return or size exchange, products must remain in their original, unwashed, and unworn condition with all original BrandX tags, labels, and packaging intact.",
        "Items showing signs of wear, perfume or deodorant odors, wash marks, alterations, or missing tags will not pass inspection and cannot be accepted.",
        "Please retain the original invoice and polybag/box until you are completely satisfied with your purchase.",
      ],
    },
    {
      id: "exchange-process",
      title: "Size & Variant Exchanges",
      content: [
        "If you need a different size or fit in the same style, you can request an exchange through our customer care team.",
        "Exchanges are subject to inventory availability in the requested size. If the desired size is out of stock, you may opt for a refund or store credit.",
        "Once the original item is collected and verified, the replacement garment is dispatched with fresh tracking details.",
      ],
    },
    {
      id: "non-returnable",
      title: "Non-Returnable & Final Sale Items",
      content: [
        "For hygiene and safety standards, certain product categories—such as innerwear, socks, perfumes, and specific personal accessories—are strictly non-returnable once opened.",
        "Items marked as 'Final Sale' or 'Clearance' on the product page are ineligible for return unless received in a damaged or defective condition.",
      ],
    },
    {
      id: "refund-process",
      title: "Refund Process & Payment Modes",
      content: [
        "Once your returned item arrives at our fulfillment facility and passes quality inspection, the refund is initiated automatically.",
        "Prepaid orders (UPI, Debit/Credit Card, Net Banking) are credited back to the original source payment account through the payment gateway.",
        "Cash on Delivery (COD) orders are refunded via secure bank transfer (NEFT/UPI) after you provide verified account details, or issued as store credit per your preference.",
        "The standard processing time for the amount to reflect in your bank account depends on your issuing bank's settlement cycle.",
      ],
    },
    {
      id: "defective-incorrect",
      title: "Damaged, Defective, or Incorrect Items",
      content: [
        "If you receive a defective item or a different product/size from what you ordered, please contact our support team immediately with your Order ID and photos of the item.",
        "We will arrange an expedited reverse pickup and prioritize dispatching the correct replacement at zero additional charge.",
      ],
    },
    {
      id: "cancellation",
      title: "Order Cancellation",
      content: [
        "You can request order cancellation before the package has been processed and dispatched for shipping by contacting customer care.",
        "Once dispatched, an order cannot be cancelled in transit. You may accept delivery and subsequently initiate a standard return request.",
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Shipping Policy",
      description: "Understand dispatch, courier transit, and delivery times.",
      href: "/shipping",
    },
    {
      title: "Contact Customer Care",
      description: "Speak with our team to initiate a return or exchange request.",
      href: "/contact",
    },
    {
      title: "Frequently Asked Questions",
      description: "Quick answers to common questions about returns and refunds.",
      href: "/faq",
    },
  ],
};

// ==========================================
// 3. PRIVACY POLICY DATA
// ==========================================
export const PRIVACY_POLICY_DATA = {
  id: "privacy",
  title: "Privacy Policy",
  eyebrow: "LEGAL & DATA PROTECTION",
  subtitle:
    "We are committed to protecting your privacy and ensuring your personal information is handled safely and responsibly.",
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy", current: true },
  ],
  sections: [
    {
      id: "introduction",
      title: "1. Introduction & Scope",
      content: [
        "BrandX ('we', 'us', or 'our') values your trust and is dedicated to safeguarding the personal data you share with us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you browse our website, make purchases, or interact with our customer services.",
        "By accessing our platform, registering an account, or purchasing products, you acknowledge the terms and practices described in this policy.",
      ],
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: [
        "Personal Identification Data: When you place an order or contact us, we may collect your full name, email address, mobile phone number, shipping address, and billing address.",
        "Order & Transaction Details: Details of items purchased, order history, transaction identifiers, delivery preferences, and customer support communications.",
        "Technical & Device Information: IP address, browser type, operating system, approximate geographic location, and interaction logs collected automatically to maintain website stability and security.",
      ],
    },
    {
      id: "how-we-use-info",
      title: "3. How We Use Your Information",
      content: [
        "Order Fulfillment: Processing your purchases, verifying payment, preparing shipments, and coordinating doorstep delivery with logistics carriers.",
        "Customer Support: Responding to your inquiries, order updates, size exchange requests, and post-purchase assistance.",
        "Service Improvement: Analyzing browsing trends and storefront performance to optimize site speed, user navigation, and product availability.",
        "Security & Fraud Prevention: Detecting unauthorized access, preventing fraudulent transactions, and complying with statutory legal requirements.",
      ],
    },
    {
      id: "payment-security",
      title: "4. Payment Information Security",
      content: [
        "All digital payments made on BrandX are processed through trusted, PCI-DSS compliant third-party payment gateways with end-to-end SSL encryption.",
        "BrandX does NOT store, retain, or have access to your complete credit card numbers, debit card PINs, CVV codes, or net banking passwords.",
        "Your financial data is transmitted directly to authorized payment providers in accordance with strict security regulations.",
      ],
    },
    {
      id: "data-sharing",
      title: "5. Information Sharing with Third Parties",
      content: [
        "We do NOT sell, rent, or trade your personal data to third-party marketers.",
        "We share only necessary information with trusted service partners strictly for operational needs: logistics and courier partners for package delivery, authorized payment gateways for transaction processing, and automated SMS/email gateways for order updates.",
        "We may disclose information if required by law, governmental authority, or court order to protect our legal rights or prevent illegal activities.",
      ],
    },
    {
      id: "cookies-policy",
      title: "6. Cookies & Tracking Technologies",
      content: [
        "BrandX uses essential cookies and similar technologies to preserve your shopping bag items, remember browsing preferences, and ensure seamless navigation.",
        "You can configure your web browser to refuse cookies or alert you when cookies are sent; however, certain site features (such as maintaining cart items across tabs) may function with limited capability.",
      ],
    },
    {
      id: "customer-rights",
      title: "7. Your Rights & Choices",
      content: [
        "Access & Rectification: You may review and update your profile details and saved addresses anytime through your account dashboard or by contacting customer support.",
        "Marketing Preferences: You can opt out of promotional emails or SMS announcements at any time by clicking the 'Unsubscribe' link or adjusting your preferences.",
        "Account Deletion: You may submit a request to delete your account and associated personal data, subject to necessary legal and financial retention requirements.",
      ],
    },
    {
      id: "data-retention",
      title: "8. Data Retention & Safeguards",
      content: [
        "We retain personal data only for as long as necessary to fulfill the purposes described in this policy, maintain accurate order records, and comply with tax and commercial laws.",
        "We implement industry-standard technical and administrative safeguards, including HTTPS protocol, encrypted data storage, and access controls, to protect your data against unauthorized access.",
      ],
    },
    {
      id: "contact-privacy",
      title: "9. Policy Updates & Contact",
      content: [
        "We may periodically revise this Privacy Policy to reflect operational improvements or regulatory updates. Any changes will be posted on this page with an updated revision date.",
        "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our privacy desk via our Contact Us page.",
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Terms & Conditions",
      description: "The complete terms of service for shopping on BrandX.",
      href: "/terms",
    },
    {
      title: "Shipping Policy",
      description: "Our standards for order processing and delivery.",
      href: "/shipping",
    },
    {
      title: "Contact Customer Care",
      description: "Reach our support team for privacy or account queries.",
      href: "/contact",
    },
  ],
};

// ==========================================
// 4. TERMS & CONDITIONS DATA
// ==========================================
export const TERMS_POLICY_DATA = {
  id: "terms",
  title: "Terms & Conditions",
  eyebrow: "LEGAL & STORE POLICIES",
  subtitle:
    "The terms, rules, and conditions governing the use of BrandX storefront, account registration, and product purchases.",
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms", current: true },
  ],
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        "By visiting, browsing, registering an account, or placing an order on BrandX ('Website' or 'Service'), you agree to be bound by these Terms and Conditions ('Terms') and all accompanying store policies.",
        "If you do not agree with any part of these Terms, you should discontinue using our website and services immediately.",
      ],
    },
    {
      id: "eligibility-account",
      title: "2. Eligibility & Account Security",
      content: [
        "To make purchases on BrandX, you must be legally capable of entering into binding contracts under applicable law (typically 18 years of age or older, or with parental/guardian consent).",
        "When creating an account, you agree to provide truthful, accurate, and current information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
        "BrandX reserves the right to suspend or terminate accounts that provide misleading information or engage in abusive conduct.",
      ],
    },
    {
      id: "products-pricing",
      title: "3. Product Information, Colors & Pricing",
      content: [
        "We strive to display product colors, fabric details, and specifications as accurately as possible. However, the actual colors you see will depend on your screen calibration and device display settings.",
        "All prices listed on the website are in Indian Rupees (INR) and inclusive of applicable Goods and Services Tax (GST) unless explicitly stated otherwise.",
        "BrandX reserves the right to adjust prices, correct typographical pricing errors, or withdraw products from sale without prior notice. In the event a product is listed at an incorrect price due to an error, we reserve the right to cancel orders placed for that item with a full refund.",
      ],
    },
    {
      id: "orders-acceptance",
      title: "4. Orders, Verification & Acceptance",
      content: [
        "Placing an order constitutes an offer to purchase. An order is deemed accepted only when you receive an official order confirmation and dispatch notification with tracking credentials.",
        "BrandX reserves the right to limit order quantities, decline orders, or cancel transactions in cases of suspected unauthorized reseller activity, fraudulent payment attempts, or inventory discrepancies.",
      ],
    },
    {
      id: "payments-billing",
      title: "5. Payments & Billing",
      content: [
        "We accept various authorized payment methods including UPI, Debit/Credit Cards, Net Banking, and Cash on Delivery (where eligible).",
        "By providing payment details, you confirm that you are authorized to use the chosen payment method and authorize our payment processors to debit the total transaction amount.",
        "In cases where payment is debited but the order fails to generate, the transaction is reversed according to the standard timeline of your banking provider.",
      ],
    },
    {
      id: "shipping-returns-ref",
      title: "6. Shipping, Deliveries & Returns",
      content: [
        "All deliveries are subject to the terms detailed in our Shipping Policy. Risk of loss passes to you upon delivery of the items by the courier partner.",
        "Returns and exchanges are governed by our Returns & Exchange Policy. Products must meet condition standards to qualify for exchange or refund.",
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property Rights",
      content: [
        "All content featured on BrandX—including logos, product imagery, brand marks, graphics, user interface designs, icons, and software code—is the property of BrandX or its content suppliers and protected by copyright and trademark laws.",
        "You may not reproduce, modify, distribute, publish, or create derivative works from any content on this website without explicit written permission.",
      ],
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability",
      content: [
        "BrandX provides the website and products on an 'as is' and 'as available' basis. To the maximum extent permitted by applicable law, BrandX disclaims all warranties, express or implied.",
        "In no event shall BrandX, its directors, employees, or partners be liable for indirect, incidental, or consequential damages arising out of your use of the website or purchased merchandise.",
        "Our total liability for any claim arising from a product purchase shall not exceed the amount actually paid by you for the specific item in question.",
      ],
    },
    {
      id: "governing-law",
      title: "9. Governing Law & Dispute Resolution",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of India.",
        "Any dispute, controversy, or claim arising out of or relating to your use of the website or purchase of products shall first be addressed amicably through our Customer Support desk.",
      ],
    },
    {
      id: "terms-modifications",
      title: "10. Modifications to Terms & Contact",
      content: [
        "BrandX reserves the right to modify or update these Terms & Conditions at any time. Continued use of the website following any changes signifies your acceptance of the revised Terms.",
        "For any legal or terms-related inquiries, please reach out via our Contact Us page.",
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information.",
      href: "/privacy",
    },
    {
      title: "Returns & Exchange",
      description: "Our standards and process for product returns and size swaps.",
      href: "/returns",
    },
    {
      title: "Shipping Policy",
      description: "Information on order dispatch, tracking, and delivery.",
      href: "/shipping",
    },
  ],
};
