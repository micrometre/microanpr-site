import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { name: 'Accuracy Rate', value: '99.9%', icon: Shield },
  { name: 'Processing Speed', value: '<100ms', icon: Zap },
  { name: 'Regions Supported', value: '5+ Countries', icon: Users },
]

export default function Hero() {
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
            Next-Generation
            <span className="text-primary-600 dark:text-primary-400"> ANPR Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Transform your security and traffic management with our cutting-edge Automatic Number Plate Recognition technology. 
            Delivering unparalleled accuracy, speed, and reliability for enterprise solutions worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="/contact"
              className="group rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/products"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              View Products <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>



        {/* Background decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
