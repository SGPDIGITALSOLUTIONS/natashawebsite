import type { Metadata } from 'next'

export const SITE_URL = 'https://www.hudsonvirtual.co.uk'
export const ORGANIZATION_ID = `${SITE_URL}/#organization`

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${title} | Hudson Virtual`,
      description,
      url: `${SITE_URL}${path}`,
      siteName: 'Hudson Virtual',
      locale: 'en_GB',
      type: 'website',
      images: [{ url: `${SITE_URL}/social-card.png`, width: 1200, height: 630, alt: 'Hudson Virtual — virtual assistant and business support' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Hudson Virtual`,
      description,
      images: [`${SITE_URL}/social-card.png`],
    },
  }
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: `${SITE_URL}${item.path}`,
    })),
  }
}
