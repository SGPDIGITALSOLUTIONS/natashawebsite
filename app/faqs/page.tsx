import React from 'react';

const faqs = [
  {
    question: "What does a Virtual Assistant (VA) do?",
    answer: "A Virtual Assistant provides professional admin support remotely. At Hudson Virtual Business Services, I help small businesses, solopreneurs, and charities by taking care of the back-end admin, so you can focus on what you do best."
  },
  {
    question: "What kind of tasks can you help with?",
    answer: "Great question! Here's a quick overview:\n\n• Diary & email management\n• Client onboarding\n• Invoicing & expense tracking\n• Document creation & formatting\n• Minute-taking\n• Research & data entry\n• Basic website updates\n• Process improvement & automation (coming soon!)\n\nIf you're unsure if your task fits, just ask!"
  },
  {
    question: "Who do you work with?",
    answer: "I primarily support small charities, women-led businesses, wellness professionals, and passionate solopreneurs who are ready to delegate their admin and grow sustainably."
  },
  {
    question: "How do I know if I'm ready to hire a Virtual Assistant?",
    answer: "If you're overwhelmed by admin, missing deadlines, or feel like you're spending more time in your business than on it, it's probably time. A VA helps you buy back your time and headspace."
  },
  {
    question: "How do you work with clients?",
    answer: "I work remotely from my fully equipped home office in the UK. We usually start with a discovery call to understand your needs, then we agree on a retainer package or ad-hoc hours, depending on your workflow."
  },
  {
    question: "What are your rates?",
    answer: "My rates typically range from £28–£30 per hour, depending on the type and complexity of work. I offer:\n\n• Monthly retainers (from 10 hours/month)\n• Project-based pricing\n• Ad hoc support (subject to availability)"
  },
  {
    question: "Do you offer contracts?",
    answer: "Yes, all client relationships begin with a service agreement outlining the scope of work, confidentiality, rates, and terms. Transparency is key!"
  },
  {
    question: "What are your working hours?",
    answer: "I generally work Monday to Friday during UK business hours. I'm flexible and will always communicate clearly if something changes. Urgent or weekend work can be arranged in advance (additional charges may apply)."
  },
  {
    question: "Is there a minimum number of hours I have to book?",
    answer: "For retainer clients, I offer packages starting from 10 hours per month. For ad-hoc work, I recommend booking at least 5 hours to ensure efficiency and continuity."
  },
  {
    question: "How do we communicate?",
    answer: "I'm flexible—email, phone, WhatsApp, Slack, or Zoom—whatever suits you best. We'll find a rhythm that works for both of us."
  },
  {
    question: "How do I get started?",
    answer: "Easy! Just head to my Contact page and book a free discovery call. We'll have a no-pressure chat about your needs and how I can help."
  },
  {
    question: "Can I try before committing to a retainer?",
    answer: "Yes! I offer a one-off power hour or a mini admin audit so you can get a feel for how I work and the value I can bring to your business."
  },
  {
    question: "What if my needs change or I want to pause?",
    answer: "Life and business are fluid! You can adjust your package, pause services, or increase hours with notice. My goal is to support you, not tie you down."
  },
  {
    question: "Is my business information safe with you?",
    answer: "Absolutely. Your privacy and data security are top priority. I'm ICO registered and committed to GDPR compliance and confidentiality."
  },
  {
    question: "Do you use AI or automation tools?",
    answer: "Yes, I do! I use smart tools (like AI, automation platforms, and systems integration) to streamline your workflows. My team and I are developing even more tech-savvy solutions—watch this space!"
  }
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">Everything you need to know about working with Hudson Virtual Business Services</p>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-purple-700 mb-3">{faq.question}</h2>
              <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions? I'm here to help!</p>
          <a
            href="https://outlook.office365.com/bookwithme/user/your-bookings-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors duration-200 hover:bg-purple-800 hover:ring-2 hover:ring-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </div>
  );
} 