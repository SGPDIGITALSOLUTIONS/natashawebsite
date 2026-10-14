import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import LeadAttribution from './components/LeadAttribution'
import { ORGANIZATION_ID, SITE_URL } from '../lib/seo'

const montserrat = localFont({ src: '../public/fonts/montserrat-latin.woff2', variable: '--font-montserrat', weight: '400 700', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Virtual Assistant for Small Businesses & Charities | Hudson Virtual', template: '%s | Hudson Virtual' },
  description: 'Virtual assistant and business support from Natasha Hudson. Executive administration, board support, operations and event coordination for small businesses and charities.',
  robots: { index: process.env.VERCEL_ENV !== 'preview', follow: process.env.VERCEL_ENV !== 'preview' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-GB"><body className={`${montserrat.variable} bg-white min-h-screen`}>
    <StructuredData data={{ '@context': 'https://schema.org', '@graph': [
      { '@type': 'Organization', '@id': ORGANIZATION_ID, name: 'Hudson Virtual', url: SITE_URL, logo: `${SITE_URL}/hudson-virtual-logo.webp`, email: 'natasha@hudsonvirtual.co.uk', description: 'Virtual assistant and business support for small businesses and charities.', founder: { '@id': `${SITE_URL}/#natasha-hudson` }, sameAs: ['https://www.linkedin.com/company/hudsonvirtual', 'https://instagram.com/hudsonvirtualuk'] },
      { '@type': 'Person', '@id': `${SITE_URL}/#natasha-hudson`, name: 'Natasha Hudson', url: `${SITE_URL}/about`, worksFor: { '@id': ORGANIZATION_ID } },
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Hudson Virtual', url: SITE_URL, publisher: { '@id': ORGANIZATION_ID }, inLanguage: 'en-GB' },
    ] }} />
    <LeadAttribution><Navbar /><div className="site-content">{children}</div><Footer /></LeadAttribution>
  </body></html>
}
