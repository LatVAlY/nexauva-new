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

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "Landio - Modern SaaS Template",
  description: "AI Automation for Modern Businesses Made Simple",
  generator: "v0.app",
  openGraph: {
    title: "Landio - Modern SaaS Template",
    description: "AI Automation for Modern Businesses Made Simple",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landio - Modern SaaS Template",
    description: "AI Automation for Modern Businesses Made Simple",
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
        <Analytics />
      </body>
    </html>
  )
}
