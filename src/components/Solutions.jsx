import { Car, Shield, Building, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const solutions = [

  {
    name: 'Smart Parking',
    description: 'Revolutionize parking management with automated entry, payment processing, and space optimization.',
    icon: Building,
    href: '/smart-parking',
    features: ['Automated entry/exit', 'Payment integration', 'Space optimization', 'Customer analytics'],
  },

]

export default function Solutions() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tailored ANPR solutions for every industry
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From traffic management to security enforcement, our ANPR technology adapts to your specific needs
            and delivers measurable results across diverse applications.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 flex justify-center sm:mt-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col gap-6 bg-white dark:bg-gray-800 p-10 ring-1 ring-gray-900/10 dark:ring-gray-700/20 hover:ring-primary-600/30 dark:hover:ring-primary-400/40 rounded-3xl hover:shadow-2xl transition-all duration-300 max-w-lg w-full"
            >
              <div>
                <div className="flex items-center gap-x-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 group-hover:from-primary-700 group-hover:to-primary-800 dark:group-hover:from-primary-400 dark:group-hover:to-primary-500 shadow-lg transition-all duration-300"
                  >
                    <solution.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white">
                    {solution.name}
                  </h3>
                </div>
                <p className="mt-2 text-lg leading-7 text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 -mx-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-x-3"
                    >
                      <div className="flex-none mt-1">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600" />
                      </div>
                      <span className="text-base text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <motion.a
                  href={solution.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-full rounded-xl bg-primary-600 dark:bg-primary-500 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-700 dark:hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 transition-all duration-300"
                >
                  Learn more 
                  <motion.span 
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    →
                  </motion.span>
                </motion.a>
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
          <a
            href="/contact"
            className="rounded-lg bg-primary-600 dark:bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 dark:hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 transition-colors"
          >
            Discuss Your Requirements
          </a>
        </motion.div>
      </div>
    </section>
  )
}
