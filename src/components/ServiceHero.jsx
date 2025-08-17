import { motion } from 'framer-motion'
import { Camera, Upload, Download, Globe } from 'lucide-react'

export default function ServiceHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800/50 bg-[size:20px_20px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            SaaS <span class="text-primary-600 dark:text-primary-400">ANPR Solutions</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            Automatic Number Plate Recognition (ANPR) as a service. Get quickly up and running
            with minimal upfront cost and access professional ANPR technology from anywhere.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us to Learn More
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#features"
              className="border border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 px-8 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 rounded-xl transition-all duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              View Features
            </motion.a>
          </div>
        </motion.div>

        {/* Feature icons grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {[
            { icon: Camera, title: 'Live Stream', description: 'Real-time Processing' },
            { icon: Upload, title: 'Upload Files', description: 'Video & Photos' },
            { icon: Camera, title: 'ANPR Processing', description: 'AI Recognition' },
            { icon: Download, title: 'Export CSV/PDF', description: 'Structured Data' },
            { icon: Globe, title: 'Access Anywhere', description: 'Web & Mobile' },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-3">
                <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
            </div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}

        >


          <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Powerful cloud-based Automatic Number Plate Recognition services.
                Scale instantly, pay as you use, and integrate seamlessly with your existing systems.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
