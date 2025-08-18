import { AlertTriangle, Database, Camera, FileText, MapPin, Radio } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Stolen Vehicle Detection',
    description: 'Instantly identify stolen vehicles against national and regional databases with real-time alerts.',
    icon: AlertTriangle,
  },
  {
    name: 'BOLO Notifications',
    description: 'Automated Be-On-the-Lookout alerts for vehicles of interest in ongoing investigations.',
    icon: Radio,
  },
  {
    name: 'Evidence Collection',
    description: 'Capture high-resolution images and video evidence with timestamp and location data.',
    icon: Camera,
  },
  {
    name: 'Database Integration',
    description: 'Seamless integration with law enforcement databases, DMV records, and criminal justice systems.',
    icon: Database,
  },
  {
    name: 'Real-time Tracking',
    description: 'Track vehicle movements across multiple checkpoints for investigation and surveillance.',
    icon: MapPin,
  },
  {
    name: 'Comprehensive Reporting',
    description: 'Generate detailed reports for court proceedings, investigations, and operational analysis.',
    icon: FileText,
  },
]

export default function LawEnforcementFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
          >
            Law Enforcement Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Professional ANPR Features
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Advanced ANPR technology designed specifically for law enforcement operations, 
            providing the tools and intelligence needed for effective policing and investigation.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
