'use client';

import Link from 'next/link';

export default function GDPRPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">GDPR Compliance</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            How we comply with the General Data Protection Regulation
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
                Hudson Virtual Business Services is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This page explains how we ensure compliance and protect your rights under GDPR.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Our Commitment to GDPR</h2>
                <p className="text-gray-700 mb-4">
                  As a UK-based business, we are fully committed to GDPR compliance. We have implemented appropriate technical and organizational measures to ensure the protection of personal data and respect for individual rights.
                </p>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Data Controller:</strong> Hudson Virtual Business Services</p>
                  <p className="text-gray-700"><strong>Contact:</strong> hello@hudsonvirtual.co.uk</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Your Rights Under GDPR</h2>
                <p className="text-gray-700 mb-4">Under GDPR, you have the following rights regarding your personal data:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-brand-purple/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right to Information</h3>
                    <p className="text-sm text-gray-700">Be informed about how your data is collected and used</p>
                  </div>
                  <div className="bg-brand-cyan/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right of Access</h3>
                    <p className="text-sm text-gray-700">Request access to your personal data we hold</p>
                  </div>
                  <div className="bg-brand-yellow/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right to Rectification</h3>
                    <p className="text-sm text-gray-700">Correct inaccurate or incomplete personal data</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right to Erasure</h3>
                    <p className="text-sm text-gray-700">Request deletion of your personal data ("right to be forgotten")</p>
                  </div>
                  <div className="bg-brand-purple/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right to Restrict Processing</h3>
                    <p className="text-sm text-gray-700">Limit how we process your personal data</p>
                  </div>
                  <div className="bg-brand-cyan/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right to Data Portability</h3>
                    <p className="text-sm text-gray-700">Receive your data in a portable format</p>
                  </div>
                  <div className="bg-brand-yellow/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Right to Object</h3>
                    <p className="text-sm text-gray-700">Object to processing based on legitimate interests</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">Rights Related to Automated Decision Making</h3>
                    <p className="text-sm text-gray-700">Protection from automated profiling and decision making</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How to Exercise Your Rights</h2>
                <p className="text-gray-700 mb-4">To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within one month (or sooner where possible).</p>
                
                <div className="bg-brand-cyan/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">Making a Request</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Email us at: hello@hudsonvirtual.co.uk</li>
                    <li>Include "GDPR Request" in the subject line</li>
                    <li>Clearly state which right you wish to exercise</li>
                    <li>Provide sufficient information to verify your identity</li>
                    <li>Be specific about the data or processing you're concerned about</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Legal Basis for Processing</h2>
                <p className="text-gray-700 mb-4">We process personal data based on the following legal grounds:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Contract:</strong> To perform our virtual assistant services</li>
                  <li><strong>Legitimate Interest:</strong> To improve our services and communicate about our business</li>
                  <li><strong>Consent:</strong> For marketing communications (where required)</li>
                  <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and other legal requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Data Protection Measures</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Technical Measures</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Secure access controls and authentication</li>
                      <li>Regular security updates and patches</li>
                      <li>Backup and recovery procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Organizational Measures</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Staff training on data protection</li>
                      <li>Data processing policies and procedures</li>
                      <li>Privacy by design and default</li>
                      <li>Regular compliance reviews</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Data Sharing and Transfers</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell or rent personal data to third parties. When we share data with trusted service providers, we ensure:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Appropriate contracts are in place</li>
                  <li>Adequate data protection measures are implemented</li>
                  <li>Data is only processed for specified purposes</li>
                  <li>International transfers comply with GDPR requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Data Retention</h2>
                <p className="text-gray-700 mb-4">We retain personal data only for as long as necessary to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide our services to you</li>
                  <li>Meet legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Pursue legitimate business interests</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  When data is no longer needed, it is securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Data Breach Procedures</h2>
                <p className="text-gray-700 mb-4">
                  In the unlikely event of a data breach, we have procedures in place to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Detect and assess the breach within 72 hours</li>
                  <li>Notify the relevant supervisory authority if required</li>
                  <li>Inform affected individuals when there is a high risk</li>
                  <li>Take steps to mitigate any damage</li>
                  <li>Review and improve our security measures</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not directed to children under 16. We do not knowingly collect personal data from children under 16. If we become aware that we have collected such data, we will take steps to delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Complaints and Supervisory Authority</h2>
                <p className="text-gray-700 mb-4">
                  If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with a supervisory authority. In the UK, this is the Information Commissioner's Office (ICO):
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Information Commissioner's Office (ICO)</strong></p>
                  <p className="text-gray-700">Website: <a href="https://ico.org.uk" className="text-brand-purple hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a></p>
                  <p className="text-gray-700">Phone: 0303 123 1113</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Contact Our Data Protection Officer</h2>
                <p className="text-gray-700 mb-4">
                  For any questions about GDPR compliance or data protection, please contact us:
                </p>
                <div className="bg-brand-cyan/10 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Hudson Virtual Business Services</strong></p>
                  <p className="text-gray-700">Email: hello@hudsonvirtual.co.uk</p>
                  <p className="text-gray-700">Subject: GDPR/Data Protection Inquiry</p>
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



