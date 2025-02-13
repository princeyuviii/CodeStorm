import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "MU CodeStorm",
  description: "MU CodeStorm is an 36 hours hackathon at Mandsaur University",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="font-sans bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

