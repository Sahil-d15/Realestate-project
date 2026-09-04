import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matoshree Gurukul | Independent Residences in Karwar",
  description:
    "Explore Matoshree Gurukul's thoughtfully designed independent residences in Karwar, with private plots, dedicated parking, modern kitchens, natural light and carefully planned living spaces.",
  keywords: [
    "Matoshree Gurukul",
    "independent house in Karwar",
    "bungalow in Karwar",
    "residential property Karwar",
    "independent residence Karwar",
    "homes in Karwar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
