import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Sitecraft – Moderna hemsidor för svenska företag",
  description:
    "Vi bygger din hemsida på under 24 timmar. Kodbaserad kvalitet, inte mallar. Se din sajt innan du betalar.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="grain bg-[#0a0a0a] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}