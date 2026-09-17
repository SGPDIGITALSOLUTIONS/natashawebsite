import Image from 'next/image';
import Link from 'next/link';

const services = [
  { title: 'Executive administration', detail: 'Inbox management, scheduling and business correspondence.' },
  { title: 'Board support', detail: 'Meeting preparation, papers and documentation.' },
  { title: 'Personal assistance', detail: 'Diary management, travel and appointment coordination.' },
  { title: 'Operations management', detail: 'Process improvement, workflows and project coordination.' },
  { title: 'Event management', detail: 'Planning, supplier coordination and event logistics.' },
  { title: 'Bespoke support', detail: 'A tailored service for your specific requirements.' },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container-wide hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Hudson Virtual | Business support</p>
            <h1>Reliable support.<br />More capacity for your business.</h1>
            <p className="hero-intro">Executive administration and operational support for small businesses and charities. Flexible services tailored to your priorities.</p>
            <div className="action-row">
              <Link href="/contact" className="button button-gold">Arrange a consultation <span aria-hidden="true">→</span></Link>
              <Link href="/services" className="text-link text-link-light">View services</Link>
            </div>
          </div>
          <figure className="hero-portrait">
            <Image src="/logo.jpg" alt="Natasha Hudson" width={500} height={500} priority />
            <figcaption><strong>Natasha Hudson</strong><br />Founder, Hudson Virtual</figcaption>
          </figure>
        </div>
      </section>
      <div className="support-strip">
        <div className="container-wide support-strip-inner">
          <span>Executive administration</span><span>Operations management</span><span>Board and event support</span>
        </div>
      </div>
      <section className="section-pad container-wide">
        <p className="eyebrow">Services</p>
        <div className="section-heading-row"><h2>Practical support across your organisation.</h2><p>From day-to-day administration to project coordination, choose the support your business needs.</p></div>
        <div className="service-grid">
          {services.map((service, index) => <Link key={service.title} href="/services" className="service-item"><span className="item-number">{String(index + 1).padStart(2, '0')}</span><h3>{service.title}</h3><p>{service.detail}</p><span className="item-arrow" aria-hidden="true">→</span></Link>)}
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="container-wide"><h2>A straightforward way to get started.</h2><div className="process-grid">
          <div><span className="item-number">01</span><h3>Discuss your priorities</h3><p>An initial conversation about your requirements.</p></div>
          <div><span className="item-number">02</span><h3>Agree the scope</h3><p>Define the services and working arrangements.</p></div>
          <div><span className="item-number">03</span><h3>Put support in place</h3><p>Begin with a clear plan and regular communication.</p></div>
        </div></div>
      </section>
      <section className="cta-band"><div className="container-wide cta-band-inner"><div><h2>Discuss your business support requirements.</h2><p>Book a free 30-minute consultation with Natasha.</p></div><Link href="/contact" className="button button-gold">Arrange a consultation <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
