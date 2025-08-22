import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Modern neon-dark portfolio with 3D and motion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* remove data-theme for dark by default; set to "light" to force light */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div className="fixed inset-0 -z-10">
          <img
            src="/transparent.svg"
            alt=""
            className="hero-bg w-full h-full object-cover opacity-90 pointer-events-none select-none"
          />
        </div>
        <Nav />
        {children}
      </body>
    </html>
  );
}
