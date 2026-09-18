import { ProductCard } from "./ProductCard";

export function RelatedProducts({ products = [] }) {
  if (!products || products.length === 0) return null;

  return (
    <section aria-label="Related Products" className="w-full mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#eae8e3]">
      <div className="flex flex-col mb-6">
        <span className="text-[10.5px] uppercase font-bold tracking-[0.2em] text-[#737373]">
          EXPLORE SIMILAR STYLES
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mt-0.5">
          You May Also Like
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id || product.handle} product={product} />
        ))}
      </div>
    </section>
  );
}
