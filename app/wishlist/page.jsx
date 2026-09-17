import { WishlistView } from "@/components/wishlist";

export const metadata = {
  title: "Your Wishlist | BrandX — Samalkha",
  description:
    "Keep your favourite BrandX clothing, denim, shoes and lifestyle essentials in one place.",
  openGraph: {
    title: "Your Wishlist | BrandX — Samalkha",
    description: "Keep your favourite BrandX items in one place.",
  },
};

export default function WishlistPage() {
  return <WishlistView />;
}
