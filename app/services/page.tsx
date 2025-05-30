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
      title: 'Executive Administration',
      example: {
        title: "The Executive Challenge",
        description: "As a busy executive, I'm struggling to maintain an organized workflow while managing multiple priorities and deadlines.",
        solutions: [
          "Streamline executive communications",
          "Manage complex scheduling and priorities",
          "Coordinate high-level meetings and events"
        ]
      }
    },
    {
      icon: <FaFileAlt className="text-3xl text-purple-600 mb-4" />,
      title: 'Board Support',
      example: {
        title: "The Board Meeting Preparation",
        description: "Preparing for board meetings is time-consuming, and ensuring all materials are properly organized and distributed is a constant challenge.",
        solutions: [
          "Prepare and distribute board materials",
          "Coordinate board meeting logistics",
          "Maintain board documentation and records"
        ]
      }
    },
    {
      icon: <FaUserTie className="text-3xl text-purple-600 mb-4" />,
      title: 'Personal Assistant',
      example: {
        title: "The Executive Lifestyle",
        description: "Balancing professional and personal commitments while maintaining efficiency in both areas is becoming increasingly difficult.",
        solutions: [
          "Manage personal and professional schedules",
          "Coordinate travel and accommodations",
          "Handle personal errands and appointments"
        ]
      }
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-purple-600 mb-4" />,
      title: 'Operations Management',
      example: {
        title: "The Operational Efficiency",
        description: "Our business processes need streamlining, and we need better coordination between departments to improve overall efficiency.",
        solutions: [
          "Optimize business processes",
          "Implement efficient workflows",
          "Coordinate cross-departmental projects"
        ]
      }
    },
    {
      icon: <FaChartBar className="text-3xl text-purple-600 mb-4" />,
      title: 'Event Management',
      example: {
        title: "The Event Coordination",
        description: "Planning and executing corporate events requires attention to countless details while ensuring everything runs smoothly.",
        solutions: [
          "Plan and coordinate corporate events",
          "Manage vendor relationships",
          "Handle event logistics and execution"
        ]
      }
    },
    {
      icon: <FaComments className="text-3xl text-purple-600 mb-4" />,
      title: 'Bespoke Support',
      example: {
        title: "Custom Solutions",
        description: "If you need something not on this list, let's discuss your requirements in a free consultation call.",
        solutions: [
          "Tailored solutions for your needs",
          "Flexible service packages",
          "Personalized support approach"
        ],
        cta: {
          text: "Book a Free Consultation",
          href: "/contact"
        }
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
                  onClick={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
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
                  <ul className="text-gray-600 space-y-2 mb-4">
                    {services[activeIdx].example.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  {services[activeIdx].example.cta && (
                    <div className="mt-4">
                      <Link 
                        href={services[activeIdx].example.cta.href}
                        className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                      >
                        {services[activeIdx].example.cta.text}
                      </Link>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-500 py-12"
                >
                  <p className="text-lg">Click on a service to see how we can help</p>
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