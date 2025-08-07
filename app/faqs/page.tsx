'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white pt-44">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Everything you need to know about working with Hudson Virtual Business Services
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-20">
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-brand-navy group-hover:text-brand-purple transition-colors text-center w-full">
                    {faq.question}
                  </h2>
                  <motion.div
                    animate={{ rotate: hoverIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-600 ml-4"
                  >
                    ▼
                  </motion.div>
                </div>
              </div>
              
              <AnimatePresence>
                {hoverIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-b-xl p-6 mt-1 shadow-sm">
                      <p className="text-gray-600 whitespace-pre-line text-center">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions? I'm here to help!</p>
          <a
            href="https://outlook.office365.com/bookwithme/user/your-bookings-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-brand-navy px-8 py-3 rounded-lg font-semibold shadow-md transition-colors duration-200 hover:bg-yellow-400 hover:ring-2 hover:ring-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </div>
  );
} 