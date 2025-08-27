'use client';

import Link from 'next/link';

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white pt-44">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Sitemap</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Find your way around our website with this complete page directory
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                This sitemap provides an overview of all the pages and sections available on the Hudson Virtual Business Services website. Use this directory to quickly navigate to the information you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div className="bg-brand-cyan/10 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center text-white text-sm mr-3">🏠</span>
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      About Us
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Meet Our Team</span></li>
                      <li><span className="text-gray-600">• Company Story</span></li>
                      <li><span className="text-gray-600">• Our Values</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/services" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Services
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Administrative Support</span></li>
                      <li><span className="text-gray-600">• Project Coordination</span></li>
                      <li><span className="text-gray-600">• Business Operations</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Pricing
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• On-Demand Support</span></li>
                      <li><span className="text-gray-600">• Dedicated Support Plans</span></li>
                      <li><span className="text-gray-600">• Project Based Support</span></li>
                      <li><span className="text-gray-600">• Power Sessions</span></li>
                      <li><span className="text-gray-600">• Process Audits</span></li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Support & Information */}
              <div className="bg-brand-purple/10 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center text-white text-sm mr-3">💬</span>
                  Support & Information
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Contact Us
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Contact Form</span></li>
                      <li><span className="text-gray-600">• Social Media Links</span></li>
                      <li><span className="text-gray-600">• WhatsApp Contact</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/faqs" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      FAQs
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Service Questions</span></li>
                      <li><span className="text-gray-600">• Pricing Information</span></li>
                      <li><span className="text-gray-600">• Getting Started</span></li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-gray-600">Blog</span>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-500">• Coming Soon</span></li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Legal & Compliance */}
              <div className="bg-brand-yellow/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy text-sm mr-3">⚖️</span>
                  Legal & Compliance
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Privacy Policy
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Data Collection</span></li>
                      <li><span className="text-gray-600">• Information Usage</span></li>
                      <li><span className="text-gray-600">• Your Rights</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Terms of Service
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Service Agreements</span></li>
                      <li><span className="text-gray-600">• Payment Terms</span></li>
                      <li><span className="text-gray-600">• Responsibilities</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Cookie Policy
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Cookie Types</span></li>
                      <li><span className="text-gray-600">• Managing Preferences</span></li>
                      <li><span className="text-gray-600">• Third-Party Cookies</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/gdpr" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      GDPR Compliance
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Your GDPR Rights</span></li>
                      <li><span className="text-gray-600">• Data Protection</span></li>
                      <li><span className="text-gray-600">• Legal Basis</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/accessibility" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Accessibility
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• WCAG Compliance</span></li>
                      <li><span className="text-gray-600">• Assistive Technologies</span></li>
                      <li><span className="text-gray-600">• Accessibility Features</span></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-brand-purple hover:text-brand-navy hover:underline transition-colors">
                      Sitemap
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      <li><span className="text-gray-600">• Complete Page Directory</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">Quick Actions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  href="/contact" 
                  className="bg-brand-yellow text-brand-navy p-4 rounded-lg text-center font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/pricing" 
                  className="bg-brand-purple text-white p-4 rounded-lg text-center font-semibold hover:bg-brand-navy transition-colors"
                >
                  View Pricing
                </Link>
                <Link 
                  href="/about" 
                  className="bg-brand-cyan text-white p-4 rounded-lg text-center font-semibold hover:bg-brand-cyan/90 transition-colors"
                >
                  Meet Our Team
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white text-brand-navy border-2 border-brand-navy p-4 rounded-lg text-center font-semibold hover:bg-brand-cyan/10 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Social Media & External Links */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-navy mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://linkedin.com/company/hudsonvirtual" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:text-brand-navy hover:underline transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.facebook.com/share/1EYU3NwUBt/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:text-brand-navy hover:underline transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://wa.me/7967661613" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:text-brand-navy hover:underline transition-colors"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/hudsonvirtualuk?igsh=OGVsNnBqM2Q5aTM=10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:text-brand-navy hover:underline transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-brand-navy mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> hello@hudsonvirtual.co.uk</p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/7967661613" className="text-brand-purple hover:underline">wa.me/7967661613</a></p>
                <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM GMT</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/" 
              className="inline-block bg-brand-yellow text-brand-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



