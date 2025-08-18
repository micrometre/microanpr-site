import { Car, Shield, Building, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const solutions = [
  {
    name: 'Patrol Operations',
    description: 'Mobile ANPR units for patrol vehicles enabling real-time vehicle identification and alerts.',
    icon: Car,
    features: ['Mobile ANPR cameras', 'Real-time database checks', 'Instant alerts', 'GPS location tracking'],
  },
  {
    name: 'Fixed Surveillance',
    description: 'Strategic placement of fixed ANPR cameras for continuous monitoring and evidence collection.',
    icon: Shield,
    features: ['Strategic positioning', '24/7 monitoring', 'Evidence capture', 'Multi-lane coverage'],
  },
  {
    name: 'Investigation Support',
    description: 'Comprehensive tools for criminal investigations and forensic analysis.',
    icon: Search,
    features: ['Historical search', 'Pattern analysis', 'Timeline reconstruction', 'Court-ready reports'],
  },
  {
    name: 'Command Centers',
    description: 'Centralized monitoring and control systems for coordinated law enforcement operations.',
    icon: Building,
    features: ['Real-time dashboards', 'Alert management', 'Multi-agency coordination', 'Operational analytics'],
  },
]

export default function LawEnforcementSolutions() {
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
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Enforcement Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Complete law enforcement ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From mobile patrol units to command centers, our ANPR solutions provide comprehensive 
            support for modern law enforcement operations and investigations.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-900/10 dark:ring-gray-700/20 hover:ring-indigo-600/20 dark:hover:ring-indigo-400/30 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500 group-hover:bg-indigo-700 dark:group-hover:bg-indigo-600 transition-colors">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    {solution.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
              </div>

              <ul className="mt-4 space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <div className="flex-none">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:underline transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
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
            className="rounded-lg bg-indigo-600 dark:bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400 transition-colors"
          >
            Enhance Law Enforcement Operations
          </a>
        </motion.div>
      </div>
    </section>
  )
}
