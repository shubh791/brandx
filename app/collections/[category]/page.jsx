import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import {
  getProductsByCategory,
  getCategoryDefinition,
  CATEGORY_DEFINITIONS,
  getAllProducts,
} from "@/data/products";
import { ChevronRightIcon } from "@/components/common/Icons";

export async function generateStaticParams() {
  const params = [];
  CATEGORY_DEFINITIONS.forEach((cat) => {
    params.push({ category: cat.handle });
    if (cat.subcategories) {
      cat.subcategories.forEach((sub) => {
        params.push({ category: sub.handle });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const def = getCategoryDefinition(category);

  return {
    title: `${def.name} | BrandX Collection`,
    description: def.description || `Shop BrandX ${def.name} online.`,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryDef = getCategoryDefinition(category);
  const products = getProductsByCategory(category);

  // If no category definition found and no products, 404
  if (!categoryDef && products.length === 0) {
    notFound();
  }

  // Check parent category for subcategory tabs
  const parentCategory = CATEGORY_DEFINITIONS.find(
    (c) =>
      c.handle === category ||
      c.subcategories?.some((s) => s.handle === category)
  );

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
            <li>
              <Link href="/collections" className="hover:text-black transition-colors">
                Collections
              </Link>
            </li>
            <li>
              <ChevronRightIcon className="w-3 h-3 text-[#aaaaaa]" />
            </li>
            <li className="font-semibold text-[#111111]" aria-current="page">
              {categoryDef.name}
            </li>
          </ol>
        </nav>

        {/* 2. Collection Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#eae8e3]">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#737373]">
            {categoryDef.eyebrow || "BRANDX COLLECTION"}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mt-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              {categoryDef.name}
            </h1>
            <span className="text-xs sm:text-sm font-medium text-[#666666]">
              {products.length} {products.length === 1 ? "Product" : "Products"}
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-[#666666] max-w-2xl leading-relaxed">
            {categoryDef.description}
          </p>
        </div>

        {/* 3. Subcategory Filter Tabs (Where applicable, e.g. Shoes, Winter Wear) */}
        {parentCategory?.subcategories && parentCategory.subcategories.length > 0 && (
          <div className="py-4 overflow-x-auto no-scrollbar flex items-center gap-2 border-b border-[#f0eee9]">
            <Link
              href={`/collections/${parentCategory.handle}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors whitespace-nowrap ${
                category === parentCategory.handle
                  ? "bg-[#111111] text-white"
                  : "bg-[#f4f3ef] hover:bg-[#eae8e3] text-[#333333] hover:text-black"
              }`}
            >
              All {parentCategory.name}
            </Link>
            {parentCategory.subcategories.map((sub) => (
              <Link
                key={sub.handle}
                href={`/collections/${sub.handle}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors whitespace-nowrap ${
                  category === sub.handle
                    ? "bg-[#111111] text-white"
                    : "bg-[#f4f3ef] hover:bg-[#eae8e3] text-[#333333] hover:text-black"
                }`}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}

        {/* 4. Product Grid */}
        {products.length > 0 ? (
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {products.map((product, idx) => (
              <ProductCard
                key={product.id || product.handle}
                product={product}
                priority={idx < 4}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <h3 className="text-lg font-bold text-[#111111]">
              No products found in this category
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] mt-1">
              Check back soon for new drops and seasonal restocks.
            </p>
            <Link
              href="/collections"
              className="mt-4 inline-flex items-center px-5 py-2.5 bg-[#111111] text-white text-xs font-bold uppercase tracking-wider rounded-[2px]"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </Container>
    </main>
  );
}
