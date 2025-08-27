'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function LinkNav() {
  const links = [
    {
      title: 'Company Website',
      description: 'Visit our main website to learn more about our services',
      url: 'https://hudsonvirtual.co.uk',
      icon: <FaGlobe className="text-2xl" />,
      color: 'from-brand-navy to-brand-purple',
      hoverColor: 'hover:from-brand-purple hover:to-brand-navy'
    },
    {
      title: 'LinkedIn',
      description: 'Connect with us on LinkedIn for business updates',
      url: 'https://linkedin.com/company/hudsonvirtual',
      icon: <FaLinkedin className="text-2xl" />,
      color: 'from-brand-cyan to-brand-purple',
      hoverColor: 'hover:from-brand-purple hover:to-brand-cyan'
    },
    {
      title: 'Facebook',
      description: 'Follow us on Facebook for news and updates',
      url: 'https://www.facebook.com/share/1EYU3NwUBt/?mibextid=wwXIfr',
      icon: <FaFacebook className="text-2xl" />,
      color: 'from-brand-purple to-brand-navy',
      hoverColor: 'hover:from-brand-navy hover:to-brand-purple'
    },
    {
      title: 'WhatsApp',
      description: 'Message us directly on WhatsApp',
      url: 'https://wa.me/7967661613',
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'from-green-500 to-brand-cyan',
      hoverColor: 'hover:from-brand-cyan hover:to-green-500'
    },
    {
      title: 'Instagram',
      description: 'Follow us on Instagram for behind-the-scenes content',
      url: 'https://www.instagram.com/hudsonvirtualuk?igsh=OGVsNnBqM2Q5aTM=10',
      icon: <FaInstagram className="text-2xl" />,
      color: 'from-pink-500 to-brand-purple',
      hoverColor: 'hover:from-brand-purple hover:to-pink-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-cyan/5">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-brand-cyan to-brand-purple p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Hudson Virtual Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-brand-navy mb-4 font-heading">
            Hudson Virtual
          </h1>
          <p className="text-xl text-brand-purple font-semibold mb-2">
            Professional Virtual Assistant Services
          </p>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
            Dedicated support for small businesses and charities across the UK
          </p>
          
          {/* Decorative divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-navy mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Links Section */}
        <div className="space-y-6">
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`bg-gradient-to-r ${link.color} ${link.hoverColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20`}>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-heading mb-1 flex items-center gap-2">
                        {link.title}
                        <FaExternalLinkAlt className="text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-white/90 text-sm">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg border border-brand-cyan/20"
        >
          <h2 className="text-2xl font-bold text-brand-navy mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Book a free consultation to discuss how we can help your business grow
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-purple text-white px-8 py-4 rounded-full font-semibold hover:from-brand-purple hover:to-brand-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Free Call
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>© 2024 Hudson Virtual. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-brand-purple transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-brand-purple transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
