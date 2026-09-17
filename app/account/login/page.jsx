import { Suspense } from "react";
import { LoginForm } from "@/components/account";

export const metadata = {
  title: "Sign In | BrandX — Samalkha",
  description:
    "Sign in to your BrandX account with your mobile number to view your orders and account details.",
  openGraph: {
    title: "Sign In | BrandX — Samalkha",
    description: "Sign in to your BrandX account.",
  },
};

export default function LoginPage() {
  return (
    <main className="min-h-[70vh] flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f8]">
      <Suspense fallback={<div className="h-64 max-w-md mx-auto w-full bg-white rounded animate-pulse" />}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
