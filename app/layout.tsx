import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genesissports.co.in"),
  title: {
    default: "Genesis Sports | Sports Marketing, Sponsorship & Brand Partnerships",
    template: "%s | Genesis Sports",
  },
  description:
    "Genesis Sports is a sports marketing and management company creating opportunities across sports, brands, talent, entertainment and experiences.",
  openGraph: {
    siteName: "Genesis Sports",
    type: "website",
    title: "Genesis Sports | Sports Marketing, Sponsorship & Brand Partnerships",
    description:
      "Genesis Sports is a sports marketing and management company creating opportunities across sports, brands, talent, entertainment and experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-[family-name:var(--font-inter)] bg-ink text-bone">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
