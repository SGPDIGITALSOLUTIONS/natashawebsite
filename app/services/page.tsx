import Link from 'next/link'
import { services } from '../../lib/services'
import { breadcrumbs, pageMetadata } from '../../lib/seo'
import StructuredData from '../components/StructuredData'

export const metadata = pageMetadata('Virtual Assistant & Business Support Services', 'Explore executive administration, board support, personal assistance, operations and event management for small businesses and charities.', '/services')

export default function ServicesPage() {
  return <main>
    <StructuredData data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
    <section className="page-banner"><div className="container-wide"><p className="eyebrow eyebrow-light">Services</p><h1>Virtual assistant and business support services.</h1><p>Practical support for small businesses and charities, tailored to your priorities.</p></div></section>
    <section className="section-pad container-wide"><div className="service-grid">{services.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className="service-item"><span className="item-number">{String(index + 1).padStart(2, '0')}</span><h2 className="text-xl">{service.title}</h2><p>{service.intro}</p><span className="text-link">Explore {service.title.toLowerCase()} →</span></Link>)}</div><p className="mt-8">Compare <Link href="/pricing" className="text-link">support plans and pricing</Link> or read <Link href="/faqs" className="text-link">answers to common questions</Link> before getting started.</p></section>
    <section className="cta-band"><div className="container-wide cta-band-inner"><div><h2>Discuss the support you need.</h2><p>Book a free 30-minute consultation with Natasha.</p></div><Link href="/contact" className="button button-gold">Arrange a consultation →</Link></div></section>
  </main>
}
