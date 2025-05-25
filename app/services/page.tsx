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
    </main>
  );
} 