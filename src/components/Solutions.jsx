'use client'

import { Car, Shield, Building, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const solutions = [
  {
    name: 'Traffic Management',
    description: 'Optimize traffic flow, monitor congestion, and enforce traffic regulations with intelligent ANPR systems.',
    icon: Car,
    href: '/solutions/traffic',
    features: ['Real-time traffic monitoring', 'Congestion analysis', 'Speed enforcement', 'Journey time measurement'],
  },
  {
    name: 'Security & Access Control',
    description: 'Secure facilities and automate access control with advanced number plate recognition technology.',
    icon: Shield,
    href: '/solutions/security',
    features: ['Automatic gate control', 'Visitor management', 'Blacklist monitoring', 'Security alerts'],
  },
  {
    name: 'Smart Parking',
    description: 'Revolutionize parking management with automated entry, payment processing, and space optimization.',
    icon: Building,
    href: '/solutions/parking',
    features: ['Automated entry/exit', 'Payment integration', 'Space optimization', 'Customer analytics'],
  },
  {
    name: 'Law Enforcement',
    description: 'Support law enforcement operations with real-time vehicle tracking and database integration.',
    icon: Users,
    href: '/solutions/law-enforcement',
    features: ['Stolen vehicle alerts', 'BOLO notifications', 'Evidence collection', 'Database integration'],
  },
]

export default function Solutions() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored ANPR solutions for every industry
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From traffic management to security enforcement, our ANPR technology adapts to your specific needs 
            and delivers measurable results across diverse applications.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col gap-6 bg-white p-8 ring-1 ring-gray-900/10 hover:ring-blue-600/20 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    {solution.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {solution.description}
                </p>
              </div>

              <ul className="mt-4 space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <div className="flex-none">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={solution.href}
                  className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-700 group-hover:underline transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Discuss Your Requirements
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
