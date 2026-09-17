import {
  Hero,
  ShopDrop,
  BrandSpotlight,
  ShopYourStyle,
  WhyShopBrandX,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ShopDrop />
      <BrandSpotlight />
      <ShopYourStyle />
      <WhyShopBrandX />
    </main>
  );
}
