'use client';

import Link from 'next/link';

export default function CookiePolicyPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            How we use cookies and similar technologies on our website
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
                This Cookie Policy explains how Hudson Virtual Business Services ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website. This policy should be read alongside our Privacy Policy.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how their site is being used.
                </p>
                <p className="text-gray-700">
                  Cookies can be "persistent" (remain on your device until deleted or expired) or "session" (deleted when you close your browser).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve our website performance and user experience</li>
                  <li>To measure the effectiveness of our marketing campaigns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-brand-cyan/10 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Essential Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Purpose:</strong> Website functionality, security</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> Session and persistent</p>
                  </div>

                  <div className="bg-brand-purple/10 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Analytics Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Purpose:</strong> Website analytics, traffic analysis</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 2 years</p>
                    <p className="text-sm text-gray-600"><strong>Third parties:</strong> Google Analytics (if applicable)</p>
                  </div>

                  <div className="bg-brand-yellow/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Functional Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Purpose:</strong> User preferences, enhanced functionality</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 1 year</p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-brand-navy mb-3">Marketing Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      These cookies track your browsing habits to show you relevant advertisements and measure campaign effectiveness.
                    </p>
                    <p className="text-sm text-gray-600"><strong>Purpose:</strong> Targeted advertising, campaign measurement</p>
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 2 years</p>
                    <p className="text-sm text-gray-600"><strong>Third parties:</strong> Social media platforms, advertising networks</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that set their own cookies on our website. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Contact Forms:</strong> For form functionality and spam protection</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These third parties have their own privacy and cookie policies, which we encourage you to review.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Managing Your Cookie Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Browser Settings</h3>
                    <p className="text-gray-700 mb-2">
                      You can control and manage cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>View and delete cookies</li>
                      <li>Block all cookies</li>
                      <li>Block third-party cookies</li>
                      <li>Clear all cookies when you close the browser</li>
                      <li>Open a "private browsing" / "incognito" session</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Browser-Specific Instructions</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                      <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                      <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Opt-Out Options</h2>
                <p className="text-gray-700 mb-4">For specific third-party services, you can opt out directly:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-brand-purple hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Advertising cookies:</strong> <a href="http://www.youronlinechoices.com/" className="text-brand-purple hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Impact of Disabling Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Please note that disabling certain cookies may impact your experience on our website:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Essential cookies: May prevent the website from functioning properly</li>
                  <li>Functional cookies: May reduce website functionality and personalization</li>
                  <li>Analytics cookies: Won't affect your experience but helps us improve our services</li>
                  <li>Marketing cookies: May result in less relevant advertising</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will post any updates on this page and update the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
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



