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
      example: {
        title: "The Calendar Chaos",
        description: "I spend 2 hours every Monday just scheduling meetings and responding to calendar invites. My inbox is a mess, and I'm constantly double-booking myself.",
        solutions: [
          "Manage your calendar and schedule meetings",
          "Coordinate with multiple time zones",
          "Send meeting reminders and follow-ups"
        ]
      }
    },
    {
      icon: <FaFileAlt className="text-3xl text-purple-600 mb-4" />,
      title: 'Data & Research',
      example: {
        title: "The Research Rabbit Hole",
        description: "I need to find the best venue for our annual conference, but I'm spending hours comparing options, reading reviews, and trying to coordinate with different time zones.",
        solutions: [
          "Comprehensive venue research and comparison",
          "Detailed cost analysis and budget tracking",
          "Time zone coordination and scheduling assistance"
        ]
      }
    },
    {
      icon: <FaUserTie className="text-3xl text-purple-600 mb-4" />,
      title: 'Personal Assistant',
      example: {
        title: "The Travel Tangle",
        description: "I need to book flights, hotels, and transfers for my team's quarterly meeting, but I'm drowning in options and don't have time to compare prices.",
        solutions: [
          "Research and book travel arrangements",
          "Create detailed travel itineraries",
          "Handle travel changes and emergencies"
        ]
      }
    },
    {
      icon: <FaComments className="text-3xl text-purple-600 mb-4" />,
      title: 'Social Media Management',
      example: {
        title: "The Content Crunch",
        description: "My social media presence is inconsistent because I can't keep up with creating and scheduling content while running my business.",
        solutions: [
          "Create engaging content calendar",
          "Schedule posts across platforms",
          "Monitor and engage with audience"
        ]
      }
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-purple-600 mb-4" />,
      title: 'Project Management',
      example: {
        title: "The Project Puzzle",
        description: "We're implementing a new CRM system, but the project is falling behind schedule and team members are confused about their responsibilities.",
        solutions: [
          "Create clear project timelines",
          "Coordinate team communications",
          "Track progress and milestones"
        ]
      }
    },
    {
      icon: <FaChartBar className="text-3xl text-purple-600 mb-4" />,
      title: 'Customer Support',
      example: {
        title: "The Inbox Overload",
        description: "Customer inquiries are piling up in my inbox, and I'm struggling to respond quickly while maintaining quality service.",
        solutions: [
          "Timely response to customer inquiries",
          "Maintain consistent communication",
          "Track and follow up on issues"
        ]
      }
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
                  className={`bg-purple-50 rounded-lg p-4 border transition-colors cursor-pointer ${
                    activeIdx === idx ? 'border-purple-400 shadow-md' : 'border-purple-100 hover:border-purple-300'
                  }`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onFocus={() => setActiveIdx(idx)}
                  onBlur={() => setActiveIdx(null)}
                  tabIndex={0}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-purple-600">{service.icon}</div>
                    <h3 className="font-semibold text-purple-900">{service.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">What Does It Look Like?</h2>
            <AnimatePresence mode="wait">
              {activeIdx !== null ? (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-purple-50 rounded-lg p-6 border border-purple-100"
                >
                  <h3 className="font-semibold text-purple-900 text-xl mb-3">{services[activeIdx].example.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {services[activeIdx].example.description}
                  </p>
                  <div className="text-purple-900 font-medium mb-2">How We Help:</div>
                  <ul className="text-gray-600 space-y-2">
                    {services[activeIdx].example.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-500 py-12"
                >
                  <p className="text-lg">Hover over a service to see how we can help</p>
                </motion.div>
              )}
            </AnimatePresence>
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