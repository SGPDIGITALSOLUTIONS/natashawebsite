'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserTie, FaHandsHelping, FaSmile, FaHeart, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const clientTypes = [
  { icon: <FaUserTie className="text-purple-600 text-2xl mb-2" />, label: 'Small Charities' },
  { icon: <FaHandsHelping className="text-purple-600 text-2xl mb-2" />, label: 'Solopreneurs' },
  { icon: <FaSmile className="text-purple-600 text-2xl mb-2" />, label: 'Women-led Businesses' },
  { icon: <FaLightbulb className="text-purple-600 text-2xl mb-2" />, label: 'Health & Wellness' },
  { icon: <FaHeart className="text-purple-600 text-2xl mb-2" />, label: 'Mission-driven' },
];

const values = [
  { icon: <FaSmile className="text-purple-600 text-xl mr-2" />, title: 'Experienced', desc: '25+ years in admin and customer service.' },
  { icon: <FaHandsHelping className="text-purple-600 text-xl mr-2" />, title: 'Dedicated', desc: 'I become part of your team and mission.' },
  { icon: <FaLightbulb className="text-purple-600 text-xl mr-2" />, title: 'Tailored', desc: 'Unique solutions for your unique needs.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white pb-20">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 text-center bg-gradient-to-tr from-purple-100 via-blue-100 to-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg mb-6">
            <Image
              src="/logo.jpg"
              alt="Natasha Hudson"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">Meet Natasha</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            Hi, I'm Natasha – the heart and hands behind Hudson Virtual Business Services (also affectionately known as your Admin Unicorn).
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-gray-700 mb-6">
            With over 25 years of experience in admin and customer service, I've worked across retail, travel, and research—helping businesses stay organised, on track, and thriving. Now, as a virtual assistant, I specialise in supporting small charities, solopreneurs, and women-led businesses, especially those in the health and wellness space. My sweet spot? Working with people who care deeply about their work but are drowning in the admin that comes with it.
          </p>
          <p className="text-gray-700 mb-6">
            I'm not your typical VA. I bring more than just efficiency—I bring energy, insight, and heart. I invest in the businesses I support. When we work together, I don't just tick tasks off your to-do list—I become part of your team, someone who understands your mission and helps you bring it to life.
          </p>
          <p className="text-gray-700">
            My clients often tell me I bring calm to their chaos, and that I just "get it"—how their business works, what they need, and how to keep things flowing. I thrive on trust, communication, and a shared commitment to making your business stronger and more sustainable.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-purple-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">A Bit of Unicorn Magic</h2>
          <p className="text-gray-700">
            Why Admin Unicorn? Because I'm all about unique, tailored support. No cookie-cutter solutions here. I blend practicality with a sprinkle of creativity and a good dose of care. It's not just business—it's personal, in the best way.
          </p>
        </motion.div>
      </section>

      {/* Client Types Row */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">Who I Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {clientTypes.map((client) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center w-full"
            >
              {client.icon}
              <span className="text-gray-700 font-medium text-sm text-center">{client.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-purple-50 rounded-xl shadow p-8 text-center">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">What My Clients Say</h3>
          <blockquote className="italic text-gray-700 mb-2">“I was so grateful for Natasha's help. She was really organised and efficient with all of the tasks assigned to her.”</blockquote>
          <div className="text-gray-600 font-medium">— Ella K., London</div>
        </motion.div>
      </section>

      {/* How I Work / Values Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">How I Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <div>{val.icon}</div>
              <h4 className="text-lg font-bold text-purple-900 mt-2 mb-1">{val.title}</h4>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Let's Start Working Together!</motion.h2>
        <Link href="/contact" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow">
          Contact Me
        </Link>
      </section>
    </main>
  );
} 