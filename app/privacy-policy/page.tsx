'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white pt-44">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> {currentDate}
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Hudson Virtual Business Services ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Personal Information</h3>
                    <p className="text-gray-700 mb-2">We may collect the following personal information:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Company name and business information</li>
                      <li>Communication preferences</li>
                      <li>Project details and requirements</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To provide and deliver our virtual assistant services</li>
                  <li>To communicate with you about our services, updates, and promotions</li>
                  <li>To process payments and manage billing</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>With trusted service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Your Rights</h2>
                <p className="text-gray-700 mb-4">Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability (receive your data in a portable format)</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, and resolve disputes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Hudson Virtual Business Services</strong></p>
                  <p className="text-gray-700">Email: hello@hudsonvirtual.co.uk</p>
                  <p className="text-gray-700">WhatsApp: <a href="https://wa.me/7967661613" className="text-brand-purple hover:underline">wa.me/7967661613</a></p>
                </div>
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



