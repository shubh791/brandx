"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import {
  ShoppingBagIcon,
  XIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  TruckIcon,
  ArrowRightIcon,
} from "@/components/common/Icons";

export default function CartPage() {
  const {
    cartItems,
    cartCount,
    subtotal,
    isHydrated,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!isHydrated) {
    return (
      <main className="min-h-[60vh] bg-white py-12 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[70vh] bg-white py-16 sm:py-24">
        <Container size="full">
          <div className="max-w-md mx-auto text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f4f3ef] flex items-center justify-center text-[#777777] mb-4">
              <ShoppingBagIcon className="w-8 h-8" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#111111]">
              Your Shopping Bag is Empty
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
              Looks like you haven't added anything to your bag yet. Explore our latest drops, denim, shirts, and everyday essentials.
            </p>
            <Link
              href="/collections"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all shadow-xs active:scale-95"
            >
              <span>Explore Collections</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white py-6 sm:py-10">
      <Container size="full">
        {/* Header */}
        <div className="pb-4 sm:pb-6 border-b border-[#eae8e3] flex items-baseline justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Shopping Bag
            </h1>
            <span className="text-xs sm:text-sm text-[#666666] mt-0.5">
              {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
            </span>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold text-[#888888] hover:text-[#e11d48] transition-colors cursor-pointer"
          >
            Clear Bag
          </button>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 divide-y divide-[#eae8e3] border-b border-[#eae8e3]">
            {cartItems.map((item) => {
              const itemKey = item.key || `${item.id}_${item.size}`;
              const itemTotal = (item.price?.amount || 0) * (item.quantity || 1);

              return (
                <div key={itemKey} className="py-4 sm:py-6 flex gap-4 sm:gap-6 items-start">
                  {/* Item Image */}
                  <Link
                    href={`/products/${item.handle}`}
                    className="relative aspect-[4/5] w-20 sm:w-28 bg-[#f8f8f8] rounded-[2px] overflow-hidden border border-[#eae8e3] shrink-0"
                  >
                    {item.featuredImage?.url && (
                      <Image
                        src={item.featuredImage.url}
                        alt={item.featuredImage.altText || item.title}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    )}
                  </Link>

                  {/* Item Info */}
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        {item.category && (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#737373]">
                            {item.category}
                          </span>
                        )}
                        <h3 className="text-sm sm:text-base font-bold text-[#111111] hover:text-[#e11d48] transition-colors line-clamp-1">
                          <Link href={`/products/${item.handle}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(itemKey)}
                        className="p-1 text-[#888888] hover:text-black hover:bg-[#f5f5f5] rounded-full transition-colors cursor-pointer shrink-0"
                        aria-label={`Remove ${item.title} from bag`}
                      >
                        <XIcon className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Selected Size / Color */}
                    <div className="mt-1 flex items-center gap-3 text-xs text-[#555555]">
                      {item.size && item.size !== "Default" && (
                        <span>
                          Size: <strong className="text-[#111111]">{item.size}</strong>
                        </span>
                      )}
                      {item.color && (
                        <span>
                          Color: <strong className="text-[#111111]">{item.color}</strong>
                        </span>
                      )}
                    </div>

                    {/* Price & Quantity Controls Row */}
                    <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#d8d6ce] rounded-[2px] bg-white h-9">
                        <button
                          type="button"
                          onClick={() => updateQuantity(itemKey, -1)}
                          className="w-8 h-full flex items-center justify-center text-xs font-bold text-[#555555] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-[#111111]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(itemKey, 1)}
                          className="w-8 h-full flex items-center justify-center text-xs font-bold text-[#555555] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Total Item Price */}
                      <div className="text-right">
                        <span className="text-sm sm:text-base font-bold text-[#111111]">
                          {formatPrice(itemTotal, item.price?.currencyCode || "INR")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#faf9f7] p-5 sm:p-7 rounded-[2px] border border-[#eae8e3]">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#111111] pb-3 border-b border-[#eae8e3]">
                Order Summary
              </h2>

              <dl className="mt-4 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-[#555555]">
                  <dt>Subtotal ({cartCount} items)</dt>
                  <dd className="font-semibold text-[#111111]">
                    {formatPrice(subtotal, "INR")}
                  </dd>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <dt>Estimated Shipping</dt>
                  <dd className="font-semibold text-emerald-700">
                    Calculated at checkout
                  </dd>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <dt>Goods & Services Tax (GST)</dt>
                  <dd className="font-medium text-[#111111]">
                    Included
                  </dd>
                </div>

                <div className="pt-3 border-t border-[#eae8e3] flex justify-between text-base font-bold text-[#111111]">
                  <dt>Estimated Total</dt>
                  <dd>{formatPrice(subtotal, "INR")}</dd>
                </div>
              </dl>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => {
                  alert("Pre-launch review stage: Payment gateway (Razorpay) will be enabled for real checkouts upon launch.");
                }}
                className="mt-6 w-full h-12 flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[2px] transition-all shadow-xs active:scale-[0.99] cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              {/* Assurances */}
              <div className="mt-6 pt-5 border-t border-[#eae8e3] space-y-2.5 text-xs text-[#555555]">
                <div className="flex items-center gap-2">
                  <RotateCcwIcon className="w-4 h-4 text-[#777777] shrink-0" />
                  <span>7-Day Easy Returns & Size Exchanges</span>
                </div>
                <div className="flex items-center gap-2">
                  <TruckIcon className="w-4 h-4 text-[#777777] shrink-0" />
                  <span>Doorstep Delivery Across India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-[#777777] shrink-0" />
                  <span>PCI-DSS Compliant Secure Checkout</span>
                </div>
              </div>

              {/* Policy Links */}
              <div className="mt-5 pt-4 border-t border-[#eae8e3] flex items-center justify-between text-[11px] text-[#777777]">
                <Link href="/terms" className="hover:text-black underline underline-offset-2">
                  Terms
                </Link>
                <Link href="/returns" className="hover:text-black underline underline-offset-2">
                  Returns
                </Link>
                <Link href="/privacy" className="hover:text-black underline underline-offset-2">
                  Privacy
                </Link>
                <Link href="/shipping" className="hover:text-black underline underline-offset-2">
                  Shipping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
