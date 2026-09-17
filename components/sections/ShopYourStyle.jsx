import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SHOP_YOUR_STYLE_DATA } from "@/data/shop-your-style";
import { ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

function StyleTile({ tile, className = "", priority = false, sizes }) {
  if (!tile) return null;

  return (
    <Link
      href={tile.href}
      className={cn(
        "group relative block w-full overflow-hidden rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
        className
      )}
    >
      {/* Background Image with Subtle Hover Zoom */}
      <Image
        src={tile.image}
        alt={tile.alt || tile.title}
        fill
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"}
        className={cn(
          "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
          tile.objectPosition || "object-center"
        )}
      />

      {/* Subtle Bottom Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

      {/* Bottom-Left Typography & CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 flex flex-col items-start select-none z-10 pointer-events-none">
        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white uppercase">
          {tile.title}
        </h3>
        <p className="mt-0.5 sm:mt-1 text-xs sm:text-[13.5px] text-neutral-200 font-normal">
          {tile.subtitle}
        </p>
        <span className="mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-medium text-white">
          <span>{tile.linkText}</span>
          <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

export function ShopYourStyle({
  data = SHOP_YOUR_STYLE_DATA,
  className = "",
}) {
  if (!data || !data.tiles || data.tiles.length < 3) return null;

  const [jeansTile, shirtsTile, shoesTile] = data.tiles;

  return (
    <section
      aria-label={data.heading || "Shop Your Style"}
      className={cn("w-full bg-white pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 lg:pb-20 select-none", className)}
    >
      <Container size="full">
        {/* Section Header (Left-Aligned) */}
        <div className="mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-[28px] md:text-3xl font-bold tracking-tight text-[#111111]">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="mt-1 text-xs sm:text-sm text-[#666666]">
              {data.subheading}
            </p>
          )}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP ASYMMETRIC MOSAIC (Large Left 60% + Stacked Right 40%)            */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-2.5 xl:gap-3 lg:h-[540px] xl:h-[580px]">
          {/* Left: Jeans (Full Height ~60% Width) */}
          <div className="lg:col-span-7 h-full">
            <StyleTile
              tile={jeansTile}
              priority={jeansTile.priority}
              sizes="(max-width: 1400px) 60vw, 840px"
              className="h-full"
            />
          </div>

          {/* Right: Shirts & Shoes (Stacked Vertically ~40% Width) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 xl:gap-3 h-full">
            <div className="flex-1 h-[calc(50%-5px)] xl:h-[calc(50%-6px)]">
              <StyleTile
                tile={shirtsTile}
                priority={shirtsTile.priority}
                sizes="(max-width: 1400px) 40vw, 560px"
                className="h-full"
              />
            </div>
            <div className="flex-1 h-[calc(50%-5px)] xl:h-[calc(50%-6px)]">
              <StyleTile
                tile={shoesTile}
                priority={shoesTile.priority}
                sizes="(max-width: 1400px) 40vw, 560px"
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET STACKED LAYOUT (3 Clean Vertical Tiles)                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:hidden gap-3">
          <StyleTile
            tile={jeansTile}
            priority={jeansTile.priority}
            sizes="(max-width: 768px) 100vw, 600px"
            className="h-[270px] sm:h-[320px]"
          />
          <StyleTile
            tile={shirtsTile}
            priority={shirtsTile.priority}
            sizes="(max-width: 768px) 100vw, 600px"
            className="h-[270px] sm:h-[320px]"
          />
          <StyleTile
            tile={shoesTile}
            priority={shoesTile.priority}
            sizes="(max-width: 768px) 100vw, 600px"
            className="h-[270px] sm:h-[320px]"
          />
        </div>
      </Container>
    </section>
  );
}
