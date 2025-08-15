import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    solution: ''
  })

  const handleSubmit = (e) => {
    // Let Netlify handle the form submission naturally
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/10 dark:ring-gray-100/10"
    >
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Netlify honeypot field */}
        <p className="hidden">
          <label>
            Don't fill this out if you're human: 
            <input name="bot-field" />
          </label>
        </p>
        
        {/* Hidden form name for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="solution" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
            Solution of Interest
          </label>
          <select
            name="solution"
            id="solution"
            value={formData.solution}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
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
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements..."
            className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-700"
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-x-3 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Send Message
            <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </motion.div>
  )
}
