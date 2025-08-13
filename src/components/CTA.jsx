'use client'

import { ArrowRight, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your operations?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join hundreds of organizations worldwide who trust MicroANPR for their critical 
            number plate recognition needs. Get started today with a personalized consultation.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/contact"
              className="group rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+1-555-123-4567"
              className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
            >
              Call Now <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="flex items-center justify-center gap-x-3 text-blue-100">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-x-3 text-blue-100">
              <Mail className="h-5 w-5" />
              <span className="text-sm">sales@microanpr.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
