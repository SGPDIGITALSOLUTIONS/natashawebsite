import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/seo'
import { services } from '../lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical public pages. No artificial lastModified date on every build.
  const paths = ['/', '/services', '/about', '/pricing', '/faqs', '/contact', '/testimonials', ...services.map(service => `/services/${service.slug}`)]
  return paths.map(path => ({ url: `${SITE_URL}${path}` }))
}
