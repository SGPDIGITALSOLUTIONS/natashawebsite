'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserTie, FaHandsHelping, FaSmile, FaHeart, FaLightbulb, FaCheck, FaGlobe, FaCalendarAlt, FaEnvelope, FaTools, FaTasks } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaCalendarAlt className="text-purple-600 text-xl" />, label: 'Inbox and diary management' },
  { icon: <FaGlobe className="text-purple-600 text-xl" />, label: 'Event and travel planning' },
  { icon: <FaEnvelope className="text-purple-600 text-xl" />, label: 'Client communications and CRM' },
  { icon: <FaTasks className="text-purple-600 text-xl" />, label: 'Project coordination' },
  { icon: <FaTools className="text-purple-600 text-xl" />, label: 'Process improvement' },
];

const clientTypes = [
  { icon: <FaUserTie className="text-purple-600 text-2xl mb-2" />, label: 'Small Charities' },
  { icon: <FaHandsHelping className="text-purple-600 text-2xl mb-2" />, label: 'Solopreneurs' },
  { icon: <FaSmile className="text-purple-600 text-2xl mb-2" />, label: 'Purpose-Driven Businesses' },
  { icon: <FaLightbulb className="text-purple-600 text-2xl mb-2" />, label: 'Health & Wellness' },
  { icon: <FaHeart className="text-purple-600 text-2xl mb-2" />, label: 'Mission-Driven Organizations' },
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
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Meet Natasha – Your Admin Unicorn</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Running a small business or charity is no small feat. You're spinning plates, juggling priorities, and wondering if you ever replied to that email from last week—or was it the week before?
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              I'm Natasha, founder of Hudson Virtual Business Services, and I'm here to help you find space to breathe. I offer calm, practical virtual assistant support to small businesses and charities that are doing brilliant work but need someone dependable behind the scenes to keep things running smoothly.
            </p>
            <p className="text-gray-700 mb-6">
              I'm not your typical VA. There's no corporate gloss, no fancy jargon. What you get is a real human—friendly, focused, and fully in your corner.
            </p>
            
            <h2 className="text-2xl font-bold text-purple-900 mt-12 mb-4">My Journey (aka: How I Became the Admin Unicorn)</h2>
            <p className="text-gray-700 mb-6">
              My background is as varied as a charity's inbox on a Monday morning. I've worked across industries including scientific research and travel—fields where being organised, adaptable, and people-focused isn't just helpful, it's essential.
            </p>
            <p className="text-gray-700 mb-6">
              Over the years, I've supported teams and leaders to stay on track and thrive. Somewhere along the way, I realised I could take everything I'd learned and channel it into something of my own.
            </p>
            <p className="text-gray-700 mb-6">
              That's how Hudson Virtual was born. After years of helping other people shine, I wanted to build a business that supports the kind of work I believe in—purpose-driven, people-first small businesses and charities doing good in the world.
            </p>
          </div>

          <div className="border-t border-purple-100 pt-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">What I Do Best</h2>
            <p className="text-gray-700 mb-6">
              I'm here to help you breathe a little easier—by taking the busywork off your plate so you can focus on the bigger picture. From inboxes to itineraries, newsletters to nurture sequences, I offer hands-on support across a wide range of admin and operational needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {service.icon}
                  <span className="text-gray-700">{service.label}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 italic">
              And if it's not on the list? Just ask. There's not much I won't roll up my sleeves for.
            </p>
          </div>

          <div className="border-t border-purple-100 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">A Bit About Me</h2>
            <p className="text-gray-700 mb-6">
              Born and raised in Canada (and yes, "sorry" is still one of my most-used words), I now live in the UK with my two teenage daughters, two mischievous cats named Chilli and Pepper, and a delightfully chaotic Dalmatian-Boxer-Lab cross called Clover—who thinks she's the third child.
            </p>
            <p className="text-gray-700 mb-6">
              I've been lucky enough to visit all seven continents—yep, even Antarctica. It turns out penguins are great travel companions.
            </p>
            <p className="text-gray-700">
              When I'm not colour-coding a calendar or fine-tuning a process, you'll find me exploring new places, planning the next adventure, or hunting down the best snacks for a movie night with my girls.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values and Client Types Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-8 text-center">Why Work With Me?</h2>
          
          <div className="mb-12">
            <p className="text-gray-700 mb-6 text-center">
              Because I care about your mission—and I care about you. When we work together, you're not just hiring help; you're gaining someone who listens, adapts, and steps up exactly where you need them.
            </p>
            <p className="text-gray-700 text-center">
              I thrive on building genuine relationships, understanding your goals, and bringing a steady presence that lets you focus on what you do best.
            </p>
          </div>

          <div className="border-t border-purple-100 pt-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-6 text-center">I Specialize In Supporting</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {clientTypes.map((client) => (
                <div
                  key={client.label}
                  className="flex items-center"
                >
                  <div className="mr-2">{client.icon}</div>
                  <span className="text-gray-700">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Let's Talk</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            If you're overwhelmed, overstretched, or simply ready to get some brainspace back—let's talk.
            No pressure. Just a genuine conversation to see if I'm the right fit for you and your business.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow">
              Book a Discovery Call
            </Link>
            <Link href="/contact" className="inline-block bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 