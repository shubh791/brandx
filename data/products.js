/**
 * BrandX Central Product Catalog & Temporary Storefront Data
 * 
 * NOTE FOR DEVELOPERS:
 * This temporary mock catalog provides structured product data for the BrandX storefront
 * during pre-launch, UX review, and payment gateway verification.
 * 
 * Once the Shopify Storefront API / backend integration is connected,
 * these helpers will seamlessly bridge to live Shopify GraphQL product schemas.
 */

export const PRODUCTS = [
  // ==========================================
  // 1. JEANS (5 Products)
  // ==========================================
  {
    id: "bx_jean_01",
    handle: "straight-fit-mid-blue-jeans",
    title: "Straight Fit Mid Blue Jeans",
    category: "Jeans",
    categoryHandle: "jeans",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: { amount: 1999, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/relaxed-fit-denim/primary.webp",
      altText: "BrandX Straight Fit Mid Blue Jeans - Front View",
    },
    images: [
      {
        url: "/images/products/relaxed-fit-denim/primary.webp",
        altText: "Straight Fit Mid Blue Jeans front view",
      },
      {
        url: "/images/home/shop-drop/jeans.webp",
        altText: "Straight Fit Mid Blue Jeans fabric close up",
      },
      {
        url: "/images/home/shop-your-style/brandx-jeans-v2.webp",
        altText: "Straight Fit Mid Blue Jeans lifestyle detail",
      },
    ],
    description:
      "Crafted from 100% durable cotton denim, our Straight Fit Mid Blue Jeans combine timeless workwear durability with everyday modern comfort. Features classic 5-pocket styling, reinforced rivets, and a clean medium wash.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [{ name: "Mid Blue", hex: "#416288" }],
    material: "99% Cotton, 1% Elastane Denim",
    fit: "Straight Leg Regular Fit",
    care: [
      "Machine wash cold inside out with like colors",
      "Do not bleach or tumble dry hot",
      "Line dry in shade to preserve indigo wash",
      "Warm iron if required",
    ],
    details: [
      "Classic 5-pocket design with coin pocket",
      "Heavy-duty zip fly with BrandX custom shank button",
      "Reinforced belt loops and pocket corners",
      "Comfort stretch waistband for all-day ease",
    ],
  },
  {
    id: "bx_jean_02",
    handle: "relaxed-fit-washed-jeans",
    title: "Relaxed Fit Washed Jeans",
    category: "Jeans",
    categoryHandle: "jeans",
    price: { amount: 1699, currencyCode: "INR" },
    compareAtPrice: { amount: 2199, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/jeans.webp",
      altText: "BrandX Relaxed Fit Washed Jeans",
    },
    images: [
      {
        url: "/images/home/shop-drop/jeans.webp",
        altText: "Relaxed Fit Washed Jeans front angle",
      },
      {
        url: "/images/products/relaxed-fit-denim/primary.webp",
        altText: "Relaxed Fit Washed Jeans full silhouette",
      },
    ],
    description:
      "Designed for effortless everyday styling, these relaxed fit jeans offer ample room through the seat and thigh with a gentle taper toward the hem. Stone-washed for exceptional softness from day one.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Vintage Light Wash", hex: "#7a9cb8" }],
    material: "100% Ring-Spun Cotton Denim",
    fit: "Relaxed Loose Fit",
    care: [
      "Wash cold inside out",
      "Do not dry clean",
      "Tumble dry low",
    ],
    details: [
      "Relaxed thigh with comfortable high-rise waist",
      "Vintage whiskering and natural fading detail",
      "Double-needle contrast stitching",
    ],
  },
  {
    id: "bx_jean_03",
    handle: "slim-fit-dark-indigo-jeans",
    title: "Slim Fit Dark Indigo Jeans",
    category: "Jeans",
    categoryHandle: "jeans",
    price: { amount: 1599, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-your-style/brandx-jeans-v2.webp",
      altText: "BrandX Slim Fit Dark Indigo Jeans",
    },
    images: [
      {
        url: "/images/home/shop-your-style/brandx-jeans-v2.webp",
        altText: "Slim Fit Dark Indigo Jeans",
      },
      {
        url: "/images/products/relaxed-fit-denim/primary.webp",
        altText: "Dark Indigo Denim texture",
      },
    ],
    description:
      "A sharp, tailored silhouette in deep saturated indigo. Engineered with comfort flex stretch that retains its shape throughout wear while contouring cleanly through the legs.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [{ name: "Dark Indigo", hex: "#1c2536" }],
    material: "98% Combed Cotton, 2% Spandex",
    fit: "Slim Tapered Fit",
    care: [
      "Turn inside out before wash",
      "Wash with dark colors",
      "Iron on medium heat",
    ],
    details: [
      "Deep indigo dyed with colorfast treatment",
      "Subtle matte black hardware accents",
      "Slight stretch for unrestricted movement",
    ],
  },
  {
    id: "bx_jean_04",
    handle: "regular-fit-black-jeans",
    title: "Regular Fit Jet Black Jeans",
    category: "Jeans",
    categoryHandle: "jeans",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: { amount: 1799, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-your-style/jeans.webp",
      altText: "BrandX Regular Fit Jet Black Jeans",
    },
    images: [
      {
        url: "/images/home/shop-your-style/jeans.webp",
        altText: "Regular Fit Jet Black Jeans",
      },
      {
        url: "/images/products/relaxed-fit-denim/primary.webp",
        altText: "Jet Black Denim Detail",
      },
    ],
    description:
      "The quintessential black jean for versatile day-to-night dressing. Deep sulfur-black dye resists fading, paired with our reliable regular straight leg profile.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [{ name: "Jet Black", hex: "#111111" }],
    material: "98% Cotton, 2% Elastane",
    fit: "Regular Straight Fit",
    care: [
      "Wash inside out in cold water",
      "Use mild detergent",
      "Do not expose to direct sun",
    ],
    details: [
      "Stay-black colorfast dye technology",
      "Clean tonal stitching throughout",
      "Comfort mid-rise waistband",
    ],
  },
  {
    id: "bx_jean_05",
    handle: "loose-fit-light-wash-jeans",
    title: "Loose Fit Light Wash Jeans",
    category: "Jeans",
    categoryHandle: "jeans",
    price: { amount: 1799, currencyCode: "INR" },
    compareAtPrice: { amount: 2299, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/relaxed-fit-denim/primary.webp",
      altText: "BrandX Loose Fit Light Wash Jeans",
    },
    images: [
      {
        url: "/images/products/relaxed-fit-denim/primary.webp",
        altText: "Loose Fit Light Wash Jeans",
      },
      {
        url: "/images/home/shop-drop/jeans.webp",
        altText: "Light Wash Denim close up",
      },
    ],
    description:
      "A streetwear-inspired wide-leg silhouette with a relaxed 90s aesthetic. Made from premium non-stretch 13oz cotton denim with light bleach-washed fading.",
    sizes: ["30", "32", "34", "36"],
    colors: [{ name: "Ice Blue", hex: "#9bb6cc" }],
    material: "100% Rigid Heavyweight Cotton",
    fit: "Loose Wide Leg",
    care: [
      "Machine wash warm",
      "Hang dry recommended",
    ],
    details: [
      "Wide straight leg with generous hem opening",
      "Authentic heavy denim drape",
      "Signature BrandX leather patch at back waist",
    ],
  },

  // ==========================================
  // 2. COTTON PANTS (5 Products)
  // ==========================================
  {
    id: "bx_cot_01",
    handle: "slim-fit-stretch-chinos",
    title: "Slim Fit Stretch Chino Pants",
    category: "Cotton Pants",
    categoryHandle: "cotton-pants",
    price: { amount: 1299, currencyCode: "INR" },
    compareAtPrice: { amount: 1699, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/cotton-pants.webp",
      altText: "BrandX Slim Fit Stretch Chino Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/cotton-pants.webp",
        altText: "Slim Fit Stretch Chino Pants front view",
      },
    ],
    description:
      "Refined everyday trousers cut from smooth stretch-cotton twill. Perfect for both casual office wear and weekend outings with a comfortable tailored fit.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [{ name: "Khaki Beige", hex: "#c2b280" }],
    material: "97% Combed Cotton, 3% Spandex Twill",
    fit: "Slim Tapered Fit",
    care: ["Machine wash cold", "Warm iron", "Do not tumble dry on high"],
    details: [
      "Angled front slash pockets and buttoned rear welt pockets",
      "Internal non-slip waistband tape",
      "Pre-washed for soft, breathable all-day comfort",
    ],
  },
  {
    id: "bx_cot_02",
    handle: "straight-leg-cotton-trousers",
    title: "Straight Leg Cotton Trousers",
    category: "Cotton Pants",
    categoryHandle: "cotton-pants",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: null,
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/cotton-pants.webp",
      altText: "BrandX Straight Leg Cotton Trousers",
    },
    images: [
      {
        url: "/images/home/shop-drop/cotton-pants.webp",
        altText: "Straight Leg Cotton Trousers",
      },
    ],
    description:
      "A classic straight-leg cotton pant engineered with structured woven cotton. Offers exceptional breathability and clean draping for daily comfort.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Olive Green", hex: "#556b2f" }],
    material: "100% Breathable Cotton Twill",
    fit: "Straight Regular Fit",
    care: ["Machine wash cold with like colors", "Line dry in shade"],
    details: [
      "Mid-rise comfortable waistline",
      "Sturdy belt loops and reinforced seat",
      "Wrinkle-resistant garment wash",
    ],
  },
  {
    id: "bx_cot_03",
    handle: "stretch-twill-casual-chinos",
    title: "Stretch Twill Casual Chinos",
    category: "Cotton Pants",
    categoryHandle: "cotton-pants",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: { amount: 1899, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/cotton-pants.webp",
      altText: "BrandX Stretch Twill Casual Chinos",
    },
    images: [
      {
        url: "/images/home/shop-drop/cotton-pants.webp",
        altText: "Stretch Twill Casual Chinos",
      },
    ],
    description:
      "Tailored with 4-way micro stretch, these chinos deliver crisp business-casual aesthetics with the unrestricted feel of lounge pants.",
    sizes: ["30", "32", "34", "36"],
    colors: [{ name: "Navy Blue", hex: "#1f293d" }],
    material: "96% Long-Staple Cotton, 4% Lycra",
    fit: "Slim Fit",
    care: ["Gentle machine wash", "Do not bleach", "Low iron"],
    details: [
      "Hidden interior coin pocket",
      "YKK zipper with button closure",
      "Clean hem finish ready for cuffing",
    ],
  },
  {
    id: "bx_cot_04",
    handle: "pleated-cotton-everyday-pants",
    title: "Pleated Cotton Everyday Pants",
    category: "Cotton Pants",
    categoryHandle: "cotton-pants",
    price: { amount: 1599, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/cotton-pants.webp",
      altText: "BrandX Pleated Cotton Everyday Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/cotton-pants.webp",
        altText: "Pleated Cotton Everyday Pants",
      },
    ],
    description:
      "Modern single-pleat cotton trousers featuring an easy drape and relaxed thigh. Ideal for smart-casual styling with loafers or crisp sneakers.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Warm Taupe", hex: "#8b8579" }],
    material: "100% Combed Cotton Gabardine",
    fit: "Relaxed Pleated Taper",
    care: ["Machine wash cold", "Warm iron while slightly damp"],
    details: [
      "Single forward pleat for extra seat ease",
      "Subtle side adjuster waist tabs",
      "Deep front side pockets",
    ],
  },
  {
    id: "bx_cot_05",
    handle: "relaxed-utility-cotton-pants",
    title: "Relaxed Utility Cotton Pants",
    category: "Cotton Pants",
    categoryHandle: "cotton-pants",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: { amount: 1799, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/cotton-pants.webp",
      altText: "BrandX Relaxed Utility Cotton Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/cotton-pants.webp",
        altText: "Relaxed Utility Cotton Pants",
      },
    ],
    description:
      "Durable cotton ripstop construction with functional utility styling. Built for durability, outdoor movement, and relaxed streetwear looks.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [{ name: "Charcoal Grey", hex: "#36383e" }],
    material: "100% Heavy Cotton Ripstop",
    fit: "Relaxed Straight Fit",
    care: ["Machine wash cold", "Tumble dry medium"],
    details: [
      "Reinforced knee panelling",
      "Side utility tool loop and deep pockets",
      "Drawstring adjustable cuff hems",
    ],
  },

  // ==========================================
  // 3. FORMAL PANTS (5 Products)
  // ==========================================
  {
    id: "bx_for_01",
    handle: "classic-tapered-formal-trousers",
    title: "Classic Tapered Formal Trousers",
    category: "Formal Pants",
    categoryHandle: "formal-pants",
    price: { amount: 1599, currencyCode: "INR" },
    compareAtPrice: { amount: 2099, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/formal-pants.webp",
      altText: "BrandX Classic Tapered Formal Trousers",
    },
    images: [
      {
        url: "/images/home/shop-drop/formal-pants.webp",
        altText: "Classic Tapered Formal Trousers front",
      },
    ],
    description:
      "Impeccably tailored trousers crafted from premium poly-viscose blend with a crisp front crease. Designed for executive office wear and formal gatherings.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [{ name: "Midnight Navy", hex: "#161d2d" }],
    material: "70% Poly, 28% Viscose, 2% Elastane",
    fit: "Tailored Tapered Fit",
    care: ["Dry clean or gentle cold machine wash", "Steam iron with press cloth"],
    details: [
      "Permanent sharp center crease line",
      "Comfort-flex expandable waistband design",
      "Twin back welt pockets with button closure",
    ],
  },
  {
    id: "bx_for_02",
    handle: "flat-front-dress-trousers",
    title: "Flat Front Dress Trousers",
    category: "Formal Pants",
    categoryHandle: "formal-pants",
    price: { amount: 1699, currencyCode: "INR" },
    compareAtPrice: null,
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/formal-pants.webp",
      altText: "BrandX Flat Front Dress Trousers",
    },
    images: [
      {
        url: "/images/home/shop-drop/formal-pants.webp",
        altText: "Flat Front Dress Trousers",
      },
    ],
    description:
      "A clean flat-front profile that delivers modern minimalism in boardroom attire. Crease-resistant fabric ensures sharp appearance from morning meetings to evening dinners.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Charcoal Grey", hex: "#32353b" }],
    material: "65% Polyester, 35% Viscose",
    fit: "Slim Formal Fit",
    care: ["Dry clean recommended", "Warm iron"],
    details: [
      "Sleek concealed hook-and-bar closure",
      "Stain-resistant fabric finish",
      "Blind-stitched clean hem",
    ],
  },
  {
    id: "bx_for_03",
    handle: "textured-houndstooth-formal-pants",
    title: "Textured Micro-Check Formal Pants",
    category: "Formal Pants",
    categoryHandle: "formal-pants",
    price: { amount: 1799, currencyCode: "INR" },
    compareAtPrice: { amount: 2299, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/formal-pants.webp",
      altText: "BrandX Textured Micro-Check Formal Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/formal-pants.webp",
        altText: "Textured Micro-Check Formal Pants",
      },
    ],
    description:
      "Featuring a subtle micro-check weave for understated elegance. Combines lightweight breathability with premium drape and structured tailoring.",
    sizes: ["30", "32", "34", "36"],
    colors: [{ name: "Slate Grey Check", hex: "#484d56" }],
    material: "Poly-Viscose Wool Touch Weave",
    fit: "Regular Tapered Fit",
    care: ["Dry clean only", "Steam iron"],
    details: [
      "Textured yarn-dyed micro check pattern",
      "Interior curtain waistband for shirt grip",
      "French fly construction for flat front finish",
    ],
  },
  {
    id: "bx_for_04",
    handle: "slim-fit-black-formal-trousers",
    title: "Slim Fit Black Formal Trousers",
    category: "Formal Pants",
    categoryHandle: "formal-pants",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: { amount: 1899, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/formal-pants.webp",
      altText: "BrandX Slim Fit Black Formal Trousers",
    },
    images: [
      {
        url: "/images/home/shop-drop/formal-pants.webp",
        altText: "Slim Fit Black Formal Trousers",
      },
    ],
    description:
      "The essential black formal trousers. Deep jet black dye, slim tailored legs, and flexible stretch make this your go-to pair for suiting and formal blazers.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [{ name: "Jet Black", hex: "#111111" }],
    material: "68% Poly, 30% Viscose, 2% Spandex",
    fit: "Slim Fit",
    care: ["Machine wash gentle", "Do not tumble dry", "Iron inside out"],
    details: [
      "Ultra-deep black pigment finish",
      "Reinforced crotch lining for long durability",
      "Smooth glide front pockets",
    ],
  },
  {
    id: "bx_for_05",
    handle: "tailored-linen-blend-formal-pants",
    title: "Tailored Linen Blend Formal Pants",
    category: "Formal Pants",
    categoryHandle: "formal-pants",
    price: { amount: 1899, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/formal-pants.webp",
      altText: "BrandX Tailored Linen Blend Formal Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/formal-pants.webp",
        altText: "Tailored Linen Blend Formal Pants",
      },
    ],
    description:
      "Lightweight, breathable formal trousers crafted from a premium linen-cotton blend. Ideal for summer formal events, business luncheons, and daytime occasions.",
    sizes: ["30", "32", "34", "36"],
    colors: [{ name: "Natural Ecru", hex: "#dfdcd3" }],
    material: "55% Linen, 45% Combed Cotton",
    fit: "Tailored Straight Fit",
    care: ["Dry clean or hand wash cold", "Warm steam iron"],
    details: [
      "Natural textured linen slub finish",
      "Breathable lightweight summer construction",
      "Clean tailored waistband with belt loops",
    ],
  },

  // ==========================================
  // 4. LOWERS (5 Products)
  // ==========================================
  {
    id: "bx_low_01",
    handle: "heavyweight-french-terry-joggers",
    title: "Heavyweight French Terry Joggers",
    category: "Lowers",
    categoryHandle: "lowers",
    price: { amount: 1199, currencyCode: "INR" },
    compareAtPrice: { amount: 1599, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/lowers.webp",
      altText: "BrandX Heavyweight French Terry Joggers",
    },
    images: [
      {
        url: "/images/home/shop-drop/lowers.webp",
        altText: "Heavyweight French Terry Joggers front view",
      },
    ],
    description:
      "Super-soft 340 GSM cotton French terry joggers. Features an elasticized drawstring waistband, deep zippered side pockets, and snug ribbed ankle cuffs.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Heather Grey", hex: "#9da1a8" }],
    material: "100% Combed Cotton French Terry",
    fit: "Tapered Relaxed Jogger",
    care: ["Machine wash cold with like colors", "Tumble dry low", "Do not iron print"],
    details: [
      "Heavyweight 340 GSM premium loopback terry",
      "Concealed zipper side pockets for secure phone storage",
      "Heavy-duty cotton braided drawcord with metal aglets",
    ],
  },
  {
    id: "bx_low_02",
    handle: "slim-fit-active-track-pants",
    title: "Slim Fit Active Track Pants",
    category: "Lowers",
    categoryHandle: "lowers",
    price: { amount: 999, currencyCode: "INR" },
    compareAtPrice: { amount: 1399, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/lowers.webp",
      altText: "BrandX Slim Fit Active Track Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/lowers.webp",
        altText: "Slim Fit Active Track Pants",
      },
    ],
    description:
      "Engineered for workouts, running, and casual downtime. Moisture-wicking micro-stretch fabric keeps you cool, dry, and comfortable all day.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Pitch Black", hex: "#111111" }],
    material: "90% Polyester, 10% Elastane Quick-Dry",
    fit: "Athletic Slim Fit",
    care: ["Machine wash cold", "Quick air dry", "Do not iron"],
    details: [
      "Sweat-wicking 4-way stretch fabric",
      "Reflective BrandX logo detail for night visibility",
      "Ankle zip openings for easy on/off",
    ],
  },
  {
    id: "bx_low_03",
    handle: "relaxed-cargo-fleece-joggers",
    title: "Relaxed Cargo Fleece Joggers",
    category: "Lowers",
    categoryHandle: "lowers",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/lowers.webp",
      altText: "BrandX Relaxed Cargo Fleece Joggers",
    },
    images: [
      {
        url: "/images/home/shop-drop/lowers.webp",
        altText: "Relaxed Cargo Fleece Joggers",
      },
    ],
    description:
      "A streetwear-forward jogger with dual side cargo flap pockets. Brushed fleece lining offers luxurious interior warmth for colder days.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Military Olive", hex: "#4b5320" }],
    material: "80% Cotton, 20% Polyester Brushed Fleece",
    fit: "Relaxed Cargo Fit",
    care: ["Machine wash cold", "Do not bleach"],
    details: [
      "Dual snap-button utility cargo pockets",
      "Heavy brushed interior for thermal comfort",
      "Elasticated waistband with metal-tipped drawstrings",
    ],
  },
  {
    id: "bx_low_04",
    handle: "everyday-cotton-lounge-pants",
    title: "Everyday Cotton Lounge Pants",
    category: "Lowers",
    categoryHandle: "lowers",
    price: { amount: 899, currencyCode: "INR" },
    compareAtPrice: { amount: 1199, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/lowers.webp",
      altText: "BrandX Everyday Cotton Lounge Pants",
    },
    images: [
      {
        url: "/images/home/shop-drop/lowers.webp",
        altText: "Everyday Cotton Lounge Pants",
      },
    ],
    description:
      "Ultra-breathable straight-leg pajama/lounge pant made from lightweight combed cotton jersey. Your ultimate companion for working from home and relaxing.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Deep Navy", hex: "#1a2436" }],
    material: "100% Single Jersey Combed Cotton",
    fit: "Straight Relaxed Fit",
    care: ["Machine wash warm", "Tumble dry low"],
    details: [
      "Open bottom straight cuffs (no tight elastic)",
      "Soft covered elastic waistband with internal drawstring",
      "Deep dual side pockets",
    ],
  },
  {
    id: "bx_low_05",
    handle: "structured-cotton-knit-joggers",
    title: "Structured Cotton Knit Joggers",
    category: "Lowers",
    categoryHandle: "lowers",
    price: { amount: 1299, currencyCode: "INR" },
    compareAtPrice: { amount: 1699, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/lowers.webp",
      altText: "BrandX Structured Cotton Knit Joggers",
    },
    images: [
      {
        url: "/images/home/shop-drop/lowers.webp",
        altText: "Structured Cotton Knit Joggers",
      },
    ],
    description:
      "A smart, tailored jogger made from structured double-knit interlock cotton. Maintains a sharp silhouette without bagging at the knees.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Oatmeal Melange", hex: "#cfcac0" }],
    material: "85% Cotton, 15% Poly Interlock Knit",
    fit: "Tailored Slim Jogger",
    care: ["Machine wash cold", "Flat dry recommended"],
    details: [
      "Premium interlock double-knit fabric",
      "Tonal heat-sealed zip pockets",
      "Ergonomic knee dart tailoring",
    ],
  },

  // ==========================================
  // 5. SHIRTS (5 Products)
  // ==========================================
  {
    id: "bx_sh_01",
    handle: "linen-blend-casual-shirt",
    title: "Linen Blend Casual Shirt",
    category: "Shirts",
    categoryHandle: "shirts",
    price: { amount: 1299, currencyCode: "INR" },
    compareAtPrice: { amount: 1699, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/linen-blend-overshirt/primary.webp",
      altText: "BrandX Linen Blend Casual Shirt",
    },
    images: [
      {
        url: "/images/products/linen-blend-overshirt/primary.webp",
        altText: "Linen Blend Casual Shirt front view",
      },
      {
        url: "/images/home/shop-drop/shirts.webp",
        altText: "Linen Shirt fabric texture",
      },
      {
        url: "/images/home/shop-your-style/brandx-shirts-v2.webp",
        altText: "Linen Shirt lifestyle collar detail",
      },
    ],
    description:
      "A timeless relaxed overshirt woven from a breathable linen-cotton blend. Features a clean camp collar, genuine horn-look buttons, and a relaxed boxy cut suitable for warm days and layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Natural Oatmeal", hex: "#e0dacf" }],
    material: "55% Pure French Linen, 45% Cotton",
    fit: "Relaxed Boxy Fit",
    care: ["Machine wash cold gentle", "Hang to dry in shade", "Warm iron"],
    details: [
      "Breathable open camp collar design",
      "Dual chest flap utility pockets",
      "Curved hem for untucked styling",
    ],
  },
  {
    id: "bx_sh_02",
    handle: "oxford-cotton-button-down-shirt",
    title: "Oxford Cotton Button-Down Shirt",
    category: "Shirts",
    categoryHandle: "shirts",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/shirts.webp",
      altText: "BrandX Oxford Cotton Button-Down Shirt",
    },
    images: [
      {
        url: "/images/home/shop-drop/shirts.webp",
        altText: "Oxford Cotton Button-Down Shirt",
      },
      {
        url: "/images/products/linen-blend-overshirt/primary.webp",
        altText: "Oxford weave detail",
      },
    ],
    description:
      "The quintessential wardrobe staple. Crafted from durable 100% combed cotton Oxford cloth with an authentic basketweave texture and button-down collar.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Classic Sky Blue", hex: "#99b7d4" }],
    material: "100% Combed Cotton Oxford",
    fit: "Regular Slim Fit",
    care: ["Machine wash warm", "Warm steam iron"],
    details: [
      "Signature button-down collar roll",
      "Chest patch pocket with BrandX embroidered tab",
      "Box pleat at back yoke for mobility",
    ],
  },
  {
    id: "bx_sh_03",
    handle: "relaxed-plaid-flannel-shirt",
    title: "Relaxed Plaid Flannel Shirt",
    category: "Shirts",
    categoryHandle: "shirts",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: { amount: 1799, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-your-style/brandx-shirts-v2.webp",
      altText: "BrandX Relaxed Plaid Flannel Shirt",
    },
    images: [
      {
        url: "/images/home/shop-your-style/brandx-shirts-v2.webp",
        altText: "Relaxed Plaid Flannel Shirt",
      },
      {
        url: "/images/home/shop-drop/shirts.webp",
        altText: "Flannel Plaid detail",
      },
    ],
    description:
      "Brushed on both sides for superior softness and warmth. A versatile heritage plaid pattern in earthy tones that looks great buttoned up or layered open over a white tee.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Timberland Plaid", hex: "#634739" }],
    material: "100% Brushed Cotton Flannel",
    fit: "Relaxed Fit",
    care: ["Machine wash cold", "Tumble dry low"],
    details: [
      "Double-brushed cotton for thermal insulation",
      "Dual chest buttoned flap pockets",
      "Reinforced collar and cuffs",
    ],
  },
  {
    id: "bx_sh_04",
    handle: "striped-cotton-poplin-shirt",
    title: "Striped Cotton Poplin Shirt",
    category: "Shirts",
    categoryHandle: "shirts",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: { amount: 1799, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-your-style/shirts.webp",
      altText: "BrandX Striped Cotton Poplin Shirt",
    },
    images: [
      {
        url: "/images/home/shop-your-style/shirts.webp",
        altText: "Striped Cotton Poplin Shirt",
      },
    ],
    description:
      "Crisp, lightweight yarn-dyed poplin featuring classic vertical Bengal stripes. Offers a clean, sharp aesthetic suited for both casual Fridays and smart layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Navy / White Stripe", hex: "#2b3e5a" }],
    material: "100% Fine Cotton Poplin",
    fit: "Tailored Fit",
    care: ["Machine wash cold", "Medium steam iron"],
    details: [
      "Yarn-dyed crisp vertical stripes",
      "Semi-spread modern collar",
      "Adjustable two-button barrel cuffs",
    ],
  },
  {
    id: "bx_sh_05",
    handle: "textured-seersucker-resort-shirt",
    title: "Textured Seersucker Resort Shirt",
    category: "Shirts",
    categoryHandle: "shirts",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: { amount: 1999, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/linen-blend-overshirt/primary.webp",
      altText: "BrandX Textured Seersucker Resort Shirt",
    },
    images: [
      {
        url: "/images/products/linen-blend-overshirt/primary.webp",
        altText: "Textured Seersucker Resort Shirt",
      },
    ],
    description:
      "Puckered seersucker weave lifts fabric off the skin to encourage cooling airflow. Finished with a Cuban collar and relaxed straight hem.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Sage Green", hex: "#879782" }],
    material: "100% Breathable Seersucker Cotton",
    fit: "Relaxed Resort Fit",
    care: ["Machine wash cold", "No iron required due to natural texture"],
    details: [
      "Natural puckered cooling texture",
      "Open Cuban camp collar",
      "Straight hem with side vents",
    ],
  },

  // ==========================================
  // 6. T-SHIRTS (5 Products)
  // ==========================================
  {
    id: "bx_tee_01",
    handle: "heavyweight-boxy-tee",
    title: "Heavyweight Boxy T-Shirt",
    category: "T-Shirts",
    categoryHandle: "t-shirts",
    price: { amount: 799, currencyCode: "INR" },
    compareAtPrice: { amount: 999, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/heavyweight-boxy-tee/primary.webp",
      altText: "BrandX Heavyweight Boxy T-Shirt",
    },
    images: [
      {
        url: "/images/products/heavyweight-boxy-tee/primary.webp",
        altText: "Heavyweight Boxy T-Shirt front view",
      },
      {
        url: "/images/home/shop-drop/t-shirts.webp",
        altText: "Boxy T-Shirt fabric detail",
      },
    ],
    description:
      "Constructed from ultra-dense 240 GSM combed cotton jersey. Delivers a modern dropped-shoulder silhouette with structured drape and thick ribbed collar that never sags.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Off White", hex: "#f3f0e8" }],
    material: "100% Premium Combed Cotton (240 GSM)",
    fit: "Boxy Oversized Fit",
    care: ["Machine wash cold inside out", "Do not iron directly on graphics", "Hang dry"],
    details: [
      "Heavyweight 240 GSM cotton knit",
      "Thick 1-inch bound rib crewneck collar",
      "Dropped shoulder seams for clean streetwear drape",
    ],
  },
  {
    id: "bx_tee_02",
    handle: "classic-supima-crewneck-tee",
    title: "Classic Supima Crewneck T-Shirt",
    category: "T-Shirts",
    categoryHandle: "t-shirts",
    price: { amount: 699, currencyCode: "INR" },
    compareAtPrice: null,
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/t-shirts.webp",
      altText: "BrandX Classic Supima Crewneck T-Shirt",
    },
    images: [
      {
        url: "/images/home/shop-drop/t-shirts.webp",
        altText: "Classic Supima Crewneck T-Shirt",
      },
      {
        url: "/images/products/heavyweight-boxy-tee/primary.webp",
        altText: "Crewneck T-Shirt collar detail",
      },
    ],
    description:
      "Silky-soft extra-long staple Supima cotton provides unrivaled comfort and color retention. The essential everyday tee designed to look polished on its own or under jackets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Jet Black", hex: "#111111" }],
    material: "100% Extra-Long Staple Supima Cotton (180 GSM)",
    fit: "Regular Fit",
    care: ["Machine wash cold", "Tumble dry low"],
    details: [
      "Ultra-soft combed Supima cotton",
      "Durable shape-retention collar",
      "Clean blind-stitched sleeves and hem",
    ],
  },
  {
    id: "bx_tee_03",
    handle: "vintage-acid-wash-tee",
    title: "Vintage Acid Wash T-Shirt",
    category: "T-Shirts",
    categoryHandle: "t-shirts",
    price: { amount: 899, currencyCode: "INR" },
    compareAtPrice: { amount: 1199, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/t-shirts.webp",
      altText: "BrandX Vintage Acid Wash T-Shirt",
    },
    images: [
      {
        url: "/images/home/shop-drop/t-shirts.webp",
        altText: "Vintage Acid Wash T-Shirt",
      },
    ],
    description:
      "Individually mineral-washed for a one-of-a-kind vintage fade. Features a relaxed drop shoulder profile and soft broken-in feel right out of the box.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Washed Charcoal", hex: "#3e4046" }],
    material: "100% Heavy Cotton Jersey (220 GSM)",
    fit: "Relaxed Fit",
    care: ["Machine wash cold separately", "Line dry in shade"],
    details: [
      "Unique mineral acid wash finish",
      "Distressed ribbed collar detailing",
      "Side-seamed construction prevents twisting",
    ],
  },
  {
    id: "bx_tee_04",
    handle: "striped-knit-cotton-tee",
    title: "Striped Knit Cotton T-Shirt",
    category: "T-Shirts",
    categoryHandle: "t-shirts",
    price: { amount: 799, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/heavyweight-boxy-tee/primary.webp",
      altText: "BrandX Striped Knit Cotton T-Shirt",
    },
    images: [
      {
        url: "/images/products/heavyweight-boxy-tee/primary.webp",
        altText: "Striped Knit Cotton T-Shirt",
      },
    ],
    description:
      "Yarn-dyed horizontal nautical stripes knitted from soft 100% cotton yarn. Delivers clean maritime styling with modern casual drape.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Navy / White Stripe", hex: "#1d293d" }],
    material: "100% Yarn-Dyed Cotton",
    fit: "Regular Fit",
    care: ["Machine wash cold", "Warm iron"],
    details: [
      "Yarn-dyed stripe pattern that won't fade or peel",
      "Contrasting solid crewneck collar band",
      "Reinforced shoulder-to-shoulder taping",
    ],
  },
  {
    id: "bx_tee_05",
    handle: "minimalist-pocket-t-shirt",
    title: "Minimalist Pocket T-Shirt",
    category: "T-Shirts",
    categoryHandle: "t-shirts",
    price: { amount: 749, currencyCode: "INR" },
    compareAtPrice: { amount: 999, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/t-shirts.webp",
      altText: "BrandX Minimalist Pocket T-Shirt",
    },
    images: [
      {
        url: "/images/home/shop-drop/t-shirts.webp",
        altText: "Minimalist Pocket T-Shirt",
      },
    ],
    description:
      "An upgraded everyday tee featuring a clean chest pocket with subtle BrandX branding. Soft, pre-shrunk cotton fabric designed for long-lasting daily wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Earthy Olive", hex: "#5d6754" }],
    material: "100% Combed Cotton (200 GSM)",
    fit: "Regular Fit",
    care: ["Machine wash cold", "Tumble dry low"],
    details: [
      "Single patch chest pocket",
      "Pre-shrunk fabric ensures no fit loss after wash",
      "Double-stitched hems for durability",
    ],
  },

  // ==========================================
  // 7. SHOES (5 Products)
  // ==========================================
  {
    id: "bx_sho_01",
    handle: "urban-runner-lifestyle-shoes",
    title: "Urban Runner Lifestyle Shoes",
    category: "Shoes",
    categoryHandle: "shoes",
    price: { amount: 2499, currencyCode: "INR" },
    compareAtPrice: { amount: 3499, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/urban-runner-sneaker/primary.webp",
      altText: "BrandX Urban Runner Lifestyle Shoes",
    },
    images: [
      {
        url: "/images/products/urban-runner-sneaker/primary.webp",
        altText: "Urban Runner Lifestyle Shoes side profile",
      },
      {
        url: "/images/home/shop-drop/shoes.webp",
        altText: "Urban Runner Shoes outsole detail",
      },
      {
        url: "/images/home/shop-your-style/brandx-shoes-v2.webp",
        altText: "Urban Runner on-foot styling",
      },
    ],
    description:
      "A lightweight, all-day sneaker engineered with a responsive EVA cushioned midsole and breathable mesh upper. Combines athletic performance with contemporary streetwear silhouette.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [{ name: "Shadow Grey / White", hex: "#7a7e85" }],
    material: "Breathable Knit Mesh, TPU Overlays & EVA Sole",
    fit: "True to Size",
    care: ["Wipe clean with a damp cloth", "Air dry naturally away from heat", "Do not machine wash"],
    details: [
      "Cushioned memory-foam insole for 12+ hour comfort",
      "Durable anti-slip rubber traction outsole",
      "Padded heel collar prevents friction blisters",
    ],
  },
  {
    id: "bx_sho_02",
    handle: "classic-white-court-sneaker",
    title: "Classic White Court Sneaker",
    category: "Shoes",
    categoryHandle: "shoes",
    price: { amount: 2299, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/shoes.webp",
      altText: "BrandX Classic White Court Sneaker",
    },
    images: [
      {
        url: "/images/home/shop-drop/shoes.webp",
        altText: "Classic White Court Sneaker",
      },
      {
        url: "/images/products/urban-runner-sneaker/primary.webp",
        altText: "Court Sneaker Leather Texture",
      },
    ],
    description:
      "The minimalist leather court sneaker that pairs seamlessly with jeans, chinos, or shorts. Clean aesthetic with subtle perforation details for ventilation.",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [{ name: "Triple White", hex: "#ffffff" }],
    material: "Premium Vegan Action Leather, Gum Rubber Outsole",
    fit: "True to Size",
    care: ["Clean with sneaker wipe or damp cloth", "Store with shoe trees"],
    details: [
      "Smooth wipe-clean synthetic leather upper",
      "Vulcanized rubber sole with herringbone tread",
      "Minimalist debossed BrandX heel logo",
    ],
  },
  {
    id: "bx_sho_03",
    handle: "suede-casual-penny-loafers",
    title: "Suede Casual Penny Loafers",
    category: "Shoes",
    categoryHandle: "shoes",
    price: { amount: 2799, currencyCode: "INR" },
    compareAtPrice: { amount: 3599, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-your-style/brandx-shoes-v2.webp",
      altText: "BrandX Suede Casual Penny Loafers",
    },
    images: [
      {
        url: "/images/home/shop-your-style/brandx-shoes-v2.webp",
        altText: "Suede Casual Penny Loafers",
      },
      {
        url: "/images/home/shop-drop/shoes.webp",
        altText: "Suede Loafers detail",
      },
    ],
    description:
      "Handcrafted suede loafers with traditional penny saddle strap and flexible driving sole. The ultimate in refined smart-casual footwear.",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    colors: [{ name: "Tan Brown", hex: "#9a6538" }],
    material: "Velvety Faux Suede Upper, Cushioned Leatherette Insole",
    fit: "Snug Loafer Fit (Size up if between sizes)",
    care: ["Use a suede brush to remove dirt", "Protect with suede spray"],
    details: [
      "Traditional moc-toe hand-stitched detailing",
      "Flexible split rubber sole for driving comfort",
      "Breathable leather-lined interior",
    ],
  },
  {
    id: "bx_sho_04",
    handle: "high-top-canvas-trainers",
    title: "High-Top Canvas Trainers",
    category: "Shoes",
    categoryHandle: "shoes",
    price: { amount: 1899, currencyCode: "INR" },
    compareAtPrice: { amount: 2399, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-your-style/shoes.webp",
      altText: "BrandX High-Top Canvas Trainers",
    },
    images: [
      {
        url: "/images/home/shop-your-style/shoes.webp",
        altText: "High-Top Canvas Trainers",
      },
    ],
    description:
      "Vintage high-top silhouette in durable 14oz canvas. Features rubber toe cap, metal eyelets, and vulcanized rubber sole for timeless casual wear.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: [{ name: "Vintage Black / Off White", hex: "#1c1c1c" }],
    material: "14oz Heavyweight Canvas, Rubber Sole",
    fit: "True to Size",
    care: ["Spot clean with mild soap and water", "Air dry"],
    details: [
      "High-top ankle support construction",
      "Protective rubber toe bumper",
      "OrthoLite cushioned footbed",
    ],
  },
  {
    id: "bx_sho_05",
    handle: "chunky-sole-retro-sneakers",
    title: "Chunky Sole Retro Sneakers",
    category: "Shoes",
    categoryHandle: "shoes",
    price: { amount: 2699, currencyCode: "INR" },
    compareAtPrice: { amount: 3699, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/urban-runner-sneaker/primary.webp",
      altText: "BrandX Chunky Sole Retro Sneakers",
    },
    images: [
      {
        url: "/images/products/urban-runner-sneaker/primary.webp",
        altText: "Chunky Sole Retro Sneakers",
      },
    ],
    description:
      "Bold 90s retro aesthetic with exaggerated sculpted platform sole. Features mixed-material multi-panel construction with suede and breathable mesh.",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [{ name: "Cream / Grey Multi", hex: "#d8d3c5" }],
    material: "Suede, Mesh & High-Density Phylon Sole",
    fit: "True to Size",
    care: ["Spot clean with sneaker brush", "Keep in cool dry place"],
    details: [
      "45mm sculpted shock-absorbing platform sole",
      "Multi-layered panel upper construction",
      "Padded tongue and collar for wrap-around fit",
    ],
  },

  // ==========================================
  // 8. WINTER WEAR (5 Products)
  // ==========================================
  {
    id: "bx_win_01",
    handle: "heavyweight-oversized-hoodie",
    title: "Heavyweight Oversized Fleece Hoodie",
    category: "Winter Wear",
    categoryHandle: "winter-wear",
    subcategoryHandle: "hoodies",
    price: { amount: 1899, currencyCode: "INR" },
    compareAtPrice: { amount: 2499, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/winter-wear.webp",
      altText: "BrandX Heavyweight Oversized Fleece Hoodie",
    },
    images: [
      {
        url: "/images/home/shop-drop/winter-wear.webp",
        altText: "Heavyweight Oversized Fleece Hoodie front",
      },
    ],
    description:
      "Built with ultra-thick 380 GSM fleece for superior cold-weather warmth. Features double-layer structured hood, kangaroo pocket, and heavy 2x2 ribbed trims.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Charcoal Black", hex: "#222222" }],
    material: "85% Cotton, 15% Polyester Heavyweight Fleece (380 GSM)",
    fit: "Oversized Streetwear Fit",
    care: ["Machine wash cold inside out", "Do not iron directly on fleece", "Tumble dry low"],
    details: [
      "Double-layered hood that stays upright without drawstrings",
      "Spacious front kangaroo pocket",
      "Thick rib-knit cuffs and hem that hold their shape",
    ],
  },
  {
    id: "bx_win_02",
    handle: "full-zip-track-jacket",
    title: "Full-Zip Urban Track Jacket",
    category: "Winter Wear",
    categoryHandle: "winter-wear",
    subcategoryHandle: "zippers",
    price: { amount: 1999, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/winter-wear.webp",
      altText: "BrandX Full-Zip Urban Track Jacket",
    },
    images: [
      {
        url: "/images/home/shop-drop/winter-wear.webp",
        altText: "Full-Zip Urban Track Jacket",
      },
    ],
    description:
      "A sleek full-zip outerwear piece engineered with wind-resistant double-knit fabric and high funnel collar. Perfect for morning runs and layered city styling.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Obsidian Navy", hex: "#151e2e" }],
    material: "90% Interlock Cotton, 10% Polyester",
    fit: "Regular Athletic Fit",
    care: ["Machine wash cold", "Close all zippers before wash"],
    details: [
      "Stand-up mock neck funnel collar",
      "Heavy-duty two-way front zipper",
      "Secure zippered hand-warmer pockets",
    ],
  },
  {
    id: "bx_win_03",
    handle: "boxy-crewneck-sweatshirt",
    title: "Boxy Crewneck Sweatshirt",
    category: "Winter Wear",
    categoryHandle: "winter-wear",
    subcategoryHandle: "sweatshirts",
    price: { amount: 1599, currencyCode: "INR" },
    compareAtPrice: { amount: 1999, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/winter-wear.webp",
      altText: "BrandX Boxy Crewneck Sweatshirt",
    },
    images: [
      {
        url: "/images/home/shop-drop/winter-wear.webp",
        altText: "Boxy Crewneck Sweatshirt",
      },
    ],
    description:
      "A minimalist essential pullover crafted from premium loopback French terry. Cut with a boxy dropped-shoulder silhouette for clean streetwear aesthetics.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Sand Melange", hex: "#d0c9bc" }],
    material: "100% Combed Cotton Loopback Terry (320 GSM)",
    fit: "Boxy Relaxed Fit",
    care: ["Machine wash cold", "Tumble dry low"],
    details: [
      "Classic V-insert stitching detail at crew collar",
      "Soft brushed interior hand-feel",
      "Durable double-needle construction",
    ],
  },
  {
    id: "bx_win_04",
    handle: "ribbed-knit-cotton-pullover",
    title: "Ribbed Knit Cotton Pullover",
    category: "Winter Wear",
    categoryHandle: "winter-wear",
    subcategoryHandle: "pullovers",
    price: { amount: 2199, currencyCode: "INR" },
    compareAtPrice: { amount: 2799, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/winter-wear.webp",
      altText: "BrandX Ribbed Knit Cotton Pullover",
    },
    images: [
      {
        url: "/images/home/shop-drop/winter-wear.webp",
        altText: "Ribbed Knit Cotton Pullover",
      },
    ],
    description:
      "Sophisticated medium-gauge ribbed knit sweater. Made from 100% pure combed cotton for itch-free breathable warmth throughout winter.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Forest Olive", hex: "#3b4d3c" }],
    material: "100% Combed Cotton Yarn Knit",
    fit: "Regular Tailored Fit",
    care: ["Hand wash cold or gentle machine wool cycle", "Dry flat on towel"],
    details: [
      "7-gauge vertical rib knit structure",
      "Non-itch hypoallergenic pure cotton construction",
      "Seamless collar and cuff linking",
    ],
  },
  {
    id: "bx_win_05",
    handle: "quilted-puffer-streetwear-jacket",
    title: "Quilted Puffer Streetwear Jacket",
    category: "Winter Wear",
    categoryHandle: "winter-wear",
    subcategoryHandle: "jackets",
    price: { amount: 2999, currencyCode: "INR" },
    compareAtPrice: { amount: 3999, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/winter-wear.webp",
      altText: "BrandX Quilted Puffer Streetwear Jacket",
    },
    images: [
      {
        url: "/images/home/shop-drop/winter-wear.webp",
        altText: "Quilted Puffer Streetwear Jacket",
      },
    ],
    description:
      "Engineered for deep winter warmth with synthetic thermal insulation and matte water-resistant nylon shell. Features an internal storm flap and adjustable cinch hem.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Matte Black", hex: "#161616" }],
    material: "100% Ripstop Nylon Shell, Recycled Polyfill Insulation",
    fit: "Puffer Relaxed Fit",
    care: ["Machine wash cold gentle", "Tumble dry low with dryer balls"],
    details: [
      "Water-repellent DWR exterior finish",
      "High thermal insulation down-alternative fill",
      "Fleece-lined zippered hand pockets",
    ],
  },

  // ==========================================
  // 9. WATCHES (5 Products)
  // ==========================================
  {
    id: "bx_wat_01",
    handle: "minimalist-chrono-watch",
    title: "Minimalist Chronograph Watch",
    category: "Watches",
    categoryHandle: "watches",
    price: { amount: 3999, currencyCode: "INR" },
    compareAtPrice: { amount: 4999, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/minimalist-chronograph/primary.webp",
      altText: "BrandX Minimalist Chronograph Watch",
    },
    images: [
      {
        url: "/images/products/minimalist-chronograph/primary.webp",
        altText: "Minimalist Chrono Watch front dial",
      },
      {
        url: "/images/home/shop-drop/watches.webp",
        altText: "Minimalist Chrono Watch side crown detail",
      },
    ],
    description:
      "A masterclass in modern horology minimalism. Features a 41mm matte black 316L stainless steel case, Japanese quartz chronograph movement, and scratch-resistant sapphire-coated glass.",
    sizes: [], // Watches don't require size selection
    colors: [{ name: "Matte Black / Charcoal", hex: "#1a1a1a" }],
    material: "316L Stainless Steel Case, Quick-Release Genuine Leather Strap",
    fit: "41mm Case Diameter",
    care: ["Wipe clean with microfiber cloth", "3 ATM water resistance (splash resistant)"],
    details: [
      "Precision Japanese quartz chronograph sub-dials",
      "Scratch-resistant mineral crystal with anti-reflective coating",
      "20mm interchangeable genuine leather strap",
    ],
  },
  {
    id: "bx_wat_02",
    handle: "classic-leather-strap-dress-watch",
    title: "Classic Leather Strap Dress Watch",
    category: "Watches",
    categoryHandle: "watches",
    price: { amount: 2999, currencyCode: "INR" },
    compareAtPrice: null,
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/watches.webp",
      altText: "BrandX Classic Leather Strap Dress Watch",
    },
    images: [
      {
        url: "/images/home/shop-drop/watches.webp",
        altText: "Classic Leather Strap Dress Watch",
      },
      {
        url: "/images/products/minimalist-chronograph/primary.webp",
        altText: "Dress Watch dial detail",
      },
    ],
    description:
      "Slim 8mm profile dress watch designed to slip effortlessly beneath shirt cuffs. Clean sunray dial with date aperture at 3 o'clock and Italian leather strap.",
    sizes: [],
    colors: [{ name: "Silver Dial / Brown Leather", hex: "#8c6239" }],
    material: "Polished Stainless Steel, Italian Calfskin Leather",
    fit: "40mm Case Diameter, Ultra-Slim 8mm Thickness",
    care: ["Wipe with dry soft cloth", "Avoid prolonged water immersion"],
    details: [
      "Ultra-slim 8mm case architecture",
      "Date window display at 3 o'clock",
      "Top-grain vegetable-tanned leather strap",
    ],
  },
  {
    id: "bx_wat_03",
    handle: "stealth-matte-black-automatic",
    title: "Stealth Matte Black Sport Watch",
    category: "Watches",
    categoryHandle: "watches",
    price: { amount: 3499, currencyCode: "INR" },
    compareAtPrice: { amount: 4499, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/minimalist-chronograph/primary.webp",
      altText: "BrandX Stealth Matte Black Sport Watch",
    },
    images: [
      {
        url: "/images/products/minimalist-chronograph/primary.webp",
        altText: "Stealth Matte Black Sport Watch",
      },
    ],
    description:
      "All-black tactical aesthetics paired with a textured silicone strap for rugged everyday performance. Water-resistant up to 50 meters (5 ATM).",
    sizes: [],
    colors: [{ name: "All-Black Stealth", hex: "#111111" }],
    material: "PVD Coated 316L Steel, High-Grade Silicone Strap",
    fit: "42mm Case Diameter",
    care: ["Rinse with fresh water after swimming", "Dry completely"],
    details: [
      "5 ATM / 50 Meter water resistance rating",
      "Luminescent hands and hour markers for night legibility",
      "Durable scratch-resistant PVD coating",
    ],
  },
  {
    id: "bx_wat_04",
    handle: "stainless-steel-diver-watch",
    title: "Stainless Steel Diver Watch",
    category: "Watches",
    categoryHandle: "watches",
    price: { amount: 4499, currencyCode: "INR" },
    compareAtPrice: { amount: 5999, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/watches.webp",
      altText: "BrandX Stainless Steel Diver Watch",
    },
    images: [
      {
        url: "/images/home/shop-drop/watches.webp",
        altText: "Stainless Steel Diver Watch",
      },
    ],
    description:
      "A robust maritime timepiece featuring a rotating ceramic bezel, high-luminosity indices, and solid link stainless steel bracelet with safety deployment clasp.",
    sizes: [],
    colors: [{ name: "Ocean Navy / Silver Steel", hex: "#1c3d6d" }],
    material: "Solid 316L Stainless Steel Bracelet & Case",
    fit: "42mm Case Diameter",
    care: ["Rinse in clean water after saltwater exposure"],
    details: [
      "120-click unidirectional rotating ceramic bezel",
      "Solid stainless steel link bracelet with micro-adjust clasp",
      "Screw-down crown with 10 ATM / 100M water resistance",
    ],
  },
  {
    id: "bx_wat_05",
    handle: "vintage-digital-steel-chronograph",
    title: "Vintage Digital Steel Chronograph",
    category: "Watches",
    categoryHandle: "watches",
    price: { amount: 2499, currencyCode: "INR" },
    compareAtPrice: { amount: 3199, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/products/minimalist-chronograph/primary.webp",
      altText: "BrandX Vintage Digital Steel Chronograph",
    },
    images: [
      {
        url: "/images/products/minimalist-chronograph/primary.webp",
        altText: "Vintage Digital Steel Chronograph",
      },
    ],
    description:
      "A retro 80s tribute digital timepiece in polished stainless steel. Features stopwatch, daily alarm, hourly chime, and electro-luminescent backlight.",
    sizes: [],
    colors: [{ name: "Vintage Silver", hex: "#c7c7c7" }],
    material: "Stainless Steel Mesh Bracelet & Case",
    fit: "36mm Unisex Case Size",
    care: ["Wipe clean with cloth"],
    details: [
      "1/100 second digital stopwatch function",
      "Auto calendar with day/date display",
      "Adjustable self-clasp mesh steel band",
    ],
  },

  // ==========================================
  // 10. GOGGLES / SUNGLASSES (4 Products)
  // ==========================================
  {
    id: "bx_gog_01",
    handle: "classic-acetate-aviators",
    title: "Classic Acetate Aviator Sunglasses",
    category: "Goggles",
    categoryHandle: "goggles",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: { amount: 1999, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/goggles.webp",
      altText: "BrandX Classic Acetate Aviator Sunglasses",
    },
    images: [
      {
        url: "/images/home/shop-drop/goggles.webp",
        altText: "Classic Acetate Aviator Sunglasses",
      },
    ],
    description:
      "An elevated take on the timeless aviator shape, crafted with premium hand-polished Italian acetate frame and 100% UV400 polarized lenses.",
    sizes: [],
    colors: [{ name: "Tortoise Shell / Smoke Lens", hex: "#593c20" }],
    material: "Cellulose Acetate Frame, Polarized TAC Lenses",
    fit: "Medium Universal Fit",
    care: ["Store in protective BrandX hard case", "Clean with microfiber cloth only"],
    details: [
      "100% UV400 full ultraviolet protection",
      "Polarized glare-reduction lens technology",
      "5-barrel metal hinges for lifetime durability",
    ],
  },
  {
    id: "bx_gog_02",
    handle: "retro-square-matte-black-shades",
    title: "Retro Square Matte Black Shades",
    category: "Goggles",
    categoryHandle: "goggles",
    price: { amount: 1299, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/goggles.webp",
      altText: "BrandX Retro Square Matte Black Shades",
    },
    images: [
      {
        url: "/images/home/shop-drop/goggles.webp",
        altText: "Retro Square Matte Black Shades",
      },
    ],
    description:
      "Bold geometric square sunglasses with a modern matte finish. Offers maximum sun protection with crisp, distortion-free optical clarity.",
    sizes: [],
    colors: [{ name: "Matte Black / Dark Grey", hex: "#111111" }],
    material: "TR90 Ultra-Lightweight Polymer",
    fit: "Universal Fit",
    care: ["Clean with lens cleaner and cloth"],
    details: [
      "Ultra-light TR90 featherweight flexible frame",
      "Scratch-resistant polarized lens coating",
      "Ergonomic nose pads for zero slippage",
    ],
  },
  {
    id: "bx_gog_03",
    handle: "polarized-wayfarer-sunglasses",
    title: "Polarized Wayfarer Sunglasses",
    category: "Goggles",
    categoryHandle: "goggles",
    price: { amount: 1399, currencyCode: "INR" },
    compareAtPrice: { amount: 1799, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/goggles.webp",
      altText: "BrandX Polarized Wayfarer Sunglasses",
    },
    images: [
      {
        url: "/images/home/shop-drop/goggles.webp",
        altText: "Polarized Wayfarer Sunglasses",
      },
    ],
    description:
      "The iconic wayfarer profile refreshed with modern lightweight composite frame and deep emerald polarized lenses for superior contrast.",
    sizes: [],
    colors: [{ name: "Gloss Black / G15 Green", hex: "#1f3b2b" }],
    material: "Reinforced Polycarbonate Frame & Lenses",
    fit: "Standard Fit",
    care: ["Wipe clean with included microfiber pouch"],
    details: [
      "High-contrast G15 green polarized lenses",
      "Anti-reflective internal lens coating",
      "Includes hard case and lens cloth",
    ],
  },
  {
    id: "bx_gog_04",
    handle: "hexagonal-metal-frame-sunglasses",
    title: "Hexagonal Metal Frame Sunglasses",
    category: "Goggles",
    categoryHandle: "goggles",
    price: { amount: 1599, currencyCode: "INR" },
    compareAtPrice: { amount: 2199, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/goggles.webp",
      altText: "BrandX Hexagonal Metal Frame Sunglasses",
    },
    images: [
      {
        url: "/images/home/shop-drop/goggles.webp",
        altText: "Hexagonal Metal Frame Sunglasses",
      },
    ],
    description:
      "Slim gold-tone hexagonal metal frames paired with gradient brown lenses. An editorial, fashion-forward accessory for sun-soaked days.",
    sizes: [],
    colors: [{ name: "Gold Tone / Gradient Brown", hex: "#c49a45" }],
    material: "Electroplated Stainless Steel, Adjustable Silicone Nose Pads",
    fit: "Slim Fit",
    care: ["Handle gently, store in case"],
    details: [
      "Precision laser-cut metal frame construction",
      "Hypoallergenic adjustable silicone nose rests",
      "Gradient tint UV400 protection",
    ],
  },

  // ==========================================
  // 11. BELTS (4 Products)
  // ==========================================
  {
    id: "bx_blt_01",
    handle: "full-grain-leather-dress-belt",
    title: "Full Grain Leather Dress Belt",
    category: "Belts",
    categoryHandle: "belts",
    price: { amount: 999, currencyCode: "INR" },
    compareAtPrice: { amount: 1399, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/belts.webp",
      altText: "BrandX Full Grain Leather Dress Belt",
    },
    images: [
      {
        url: "/images/home/shop-drop/belts.webp",
        altText: "Full Grain Leather Dress Belt",
      },
    ],
    description:
      "Crafted from 100% full-grain genuine leather with hand-burnished edges and a brushed nickel buckle. Develops a rich natural patina with wear.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Cognac Tan", hex: "#7a431d" }],
    material: "100% Genuine Full-Grain Leather, Solid Zinc Alloy Buckle",
    fit: "35mm Standard Width",
    care: ["Clean with damp cloth", "Condition with leather balm annually"],
    details: [
      "Solid one-piece full-grain leather strap",
      "Brushed satin nickel single-prong buckle",
      "Beveled and burnished hand-stained edges",
    ],
  },
  {
    id: "bx_blt_02",
    handle: "reversible-black-brown-leather-belt",
    title: "Reversible Black / Brown Leather Belt",
    category: "Belts",
    categoryHandle: "belts",
    price: { amount: 1199, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/belts.webp",
      altText: "BrandX Reversible Black / Brown Leather Belt",
    },
    images: [
      {
        url: "/images/home/shop-drop/belts.webp",
        altText: "Reversible Black / Brown Leather Belt",
      },
    ],
    description:
      "Two belts in one. Featuring a rotating buckle mechanism that switches effortlessly between smooth black leather and textured dark brown leather.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Black / Dark Brown", hex: "#111111" }],
    material: "Dual-Sided Top Grain Leather, Swivel Metal Buckle",
    fit: "33mm Dress Width",
    care: ["Wipe clean with cloth"],
    details: [
      "360-degree smooth swivel buckle mechanism",
      "Two versatile colorways in a single belt",
      "Clean feathered edge profile",
    ],
  },
  {
    id: "bx_blt_03",
    handle: "woven-canvas-web-belt",
    title: "Woven Canvas Web Belt",
    category: "Belts",
    categoryHandle: "belts",
    price: { amount: 699, currencyCode: "INR" },
    compareAtPrice: { amount: 899, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/belts.webp",
      altText: "BrandX Woven Canvas Web Belt",
    },
    images: [
      {
        url: "/images/home/shop-drop/belts.webp",
        altText: "Woven Canvas Web Belt",
      },
    ],
    description:
      "Casual military web belt made from heavy-duty braided cotton webbing with an infinitely adjustable matte black friction buckle.",
    sizes: ["Free Size (Adjustable up to 42\")"],
    colors: [{ name: "Army Green", hex: "#4b5320" }],
    material: "100% Heavy Cotton Webbing, Steel Flip-Top Buckle",
    fit: "38mm Casual Width",
    care: ["Spot clean with water"],
    details: [
      "Cut-to-fit customizable length",
      "Matte black embossed BrandX buckle",
      "Reinforced metal end cap prevents fraying",
    ],
  },
  {
    id: "bx_blt_04",
    handle: "vintage-brass-buckle-jean-belt",
    title: "Vintage Brass Buckle Jean Belt",
    category: "Belts",
    categoryHandle: "belts",
    price: { amount: 1299, currencyCode: "INR" },
    compareAtPrice: { amount: 1699, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/belts.webp",
      altText: "BrandX Vintage Brass Buckle Jean Belt",
    },
    images: [
      {
        url: "/images/home/shop-drop/belts.webp",
        altText: "Vintage Brass Buckle Jean Belt",
      },
    ],
    description:
      "A rugged 40mm thick leather belt built specifically for heavy denim. Features a solid antique brass buckle and double-row heavy topstitching.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Distressed Dark Brown", hex: "#3e2723" }],
    material: "Heavy 4mm Full-Grain Buffalo Leather, Solid Brass Hardware",
    fit: "40mm Jean Belt Width",
    care: ["Wipe with dry cloth"],
    details: [
      "Extra-thick 4mm durable hide",
      "Solid antique brass buckle with roller pin",
      "Heavy gauge contrast saddle stitching",
    ],
  },

  // ==========================================
  // 12. CAPS & HATS (4 Products)
  // ==========================================
  {
    id: "bx_cap_01",
    handle: "washed-cotton-dad-hat",
    title: "Washed Cotton Dad Hat",
    category: "Caps",
    categoryHandle: "caps",
    price: { amount: 699, currencyCode: "INR" },
    compareAtPrice: { amount: 899, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/caps.webp",
      altText: "BrandX Washed Cotton Dad Hat",
    },
    images: [
      {
        url: "/images/home/shop-drop/caps.webp",
        altText: "Washed Cotton Dad Hat",
      },
    ],
    description:
      "Classic unconstructed 6-panel dad cap made from soft garment-washed cotton twill. Features subtle tonal BrandX monogram embroidery and brass buckle slider.",
    sizes: ["Free Size (Adjustable)"],
    colors: [{ name: "Washed Black", hex: "#222222" }],
    material: "100% Garment-Washed Cotton Twill",
    fit: "Low Profile Unstructured 6-Panel",
    care: ["Hand wash cold", "Dry flat"],
    details: [
      "Unstructured soft crown with pre-curved visor",
      "Tonal metal eyelets for ventilation",
      "Self-fabric strap with antique brass buckle",
    ],
  },
  {
    id: "bx_cap_02",
    handle: "vintage-corduroy-snapback-cap",
    title: "Vintage Corduroy Snapback Cap",
    category: "Caps",
    categoryHandle: "caps",
    price: { amount: 799, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/caps.webp",
      altText: "BrandX Vintage Corduroy Snapback Cap",
    },
    images: [
      {
        url: "/images/home/shop-drop/caps.webp",
        altText: "Vintage Corduroy Snapback Cap",
      },
    ],
    description:
      "Textured 8-wale cotton corduroy cap with structured front crown and retro flat brim. Delivers authentic vintage street style.",
    sizes: ["Free Size (Adjustable)"],
    colors: [{ name: "Caramel Brown", hex: "#8a5229" }],
    material: "100% Cotton Corduroy",
    fit: "Structured 5-Panel with Flat Visor",
    care: ["Spot clean only"],
    details: [
      "Thick wide-wale corduroy texture",
      "Adjustable classic snapback closure",
      "Interior moisture-absorbing sweatband",
    ],
  },
  {
    id: "bx_cap_03",
    handle: "performance-quick-dry-running-cap",
    title: "Performance Quick-Dry Cap",
    category: "Caps",
    categoryHandle: "caps",
    price: { amount: 749, currencyCode: "INR" },
    compareAtPrice: { amount: 999, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/caps.webp",
      altText: "BrandX Performance Quick-Dry Cap",
    },
    images: [
      {
        url: "/images/home/shop-drop/caps.webp",
        altText: "Performance Quick-Dry Cap",
      },
    ],
    description:
      "Ultra-lightweight running cap engineered with laser-perforated side panels and UPF 50+ sun protection for high-intensity training.",
    sizes: ["Free Size (Adjustable)"],
    colors: [{ name: "Slate Grey", hex: "#5a6068" }],
    material: "100% Recycled Poly Microfiber",
    fit: "Athletic Low-Crown Fit",
    care: ["Hand wash in cold water"],
    details: [
      "Laser-cut side ventilation holes",
      "Reflective accents for low-light safety",
      "Quick-adjust velcro bungee pull-tab",
    ],
  },
  {
    id: "bx_cap_04",
    handle: "structured-trucker-mesh-cap",
    title: "Structured Trucker Mesh Cap",
    category: "Caps",
    categoryHandle: "caps",
    price: { amount: 699, currencyCode: "INR" },
    compareAtPrice: null,
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/caps.webp",
      altText: "BrandX Structured Trucker Mesh Cap",
    },
    images: [
      {
        url: "/images/home/shop-drop/caps.webp",
        altText: "Structured Trucker Mesh Cap",
      },
    ],
    description:
      "Classic American trucker silhouette with foam-structured front panel and breathable mesh back. Features raised high-density BrandX typography mark.",
    sizes: ["Free Size (Adjustable)"],
    colors: [{ name: "Navy / White", hex: "#1a2c47" }],
    material: "Cotton Front, Poly Mesh Back",
    fit: "High Crown 6-Panel Trucker",
    care: ["Spot clean with damp cloth"],
    details: [
      "Breathable open-cell rear mesh",
      "Foam padded front crown",
      "Adjustable 7-hole snap closure",
    ],
  },

  // ==========================================
  // 13. WALLETS (4 Products)
  // ==========================================
  {
    id: "bx_wal_01",
    handle: "slim-rfid-leather-bifold-wallet",
    title: "Slim RFID Leather Bifold Wallet",
    category: "Wallets",
    categoryHandle: "wallets",
    price: { amount: 899, currencyCode: "INR" },
    compareAtPrice: { amount: 1299, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/wallets.webp",
      altText: "BrandX Slim RFID Leather Bifold Wallet",
    },
    images: [
      {
        url: "/images/home/shop-drop/wallets.webp",
        altText: "Slim RFID Leather Bifold Wallet",
      },
    ],
    description:
      "Handcrafted from genuine full-grain leather with built-in RFID blocking technology to safeguard your cards. Features 6 card slots, full-length bill compartment, and 2 receipt slip pockets.",
    sizes: [],
    colors: [{ name: "Espresso Brown", hex: "#3b2a1a" }],
    material: "100% Full-Grain Vegetable Tanned Leather",
    fit: "Slim 10mm Profile (11cm x 8.5cm)",
    care: ["Wipe with soft dry cloth", "Keep away from excessive moisture"],
    details: [
      "Integrated RFID blocking lining prevents digital skimming",
      "6 dedicated card slots + 2 hidden slip pockets",
      "Full-sized currency billfold section",
    ],
  },
  {
    id: "bx_wal_02",
    handle: "minimalist-leather-cardholder",
    title: "Minimalist Leather Cardholder",
    category: "Wallets",
    categoryHandle: "wallets",
    price: { amount: 599, currencyCode: "INR" },
    compareAtPrice: { amount: 799, currencyCode: "INR" },
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/wallets.webp",
      altText: "BrandX Minimalist Leather Cardholder",
    },
    images: [
      {
        url: "/images/home/shop-drop/wallets.webp",
        altText: "Minimalist Leather Cardholder",
      },
    ],
    description:
      "Designed for the front-pocket minimalist. Compact profile accommodates up to 8 cards plus folded cash in the center slot without adding pocket bulk.",
    sizes: [],
    colors: [{ name: "Matte Black", hex: "#111111" }],
    material: "Top Grain Napa Leather",
    fit: "Ultra-Thin 4mm Profile (10cm x 7cm)",
    care: ["Wipe clean"],
    details: [
      "4 outer card slots + 1 center cash pocket",
      "Debossed BrandX logo detailing",
      "Reinforced edge stitching for longevity",
    ],
  },
  {
    id: "bx_wal_03",
    handle: "coin-pocket-leather-wallet",
    title: "Coin Pocket Classic Leather Wallet",
    category: "Wallets",
    categoryHandle: "wallets",
    price: { amount: 999, currencyCode: "INR" },
    compareAtPrice: { amount: 1399, currencyCode: "INR" },
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/wallets.webp",
      altText: "BrandX Coin Pocket Classic Leather Wallet",
    },
    images: [
      {
        url: "/images/home/shop-drop/wallets.webp",
        altText: "Coin Pocket Classic Leather Wallet",
      },
    ],
    description:
      "A traditional bifold wallet featuring an internal snap-button coin pocket, ID display window, and dual cash dividers for currency organization.",
    sizes: [],
    colors: [{ name: "Tan Brown", hex: "#8c532b" }],
    material: "100% Genuine Cowhide Leather",
    fit: "Classic Bifold (11.5cm x 9.5cm)",
    care: ["Clean with leather balm"],
    details: [
      "Secure snap-closure interior coin pouch",
      "Clear mesh ID card window",
      "Dual divided currency bill sections",
    ],
  },
  {
    id: "bx_wal_04",
    handle: "aluminum-magnetic-money-clip-wallet",
    title: "Aluminum Magnetic Money Clip Wallet",
    category: "Wallets",
    categoryHandle: "wallets",
    price: { amount: 799, currencyCode: "INR" },
    compareAtPrice: { amount: 1099, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/wallets.webp",
      altText: "BrandX Aluminum Magnetic Money Clip Wallet",
    },
    images: [
      {
        url: "/images/home/shop-drop/wallets.webp",
        altText: "Aluminum Magnetic Money Clip Wallet",
      },
    ],
    description:
      "Modern hybrid wallet with aerospace-grade aluminum cash clip and top-grain leather card sleeve. Compact, sturdy, and highly functional.",
    sizes: [],
    colors: [{ name: "Gunmetal / Black Leather", hex: "#2b2b2b" }],
    material: "Anodized Aluminum & Genuine Napa Leather",
    fit: "Compact Front Pocket Fit",
    care: ["Wipe with microfiber cloth"],
    details: [
      "Strong magnetic spring-steel money clip",
      "Quick-access thumb push card slot",
      "RFID signal blocking protection",
    ],
  },

  // ==========================================
  // 14. PERFUMES / FRAGRANCES (4 Products)
  // ==========================================
  {
    id: "bx_prf_01",
    handle: "velvet-oud-eau-de-parfum",
    title: "Velvet Oud Eau de Parfum (100ml)",
    category: "Perfumes",
    categoryHandle: "perfumes",
    price: { amount: 1999, currencyCode: "INR" },
    compareAtPrice: { amount: 2699, currencyCode: "INR" },
    badge: "BESTSELLER",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/perfumes.webp",
      altText: "BrandX Velvet Oud Eau de Parfum",
    },
    images: [
      {
        url: "/images/home/shop-drop/perfumes.webp",
        altText: "Velvet Oud Eau de Parfum 100ml bottle",
      },
    ],
    description:
      "A rich, hypnotic oriental fragrance opening with warm saffron and cardamom, deepening into smoky Cambodian oud, and settling on a base of Madagascar vanilla and amber.",
    sizes: [],
    colors: [],
    material: "Concentrated Eau de Parfum (20% Perfume Oil Concentration)",
    fit: "100ml / 3.4 fl. oz. Spray",
    care: ["Store in a cool dry place away from direct sunlight"],
    details: [
      "Top Notes: Saffron, Cardamom, Bergamot",
      "Heart Notes: Cambodian Oud, Damask Rose, Leather",
      "Base Notes: Ambergris, Madagascar Vanilla, Sandalwood",
      "Long-lasting 10+ hour sillage",
    ],
  },
  {
    id: "bx_prf_02",
    handle: "coastal-citrus-fresh-cologne",
    title: "Coastal Citrus Fresh Cologne (100ml)",
    category: "Perfumes",
    categoryHandle: "perfumes",
    price: { amount: 1699, currencyCode: "INR" },
    compareAtPrice: null,
    badge: "NEW",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/perfumes.webp",
      altText: "BrandX Coastal Citrus Fresh Cologne",
    },
    images: [
      {
        url: "/images/home/shop-drop/perfumes.webp",
        altText: "Coastal Citrus Fresh Cologne",
      },
    ],
    description:
      "An invigorating aquatic citrus fragrance evoking Mediterranean ocean breezes. Crisp Sicilian lemon and sea salt melt into crushed rosemary and driftwood.",
    sizes: [],
    colors: [],
    material: "Eau de Parfum (18% Oil Concentration)",
    fit: "100ml / 3.4 fl. oz. Spray",
    care: ["Store in a cool dark cabinet"],
    details: [
      "Top Notes: Sicilian Lemon, Sea Salt, Calabrian Bergamot",
      "Heart Notes: Marine Accord, Rosemary, Neroli",
      "Base Notes: White Driftwood, Vetiver, Clean Musk",
      "Crisp, refreshing all-day daytime wear",
    ],
  },
  {
    id: "bx_prf_03",
    handle: "smoked-amber-nocturne-edp",
    title: "Smoked Amber Nocturne EDP (100ml)",
    category: "Perfumes",
    categoryHandle: "perfumes",
    price: { amount: 1899, currencyCode: "INR" },
    compareAtPrice: { amount: 2399, currencyCode: "INR" },
    badge: "SALE",
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/perfumes.webp",
      altText: "BrandX Smoked Amber Nocturne EDP",
    },
    images: [
      {
        url: "/images/home/shop-drop/perfumes.webp",
        altText: "Smoked Amber Nocturne EDP",
      },
    ],
    description:
      "An intoxicating evening fragrance featuring rich pipe tobacco, spiced rum, charred cedarwood, and a sensual golden amber dry-down.",
    sizes: [],
    colors: [],
    material: "Eau de Parfum (22% Intense Concentration)",
    fit: "100ml / 3.4 fl. oz. Spray",
    care: ["Keep away from heat sources"],
    details: [
      "Top Notes: Spiced Rum, Pink Pepper, Nutmeg",
      "Heart Notes: Pipe Tobacco Leaf, Leather, Iris",
      "Base Notes: Smoked Amber, Benzoin, Cedarwood",
      "Deep, sophisticated evening sillage",
    ],
  },
  {
    id: "bx_prf_04",
    handle: "midnight-cedarwood-parfum",
    title: "Midnight Cedarwood Parfum (50ml)",
    category: "Perfumes",
    categoryHandle: "perfumes",
    price: { amount: 1499, currencyCode: "INR" },
    compareAtPrice: null,
    badge: null,
    availableForSale: true,
    vendor: "BrandX",
    featuredImage: {
      url: "/images/home/shop-drop/perfumes.webp",
      altText: "BrandX Midnight Cedarwood Parfum",
    },
    images: [
      {
        url: "/images/home/shop-drop/perfumes.webp",
        altText: "Midnight Cedarwood Parfum",
      },
    ],
    description:
      "A deep woody-aromatic masterpiece. Notes of crushed juniper berries, Virginian cedarwood, patchouli, and earthy oakmoss create an air of commanding mystery.",
    sizes: [],
    colors: [],
    material: "Pure Parfum (25% Concentration)",
    fit: "50ml / 1.7 fl. oz. Travel Size",
    care: ["Store capped in dark dry place"],
    details: [
      "Top Notes: Juniper Berries, Black Pepper, Mandarin",
      "Heart Notes: Virginian Cedarwood, Clary Sage, Guaiac Wood",
      "Base Notes: Haitian Vetiver, Patchouli, Oakmoss",
      "Compact travel-friendly 50ml bottle",
    ],
  },
];

// Map lookup for O(1) performance
export const PRODUCTS_BY_HANDLE = new Map(
  PRODUCTS.map((p) => [p.handle, p])
);

export const PRODUCTS_BY_ID = new Map(
  PRODUCTS.map((p) => [p.id, p])
);

// Category metadata definitions
export const CATEGORY_DEFINITIONS = [
  {
    handle: "jeans",
    name: "Jeans",
    eyebrow: "DENIM COLLECTION",
    description:
      "Engineered from premium durable cotton with authentic washes, comfortable stretch, and reinforced stitching for every day.",
  },
  {
    handle: "cotton-pants",
    name: "Cotton Pants",
    eyebrow: "CHINOS & TROUSERS",
    description:
      "Versatile cotton chinos and trousers tailored for breathable all-day comfort and smart-casual dressing.",
  },
  {
    handle: "formal-pants",
    name: "Formal Pants",
    eyebrow: "EXECUTIVE TAILORING",
    description:
      "Sharp, crease-resistant tailored trousers cut to perfection for executive boardrooms, weddings, and formal occasions.",
  },
  {
    handle: "lowers",
    name: "Lowers",
    eyebrow: "JOGGERS & LOUNGEWEAR",
    description:
      "Ultra-soft heavyweight fleece joggers, active track pants, and breathable cotton lounge bottoms.",
  },
  {
    handle: "shirts",
    name: "Shirts",
    eyebrow: "SHIRTING & OVERSHIRTS",
    description:
      "Premium French linen blends, classic Oxford cotton button-downs, brushed flannels, and textured resort shirts.",
  },
  {
    handle: "t-shirts",
    name: "T-Shirts",
    eyebrow: "EVERYDAY ESSENTIALS",
    description:
      "Heavyweight boxy tees, silky Supima cotton crewnecks, vintage acid washes, and timeless striped knits.",
  },
  {
    handle: "shoes",
    name: "Shoes",
    eyebrow: "FOOTWEAR & SNEAKERS",
    description:
      "Urban runners, clean minimalist court sneakers, handcrafted suede loafers, and high-top trainers.",
    subcategories: [
      { handle: "shoes-sale", name: "Sale" },
      { handle: "imported-shoes", name: "Imported Shoes" },
    ],
  },
  {
    handle: "winter-wear",
    name: "Winter Wear",
    eyebrow: "SEASONAL OUTERWEAR",
    description:
      "Heavyweight 380 GSM fleece hoodies, urban track jackets, ribbed knit pullovers, and quilted streetwear puffers.",
    subcategories: [
      { handle: "hoodies", name: "Hoodies" },
      { handle: "zippers", name: "Zippers" },
      { handle: "sweatshirts", name: "Sweatshirts" },
      { handle: "pullovers", name: "Pullovers" },
      { handle: "jackets", name: "Jackets" },
    ],
  },
  {
    handle: "watches",
    name: "Watches",
    eyebrow: "HOROLOGY & ACCESSORIES",
    description:
      "Minimalist chronographs, ultra-slim dress watches, tactical matte black diver watches, and vintage steel digital chronos.",
  },
  {
    handle: "goggles",
    name: "Goggles & Shades",
    eyebrow: "EYEWEAR",
    description:
      "Handcrafted acetate aviators, UV400 polarized wayfarers, retro square sunglasses, and geometric metal frames.",
  },
  {
    handle: "belts",
    name: "Belts",
    eyebrow: "LEATHER ACCESSORIES",
    description:
      "100% full-grain leather dress belts, reversible black/brown belts, woven military canvas web belts, and brass buckle jean belts.",
  },
  {
    handle: "caps",
    name: "Caps & Hats",
    eyebrow: "HEADWEAR",
    description:
      "Washed cotton dad hats, vintage corduroy snapbacks, performance quick-dry caps, and classic trucker mesh hats.",
  },
  {
    handle: "wallets",
    name: "Wallets",
    eyebrow: "SMALL LEATHER GOODS",
    description:
      "Slim RFID-blocking leather bifold wallets, front-pocket cardholders, classic coin-pocket wallets, and magnetic money clips.",
  },
  {
    handle: "perfumes",
    name: "Perfumes",
    eyebrow: "FINE FRAGRANCES",
    description:
      "High-concentration Eau de Parfum fragrances: Velvet Oud, Coastal Citrus, Smoked Amber Nocturne, and Midnight Cedarwood.",
  },
];

// Helper Functions
export function getAllProducts() {
  return PRODUCTS;
}

export function getProductByHandle(handle) {
  if (!handle) return null;
  return PRODUCTS_BY_HANDLE.get(handle) || null;
}

export function getProductById(id) {
  if (!id) return null;
  return PRODUCTS_BY_ID.get(id) || null;
}

export function getProductsByCategory(categoryHandle) {
  if (!categoryHandle || categoryHandle === "all" || categoryHandle === "collections") {
    return PRODUCTS;
  }

  // Handle winter wear subcategories
  if (["hoodies", "zippers", "sweatshirts", "pullovers", "jackets"].includes(categoryHandle)) {
    const subMatches = PRODUCTS.filter((p) => p.subcategoryHandle === categoryHandle);
    if (subMatches.length > 0) return subMatches;
    return PRODUCTS.filter((p) => p.categoryHandle === "winter-wear");
  }

  // Handle shoes subcategories
  if (categoryHandle === "shoes-sale") {
    return PRODUCTS.filter((p) => p.categoryHandle === "shoes" && p.badge === "SALE");
  }
  if (categoryHandle === "imported-shoes") {
    return PRODUCTS.filter((p) => p.categoryHandle === "shoes");
  }

  return PRODUCTS.filter((p) => p.categoryHandle === categoryHandle);
}

export function getCategoryDefinition(categoryHandle) {
  if (!categoryHandle || categoryHandle === "all") {
    return {
      handle: "all",
      name: "All Products",
      eyebrow: "COMPLETE STOREFRONT CATALOG",
      description: "Explore the complete BrandX collection of everyday essentials, apparel, footwear, and accessories.",
    };
  }

  // Map subcategories to parent category metadata
  if (["hoodies", "zippers", "sweatshirts", "pullovers", "jackets"].includes(categoryHandle)) {
    const parent = CATEGORY_DEFINITIONS.find((c) => c.handle === "winter-wear");
    const subName = categoryHandle.charAt(0).toUpperCase() + categoryHandle.slice(1);
    return {
      handle: categoryHandle,
      name: `${subName} — Winter Wear`,
      eyebrow: "WINTER WEAR COLLECTION",
      description: parent?.description || "Winter wear collection by BrandX.",
    };
  }

  if (categoryHandle === "shoes-sale" || categoryHandle === "imported-shoes") {
    const parent = CATEGORY_DEFINITIONS.find((c) => c.handle === "shoes");
    const title = categoryHandle === "shoes-sale" ? "Shoes on Sale" : "Imported Footwear";
    return {
      handle: categoryHandle,
      name: title,
      eyebrow: "FOOTWEAR COLLECTION",
      description: parent?.description || "Footwear collection by BrandX.",
    };
  }

  const found = CATEGORY_DEFINITIONS.find((c) => c.handle === categoryHandle);
  if (found) return found;

  const title = categoryHandle
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    handle: categoryHandle,
    name: title,
    eyebrow: "BRANDX COLLECTION",
    description: `Discover the latest BrandX ${title} collection.`,
  };
}

export function getRelatedProducts(currentProduct, limit = 4) {
  if (!currentProduct) return [];
  const sameCategory = PRODUCTS.filter(
    (p) => p.categoryHandle === currentProduct.categoryHandle && p.handle !== currentProduct.handle
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const otherProducts = PRODUCTS.filter(
    (p) => p.handle !== currentProduct.handle && p.categoryHandle !== currentProduct.categoryHandle
  );
  return [...sameCategory, ...otherProducts].slice(0, limit);
}
