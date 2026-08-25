import type { Metadata } from "next"
import { Inter, Raleway, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://shrammitra.com"),
  title: "Shram Mitra - Rozgaar aur reliable workforce dhundhna hua ab Aasaan",
  description: "Shram Mitra — Bharat ka trusted digital platform jo company, contractor aur shramik ko jodta hai bina kisi pareshani ke.",
  keywords: ["Shram Mitra", "employment", "contractor", "worker", "workforce platform India", "shramik", "jobs"],
}

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontRaleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        fontRaleway.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          <div className="pt-24">

          {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
