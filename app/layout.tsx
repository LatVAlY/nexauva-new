import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { BackToTop } from "@/components/ui/back-to-top"

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
})

// Prefer a configured site URL for absolute social image links
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexauva.com"

export const metadata: Metadata = {
  title: "Nexauva – Where Ideas Meet Intelligence",
  description: "Nexauva delivers intelligent AI solutions: automation, analytics, conversational AI, and consulting.",
  generator: "nextjs",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    // Optionally provide an Apple touch icon if available
    // You can replace this with a dedicated 180x180 PNG later
    apple: [{ url: "/simple-2.png" }],
  },
  openGraph: {
    title: "Nexauva – Where Ideas Meet Intelligence",
    description: "Intelligent AI solutions: automation, analytics, conversational AI, and consulting.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/meta-link-share.png",
        width: 1200,
        height: 630,
        alt: "Nexauva – Where Ideas Meet Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexauva – Where Ideas Meet Intelligence",
    description: "Intelligent AI solutions: automation, analytics, conversational AI, and consulting.",
    images: ["/meta-link-share.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
