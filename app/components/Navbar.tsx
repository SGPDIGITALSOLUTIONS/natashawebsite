'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-44">
        {/* Logo - use full wordmark logo, no text */}
        <Link href="/" className="flex items-center h-full">
          <Image 
            src="/hudsonlogotransparent_original.png" 
            alt="Hudson Virtual Logo" 
            height={144} 
            width={539} 
            style={{ maxHeight: 144, width: 'auto' }}
            className="object-contain"
            priority
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-brand-yellow font-medium transition-colors">
              {link.label}
            </Link>
          ))}
          <a
            href="https://outlook.office365.com/bookwithme/user/your-bookings-link"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-brand-yellow text-brand-navy px-5 py-2 rounded-lg font-semibold shadow-md transition-colors duration-200 hover:bg-yellow-400 hover:text-brand-navy hover:ring-2 hover:ring-brand-navy hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-navy"
          >
            Book a Free Call
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl text-brand-purple" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-2">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-brand-yellow font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 