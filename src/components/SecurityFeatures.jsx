import { Shield, Lock, Eye, Bell, Users, Database } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Automatic Gate Control',
    description: 'Seamlessly control access gates and barriers based on license plate recognition and authorization.',
    icon: Lock,
  },
  {
    name: 'Real-time Monitoring',
    description: 'Continuous surveillance with instant alerts for unauthorized vehicles and security breaches.',
    icon: Eye,
  },
  {
    name: 'Visitor Management',
    description: 'Streamline visitor registration, temporary access, and comprehensive visitor tracking.',
    icon: Users,
  },
  {
    name: 'Blacklist Monitoring',
    description: 'Automatically detect and alert on vehicles flagged in security databases or blacklists.',
    icon: Bell,
  },
  {
    name: 'Multi-layer Security',
    description: 'Integrate with existing security systems for comprehensive perimeter and facility protection.',
    icon: Shield,
  },
  {
    name: 'Audit Trail & Compliance',
    description: 'Maintain detailed logs of all access events for compliance and forensic investigation.',
    icon: Database,
  },
]

export default function SecurityFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-red-600 dark:text-red-400"
          >
            Security Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Comprehensive Security Features
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Deploy advanced ANPR technology to create intelligent security systems that protect your assets, 
            control access, and maintain comprehensive surveillance with enterprise-grade reliability.
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
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 dark:bg-red-500">
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
