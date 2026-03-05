import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Sitecraft – Hemsida för hantverkare på 24h",
  description:
    "Vi bygger din nya hemsida på 24 timmar. Se resultatet innan du betalar. Inklusive e-post, hosting och support för 299 kr/mån. Tak, VVS, El och Bygg.",
  metadataBase: new URL("https://sitecraft.se"),
  openGraph: {
    title: "Sitecraft – Hemsida för hantverkare på 24h",
    description: "Se din nya sajt innan du betalar en krona.",
    url: "https://sitecraft.se",
    siteName: "Sitecraft",
    locale: "sv_SE",
    type: "website",
  },
  verification: {
    google: "SUko8pjFD07TxIshvPTyzd12g3BV67EQrswvyNeEHg8",
  },
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