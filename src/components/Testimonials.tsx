'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    body: 'MicroANPR has transformed our parking management system. The accuracy is incredible, and the integration was seamless. We\'ve seen a 40% increase in operational efficiency.',
    author: {
      name: 'Sarah Johnson',
      handle: 'sarah_j',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      company: 'Metro Parking Solutions',
      role: 'Operations Director'
    },
  },
  {
    body: 'The real-time processing capabilities have revolutionized our traffic management. We can now respond to incidents within minutes rather than hours.',
    author: {
      name: 'Michael Chen',
      handle: 'mike_chen',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      company: 'Smart City Initiative',
      role: 'Technical Lead'
    },
  },
  {
    body: 'Outstanding support and reliability. The system has been running flawlessly for over two years, processing millions of plates with consistent accuracy.',
    author: {
      name: 'Emma Rodriguez',
      handle: 'emma_r',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      company: 'SecureAccess Corp',
      role: 'Security Manager'
    },
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.handle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex gap-x-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-900">
                  <p className="text-lg leading-6">&ldquo;{testimonial.body}&rdquo;</p>
                </blockquote>
                
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role} at {testimonial.author.company}
                    </div>
                  </div>
                </figcaption>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">500+</span>
              <span className="ml-1">Happy Clients</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">99.9%</span>
              <span className="ml-1">Uptime</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">24/7</span>
              <span className="ml-1">Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
