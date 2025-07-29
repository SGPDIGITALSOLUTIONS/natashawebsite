import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-purple-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Hudson Virtual</h3>
              <p className="text-purple-200 leading-relaxed">
                Professional virtual assistant services helping businesses automate operations and focus on growth.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-200">
                  <FaEnvelope className="text-sm" />
                  <a href="mailto:hello@hudsonvirtual.co.uk" className="hover:text-white transition-colors">
                    hello@hudsonvirtual.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <FaPhone className="text-sm" />
                  <a href="tel:+447123456789" className="hover:text-white transition-colors">
                    +44 7123 456789
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <nav className="space-y-2">
                <Link href="/services" className="block text-purple-200 hover:text-white transition-colors">
                  All Services
                </Link>
                <Link href="/services#admin" className="block text-purple-200 hover:text-white transition-colors">
                  Administrative Support
                </Link>
                <Link href="/services#social-media" className="block text-purple-200 hover:text-white transition-colors">
                  Social Media Management
                </Link>
                <Link href="/services#email" className="block text-purple-200 hover:text-white transition-colors">
                  Email Marketing
                </Link>
                <Link href="/services#bookkeeping" className="block text-purple-200 hover:text-white transition-colors">
                  Bookkeeping Support
                </Link>
                <Link href="/services#customer" className="block text-purple-200 hover:text-white transition-colors">
                  Customer Service
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <nav className="space-y-2">
                <Link href="/about" className="block text-purple-200 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/pricing" className="block text-purple-200 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/testimonials" className="block text-purple-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
                <Link href="/faqs" className="block text-purple-200 hover:text-white transition-colors">
                  FAQs
                </Link>
                <Link href="/contact" className="block text-purple-200 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/blog" className="block text-purple-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </nav>
            </div>

            {/* Legal & Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Legal & Support</h4>
              <nav className="space-y-2">
                <Link href="/privacy-policy" className="block text-purple-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-purple-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookie-policy" className="block text-purple-200 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/gdpr" className="block text-purple-200 hover:text-white transition-colors">
                  GDPR Compliance
                </Link>
                <Link href="/accessibility" className="block text-purple-200 hover:text-white transition-colors">
                  Accessibility
                </Link>
                <Link href="/sitemap" className="block text-purple-200 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </nav>
            </div>

          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-purple-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <span className="text-purple-200 text-sm">Follow us:</span>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com/company/hudsonvirtual" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition-colors p-2 hover:bg-purple-800 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a 
                    href="https://twitter.com/hudsonvirtual" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition-colors p-2 hover:bg-purple-800 rounded-full"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-lg" />
                  </a>
                  <a 
                    href="https://facebook.com/hudsonvirtual" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition-colors p-2 hover:bg-purple-800 rounded-full"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-lg" />
                  </a>
                  <a 
                    href="https://instagram.com/hudsonvirtual" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition-colors p-2 hover:bg-purple-800 rounded-full"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <span className="text-purple-200 text-sm whitespace-nowrap">Stay updated:</span>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg bg-purple-800 text-white placeholder-purple-300 border border-purple-700 focus:outline-none focus:border-purple-400 text-sm"
                  />
                  <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-purple-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-sm text-purple-300">
            © {currentYear} <Link href="/" className="font-semibold hover:text-white transition-colors">Hudson Virtual</Link>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-purple-400">
            <span>Registered in England & Wales</span>
            <span>•</span>
            <span>Company No: 12345678</span>
            <span>•</span>
            <span>VAT No: GB123456789</span>
          </div>
          <div className="text-center md:text-right text-xs text-purple-400">
            Website by <a href="https://sgpdigital.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">SGP Digital</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 