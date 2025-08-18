import { Building2, ShoppingCart, Plane, Hospital } from 'lucide-react'
import { motion } from 'framer-motion'

const solutions = [
  {
    name: 'Commercial Parking',
    description: 'Comprehensive parking solutions for shopping centers, office buildings, and commercial complexes.',
    icon: ShoppingCart,
    features: ['Automated entry/exit', 'Revenue optimization', 'Customer analytics', 'Multi-level management'],
  },
  {
    name: 'Corporate Facilities',
    description: 'Employee and visitor parking management with access control and space allocation.',
    icon: Building2,
    features: ['Employee parking allocation', 'Visitor management', 'Security integration', 'Usage reporting'],
  },
  {
    name: 'Airport Parking',
    description: 'Large-scale parking operations for airports with long-term and short-term parking solutions.',
    icon: Plane,
    features: ['Terminal integration', 'Long-term storage', 'Shuttle coordination', 'Flight-based pricing'],
  },
  {
    name: 'Healthcare Facilities',
    description: 'Patient, visitor, and staff parking with priority allocation and accessibility features.',
    icon: Hospital,
    features: ['Patient priority parking', 'Emergency vehicle access', 'Staff allocation', 'Accessibility compliance'],
  },
]

export default function ParkingSolutions() {
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
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Parking Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Smart parking for every environment
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From bustling commercial centers to specialized facilities, our ANPR-powered smart parking 
            solutions adapt to meet the unique needs of any parking environment.
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
              className="group relative flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-900/10 dark:ring-gray-700/20 hover:ring-purple-600/20 dark:hover:ring-purple-400/30 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 dark:bg-purple-500 group-hover:bg-purple-700 dark:group-hover:bg-purple-600 transition-colors">
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
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group-hover:underline transition-colors"
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
            className="rounded-lg bg-purple-600 dark:bg-purple-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-700 dark:hover:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-purple-400 transition-colors"
          >
            Transform Your Parking Operations
          </a>
        </motion.div>
      </div>
    </section>
  )
}
