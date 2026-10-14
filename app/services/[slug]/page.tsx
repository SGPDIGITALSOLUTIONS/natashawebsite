import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services } from '../../../lib/services'
import { breadcrumbs, ORGANIZATION_ID, pageMetadata, SITE_URL } from '../../../lib/seo'
import StructuredData from '../../components/StructuredData'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find(item => item.slug === params.slug)
  if (!service) notFound()
  return pageMetadata(service.searchTitle, service.description, `/services/${service.slug}`)
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug)
  if (!service) notFound()
  const path = `/services/${service.slug}`
  return <main>
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'Service', '@id': `${SITE_URL}${path}#service`, name: service.title, serviceType: service.title, description: service.description, url: `${SITE_URL}${path}`, provider: { '@id': ORGANIZATION_ID } }} />
    <StructuredData data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.title, path }])} />
    <section className="page-banner"><div className="container-wide"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/services">Services</Link><span aria-hidden="true"> / </span><span aria-current="page">{service.title}</span></nav><h1>{service.title}</h1><p>{service.intro}</p></div></section>
    <section className="section-pad container-wide service-detail"><h2>How Natasha can help</h2><ul>{service.tasks.map(task => <li key={task}>{task}</li>)}</ul><h2>Who this support suits</h2><p>{service.audience}</p><h2>Getting started</h2><p>{service.approach}</p><p>Explore <Link href="/pricing" className="text-link">support plans and pricing</Link>, or <Link href="/contact" className="text-link">book a free 30-minute consultation</Link> to discuss your requirements.</p><h2>Related services</h2><ul>{services.filter(item => item.slug !== service.slug).map(item => <li key={item.slug}><Link href={`/services/${item.slug}`} className="text-link">{item.title}</Link></li>)}</ul></section>
    <section className="cta-band"><div className="container-wide cta-band-inner"><div><h2>Discuss your support requirements.</h2><p>Agree a scope that fits your priorities.</p></div><Link href="/contact" className="button button-gold">Arrange a consultation →</Link></div></section>
  </main>
}
