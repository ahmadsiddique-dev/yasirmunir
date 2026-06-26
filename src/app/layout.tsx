import type { Metadata } from "next";
import { Inter, Montserrat, Roboto_Flex } from "next/font/google";
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

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "wdth", "slnt"],
});

export const metadata: Metadata = {
  title: "Yasir Munir — Frontend Engineer & Designer",
  description: "Portfolio of Yasir Munir — Frontend Engineer, UI/UX Designer, and Creative Architect.",
  keywords: [
    "Yasir Munir",
    "Frontend Engineer",
    "UI/UX Designer",
    "Creative Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Designer",
    "Digital Marketer"
  ],
  authors: [{ name: "Yasir Munir" }],
  creator: "Yasir Munir",
  metadataBase: new URL("https://yasirmunir.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yasir Munir — Frontend Engineer & Designer",
    description: "Portfolio of Yasir Munir — Frontend Engineer, UI/UX Designer, and Creative Architect.",
    url: "https://yasirmunir.com",
    siteName: "Yasir Munir Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Yasir Munir — Frontend Engineer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Munir — Frontend Engineer & Designer",
    description: "Portfolio of Yasir Munir — Frontend Engineer, UI/UX Designer, and Creative Architect.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${robotoFlex.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <GlassNavbar />
        <main className="relative bg-background w-full flex-1 rounded-b-3xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

