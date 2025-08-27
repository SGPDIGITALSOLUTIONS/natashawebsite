'use client';

import Link from 'next/link';

export default function AccessibilityPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Accessibility Statement</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Our commitment to making our website accessible to everyone
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
                Hudson Virtual Business Services is committed to ensuring that our website is accessible to people with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Our Commitment</h2>
                <p className="text-gray-700 mb-4">
                  We believe that everyone should have equal access to information and functionality on the web. We are committed to providing an inclusive experience for all users, regardless of their abilities or the technologies they use to access our website.
                </p>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Our goal:</strong> To make our website accessible to the widest possible audience, including users with visual, hearing, cognitive, and motor impairments.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Accessibility Features</h2>
                <p className="text-gray-700 mb-4">Our website includes the following accessibility features:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-brand-purple/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-brand-navy mb-2">🎯 Navigation</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Clear and consistent navigation structure</li>
                        <li>Skip links to main content</li>
                        <li>Logical tab order</li>
                        <li>Breadcrumb navigation where applicable</li>
                      </ul>
                    </div>

                    <div className="bg-brand-yellow/20 p-4 rounded-lg">
                      <h3 className="font-semibold text-brand-navy mb-2">📝 Content</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Clear and simple language</li>
                        <li>Descriptive headings and labels</li>
                        <li>Meaningful link text</li>
                        <li>Alt text for images</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-brand-cyan/10 p-4 rounded-lg">
                      <h3 className="font-semibold text-brand-navy mb-2">🎨 Design</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>High contrast color combinations</li>
                        <li>Scalable text and images</li>
                        <li>Focus indicators for keyboard navigation</li>
                        <li>Responsive design for various screen sizes</li>
                      </ul>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-brand-navy mb-2">⚡ Functionality</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Keyboard accessible forms and controls</li>
                        <li>No time-based content restrictions</li>
                        <li>Error identification and suggestions</li>
                        <li>Compatible with screen readers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Standards Compliance</h2>
                <p className="text-gray-700 mb-4">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
                <div className="bg-brand-purple/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">WCAG 2.1 Principles</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">Perceivable</h4>
                      <p className="text-sm text-gray-700">Information must be presentable in ways users can perceive</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">Operable</h4>
                      <p className="text-sm text-gray-700">Interface components must be operable by all users</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">Understandable</h4>
                      <p className="text-sm text-gray-700">Information and UI operation must be understandable</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-2">Robust</h4>
                      <p className="text-sm text-gray-700">Content must be robust enough for various assistive technologies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Assistive Technologies</h2>
                <p className="text-gray-700 mb-4">Our website has been tested with the following assistive technologies:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                  <li>Keyboard navigation</li>
                  <li>Voice recognition software</li>
                  <li>Magnification software</li>
                  <li>Various browser accessibility features</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Known Limitations</h2>
                <p className="text-gray-700 mb-4">
                  While we strive for full accessibility, we are aware of some limitations and are working to address them:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Some third-party embedded content may not be fully accessible</li>
                  <li>PDF documents are being updated to meet accessibility standards</li>
                  <li>Some interactive elements may require enhancement for full accessibility</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We are committed to addressing these issues and improving accessibility continuously.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Accessibility Testing</h2>
                <p className="text-gray-700 mb-4">
                  We regularly test our website for accessibility using:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Automated accessibility testing tools</li>
                  <li>Manual testing with assistive technologies</li>
                  <li>Keyboard-only navigation testing</li>
                  <li>Color contrast analysis</li>
                  <li>User testing with people with disabilities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Browser Compatibility</h2>
                <p className="text-gray-700 mb-4">
                  Our website is designed to work with recent versions of the following browsers:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Desktop Browsers</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Google Chrome</li>
                      <li>Mozilla Firefox</li>
                      <li>Microsoft Edge</li>
                      <li>Safari</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Mobile Browsers</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Safari (iOS)</li>
                      <li>Chrome (Android)</li>
                      <li>Firefox Mobile</li>
                      <li>Samsung Internet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Alternative Access</h2>
                <p className="text-gray-700 mb-4">
                  If you experience difficulty accessing any part of our website, we offer alternative ways to access our information and services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Phone consultation for service information</li>
                  <li>Email communication for detailed inquiries</li>
                  <li>Alternative document formats upon request</li>
                  <li>Personal assistance for form completion</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Feedback and Support</h2>
                <p className="text-gray-700 mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="bg-brand-cyan/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">Get Accessibility Support</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> hello@hudsonvirtual.co.uk</p>
                    <p><strong>Subject:</strong> Accessibility Feedback</p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/7967661613" className="text-brand-purple hover:underline">wa.me/7967661613</a></p>
                    <p><strong>Response Time:</strong> We aim to respond within 2 business days</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Ongoing Improvements</h2>
                <p className="text-gray-700 mb-4">
                  Accessibility is an ongoing effort. We are committed to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Regular accessibility audits and testing</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>Incorporating accessibility into our design and development process</li>
                  <li>Staying current with accessibility standards and guidelines</li>
                  <li>Listening to user feedback and implementing improvements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">11. External Links</h2>
                <p className="text-gray-700 mb-4">
                  While we strive to link only to accessible external websites, we cannot guarantee the accessibility of content on external sites. We encourage you to contact us if you encounter accessibility issues with linked content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Updates to This Statement</h2>
                <p className="text-gray-700 mb-4">
                  This accessibility statement will be updated as we make improvements to our website and as accessibility standards evolve. We review this statement regularly to ensure it remains current and accurate.
                </p>
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



