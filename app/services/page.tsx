'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderOpen, FaFileAlt, FaUserTie, FaComments, FaProjectDiagram, FaChartBar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <FaFolderOpen className="text-3xl text-purple-600 mb-4" />,
      title: 'Administrative Support',
      items: [
        'Email Management',
        'Newsletter Distribution',
        'Meeting/Event Preparation',
        'Meeting Minutes',
      ],
    },
    {
      icon: <FaFileAlt className="text-3xl text-purple-600 mb-4" />,
      title: 'Data & Research',
      items: [
        'Data Entry',
        'Document Templates',
        'Document Standardisation',
        'Data/Document Checking',
        'Event Research',
        'Travel Research',
        'Business Research',
      ],
    },
    {
      icon: <FaUserTie className="text-3xl text-purple-600 mb-4" />,
      title: 'Personal Assistant',
      items: [
        'Travel/Holiday plans',
        'Reminder Services',
        'Diary Management',
        'Email Management',
        'Event Management',
        'Meeting Preparation',
        'Appointment Making',
      ],
    },
    {
      icon: <FaComments className="text-3xl text-purple-600 mb-4" />,
      title: 'Social Media Management',
      items: [
        'Facebook Community Manager',
        'Content Creation',
        'Content Scheduling',
        'Content Planning',
      ],
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-purple-600 mb-4" />,
      title: 'Project Management',
      items: [
        'New system implementation',
        'Accountability Sessions',
        'Process Improvement',
      ],
    },
    {
      icon: <FaChartBar className="text-3xl text-purple-600 mb-4" />,
      title: 'Customer Support',
      items: [
        'Responding to client emails',
      ],
    },
  ];

  // Track which card is hovered/focused
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white pb-20">
      {/* Solutions for every need section with colored background */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl bg-blue-100/70 shadow py-8 px-4 mt-24 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Solutions for every need.</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            From admin support to project management, I offer a flexible range of services to help your business run smoothly and efficiently.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">Get in Touch</a>
            <a href="/pricing" className="bg-white border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">See Pricing</a>
          </div>
        </div>
      </section>

      {/* Combined Services and Examples Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Grid */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="bg-purple-50 rounded-lg p-4 border border-purple-100 hover:border-purple-300 transition-colors"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onFocus={() => setActiveIdx(idx)}
                  onBlur={() => setActiveIdx(null)}
                  tabIndex={0}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-purple-600 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="font-semibold text-purple-900 mb-2">{service.title}</h3>
                      <AnimatePresence>
                        {activeIdx === idx && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-gray-600 space-y-1"
                          >
                            {service.items.map((item) => (
                              <li key={item} className="flex items-center">
                                <span className="text-purple-600 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">What Does Admin Support Look Like?</h2>
            <div className="space-y-6">
              {/* Example 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-50 rounded-lg p-4 border border-purple-100"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2">The Calendar Chaos</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      "I spend 2 hours every Monday just scheduling meetings and responding to calendar invites. My inbox is a mess, and I'm constantly double-booking myself."
                    </p>
                    <div className="text-sm text-purple-900 font-medium">How We Help:</div>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Manage your calendar and schedule meetings
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Coordinate with multiple time zones
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Send meeting reminders and follow-ups
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Example 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-purple-50 rounded-lg p-4 border border-purple-100"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2">The Travel Tangle</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      "I need to book flights, hotels, and transfers for my team's quarterly meeting, but I'm drowning in options and don't have time to compare prices."
                    </p>
                    <div className="text-sm text-purple-900 font-medium">How We Help:</div>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Research and book travel arrangements
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Create detailed travel itineraries
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Handle travel changes and emergencies
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Example 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-purple-50 rounded-lg p-4 border border-purple-100"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2">The Document Dilemma</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      "I have a pile of documents that need formatting, proofreading, and organizing. My team's reports are all over the place, and I need them standardized."
                    </p>
                    <div className="text-sm text-purple-900 font-medium">How We Help:</div>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Format and proofread documents
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Create standardized templates
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        Organize and maintain document libraries
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
          >
            Let's Solve Your Admin Challenges
          </Link>
        </div>
      </section>
    </main>
  );
} 