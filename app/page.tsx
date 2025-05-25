'use client';

import { motion } from 'framer-motion';
import { FaClock, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="w-full pt-8 pb-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-8">
          {/* Left: Headline, Subheadline, CTAs */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-purple-900 mb-2 leading-tight">
              Put your business on autopilot<br />with expert virtual support
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Free up your time and multiply your impact. We handle the admin, you focus on growth.
            </p>
            <div className="flex gap-4 mb-0">
              <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Book a Free Call
              </Link>
              <Link href="/pricing" className="bg-white border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                See Pricing
              </Link>
            </div>
          </div>
          {/* Right: Profile Image only, vertically centered */}
          <div className="flex justify-center items-center w-full md:w-auto h-full">
            <div className="relative w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem] rounded-full bg-gradient-to-tr from-purple-100 to-blue-100 flex items-center justify-center shadow-2xl overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Hudson Virtual Logo"
                width={340}
                height={340}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section (no heading, with purple divider) */}
      <section className="py-20 bg-purple-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClock className="text-5xl text-purple-600 mx-auto mb-4" />,
                title: 'Save Time',
                desc: 'Free up 10-15 hours weekly by delegating administrative tasks',
              },
              {
                icon: <FaMoneyBillWave className="text-5xl text-purple-600 mx-auto mb-4" />,
                title: 'Reduce Costs',
                desc: 'No employee overhead, pay only for what you need',
              },
              {
                icon: <FaChartLine className="text-5xl text-purple-600 mx-auto mb-4" />,
                title: 'Grow Business',
                desc: 'Focus on revenue-generating activities',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col justify-between relative"
              >
                {item.icon}
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                {/* Purple divider at the bottom */}
                <div className="absolute left-8 right-8 bottom-0 h-1 rounded-b-xl bg-purple-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Book a free 30-minute discovery call to discuss your needs and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
              Book Your Free Call
            </Link>
            <Link href="/services" className="bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 