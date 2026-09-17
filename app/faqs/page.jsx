import { FaqClientView } from "@/components/faq";

export const metadata = {
  title: "FAQs | BrandX Help Center",
  description:
    "Find answers to frequently asked questions regarding BrandX orders, shipping, deliveries, returns, exchanges, sizing, and payments.",
};

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-white">
      <FaqClientView />
    </main>
  );
}
