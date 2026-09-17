"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@/components/common/Icons";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  priority = false,
  className = "",
  onWishlistToggle,
}) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  if (!product) return null;

  const {
    handle,
    title,
    featuredImage,
    price,
    compareAtPrice,
    badge,
  } = product;

  const itemKey = handle || product.id;
  const isSaved = isWishlisted(itemKey);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (onWishlistToggle) {
      onWishlistToggle(product, !isSaved);
    }
  };

  const isOnSale =
    badge === "SALE" ||
    (compareAtPrice && compareAtPrice.amount > price.amount);

  return (
    <Link
      href={`/products/${handle}`}
      className={cn(
        "group flex flex-col w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-[2px]",
        className
      )}
    >
      {/* Product Image Container (4:5 Aspect Ratio) */}
      <div className="relative w-full aspect-[4/5] bg-[#f8f8f8] overflow-hidden rounded-[2px] border border-[#f0f0f0] transition-colors group-hover:border-[#e5e5e5]">
        {featuredImage?.url && (
          <Image
            src={featuredImage.url}
            alt={featuredImage.altText || title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        )}

        {/* Product Badges (Top-Left) */}
        {badge ? (
          <span
            className={cn(
              "absolute top-2 left-2 z-10 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider rounded-[2px]",
              badge === "SALE"
                ? "bg-[#e11d48] text-white"
                : badge === "NEW"
                ? "bg-[#111111] text-white"
                : "bg-zinc-800 text-white"
            )}
          >
            {badge}
          </span>
        ) : isOnSale ? (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#e11d48] text-white rounded-[2px]">
            SALE
          </span>
        ) : null}

        {/* Wishlist Button (Top-Right) */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/90 text-[#222222] shadow-xs hover:bg-white hover:text-black transition-all active:scale-90 cursor-pointer"
          aria-label={isSaved ? `Remove ${title} from wishlist` : `Add ${title} to wishlist`}
          aria-pressed={isSaved}
        >
          <HeartIcon
            className={cn(
              "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors",
              isSaved
                ? "fill-[#e11d48] text-[#e11d48]"
                : "text-[#222222] hover:text-black"
            )}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-2.5 sm:mt-3 flex flex-col">
        {/* Title */}
        <h3 className="text-xs sm:text-[13.5px] font-medium text-[#111111] group-hover:text-black transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Price Row */}
        <div className="mt-0.5 sm:mt-1 flex items-baseline gap-2">
          <span className="text-xs sm:text-[13.5px] font-semibold text-[#111111]">
            {formatPrice(price.amount, price.currencyCode || "INR")}
          </span>

          {compareAtPrice && compareAtPrice.amount > price.amount && (
            <span className="text-[11px] sm:text-[12px] text-[#888888] line-through font-normal">
              {formatPrice(compareAtPrice.amount, compareAtPrice.currencyCode || "INR")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
