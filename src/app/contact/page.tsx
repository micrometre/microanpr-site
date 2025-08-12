'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    solution: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-600 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Get In Touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Ready to transform your operations with cutting-edge ANPR technology? 
                Our experts are here to help you find the perfect solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Let&apos;s discuss your requirements
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our team of ANPR experts is ready to understand your specific needs and 
                  provide tailored solutions that deliver measurable results.
                </p>
                
                <div className="mt-10 space-y-8">
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900">Phone</h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        Call us directly for immediate assistance
                      </p>
                      <p className="text-sm font-semibold text-blue-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        Send us an email and we&apos;ll respond within 24 hours
                      </p>
                      <p className="text-sm font-semibold text-blue-600">sales@microanpr.com</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-gray-900">Office</h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        Visit our headquarters
                      </p>
                      <p className="text-sm font-semibold text-blue-600">
                        123 Technology Drive, Suite 100<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/10"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="solution" className="block text-sm font-medium leading-6 text-gray-900">
                      Solution of Interest
                    </label>
                    <select
                      name="solution"
                      id="solution"
                      value={formData.solution}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                    >
                      <option value="">Select a solution</option>
                      <option value="traffic">Traffic Management</option>
                      <option value="security">Security & Access Control</option>
                      <option value="parking">Smart Parking</option>
                      <option value="law-enforcement">Law Enforcement</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-x-3 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
