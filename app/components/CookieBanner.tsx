'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCookie, FaTimes } from 'react-icons/fa';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('hudson-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('hudson-cookie-consent', 'accepted');
    setShowBanner(false);
    // Here you could enable analytics, marketing cookies, etc.
    console.log('Cookies accepted - analytics can be enabled');
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('hudson-cookie-consent', 'essential-only');
    setShowBanner(false);
    // Only essential cookies remain active
    console.log('Essential cookies only - no analytics/marketing');
  };

  const handleClose = () => {
    // Treat closing as essential only
    handleEssentialOnly();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-brand-purple shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center mt-1">
              <FaCookie className="text-brand-navy text-sm" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-brand-navy mb-2">We use cookies to improve your experience</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We use essential cookies to make our website work. Optional cookies help us analyze usage and improve our services. 
                You can choose which cookies to accept.{' '}
                <Link href="/cookie-policy" className="text-brand-purple hover:underline font-medium">
                  Learn more in our Cookie Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleEssentialOnly}
              className="px-4 py-2 text-brand-navy border border-brand-navy rounded-lg hover:bg-brand-cyan/10 transition-colors font-medium text-sm whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-brand-yellow text-brand-navy rounded-lg hover:bg-yellow-400 transition-colors font-medium text-sm whitespace-nowrap"
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-500 hover:text-brand-navy transition-colors md:ml-2"
              aria-label="Close cookie banner"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



