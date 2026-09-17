import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { LoginModal } from "@/components/account";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: "BrandX — Fashion made for every day",
  description:
    "Shop BrandX premium fashion, everyday essentials, and modern streetwear.",
  keywords: ["fashion", "clothing", "streetwear", "essentials", "brandx"],
  authors: [{ name: "BrandX" }],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-white text-[#111111]`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        <AuthProvider>
          <WishlistProvider>
            <Header />
            <div className="flex-1 flex flex-col bg-white">{children}</div>
            <Footer />
            <LoginModal />
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
