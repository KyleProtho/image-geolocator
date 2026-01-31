import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SYS.VISUAL_INTEL // Geolocation Tool",
    template: "%s | SYS.VISUAL_INTEL"
  },
  description: "Tactical geospatial intelligence analysis dashboard. Advanced AI-powered image geolocation and intelligence gathering tool.",
  keywords: ["geolocation", "image analysis", "OSINT", "intelligence", "geospatial", "AI analysis"],
  authors: [{ name: "SYS.VISUAL_INTEL" }],
  creator: "SYS.VISUAL_INTEL",
  publisher: "SYS.VISUAL_INTEL",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'SYS.VISUAL_INTEL // Geolocation Tool',
    description: 'Tactical geospatial intelligence analysis dashboard.',
    siteName: 'SYS.VISUAL_INTEL',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'SYS.VISUAL_INTEL // Geolocation Tool',
    description: 'Tactical geospatial intelligence analysis dashboard.',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Viewport configuration (separate export required by Next.js 14+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
        {children}
      </body>
    </html>
  );
}
