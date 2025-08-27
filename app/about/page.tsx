'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserTie, FaHandsHelping, FaSmile, FaHeart, FaLightbulb, FaCheck, FaGlobe, FaCalendarAlt, FaEnvelope, FaTools, FaTasks } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaCalendarAlt className="text-brand-purple text-xl" />, label: 'Inbox and diary management' },
  { icon: <FaGlobe className="text-brand-purple text-xl" />, label: 'Event and travel planning' },
  { icon: <FaEnvelope className="text-brand-purple text-xl" />, label: 'Client communications and CRM' },
  { icon: <FaTasks className="text-brand-purple text-xl" />, label: 'Project coordination' },
  { icon: <FaTools className="text-brand-purple text-xl" />, label: 'Process improvement' },
];

const clientTypes = [
  { icon: <FaUserTie className="text-brand-purple text-2xl mb-2" />, label: 'Small Charities' },
  { icon: <FaHandsHelping className="text-brand-purple text-2xl mb-2" />, label: 'Solopreneurs' },
  { icon: <FaSmile className="text-brand-purple text-2xl mb-2" />, label: 'Purpose-Driven Businesses' },
  { icon: <FaLightbulb className="text-brand-purple text-2xl mb-2" />, label: 'Health & Wellness' },
  { icon: <FaHeart className="text-brand-purple text-2xl mb-2" />, label: 'Mission-Driven Organisnpmations' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 text-center bg-gradient-to-r from-brand-navy to-brand-purple text-white relative overflow-hidden pt-44">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
            Running a small business or charity is no small feat. You're spinning plates, juggling priorities, and wondering if you ever replied to that email from last week—or was it the week before? Our dedicated team is here to help you find space to breathe.
          </p>
        </motion.div>
      </section>

      {/* Natasha - Complete Profile */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brand-cyan shadow-lg mb-6">
              <Image
                src="/logo.jpg"
                alt="Natasha Hudson"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Meet Natasha – Your Admin Unicorn</h2>
            <p className="text-gray-700 text-center max-w-2xl mb-6">
              I'm Natasha, founder of Hudson Virtual Business Services, and I'm here to help you find space to breathe. I offer calm, practical virtual assistant support to small businesses and charities that are doing brilliant work but need someone dependable behind the scenes to keep things running smoothly.
            </p>
            <p className="text-gray-700 text-center max-w-2xl">
              I'm not your typical VA. There's no corporate gloss, no fancy jargon. What you get is a real human—friendly, focused, and fully in your corner.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">My Journey (aka: How I Became the Admin Unicorn)</h2>
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

          <div className="border-t border-brand-cyan/20 pt-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">What I Do Best</h2>
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

          <div className="border-t border-brand-cyan/20 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">A Bit About Me</h2>
            <p className="text-gray-700 mb-6">
              Born and raised in Canada (and yes, "sorry" is still one of my most-used words), I now live in the UK with my two teenage daughters, two mischievous cats named Chilli and Pepper, and a delightfully chaotic Dalmatian-Boxer-Lab cross called Clover—who thinks she's the third child.
            </p>
            <p className="text-gray-700 mb-6">
              I've been lucky enough to visit all seven continents—yep, even Antarctica. It turns out penguins are great travel companions.
            </p>
            <p className="text-gray-700 mb-6">
              When I'm not colour-coding a calendar or fine-tuning a process, you'll find me exploring new places, planning the next adventure, or hunting down the best snacks for a movie night with my girls.
            </p>
          </div>

          <div className="border-t border-brand-cyan/20 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">Why Work With Me?</h2>
            
            <div className="mb-12">
              <p className="text-gray-700 mb-6 text-center">
                Because I care about your mission—and I care about you. When we work together, you're not just hiring help; you're gaining someone who listens, adapts, and steps up exactly where you need them.
              </p>
              <p className="text-gray-700 text-center">
                I thrive on building genuine relationships, understanding your goals, and bringing a steady presence that lets you focus on what you do best.
              </p>
            </div>

            <div className="border-t border-brand-cyan/20 pt-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-6 text-center">I Specialize In Supporting</h3>
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
        </motion.div>
      </section>

      {/* Meet Rebekah Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brand-cyan shadow-lg mb-6">
              <Image
                src="/rebekah.png"
                alt="Rebekah"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Meet Rebekah</h2>
            <p className="text-gray-700 text-center max-w-2xl mb-6">
              Rebekah is an associate at Hudson Virtual with over 20 years experience in administration, office management, and compliance, with skills in document management, preparing presentations, and scheduling.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Professional Background</h3>
            <p className="text-gray-700 mb-6">
              Following a career in the Construction Industry working for a Main Contractor, Rebekah is looking to transfer her knowledge and experience on an ad-hoc basis into the VA world.
            </p>
            <p className="text-gray-700 mb-6">
              Rebekah's organisation skills, attention to detail, and drive for improvement make her an ideal business support provider. Rebekah's passions lie in systems implementation, policy management, and streamlining processes.
            </p>
            <p className="text-gray-700">
              Action planning and accreditation management are key skills that Rebekah brings to the Hudson Virtual team.
            </p>
          </div>

          <div className="border-t border-brand-cyan/20 pt-8 mt-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">A Bit About Rebekah</h3>
            <p className="text-gray-700 mb-6">
              In her spare time, Rebekah loves reading, birdwatching, and looking after her senior dog. She has recently started volunteering at a dog rescue shelter, combining her love for animals with her desire to give back to the community.
            </p>
            <p className="text-gray-700">
              Rebekah is passionate about wildlife and conservation and is an active member of a local wildlife group, for whom she carries out free of charge secretarial and membership management duties—bringing her organisational skills to causes she truly cares about.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Meet Stephen Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brand-cyan shadow-lg mb-6">
              <Image
                src="/stephen.jpg"
                alt="Stephen Pratt"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Meet Stephen</h2>
            <p className="text-gray-700 text-center max-w-2xl mb-6">
              Stephen Pratt is an associate at Hudson Virtual, bringing his expertise as Managing Director & Lead Developer from SGP Digital to help our clients with technology solutions and system improvements.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Technology & Solutions Expertise</h3>
            <p className="text-gray-700 mb-6">
              Stephen specializes in working with challenging systems and making them better. He turns "there must be an easier way" into actual easier solutions, building tools that people don't struggle with.
            </p>
            <p className="text-gray-700 mb-6">
              With his customer-focused mindset and developer expertise, Stephen approaches problems from the user's perspective while applying technical solutions that actually work. He's passionate about cutting through jargon and delivering practical results.
            </p>
            <p className="text-gray-700">
              Through his partnership with Hudson Virtual, Stephen brings cutting-edge technology solutions and a passion for solving complex business challenges, helping our clients bridge the gap between innovative technology and practical business operations.
            </p>
          </div>

          <div className="border-t border-brand-cyan/20 pt-8 mt-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">A Bit About Steve</h3>
            <p className="text-gray-700 mb-6">
              Steve is a self-described nerd who enjoys spending his free time doing programming drills, creating random digital tools, and bending the realms of possibility. 
            </p>
            <p className="text-gray-700">
              Outside of the tech world, Steve loves playing piano, guitar, and food! His passion for both creative and technical pursuits brings a unique perspective to problem-solving.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Let's Talk</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            If you're overwhelmed, overstretched, or simply ready to get some brainspace back—let's talk.
            No pressure. Just a genuine conversation to see if I'm the right fit for you and your business.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="inline-block bg-brand-yellow text-brand-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors shadow">
              Book a Discovery Call
            </Link>
            <Link href="/contact" className="inline-block bg-white text-brand-navy border-2 border-brand-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-cyan/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 