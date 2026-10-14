import Link from 'next/link';

export default function Footer() {
  return <footer className="site-footer"><div className="container-wide footer-inner"><div><Link href="/" className="footer-brand">Hudson Virtual</Link><p>Professional business support for small businesses and charities.</p></div><nav aria-label="Footer navigation"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link><Link href="/faqs">FAQs</Link><Link href="/contact">Contact</Link></nav></div><div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} Hudson Virtual</span><a href="mailto:natasha@hudsonvirtual.co.uk">natasha@hudsonvirtual.co.uk</a></div><p className="container-wide footer-credit">built and managed by <a href="https://www.sgpdigitalsolutions.co.uk" target="_blank" rel="noopener noreferrer">www.sgpdigitalsolutions.co.uk</a></p></footer>;
}
