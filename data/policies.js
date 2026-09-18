import { merchantConfig } from "./merchant";

/**
 * BrandX Customer Care, Commercial Disclosures & Legal Policy Data
 * 
 * Razorpay Payment Gateway & Indian E-Commerce Compliance Ready
 * Centralized with merchantConfig to maintain single-source integrity across all storefront policies.
 */

// ==========================================
// 1. SHIPPING POLICY DATA
// ==========================================
export const SHIPPING_POLICY_DATA = {
  id: "shipping",
  title: "Shipping & Delivery Policy",
  eyebrow: "CUSTOMER CARE & FULFILLMENT",
  subtitle:
    "Transparent information regarding order processing, India-wide delivery coverage, tracking, shipping charges, and courier timelines.",
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/faq" },
    { label: "Shipping Policy", href: "/shipping", current: true },
  ],
  journeySteps: [
    {
      step: "01",
      title: "Order Placed & Verified",
      description:
        "Your order is received and confirmed. Instant confirmation is sent via SMS and email with your Order ID.",
      badge: "Instant",
    },
    {
      step: "02",
      title: "Processing & Packaging",
      description:
        `Items undergo thorough quality inspection and are securely packed within ${merchantConfig.policies.orderProcessingTimeline}.`,
      badge: "Quality Checked",
    },
    {
      step: "03",
      title: "Dispatched with Courier",
      description:
        "Handed over to our national logistics partners. A live tracking link and Airway Bill (AWB) are generated.",
      badge: "Live Tracking",
    },
    {
      step: "04",
      title: "Doorstep Delivery",
      description:
        `Safely delivered to your address within ${merchantConfig.policies.standardDeliveryTimeline} across serviceable pin codes.`,
      badge: "Doorstep Delivery",
    },
  ],
  sections: [
    {
      id: "order-processing",
      title: "1. Order Processing & Dispatch Timelines",
      content: [
        `All confirmed orders are processed, quality-checked, and packed for shipment within ${merchantConfig.policies.orderProcessingTimeline}.`,
        "Orders placed on Sundays or gazetted public holidays are processed on the immediately following business working day.",
        "Upon packaging and dispatch from our fulfillment center, an automated shipping confirmation containing the carrier name and live tracking number (AWB) is dispatched to your registered email and mobile number.",
      ],
      highlight:
        "Orders are fulfilled through licensed national courier partners with real-time milestone tracking.",
    },
    {
      id: "delivery-coverage",
      title: "2. Delivery Coverage Across India",
      content: [
        "BrandX delivers to thousands of serviceable postal pin codes across India, covering Tier-1 metro cities, Tier-2, Tier-3 cities, and regional destinations.",
        "We partner with reputable logistics carriers including Bluedart, Delhivery, Ecom Express, and Xpressbees to ensure timely and safe transit.",
        "You can check pin code serviceability during checkout before finalizing your purchase.",
      ],
    },
    {
      id: "shipping-charges",
      title: "3. Shipping Charges & Free Shipping Eligibility",
      content: [
        `Shipping fees, where applicable, are ${merchantConfig.policies.shippingChargesDescription}. All charges are clearly displayed in your shopping cart and order summary before you make any payment.`,
        `Promotional free shipping offers are ${merchantConfig.policies.freeShippingThreshold}.`,
        "There are no hidden fees or unexpected post-purchase handling charges.",
      ],
    },
    {
      id: "estimated-timelines",
      title: "4. Estimated Delivery Timelines",
      content: [
        `Standard delivery timeline across India is typically ${merchantConfig.policies.standardDeliveryTimeline} following courier dispatch.`,
        "Major metropolitan regions (such as Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata) typically receive deliveries within 2 to 4 business days.",
        "Non-metro, regional, and North-Eastern locations generally require 4 to 7 business days depending on local logistics connectivity.",
      ],
    },
    {
      id: "order-tracking",
      title: "5. Real-Time Order Tracking",
      content: [
        "As soon as your package is dispatched, a unique Airway Bill (AWB) tracking number and direct tracking URL are provided via SMS and email.",
        "You can check live tracking updates anytime on our dedicated Track Order page (/track-order) using your Order ID or contact details.",
        "Tracking milestones reflect real-time updates: Order Picked Up, In Transit, Arrived at Local Facility, and Out for Delivery.",
      ],
    },
    {
      id: "delivery-delays",
      title: "6. Unforeseen Delays & Logistics Advisories",
      content: [
        "While we and our logistics partners endeavor to meet estimated delivery schedules, minor delays may occasionally occur during peak festive seasons, extreme weather disruptions, regional transport strikes, or unforeseen logistics bottlenecks.",
        "In the event of an extended delay, our support team proactively monitors transit status and coordinates with the carrier to expedite resolution.",
      ],
    },
    {
      id: "delivery-attempts",
      title: "7. Delivery Attempts & Failed Delivery (RTO)",
      content: [
        "Our courier delivery executive will make up to three (3) delivery attempts at your specified shipping address. If you are unavailable, the courier will attempt to reach you on your registered mobile number.",
        "Please ensure your delivery address, landmark, and contact number are accurate during checkout to prevent delivery failures.",
        "If a shipment remains undelivered after multiple verified attempts or due to an incorrect address, it will be returned to our fulfillment warehouse (Return to Origin - RTO). Our support team will contact you to arrange re-dispatch or process an appropriate resolution.",
      ],
    },
    {
      id: "damaged-packages",
      title: "8. Damaged, Tampered, or Opened Packages",
      content: [
        "If the outer delivery package appears severely crushed, punctured, opened, or tampered with at the time of delivery, please refuse delivery from the executive or request that the courier record the parcel condition.",
        `If you discover transit damage after accepting the parcel, please report the issue to BrandX Customer Care within 48 hours of delivery along with clear unboxing photographs and package details.`,
        "We will promptly arrange an expedited replacement or full refund at zero additional expense to you.",
      ],
    },
    {
      id: "shipping-support",
      title: "9. Customer Support for Shipping Queries",
      content: [
        `For any assistance with shipping, tracking updates, or address modifications before dispatch, please contact our support desk:`,
        `• Email: ${merchantConfig.support.email}`,
        `• Phone: ${merchantConfig.support.phone}`,
        `• Support Hours: ${merchantConfig.support.hours}`,
        `• Business Address: ${merchantConfig.address.formatted}`,
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Returns & Exchange",
      description: `Understand our hassle-free ${merchantConfig.policies.returnWindowDescription} policy.`,
      href: "/returns",
    },
    {
      title: "Track Your Order",
      description: "Check live location and courier status of your shipment.",
      href: "/track-order",
    },
    {
      title: "Terms & Conditions",
      description: "Review terms governing orders, deliveries, and purchases.",
      href: "/terms",
    },
  ],
};

// ==========================================
// 2. RETURNS & REFUND POLICY DATA
// ==========================================
export const RETURNS_POLICY_DATA = {
  id: "returns",
  title: "Returns, Refund & Cancellation Policy",
  eyebrow: "CUSTOMER CARE & BUYER ASSURANCE",
  subtitle:
    `We want you to feel confident in every BrandX piece. Enjoy a transparent ${merchantConfig.policies.returnWindowDescription} policy and straightforward size exchanges.`,
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/faq" },
    { label: "Returns & Refund Policy", href: "/returns", current: true },
  ],
  processSteps: [
    {
      step: "01",
      title: "Initiate Request",
      description:
        `Contact Customer Care ${merchantConfig.policies.returnWindowDescription} with your Order ID and reason for return or size exchange.`,
      icon: "rotate-ccw",
    },
    {
      step: "02",
      title: "Doorstep Reverse Pickup",
      description:
        `Our courier partner collects the package from your address ${merchantConfig.policies.reversePickupTimeline}.`,
      icon: "truck",
    },
    {
      step: "03",
      title: "Inspection & Refund / Exchange",
      description:
        `Upon quality verification at our hub, replacement size is dispatched or refund is initiated ${merchantConfig.policies.refundInitiationTimeline}.`,
      icon: "shield-check",
    },
  ],
  sections: [
    {
      id: "eligibility-window",
      title: "1. Return & Exchange Eligibility Window",
      content: [
        `BrandX provides a customer-friendly return and exchange window ${merchantConfig.policies.returnWindowDescription} from the verified date of delivery.`,
        "Return or size exchange requests submitted after the designated return period cannot be accepted by our automated system.",
        "To initiate a return or exchange, simply contact our support team or use the Contact Us page with your Order ID and contact details.",
      ],
      highlight:
        `Returns and size exchanges must be requested ${merchantConfig.policies.returnWindowDescription}.`,
    },
    {
      id: "product-condition",
      title: "2. Product Condition & Packaging Requirements",
      content: [
        "To qualify for a return, refund, or size exchange, items must satisfy strict quality criteria:",
        "• Unworn & Unwashed: The garment must be in its original, brand-new condition without signs of wear, fabric stretching, detergent scents, perfume odors, or makeup marks.",
        "• Original Tags Attached: All original BrandX brand tags, price tags, and size labels must remain securely attached and untampered.",
        "• Original Packaging: Items should be returned in their original polybag or branded box packaging along with the order invoice.",
        "Items that fail quality inspection upon return will be sent back to the customer and will not be eligible for a refund.",
      ],
    },
    {
      id: "non-returnable",
      title: "3. Non-Returnable & Final Sale Items",
      content: [
        "For hygiene and personal health safety standards, certain product categories are non-returnable once packaging is opened: innerwear, socks, perfumes/colognes, and personal grooming accessories.",
        "Items explicitly marked as 'Final Sale' or 'Clearance' on the product page are not eligible for voluntary returns, unless delivered in a damaged or defective condition.",
      ],
    },
    {
      id: "exchange-process",
      title: "4. Size & Variant Exchange Process",
      content: [
        "If you love the style but need a different size or fit, we offer size exchanges subject to inventory availability in the requested variant.",
        "Once your exchange request is approved, our courier partner will collect the original garment. Following quality verification at our facility, the new size is dispatched promptly with fresh tracking details.",
        "If your required size is out of stock, you may choose an alternative style, receive a full refund, or opt for store credit.",
      ],
    },
    {
      id: "cancellation-policy",
      title: "5. Order Cancellation Policy",
      content: [
        "You may cancel an order free of charge at any time before the package has been processed and dispatched from our fulfillment center.",
        "To cancel an eligible order, contact BrandX Customer Care immediately via email or phone with your Order ID.",
        "Once an order is handed over to the courier partner and an active Airway Bill (AWB) is generated, the shipment is in transit and cannot be cancelled. In such cases, you may accept delivery and initiate a standard return request, or inform our support desk.",
        "For prepaid orders cancelled prior to dispatch, a 100% full refund is initiated immediately back to the original payment source.",
      ],
    },
    {
      id: "refund-process-modes",
      title: "6. Refund Eligibility, Modes & Settlement Timelines",
      content: [
        `Once your returned merchandise arrives at our fulfillment facility and passes quality verification, the refund is initiated ${merchantConfig.policies.refundInitiationTimeline}.`,
        `• Prepaid Orders (Debit Card, Credit Card, Net Banking, UPI): Refunds are credited directly back to the original source bank account / card through our authorized payment gateway (${merchantConfig.policies.paymentGateway}). Standard bank processing takes ${merchantConfig.policies.prepaidRefundBankSettlement} to reflect on your bank or card statement.`,
        `• Cash on Delivery (COD) Orders: Refunds are processed via secure direct bank transfer (NEFT / IMPS / UPI) ${merchantConfig.policies.codRefundBankSettlement} after you provide verified account details, or issued instantly as store credit per your preference.`,
        "You will receive automated email and SMS confirmations as soon as the refund transaction is processed.",
      ],
      highlight:
        `Prepaid refunds are credited back to the original payment method through the payment gateway within ${merchantConfig.policies.prepaidRefundBankSettlement}.`,
    },
    {
      id: "damaged-defective",
      title: "7. Damaged, Defective, or Incorrect Products Received",
      content: [
        "BrandX conducts rigorous quality checks before dispatching every garment. However, if you receive a manufacturing defect, damaged piece, or incorrect product/size:",
        "1. Notify BrandX Customer Care within 48 hours of delivery.",
        "2. Provide your Order ID and clear photographs showing the defect or incorrect item.",
        "3. BrandX will arrange a prioritized, free reverse pickup and fast-track a replacement or full refund (including any shipping charges) at zero additional cost.",
      ],
    },
    {
      id: "return-support-contact",
      title: "8. How to Request a Return or Refund",
      content: [
        "To initiate a return, size exchange, or cancellation request, please contact our support team through any of the following channels:",
        `• Support Email: ${merchantConfig.support.email}`,
        `• Customer Care Phone: ${merchantConfig.support.phone}`,
        `• Operating Hours: ${merchantConfig.support.hours}`,
        `• Contact Page: /contact`,
        `• Registered Address: ${merchantConfig.address.formatted}`,
        "Please mention your Order ID (e.g. BX-10294) and reason for assistance for expedited resolution.",
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Shipping Policy",
      description: "Learn about order dispatch, courier partners, and transit times.",
      href: "/shipping",
    },
    {
      title: "Contact Customer Care",
      description: "Get in touch with our team to initiate a return or exchange.",
      href: "/contact",
    },
    {
      title: "Frequently Asked Questions",
      description: "Find quick answers regarding return eligibility and refunds.",
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
    "We are committed to protecting your privacy and ensuring your personal information is handled safely, transparently, and in compliance with applicable data protection laws.",
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
        `${merchantConfig.brandName} (${merchantConfig.legalEntityName}, 'we', 'us', or 'our') values your trust and is dedicated to safeguarding the personal data you share with us. This Privacy Policy governs how we collect, use, store, process, and protect your information when you visit our website, register an account, make purchases, or contact our support services.`,
        "This policy is published in accordance with the provisions of the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and applicable Indian e-commerce consumer protection regulations.",
        "By accessing our website or purchasing our products, you consent to the collection and use of information in accordance with this Privacy Policy.",
      ],
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: [
        "We collect only relevant information required to provide you with a smooth, secure shopping experience:",
        "• Personal Identification Information: Full name, mobile phone number, email address, shipping address, and billing address provided during checkout, account creation, or customer inquiries.",
        "• Order & Transaction Information: Details of purchased apparel, order history, transaction identifiers, payment method type (e.g. UPI, Credit Card, Debit Card, COD), delivery preferences, and customer service communication records.",
        "• Technical & Browsing Data: IP address, device type, browser specifications, operating system, and anonymous interaction logs collected automatically to ensure storefront security, performance monitoring, and fraud prevention.",
        "• Cookies & Local Storage: Essential cookies and session storage items used to preserve your shopping bag items, login sessions, and site preferences.",
      ],
    },
    {
      id: "how-we-use-info",
      title: "3. Purpose of Information Collection & Processing",
      content: [
        "Your personal data is collected and processed strictly for legitimate commercial and operational purposes:",
        "• Order Fulfillment: Processing purchases, verifying payment confirmations, packaging merchandise, and coordinating doorstep delivery through logistics partners.",
        "• Customer Support & Order Updates: Sending transaction receipts, shipping tracking updates (SMS/Email), size exchange coordination, and addressing support queries.",
        "• Account Security & Authentication: Authenticating customer logins, preventing unauthorized access, and managing account profiles.",
        "• Fraud Prevention & Security: Detecting and preventing suspicious transactions, fraud, bot activity, and unauthorized use of the platform.",
        "• Statutory & Regulatory Compliance: Maintaining accurate invoicing, taxation (GST) records, and complying with statutory legal obligations.",
      ],
    },
    {
      id: "payment-security",
      title: "4. Payment Information & Third-Party Payment Gateways",
      content: [
        `All online payments on BrandX are processed through authorized, PCI-DSS (Payment Card Industry Data Security Standard) Level 1 compliant payment aggregators and gateways including ${merchantConfig.policies.paymentGateway}.`,
        "IMPORTANT PAYMENT SECURITY COMMITMENT: BrandX does NOT collect, capture, store, or have access to your complete credit/debit card numbers, CVV security codes, UPI PINs, or net banking passwords.",
        "All sensitive financial transactions are encrypted with 256-bit SSL encryption and transmitted directly between your bank/card issuer and the authorized payment gateway in full compliance with Reserve Bank of India (RBI) directives.",
      ],
      highlight:
        "BrandX does not store your full card details, CVV, or banking passwords. All payments are encrypted and processed by authorized PCI-DSS compliant payment gateways.",
    },
    {
      id: "data-sharing",
      title: "5. Information Sharing with Third Parties",
      content: [
        "We do NOT sell, rent, monetize, or trade your personal information to third-party marketing agencies.",
        "We share only essential, minimal data with trusted operational service providers strictly to fulfill business services:",
        "• Logistics Partners: Courier and shipping carriers (e.g. Bluedart, Delhivery) to facilitate package delivery and reverse pickups.",
        "• Payment Processors: Authorized payment gateways (e.g. Razorpay) to securely process and settle financial transactions.",
        "• Communications Gateways: Automated transactional SMS and email service providers to deliver order confirmations and dispatch notifications.",
        "• Legal & Statutory Authorities: We may disclose data if legally required by applicable laws, court orders, or governmental law enforcement agencies to investigate fraud or protect legal rights.",
      ],
    },
    {
      id: "cookies-policy",
      title: "6. Cookies & Tracking Technologies",
      content: [
        "BrandX uses strictly necessary and functional cookies to maintain shopping cart persistence across browser tabs, remember user preferences, and optimize site navigation speed.",
        "You may configure your web browser to decline cookies; however, certain interactive storefront features (such as maintaining cart items across sessions) may experience degraded functionality.",
      ],
    },
    {
      id: "data-retention-security",
      title: "7. Data Retention & Safeguards",
      content: [
        "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, manage customer accounts, resolve commercial disputes, and satisfy legal, accounting, and tax retention rules.",
        "We employ industry-standard technical and administrative safeguards, including HTTPS SSL encryption, firewalls, and restricted administrative access protocols, to protect your data against unauthorized access, alteration, or disclosure.",
      ],
    },
    {
      id: "user-rights",
      title: "8. Your Rights & Choices",
      content: [
        "You have full control over your personal data:",
        "• Access & Review: You can view and update your profile details, contact information, and saved delivery addresses through your account dashboard.",
        "• Marketing Communications: You can opt out of non-transactional promotional messages at any time by clicking 'Unsubscribe' in emails or replying STOP to promotional SMS.",
        "• Account & Data Deletion: You may submit a formal request to delete your account and personal records by writing to our privacy support desk, subject to statutory tax and legal retention requirements.",
      ],
    },
    {
      id: "grievance-contact",
      title: "9. Grievance Officer & Contact Information",
      content: [
        "In accordance with the Information Technology Act, 2000 and Consumer Protection (E-Commerce) Rules, 2020, the contact details of the Grievance Officer for data protection and customer concerns are provided below:",
        `• Grievance Officer: ${merchantConfig.grievanceOfficer.name}`,
        `• Designation: ${merchantConfig.grievanceOfficer.designation}`,
        `• Email: ${merchantConfig.grievanceOfficer.email}`,
        `• Phone: ${merchantConfig.grievanceOfficer.phone}`,
        `• Postal Address: ${merchantConfig.grievanceOfficer.address}`,
        `• General Support: ${merchantConfig.support.email}`,
        `• Operating Hours: ${merchantConfig.support.hours}`,
        `Any privacy grievances will be acknowledged within 48 hours and redressed within statutory timelines.`,
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Terms & Conditions",
      description: "Review complete terms of service for purchasing on BrandX.",
      href: "/terms",
    },
    {
      title: "Returns & Refund Policy",
      description: "Understand return eligibility, exchanges, and refunds.",
      href: "/returns",
    },
    {
      title: "Contact Customer Care",
      description: "Reach our support and grievance desk for assistance.",
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
    `The legal terms, rules, and conditions governing the use of the BrandX website, purchases, orders, payments, and customer services.`,
  lastUpdated: "September 2026",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms", current: true },
  ],
  sections: [
    {
      id: "acceptance-terms",
      title: "1. Acceptance of Terms & Eligibility",
      content: [
        `These Terms & Conditions ('Terms') constitute a legally binding agreement between you ('Customer', 'User', or 'You') and ${merchantConfig.legalEntityName} ('${merchantConfig.brandName}', 'We', 'Us', or 'Our'), governing your access to and use of our website and purchase of merchandise.`,
        "By accessing, browsing, registering an account, or purchasing items on this website, you confirm that you are at least 18 years of age (or accessing under parental/guardian supervision) and legally competent to enter into a binding contract under the Indian Contract Act, 1872.",
        "If you do not agree with any provision of these Terms, you must discontinue using our website and services immediately.",
      ],
    },
    {
      id: "product-info-pricing",
      title: "2. Product Descriptions, Sizing & Pricing",
      content: [
        "We endeavor to describe and display our apparel, fabrics, fits, colors, and sizing charts as accurately as possible. However, the exact color or shade you observe may vary slightly depending on your device display calibration.",
        `All prices displayed on the website are listed in ${merchantConfig.policies.currency} and are inclusive of all applicable statutory taxes (${merchantConfig.policies.taxStatus}) unless stated otherwise.`,
        "BrandX reserves the right to modify prices, update catalog availability, or discontinue products without prior notice. In the rare event a product is mistakenly listed at an incorrect price, BrandX reserves the right to cancel orders placed at the erroneous price and issue a full refund.",
      ],
    },
    {
      id: "orders-acceptance-cancellation",
      title: "3. Orders, Order Verification & Acceptance",
      content: [
        "Placing an order on our platform represents an offer to purchase. An order is deemed officially accepted only when BrandX dispatches the items and issues an official dispatch notification with Airway Bill (AWB) tracking details.",
        "BrandX reserves the right to verify order details, limit order quantities, refuse service, or cancel orders in cases of suspected unauthorized commercial reselling, fraudulent payment attempts, inaccurate delivery addresses, or inventory shortages.",
        "For order cancellation terms prior to dispatch, please refer to Section 5 of our Returns, Refund & Cancellation Policy.",
      ],
    },
    {
      id: "payments-billing",
      title: "4. Payments, Billing & Transaction Processing",
      content: [
        `We accept various secure payment options including Credit Cards, Debit Cards, Net Banking, Unified Payments Interface (UPI), and Cash on Delivery (where eligible).`,
        `All digital payments are processed through authorized, PCI-DSS compliant payment gateways (${merchantConfig.policies.paymentGateway}). By entering payment details, you warrant that you are legally authorized to use the chosen payment instrument.`,
        "If a payment is debited from your account but the order fails to generate due to network or gateway interruptions, the debited amount is automatically reversed by your banking provider as per standard interbank settlement cycles.",
      ],
    },
    {
      id: "shipping-delivery-risk",
      title: "5. Shipping, Delivery & Risk of Loss",
      content: [
        "All shipments and deliveries are governed by the terms specified in our Shipping & Delivery Policy.",
        "Risk of loss and title for items purchased pass to you upon delivery of the merchandise by our courier delivery partner at your designated delivery address.",
      ],
    },
    {
      id: "returns-refunds-terms",
      title: "6. Returns, Refunds & Size Exchanges",
      content: [
        `All product returns, size swaps, and refund requests are strictly governed by our Returns, Refund & Cancellation Policy.`,
        `Returned garments must meet our condition standards (${merchantConfig.policies.returnWindowDescription}, unworn, unwashed, original tags attached) to qualify for exchange or refund settlement.`,
      ],
    },
    {
      id: "account-responsibilities",
      title: "7. User Account & Security Responsibilities",
      content: [
        "When you create an account on BrandX, you are responsible for maintaining the confidentiality of your login credentials and mobile OTPs, and for restricting unauthorized access to your device.",
        "You agree to accept responsibility for all activities that occur under your account. You must notify us immediately if you suspect any unauthorized use or security breach.",
      ],
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property Rights",
      content: [
        "All content, logos, trademarks, wordmarks ('BrandX'), monogram designs, website code, product images, graphics, text, and user interfaces featured on this platform are the exclusive intellectual property of BrandX or its content licensors and are protected under Indian and international copyright and trademark laws.",
        "You are granted a limited, revocable license to access the site for personal, non-commercial shopping. You may not copy, reproduce, scrape, modify, distribute, or reverse-engineer any portion of the site without explicit written authorization.",
      ],
    },
    {
      id: "prohibited-activities",
      title: "9. Prohibited Conduct & Platform Misuse",
      content: [
        "You agree not to use the website for any unlawful, fraudulent, or harmful purposes, including but not limited to:",
        "• Placing fraudulent, bogus, or speculative orders.",
        "• Attempting to circumvent site security, probe server vulnerabilities, or inject malicious code.",
        "• Using automated bots, scrapers, or scripts to access or extract catalog data.",
        "• Engaging in abusive, defamatory, or threatening behavior towards our customer support staff.",
        "Violations may result in immediate account termination and appropriate legal action.",
      ],
    },
    {
      id: "limitation-liability",
      title: "10. Limitation of Liability & Disclaimers",
      content: [
        "The website, merchandise, and services are provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied, to the maximum extent permissible under applicable law.",
        "In no event shall BrandX, its proprietors, directors, employees, or partners be liable for any indirect, incidental, punitive, or consequential damages resulting from the use of or inability to use our platform or purchased goods.",
        "Our aggregate liability for any direct claims arising out of a purchase shall be strictly capped at the total amount actually paid by you for the specific item giving rise to the claim.",
      ],
    },
    {
      id: "governing-law-jurisdiction",
      title: "11. Governing Law & Dispute Resolution",
      content: [
        "These Terms and all related store policies shall be governed by, interpreted, and construed in accordance with the laws of the Republic of India.",
        "Any dispute, claim, or controversy arising out of or relating to your use of the website or product purchases shall first be submitted for amicable resolution to BrandX Customer Care.",
        `If unresolved, disputes shall be subject to the exclusive jurisdiction of the competent courts located in Haryana, India.`,
      ],
    },
    {
      id: "modifications-contact",
      title: "12. Policy Revisions & Contact Information",
      content: [
        "BrandX reserves the right to amend or update these Terms & Conditions at any time. Any changes will be published on this page with an updated revision date. Your continued use of the website following revisions constitutes acceptance of the modified Terms.",
        "For legal, terms, or store policy inquiries, please contact our team:",
        `• Legal Entity: ${merchantConfig.legalEntityName}`,
        `• Customer Support Email: ${merchantConfig.support.email}`,
        `• Support Phone: ${merchantConfig.support.phone}`,
        `• Business Address: ${merchantConfig.address.formatted}`,
        `• Grievance Officer: ${merchantConfig.grievanceOfficer.name} (${merchantConfig.grievanceOfficer.email})`,
      ],
    },
  ],
  relatedPolicies: [
    {
      title: "Privacy Policy",
      description: "How we collect, protect, and handle your personal information.",
      href: "/privacy",
    },
    {
      title: "Returns & Refund Policy",
      description: "Our standards and process for product returns, size swaps, and refunds.",
      href: "/returns",
    },
    {
      title: "Shipping Policy",
      description: "Details on order processing, courier partners, and delivery timelines.",
      href: "/shipping",
    },
    {
      title: "Contact Customer Care",
      description: "Get in touch with our team for order or policy inquiries.",
      href: "/contact",
    },
  ],
};
