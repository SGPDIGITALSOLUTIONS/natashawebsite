import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Hudson Virtual | Support Services',
  description: 'Professional virtual assistant services for small businesses and charities.',
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
        <div className="site-content">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
