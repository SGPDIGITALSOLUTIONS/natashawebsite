import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hudson Virtual | Support Services',
  description: 'Professional virtual assistant services for small businesses and charities.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-40 min-h-[80vh]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
} 