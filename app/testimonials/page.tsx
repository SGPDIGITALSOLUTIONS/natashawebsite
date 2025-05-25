'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Hudson Virtual transformed our administrative processes, allowing us to focus more on our community work. Their support in grant applications has been invaluable.",
      name: "Sarah M.",
      title: "Charity Director",
      image: "/assets/testimonial1.jpg"
    },
    {
      quote: "Having Hudson Virtual manage my calendar and emails has given me back hours each week. Their attention to detail and proactive approach is outstanding.",
      name: "James T.",
      title: "Business Owner",
      image: "/assets/testimonial2.jpg"
    },
    {
      quote: "The team at Hudson Virtual has been incredible for our business growth. Their data analysis has helped us identify new opportunities we would have missed.",
      name: "Rebecca L.",
      title: "Marketing Director",
      image: "/assets/testimonial3.jpg"
    },
    {
      quote: "I've been able to focus on strategy and business development since bringing Hudson Virtual on board. The ROI has been tremendous.",
      name: "Michael P.",
      title: "CEO",
      image: "/assets/testimonial4.jpg"
    },
    {
      quote: "The document preparation and project management services have streamlined our operations significantly. I wish we had started working with them sooner!",
      name: "Emma S.",
      title: "Operations Manager",
      image: "/assets/testimonial5.jpg"
    },
    {
      quote: "Hudson Virtual's client support services have elevated our customer experience. Our satisfaction ratings have increased measurably.",
      name: "David K.",
      title: "Customer Service Director",
      image: "/assets/testimonial6.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 bg-purple-50">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-purple-900 mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it - here's what our clients have to say
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-purple-50 p-8 rounded-xl shadow-lg"
              >
                <svg className="w-12 h-12 text-purple-300 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join our satisfied clients
          </h2>
          <p className="text-xl mb-8">
            Experience the difference professional virtual support can make for your business
          </p>
          <Link href="/" className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
            Book Your Free Call
          </Link>
        </div>
      </section>
    </main>
  );
} 