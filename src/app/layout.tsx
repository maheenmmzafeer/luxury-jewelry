import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "The Golden Jewelry Store | Magical Pakistani Elegance",
  description: "Discover a curated collection of high-end, magical handcrafted Pakistani jewelry, featuring majestic Pakistani designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Premium Demo Disclaimer */}
        <div className="fixed bottom-8 right-8 z-[100] group pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-silver-500 to-silver-900 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
          <div className="relative bg-[#0a0a0a]/40 backdrop-blur-xl border border-silver-700/30 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silver-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-silver-100"></span>
            </div>
            <p className="text-[11px] tracking-[0.2em] text-silver-100 uppercase font-bold mix-blend-screen drop-shadow-md">
              Demo Experience
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
