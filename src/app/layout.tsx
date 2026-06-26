import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import GlassNavbar from "@/components/aicanvas/glass-navbar";
import Footer from "@/components/Footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasir Munir — Frontend Engineer & Designer",
  description: "Portfolio of Yasir Munir — Frontend Engineer, UI/UX Designer, and Creative Architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <GlassNavbar />
        <main className="relative z-10 bg-background w-full flex-1 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
