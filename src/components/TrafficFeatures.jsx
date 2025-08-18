import { Activity, Clock, AlertTriangle, BarChart3, MapPin, Camera } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Real-time Traffic Monitoring',
    description: 'Monitor traffic flow and vehicle counts across multiple lanes and intersections in real-time.',
    icon: Activity,
  },
  {
    name: 'Adaptive Signal Control',
    description: 'Automatically adjust traffic signal timing based on current traffic conditions and patterns.',
    icon: Clock,
  },
  {
    name: 'Incident Detection',
    description: 'Instantly detect traffic incidents, accidents, and unusual vehicle behavior for rapid response.',
    icon: AlertTriangle,
  },
  {
    name: 'Congestion Analytics',
    description: 'Analyze traffic patterns, peak hours, and congestion hotspots with comprehensive reporting.',
    icon: BarChart3,
  },
  {
    name: 'Journey Time Monitoring',
    description: 'Track vehicle journey times between checkpoints for route optimization and planning.',
    icon: MapPin,
  },
  {
    name: 'Speed Enforcement',
    description: 'Automated speed monitoring and enforcement with accurate license plate capture.',
    icon: Camera,
  },
]

export default function TrafficFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-emerald-600 dark:text-emerald-400"
          >
            Advanced Traffic Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Smart Traffic Management Features
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Leverage cutting-edge ANPR technology to create intelligent traffic systems that adapt, respond, 
            and optimize urban mobility in real-time.
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
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 dark:bg-emerald-500">
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
