'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faqs', label: 'FAQs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="site-nav container-wide" aria-label="Main navigation">
        <Link href="/" className="site-logo" onClick={() => setOpen(false)}>
          <Image src="/hudson-virtual-logo.webp" alt="Hudson Virtual Support Services" width={240} height={105} sizes="210px" priority />
        </Link>
        <button className="mobile-menu-button" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <div id="site-menu" className={`site-menu ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href || (link.href === '/services' && pathname.startsWith('/services/')) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/contact" className="button button-gold" onClick={() => setOpen(false)}>Arrange a consultation</Link>
        </div>
      </nav>
    </header>
  );
}
