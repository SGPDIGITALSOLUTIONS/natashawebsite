'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkwnjdl");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-navy to-brand-purple text-white pt-44">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Book your free discovery call or send us a message
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Contact Info */}
              <div className="md:col-span-2 bg-brand-navy text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>natasha@hudsonvirtual.co.uk</span>
                  </p>
                </div>
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/company/hudsonvirtual" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-cyan transition-colors">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/share/1EYU3NwUBt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-cyan transition-colors">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/7967661613" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-cyan transition-colors">
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/hudsonvirtualuk?igsh=OGVsNnBqM2Q5aTM=10" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-cyan transition-colors">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3 p-8">
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        />
                        <ValidationError prefix="Company" field="company" errors={state.errors} />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={`w-full py-3 px-4 bg-brand-yellow text-brand-navy rounded-md font-medium hover:bg-yellow-400 transition-colors ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 