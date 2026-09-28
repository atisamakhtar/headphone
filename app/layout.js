import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "DOQAUS CARE1",
    template: "%s — DOQAUS CARE1",
  },
  description:
    "DOQAUS CARE1 Bluetooth Headphones Over Ear, 90 Hrs Playtime Wireless Headphones, 3 EQ Modes, Foldable Hi-Fi Stereo Bass Headphones, Soft Memory Protein Earmuffs, Built-in Mic＆Wired Mode.",
};

export const viewport = {
  themeColor: "#010101",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-void text-white antialiased`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
