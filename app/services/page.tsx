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
        <div className="rounded-3xl bg-blue-100/70 shadow py-8 px-4 mt-24 mb-24">
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

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center text-lg text-purple-800 font-medium mb-8">
          Please highlight a solution to learn more about it
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center border-t-4 border-purple-200 cursor-pointer relative min-h-[180px]"
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              onFocus={() => setActiveIdx(idx)}
              onBlur={() => setActiveIdx(null)}
              tabIndex={0}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.10)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {service.icon}
              <h2 className="text-xl font-semibold text-purple-900 mb-2">{service.title}</h2>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 text-left list-disc list-inside mt-4"
                  >
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">What Does Admin Support Look Like?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Calendar Chaos</h3>
                <p className="text-gray-600 mb-4">
                  "I spend 2 hours every Monday just scheduling meetings and responding to calendar invites. My inbox is a mess, and I'm constantly double-booking myself."
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">How We Help:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Manage your calendar and schedule meetings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Coordinate with multiple time zones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Send meeting reminders and follow-ups</span>
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Travel Tangle</h3>
                <p className="text-gray-600 mb-4">
                  "I need to book flights, hotels, and transfers for my team's quarterly meeting, but I'm drowning in options and don't have time to compare prices."
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">How We Help:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Research and book travel arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Create detailed travel itineraries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Handle travel changes and emergencies</span>
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
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Document Dilemma</h3>
                <p className="text-gray-600 mb-4">
                  "I have a pile of documents that need formatting, proofreading, and organizing. My team's reports are all over the place, and I need them standardized."
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">How We Help:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Format and proofread documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Create standardized templates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Organize and maintain document libraries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Let's Solve Your Admin Challenges
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 