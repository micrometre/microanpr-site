import { Eye, Shield, Zap, Globe, BarChart, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Real-time Recognition',
    description: 'Process license plates instantly with sub-100ms response times for real-time applications.',
    icon: Eye,
  },
  {
    name: 'Advanced Security',
    description: 'Enterprise-grade security with encrypted data transmission and secure API endpoints.',
    icon: Shield,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized algorithms deliver results in milliseconds, perfect for high-traffic scenarios.',
    icon: Zap,
  },
  {
    name: 'Global Coverage',
    description: 'Support for license plates from over 100 countries with continuous updates.',
    icon: Globe,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting tools to track performance and usage patterns.',
    icon: BarChart,
  },
  {
    name: 'Easy Integration',
    description: 'RESTful APIs and SDKs for seamless integration with existing systems.',
    icon: Settings,
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400"
          >
            Advanced Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Powerful ANPR Features
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Our cutting-edge technology provides unmatched accuracy and performance for all your license plate recognition needs.
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
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
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
