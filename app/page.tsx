'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaEnvelope, 
  FaProjectDiagram, 
  FaChartBar, 
  FaUserTie, 
  FaFileAlt,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg mb-4">
          <FaCalendarAlt className="text-2xl text-white" />
        </div>
      ),
      title: 'Calendar Management',
      description: 'Manage complex personal and team calendars, and coordinate times for team meetings.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg mb-4">
          <FaEnvelope className="text-2xl text-white" />
        </div>
      ),
      title: 'Email and Response Management',
      description: 'Let your assistant manage emails, conduct follow-ups, forward important and urgent emails.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg mb-4">
          <FaProjectDiagram className="text-2xl text-white" />
        </div>
      ),
      title: 'Operations Management',
      description: 'Optimize business processes and implement efficient workflows for better coordination.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg mb-4">
          <FaChartBar className="text-2xl text-white" />
        </div>
      ),
      title: 'Event Management',
      description: 'Plan and coordinate corporate events, manage vendor relationships and handle logistics.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg mb-4">
          <FaUserTie className="text-2xl text-white" />
        </div>
      ),
      title: 'Executive Administration',
      description: 'Streamline executive communications and manage complex scheduling and priorities.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center shadow-lg mb-4">
          <FaFileAlt className="text-2xl text-white" />
        </div>
      ),
      title: 'Board Support',
      description: 'Prepare and distribute board materials, coordinate meetings and maintain documentation.'
    }
  ];

  const testimonials = [
    {
      quote: "Hudson Virtual transformed our administrative processes, allowing us to focus more on our community work.",
      name: "Sarah M.",
      title: "Charity Director"
    },
    {
      quote: "Having Hudson Virtual manage my calendar and emails has given me back hours each week.",
      name: "James T.",
      title: "Business Owner"
    },
    {
      quote: "Their data analysis has helped us identify new opportunities we would have missed.",
      name: "Rebecca L.",
      title: "Marketing Director"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark Purple */}
      <section className="w-full bg-brand-navy text-white relative overflow-hidden pt-44">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-12 min-h-[70vh]">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-start px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Put your business on autopilot<br />with expert virtual support
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-cyan-100 mb-8 leading-relaxed"
            >
              Free up your time and multiply your impact. We handle the admin, you focus on growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-brand-yellow text-brand-navy px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-brand-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book a Free Call
              </Link>
              <Link 
                href="/pricing" 
                className="bg-white/10 border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-navy transition-colors backdrop-blur-sm"
              >
                See Pricing
              </Link>
            </motion.div>
          </div>
          
          {/* Right: Square Photo */}
          <div className="flex justify-center lg:justify-end px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-cyan to-brand-purple p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="Natasha Hudson"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-yellow rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-cyan rounded-full opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gradient-to-r from-brand-cyan/5 to-brand-purple/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-brand-navy mb-8">
            Trusted by Small Businesses and Charities Across the UK
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From small charities to growing businesses, our clients trust Hudson Virtual to handle their administrative needs with professionalism and care.
          </p>
          {/* Decorative divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* What Does a Virtual Assistant Do */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-cyan/10 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-brand-purple rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-brand-cyan rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              What Does a Virtual Assistant Do?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We will take care of your <span className="text-brand-purple font-semibold">administrative and personal work</span> and help you streamline your day-to-day operations so you can focus on <span className="text-brand-purple font-semibold">growing your business</span> and achieving your goals.
            </p>
            {/* Decorative divider */}
            <div className="w-32 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-navy mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border-l-4 border-l-brand-cyan border border-gray-200 hover:shadow-lg hover:border-brand-cyan/50 hover:bg-gradient-to-br hover:from-white hover:to-brand-cyan/5 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-20 bg-gradient-to-r from-white via-brand-purple/5 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Real Results Delivered by Hudson Virtual
            </h2>
            <p className="text-xl text-gray-600">
              Hear How We Have Helped Businesses <span className="text-brand-purple font-semibold">Thrive</span>
            </p>
            {/* Decorative divider */}
            <div className="w-28 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="border-t-4 border-t-brand-purple border border-gray-200 p-6 rounded-lg bg-gradient-to-br from-white to-brand-cyan/5 hover:shadow-lg hover:border-brand-purple/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-brand-yellow text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-brand-cyan/20 pt-4">
                  <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                  <p className="text-brand-purple text-sm font-medium">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Hudson Virtual */}
      <section className="py-20 bg-gradient-to-br from-brand-navy/5 via-gray-50 to-brand-purple/5 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-brand-yellow to-brand-purple rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Why You Should Choose Hudson Virtual
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Hudson Virtual Assistants are <span className="text-brand-purple font-semibold">hand-picked</span> based on your unique requirements, and are supported by a team of professionals who onboard, train and supervise them on an <span className="text-brand-purple font-semibold">ongoing basis</span>.
            </p>
            {/* Decorative divider */}
            <div className="w-36 h-1 bg-gradient-to-r from-brand-navy via-brand-purple to-brand-cyan mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-brand-cyan/10 to-white border-l-4 border-l-brand-cyan">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600">
                    Your assistant is dedicated to your tasks during agreed hours, ensuring consistent quality and understanding of your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-brand-purple/10 to-white border-l-4 border-l-brand-purple">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Quality Control & Supervision
                  </h3>
                  <p className="text-gray-600">
                    Your assistant isn't alone. They're supervised and supported to ensure the highest quality of work for your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-brand-navy/10 to-white border-l-4 border-l-brand-navy">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-cyan rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Flexible Terms
                  </h3>
                  <p className="text-gray-600">
                    No long-term contracts. Adjust your package, pause services, or increase hours with notice as your needs change.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-brand-yellow/20 to-white border-l-4 border-l-brand-yellow">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-brand-navy text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Data Security & Compliance
                  </h3>
                  <p className="text-gray-600">
                    We're ICO registered and committed to GDPR compliance, ensuring your business information remains secure.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/logo.jpg"
                alt="Hudson Virtual - Professional Virtual Assistant Services"
                width={400}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Book a free 30-minute discovery call to discuss your needs and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-brand-yellow text-brand-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Book Your Free Call
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-yellow hover:text-brand-navy transition-colors border-2 border-white hover:border-brand-yellow"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}