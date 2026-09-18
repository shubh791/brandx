/**
 * Central Merchant Configuration & Policy Parameters
 * 
 * IMPORTANT:
 * This is the SINGLE SOURCE OF TRUTH for merchant legal details, contact information,
 * support operating hours, grievance redressal, and policy timelines across the BrandX storefront.
 * 
 * Update these values when actual business documents, GSTIN, legal entity names,
 * and exact return/shipping parameters are provided.
 */

export const merchantConfig = {
  // 1. Brand & Legal Entity Details
  brandName: "BrandX",
  legalEntityName: "BrandX Retail", // TODO: Replace with registered Legal Entity Name (e.g., BrandX Apparel Private Limited / Proprietorship Name)
  proprietorName: "Authorized Signatory", // TODO: Replace with Proprietor / Director Name
  tradeName: "BrandX Samalkha",
  gstin: "Pending GST Registration", // TODO: Add 15-digit GSTIN when issued

  // 2. Physical Business Address
  address: {
    line1: "Main Market, Railway Road", // TODO: Replace with exact registered address / shop number
    city: "Samalkha",
    district: "Panipat",
    state: "Haryana",
    pincode: "132101",
    country: "India",
    formatted: "Main Market, Railway Road, Samalkha, Panipat, Haryana - 132101, India",
    shortFormatted: "Samalkha, Haryana - 132101, India",
  },

  // 3. Customer Support & Contact Channels
  support: {
    email: "support@brandx.com",
    phone: "+91 1800-000-0000", // TODO: Replace with dedicated customer care phone / WhatsApp number
    whatsapp: "+91 98000-00000", // Optional WhatsApp support channel
    hours: "Monday to Saturday: 10:00 AM – 7:00 PM IST",
    workingDays: "Monday to Saturday (Excluding National & Public Holidays)",
    responseTime: "Within 24 to 48 business hours",
  },

  // 4. Grievance Redressal Officer (Mandatory under Indian Consumer Protection E-Commerce Rules)
  grievanceOfficer: {
    name: "Customer Care Lead", // TODO: Replace with designated Grievance Officer Name
    designation: "Nodal & Grievance Officer",
    email: "grievance@brandx.com",
    phone: "+91 1800-000-0000",
    address: "Customer Support Cell, BrandX, Samalkha, Panipat, Haryana - 132101, India",
    responseWindow: "Acknowledgment within 48 hours; resolution within 1 month of complaint receipt",
  },

  // 5. Core Policy Parameters & Timelines
  policies: {
    // Returns & Exchanges
    returnWindowDays: 7,
    exchangeWindowDays: 7,
    returnWindowDescription: "within 7 days of delivery",
    reversePickupTimeline: "within 2 to 4 business days of return request approval",
    
    // Refunds
    refundInitiationTimeline: "within 24 to 48 hours of returned item passing quality inspection",
    prepaidRefundBankSettlement: "5 to 7 business days to reflect in original payment method (via payment gateway)",
    codRefundBankSettlement: "3 to 5 business days via NEFT / UPI after verified bank account details are received",
    
    // Shipping & Deliveries
    orderProcessingTimeline: "1 to 2 business days (orders placed on Sundays/holidays processed next business day)",
    standardDeliveryTimeline: "3 to 7 business days depending on destination pin code and courier serviceability",
    shippingChargesDescription: "calculated transparently at checkout based on order value and delivery destination",
    freeShippingThreshold: "applicable as indicated during promotional offers and checkout",

    // Payment Processing
    paymentGateway: "Razorpay and authorized PCI-DSS compliant payment aggregators",
    currency: "INR (Indian Rupee)",
    taxStatus: "All prices shown are inclusive of applicable Goods and Services Tax (GST)",
  },

  // 6. Social & External Links
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
};
