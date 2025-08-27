'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Terms and conditions for using our virtual assistant services
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
                These Terms of Service ("Terms") govern your use of Hudson Virtual Business Services ("we," "our," or "us") and the services we provide. By engaging our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Services</h2>
                <p className="text-gray-700 mb-4">Hudson Virtual Business Services provides virtual assistant and administrative support services including but not limited to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Administrative support and office management</li>
                  <li>Email and calendar management</li>
                  <li>Project coordination and support</li>
                  <li>Document preparation and management</li>
                  <li>Client communications and CRM support</li>
                  <li>Process improvement and consultation</li>
                  <li>Power sessions and strategic support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Service Agreements</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Dedicated Support Plans</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Minimum 3-month commitment required</li>
                      <li>Hours are allocated monthly and unused hours may roll over up to 25%</li>
                      <li>Priority support and dedicated assistant assigned</li>
                      <li>30 days written notice required for cancellation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">On-Demand Support</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>3-hour minimum purchase required</li>
                      <li>Hours valid for 3 months from purchase date</li>
                      <li>No long-term commitment required</li>
                      <li>Standard response times apply</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Payment Terms</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Payment is due in advance for all services</li>
                  <li>Dedicated Support Plans are billed monthly in advance</li>
                  <li>On-Demand hours must be purchased before work begins</li>
                  <li>Late payment may result in service suspension</li>
                  <li>All prices are in British Pounds (GBP) and include applicable taxes</li>
                  <li>Refunds are provided at our discretion and only for unused services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Client Responsibilities</h2>
                <p className="text-gray-700 mb-4">As a client, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide clear instructions and necessary access to complete tasks</li>
                  <li>Respond to requests for clarification in a timely manner</li>
                  <li>Provide accurate and complete information</li>
                  <li>Respect our team members and maintain professional communication</li>
                  <li>Not request services that are illegal, unethical, or outside our scope</li>
                  <li>Protect any login credentials or access information we provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Confidentiality</h2>
                <p className="text-gray-700 mb-4">
                  We maintain strict confidentiality regarding all client information and business matters. We will not disclose any confidential information to third parties without your explicit consent, except as required by law. This confidentiality obligation survives the termination of our service relationship.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Intellectual Property</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>All work product created for you belongs to you upon payment</li>
                  <li>You retain ownership of all materials and information provided to us</li>
                  <li>We retain ownership of our methodologies, processes, and general knowledge</li>
                  <li>Neither party may use the other's trademarks without permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Our liability is limited to the amount paid for services in the preceding 12 months. We are not liable for indirect, incidental, or consequential damages. We make no warranties about the results of our services, though we commit to providing professional, quality work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Service Availability</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Business hours: Monday to Friday, 9:00 AM to 5:00 PM GMT</li>
                  <li>Response times vary by service level (dedicated vs. on-demand)</li>
                  <li>We observe UK public holidays and may have limited availability</li>
                  <li>Emergency support may be available by special arrangement</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate the service relationship with appropriate notice. Dedicated Support Plans require 30 days written notice. We reserve the right to terminate services immediately for breach of these Terms or non-payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Force Majeure</h2>
                <p className="text-gray-700 mb-4">
                  We are not liable for delays or failures in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, internet outages, or other acts of God.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the laws of England and Wales. Any disputes will be resolved through the courts of England and Wales or through binding arbitration as mutually agreed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We may update these Terms from time to time. We will notify existing clients of significant changes and post updated Terms on our website. Continued use of our services constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms or our services, please contact us:
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



