import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SHOP_DROP_CATEGORIES } from "@/data/shop-drop";

export function ShopDrop({ categories = SHOP_DROP_CATEGORIES }) {
  return (
    <section className="w-full bg-white pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-12 lg:pb-14 select-none">
      <Container size="full">
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-[28px] md:text-3xl font-bold tracking-tight text-[#111111]">
            Shop Drop
          </h2>
        </div>

        {/* Category Showcase Grid: Desktop One-Row / Clean Wrap, Mobile 3-4 Column Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:flex-wrap lg:justify-center gap-y-6 gap-x-3 sm:gap-6 lg:gap-7 xl:gap-8 justify-items-center">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
            >
              {/* Circular Category Image */}
              <div className="relative w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] md:w-[96px] md:h-[96px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden border border-[#e5e5e5] bg-[#f8f8f8] transition-all duration-300 ease-out group-hover:border-[#111111]">
                <Image
                  src={category.image}
                  alt={category.alt || category.name}
                  fill
                  sizes="(max-width: 640px) 76px, (max-width: 1024px) 96px, 100px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* Category Label */}
              <span className="mt-2 text-xs sm:text-[13px] md:text-[13.5px] font-medium text-[#222222] group-hover:text-black transition-colors text-center truncate max-w-[84px] sm:max-w-[104px]">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
