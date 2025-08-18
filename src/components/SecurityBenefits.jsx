import { TrendingDown, Clock, Shield, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  {
    name: 'Reduce Security Incidents',
    description: 'Prevent unauthorized access and security breaches with intelligent monitoring and alerts.',
    icon: TrendingDown,
    stat: '80%',
    metric: 'Fewer Incidents'
  },
  {
    name: 'Faster Response Times', 
    description: 'Instant alerts and automated responses enable security teams to react within seconds.',
    icon: Clock,
    stat: '90%',
    metric: 'Faster Response'
  },
  {
    name: 'Enhanced Protection',
    description: 'Multi-layered security approach provides comprehensive protection for people and assets.',
    icon: Shield,
    stat: '99.9%',
    metric: 'Security Uptime'
  },
  {
    name: 'Streamlined Operations',
    description: 'Automate access control and visitor management to reduce operational overhead.',
    icon: Users,
    stat: '50%',
    metric: 'Operational Efficiency'
  },
]

export default function SecurityBenefits() {
  return (
    <section className="py-24 sm:py-32 bg-red-600 dark:bg-red-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-red-100">Security Excellence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Protect what matters most
          </p>
          <p className="mt-6 text-lg leading-8 text-red-100">
            Our intelligent security solutions deliver measurable improvements in protection, 
            response times, and operational efficiency across all types of facilities.
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
              <div className="text-sm font-medium text-red-100 mb-3">{benefit.metric}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.name}</h3>
              <p className="text-red-100 text-sm leading-6">{benefit.description}</p>
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
          <p className="text-lg text-red-100 mb-8">
            Ready to secure your facility with intelligent technology?
          </p>
          <a
            href="/contact"
            className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-red-600 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
