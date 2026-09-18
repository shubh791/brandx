import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import {
  getAllProducts,
  getProductByHandle,
  getRelatedProducts,
} from "@/data/products";
import { ChevronRightIcon } from "@/components/common/Icons";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    return {
      title: "Product Not Found | BrandX",
    };
  }

  return {
    title: `${product.title} | BrandX`,
    description: product.description,
    openGraph: {
      title: `${product.title} — BrandX`,
      description: product.description,
      images: [
        {
          url: product.featuredImage?.url || "/og-image.jpg",
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  return (
    <main className="min-h-screen bg-white py-6 sm:py-10">
      <Container size="full">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-[#777777] overflow-x-auto no-scrollbar whitespace-nowrap">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRightIcon className="w-3 h-3 text-[#aaaaaa]" />
            </li>
            <li>
              <Link
                href={`/collections/${product.categoryHandle}`}
                className="hover:text-black transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <li>
              <ChevronRightIcon className="w-3 h-3 text-[#aaaaaa]" />
            </li>
            <li className="font-semibold text-[#111111] truncate max-w-xs" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* 2. Main PDP Grid: Gallery Left + Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* Gallery Column (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images || [product.featuredImage]}
              title={product.title}
              badge={product.badge}
            />
          </div>

          {/* Info Column (5 cols on desktop, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* 3. Related Products Recommendations */}
        <RelatedProducts products={relatedProducts} />
      </Container>
    </main>
  );
}
