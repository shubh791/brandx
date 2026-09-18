import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { getAllProducts, CATEGORY_DEFINITIONS } from "@/data/products";
import { ChevronRightIcon } from "@/components/common/Icons";

export const metadata = {
  title: "All Collections | BrandX Storefront",
  description:
    "Explore the complete BrandX fashion collection: premium jeans, cotton pants, tailored trousers, casual shirts, boxy tees, footwear, and essentials.",
};

export default function CollectionsPage() {
  const products = getAllProducts();

  return (
    <main className="min-h-screen bg-white py-6 sm:py-10">
      <Container size="full">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-[#777777]">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRightIcon className="w-3 h-3 text-[#aaaaaa]" />
            </li>
            <li className="font-semibold text-[#111111]" aria-current="page">
              All Collections
            </li>
          </ol>
        </nav>

        {/* 2. Collection Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#eae8e3]">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#737373]">
            COMPLETE CATALOG
          </span>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mt-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              All Collections
            </h1>
            <span className="text-xs sm:text-sm font-medium text-[#666666]">
              {products.length} Products
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-[#666666] max-w-2xl leading-relaxed">
            Discover BrandX everyday wardrobe essentials, premium apparel, modern tailoring, footwear, and curated fashion accessories.
          </p>
        </div>

        {/* 3. Category Filter Chips */}
        <div className="py-4 sm:py-5 overflow-x-auto no-scrollbar flex items-center gap-2">
          <Link
            href="/collections"
            className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
          >
            All Products
          </Link>
          {CATEGORY_DEFINITIONS.map((cat) => (
            <Link
              key={cat.handle}
              href={`/collections/${cat.handle}`}
              className="px-3.5 py-1.5 rounded-full bg-[#f4f3ef] hover:bg-[#eae8e3] text-[#333333] hover:text-black text-xs font-medium tracking-wide transition-colors whitespace-nowrap"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* 4. Responsive Product Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id || product.handle}
              product={product}
              priority={idx < 4}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
