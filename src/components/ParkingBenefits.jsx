import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  {
    name: 'Increase Revenue',
    description: 'Maximize parking revenue through optimized space utilization and dynamic pricing strategies.',
    icon: TrendingUp,
    stat: '40%',
    metric: 'Revenue Increase'
  },
  {
    name: 'Reduce Wait Times', 
    description: 'Eliminate queues and reduce customer wait times with automated entry and exit systems.',
    icon: Clock,
    stat: '75%',
    metric: 'Faster Processing'
  },
  {
    name: 'Improve Satisfaction',
    description: 'Enhance customer experience with seamless parking, mobile payments, and space finding.',
    icon: Users,
    stat: '90%',
    metric: 'Customer Satisfaction'
  },
  {
    name: 'Lower Operating Costs',
    description: 'Reduce staffing costs and operational overhead through automated parking management.',
    icon: DollarSign,
    stat: '60%',
    metric: 'Cost Reduction'
  },
]

export default function ParkingBenefits() {
  return (
    <section className="py-24 sm:py-32 bg-purple-600 dark:bg-purple-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-purple-100">Proven Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Revolutionize your parking operations
          </p>
          <p className="mt-6 text-lg leading-8 text-purple-100">
            Our smart parking solutions deliver tangible results that transform both 
            operational efficiency and customer satisfaction across all types of facilities.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{benefit.stat}</div>
              <div className="text-sm font-medium text-purple-100 mb-3">{benefit.metric}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.name}</h3>
              <p className="text-purple-100 text-sm leading-6">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-purple-100 mb-8">
            Ready to modernize your parking facility?
          </p>
          <a
            href="/contact"
            className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-purple-600 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
