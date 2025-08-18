import { Scan, CreditCard, MapPin, BarChart3, Clock, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Automatic Entry & Exit',
    description: 'Seamless barrier-free entry and exit with instant license plate recognition and validation.',
    icon: Scan,
  },
  {
    name: 'Integrated Payment Processing',
    description: 'Multiple payment options including mobile apps, contactless cards, and automatic billing.',
    icon: CreditCard,
  },
  {
    name: 'Real-time Space Management',
    description: 'Live parking space availability tracking with dynamic pricing and reservation systems.',
    icon: MapPin,
  },
  {
    name: 'Advanced Analytics',
    description: 'Comprehensive reporting on occupancy rates, revenue, and customer behavior patterns.',
    icon: BarChart3,
  },
  {
    name: 'Flexible Pricing Models',
    description: 'Dynamic pricing based on demand, time-of-day, and special events for maximum revenue.',
    icon: Clock,
  },
  {
    name: 'Mobile App Integration',
    description: 'Customer-facing mobile apps for reservations, payments, and finding available spaces.',
    icon: Smartphone,
  },
]

export default function ParkingFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400"
          >
            Smart Parking Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Intelligent Parking Features
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Revolutionize parking operations with advanced ANPR technology that streamlines the entire 
            parking experience from entry to payment and everything in between.
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
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500">
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
