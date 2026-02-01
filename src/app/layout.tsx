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
  description: "Find location from picture using AI-powered geolocation. Discover where is this photo taken, identify locations from images, and perform reverse image location searches. Advanced OSINT intelligence gathering tool.",
  keywords: [
    "find location from picture",
    "where is this",
    "identify location from photo",
    "reverse image location search",
    "photo geolocation finder",
    "where was this picture taken",
    "image location finder",
    "find where photo was taken",
    "geolocation from image",
    "picture location identifier",
    "geolocation",
    "image analysis",
    "OSINT",
    "intelligence",
    "geospatial",
    "AI analysis"
  ],
  authors: [{ name: "SYS.VISUAL_INTEL" }],
  creator: "SYS.VISUAL_INTEL",
  publisher: "SYS.VISUAL_INTEL",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Find Location from Picture - AI Geolocation Tool',
    description: 'Find location from picture using AI. Discover where is this photo taken with advanced geolocation analysis.',
    siteName: 'SYS.VISUAL_INTEL',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Find Location from Picture - AI Geolocation Tool',
    description: 'Find location from picture using AI. Discover where is this photo taken with advanced geolocation analysis.',
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
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SYS.VISUAL_INTEL Geolocation Tool",
    "description": "AI-powered image geolocation tool to find location from picture, identify where photos were taken, and perform reverse image location searches.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Find location from picture",
      "Reverse image location search",
      "Photo geolocation analysis",
      "AI-powered location identification",
      "OSINT intelligence gathering"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
