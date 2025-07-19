import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layouts & Experiments | Chetan Verma",
  description: "Beautifully designed open-source layouts and UI experiments built with components from ui.chetanverma.com and shadcn/ui. Explore modern web design patterns and interactive components.",
  keywords: ["layouts", "UI experiments", "Next.js", "React", "TailwindCSS", "shadcn/ui", "open source", "web design"],
  authors: [{ name: "Chetan Verma" }],
  creator: "Chetan Verma",
  publisher: "Chetan Verma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://layouts.chetanverma.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Layouts & Experiments | Chetan Verma",
    description: "Beautifully designed open-source layouts and UI experiments built with components from ui.chetanverma.com and shadcn/ui.",
    url: "https://layouts.chetanverma.com",
    siteName: "Layouts & Experiments",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Layouts & Experiments - Open source UI components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layouts & Experiments | Chetan Verma",
    description: "Beautifully designed open-source layouts and UI experiments built with components from ui.chetanverma.com and shadcn/ui.",
    images: ["/og-image.png"],
    creator: "@chetanverma",
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
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="mx-auto max-w-5xl border border-t-0 border-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
