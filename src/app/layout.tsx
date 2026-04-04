import type { Metadata } from "next";
import CookieConsent from "@/components/navigation/CookieConsent";
import StoreProvider from "@/config/store/StoreProvider";
import TawkTo from "@/components/common/TawkTo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wenza.ng"),
  alternates: {
    canonical: "/",
    languages: { "en-US": "/en-US" },
  },
  applicationName: "Wenza",
  title: "Wenza | Learn Anything. From Anyone. At Your Price.",
  description:
    "Wenza is Nigeria's affordable e-learning marketplace. Browse 500+ courses, book 1-on-1 tutoring with verified Nigerian instructors, or teach and earn. WAEC & JAMB prep, tech, business, design — all in Naira, all on your phone.",
  keywords: [
    "Wenza",
    "e-learning Nigeria",
    "online courses Nigeria",
    "learn online Nigeria",
    "WAEC prep",
    "JAMB prep",
    "NECO prep",
    "Nigerian tutors",
    "online tutoring Nigeria",
    "1-on-1 tutoring",
    "affordable online courses",
    "learn in Naira",
    "Nigerian e-learning platform",
    "online education Africa",
    "teach online Nigeria",
    "become an instructor",
    "coding courses Nigeria",
    "digital skills Nigeria",
    "exam prep Nigeria",
    "learn programming Nigeria",
  ],
  authors: [{ name: "Obafisayo", url: "https://github.com/obafisayo" }],
  publisher: "Wenza",
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://wenza.ng",
    siteName: "Wenza",
    title: "Wenza | Nigeria's Affordable E-Learning Marketplace",
    description:
      "Browse 500+ affordable courses, book 1-on-1 sessions with expert Nigerian tutors, or teach what you know and earn in Naira. Courses from ₦1,500. WAEC, JAMB prep and more.",
    locale: "en_NG",
    images: [
      {
        url: "https://wenza.ng/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Wenza - Nigeria's Affordable E-Learning Marketplace — Courses, Tutoring & Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@waborifisayo",
    creator: "@waborifisayo",
    title: "Wenza | Learn Anything. From Anyone. At Your Price.",
    description:
      "Nigeria's e-learning marketplace — 500+ courses from ₦1,500, 200+ verified tutors, WAEC & JAMB prep. Learn on any phone, even offline. Join 10,000+ Nigerians.",
    images: ["https://wenza.ng/og-banner.png"],
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className="antialiased font-sans flex flex-col min-h-screen"
      >
        <StoreProvider>
          {children}
          <CookieConsent />
        </StoreProvider>
        <TawkTo />
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
