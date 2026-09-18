"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import {
  HeartIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  TruckIcon,
  CheckIcon,
} from "@/components/common/Icons";
import { SizeGuideModal } from "./SizeGuideModal";
import { ProductDetailsAccordion } from "./ProductDetailsAccordion";
import { cn } from "@/lib/utils";

export function ProductInfo({ product }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { isAuthenticated, openAuthModal } = useAuth();

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.length === 1 ? product.sizes[0] : null
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || null
  );
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) return null;

  const hasSizes = product.sizes && product.sizes.length > 0;
  const isSaved = isWishlisted(product.handle || product.id);

  const discountPercent =
    product.compareAtPrice && product.compareAtPrice.amount > product.price.amount
      ? Math.round(
          ((product.compareAtPrice.amount - product.price.amount) /
            product.compareAtPrice.amount) *
            100
        )
      : null;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleAddToCart = () => {
    if (hasSizes && !selectedSize) {
      setSizeError(true);
      return;
    }

    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlistClick = () => {
    if (!isAuthenticated) {
      openAuthModal({
        message: "Login to save your favourites",
        pendingAction: { type: "wishlist", product },
      });
      return;
    }
    toggleWishlist(product);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Category Eyebrow & Title */}
      <div className="flex flex-col">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#737373]">
          {product.vendor || "BrandX"} • {product.category}
        </span>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#111111] mt-1">
          {product.title}
        </h1>
      </div>

      {/* 2. Price Row */}
      <div className="mt-3 flex items-baseline gap-3">
        <span className="text-xl sm:text-2xl font-bold text-[#111111]">
          {formatPrice(product.price.amount, product.price.currencyCode || "INR")}
        </span>

        {product.compareAtPrice && product.compareAtPrice.amount > product.price.amount && (
          <>
            <span className="text-sm sm:text-base text-[#888888] line-through font-normal">
              {formatPrice(product.compareAtPrice.amount, product.compareAtPrice.currencyCode || "INR")}
            </span>
            {discountPercent && (
              <span className="text-xs font-bold text-[#e11d48] bg-rose-50 px-2 py-0.5 rounded-[2px]">
                {discountPercent}% OFF
              </span>
            )}
          </>
        )}
      </div>
      <span className="text-[11px] text-[#777777] mt-0.5">
        Inclusive of all taxes. Free shipping on eligible orders.
      </span>

      {/* 3. Color Display (if applicable) */}
      {product.colors && product.colors.length > 0 && (
        <div className="mt-5">
          <span className="text-xs font-semibold text-[#111111]">
            Color: <span className="font-normal text-[#555555]">{selectedColor || product.colors[0].name}</span>
          </span>
          <div className="flex items-center gap-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border text-xs font-medium transition-all cursor-pointer",
                  selectedColor === color.name
                    ? "border-black bg-[#faf9f7] text-black font-bold shadow-xs"
                    : "border-[#e5e3dc] text-[#555555] hover:border-black"
                )}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. Size Selector (if applicable) */}
      {hasSizes && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#111111]">
              Select Size <span className="text-[#e11d48]">*</span>
            </span>
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(true)}
              className="text-xs font-semibold text-[#111111] hover:text-[#e11d48] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Size Guide
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeSelect(size)}
                className={cn(
                  "h-11 flex items-center justify-center rounded-[2px] border text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                  selectedSize === size
                    ? "border-[#111111] bg-[#111111] text-white shadow-xs"
                    : "border-[#d8d6ce] bg-white text-[#222222] hover:border-[#111111] hover:bg-[#faf9f7]"
                )}
              >
                {size}
              </button>
            ))}
          </div>

          {sizeError && (
            <p className="text-xs font-semibold text-[#e11d48] mt-1.5 animate-in fade-in duration-150">
              Please select a size to add to your shopping bag.
            </p>
          )}
        </div>
      )}

      {/* 5. Quantity & Actions */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Quantity Controls */}
        <div className="flex items-center border border-[#d8d6ce] rounded-[2px] bg-white h-12 w-fit">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="w-10 h-full flex items-center justify-center text-sm font-bold text-[#444444] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-10 text-center text-sm font-bold text-[#111111]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.min(10, prev + 1))}
            className="w-10 h-full flex items-center justify-center text-sm font-bold text-[#444444] hover:text-black hover:bg-[#f5f5f5] transition-colors cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Primary Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={cn(
            "flex-1 h-12 px-6 flex items-center justify-center gap-2 rounded-[2px] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs active:scale-[0.99] cursor-pointer",
            isAdded
              ? "bg-emerald-600 text-white"
              : "bg-[#111111] hover:bg-black text-white"
          )}
        >
          {isAdded ? (
            <>
              <CheckIcon className="w-4 h-4 text-white" />
              <span>Added to Bag</span>
            </>
          ) : (
            <span>Add to Bag</span>
          )}
        </button>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className={cn(
            "h-12 w-12 flex items-center justify-center rounded-[2px] border transition-all cursor-pointer shrink-0",
            isSaved
              ? "border-[#e11d48] bg-rose-50 text-[#e11d48]"
              : "border-[#d8d6ce] hover:border-black text-[#222222] bg-white hover:bg-[#faf9f7]"
          )}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isSaved}
        >
          <HeartIcon
            className={cn(
              "w-5 h-5 transition-colors",
              isSaved ? "fill-[#e11d48] text-[#e11d48]" : "text-[#222222]"
            )}
          />
        </button>
      </div>

      {/* 6. Assurances Grid */}
      <div className="mt-7 grid grid-cols-2 gap-3 py-4 border-t border-[#eae8e3]">
        <div className="flex items-center gap-2.5">
          <RotateCcwIcon className="w-4 h-4 text-[#555555] shrink-0" />
          <span className="text-xs text-[#444444] font-medium">
            7-Day Easy Returns
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <TruckIcon className="w-4 h-4 text-[#555555] shrink-0" />
          <span className="text-xs text-[#444444] font-medium">
            India-Wide Fast Delivery
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheckIcon className="w-4 h-4 text-[#555555] shrink-0" />
          <span className="text-xs text-[#444444] font-medium">
            100% Genuine BrandX
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-xs text-[#444444] font-medium">
            Secure Payment Gateway
          </span>
        </div>
      </div>

      {/* 7. Product Accordions */}
      <ProductDetailsAccordion product={product} />

      {/* 8. Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}
