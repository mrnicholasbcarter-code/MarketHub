import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketHub - Full-Stack Marketplace",
  description: "A modern marketplace platform for buying and selling products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
