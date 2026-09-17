import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { SPOTLIGHT_PRODUCTS } from "@/data/spotlight-products";

export function BrandSpotlight({ products = SPOTLIGHT_PRODUCTS, title = "Brand Spotlight" }) {
  return (
    <section className="w-full bg-white pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-14 lg:pb-16 select-none">
      <Container size="full">
        {/* Section Header (Left-Aligned) */}
        <div className="mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-[28px] md:text-3xl font-bold tracking-tight text-[#111111]">
            {title}
          </h2>
        </div>

        {/* Product Grid: 2 cols Mobile -> 3 cols Tablet -> 4 cols Laptop -> 5 cols Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
