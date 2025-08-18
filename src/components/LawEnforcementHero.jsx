import { ArrowRight, Shield, Search, Clock, Database } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { name: 'Detection Accuracy', value: '99.8%', icon: Shield },
  { name: 'Alert Speed', value: '<500ms', icon: Clock },
  { name: 'Database Queries', value: '1M+', icon: Search },
  { name: 'Agencies Served', value: '250+', icon: Database },
]

export default function LawEnforcementHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
          >
            Professional
            <span className="text-indigo-600 dark:text-indigo-400"> Law Enforcement</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Empower law enforcement operations with advanced ANPR technology. Track stolen vehicles, 
            issue BOLO alerts, collect evidence, and integrate with criminal databases for rapid response and investigation support.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="/contact"
              className="group rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
            >
              Enhance Operations
              <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features" 
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Explore capabilities <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500 mb-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-sm font-medium leading-6 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6366f1] to-[#8b5cf6] opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
