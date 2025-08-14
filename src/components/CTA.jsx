import { ArrowRight, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-white bg-opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              transform
            </span>{" "}
            your operations?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl text-xl font-medium leading-relaxed text-blue-50 dark:text-blue-100 sm:text-2xl"
          >
            Discover how MicroANPR can enhance your number plate recognition capabilities and streamline your processes.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-lg font-normal leading-relaxed text-blue-100 dark:text-blue-200"
          >
            Join a growing number of organizations worldwide who trust MicroANPR for their critical number plate recognition needs. Get started today with a personalized consultation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center gap-x-6"
          >
            <a
              href="/contact"
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-50 px-8 py-4 text-lg font-bold text-blue-600 dark:text-blue-700 shadow-xl shadow-blue-900/25 hover:bg-gray-50 dark:hover:bg-gray-100 hover:shadow-2xl hover:shadow-blue-900/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Schedule Free Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
