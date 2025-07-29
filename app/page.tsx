'use client';

import { motion } from 'framer-motion';
import { FaClock, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark Purple */}
      <section className="w-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 py-20 gap-12 min-h-[80vh]">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
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
              className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed"
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
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book a Free Call
              </Link>
              <Link 
                href="/pricing" 
                className="bg-white/10 border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                See Pricing
              </Link>
            </motion.div>
          </div>
          
          {/* Right: Square Photo */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-1">
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50 px-4">
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