import { motion } from 'framer-motion'
import {
  Upload,
  FileVideo,
  Image,
  Download,
  Globe,
  Smartphone,
  Shield,
  DollarSign,
  Clock,
  Zap,
  Database,
  CheckCircle
} from 'lucide-react'

const features = [
  {
    category: "Recognition As A Service",
    icon: Zap,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    items: [
      {
        icon: Upload,
        title: "Unlimited File Uploads",
        description: "Upload an unlimited number of files containing video footage or photos for processing."
      },
      {
        icon: FileVideo,
        title: "Any Video Format",
        description: "Process video footage of any length in the required format with high accuracy recognition."
      },
      {
        icon: Download,
        title: "Downloadable CSV Results",
        description: "Get all captured number plates in a structured, downloadable CSV file format."
      }
    ]
  },
  {
    category: "Access from Anywhere",
    icon: Globe,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    items: [
      {
        icon: Globe,
        title: "Web Access",
        description: "Access MicroANPR from any Internet-connected computer with just a web browser."
      },
      {
        icon: Smartphone,
        title: "Mobile Compatible",
        description: "Use MicroANPR on any mobile device with full functionality and responsive design."
      },
      {
        icon: Shield,
        title: "Privacy Focused",
        description: "Only public data (licence plates) is collected, logged and converted to CSV."
      }
    ]
  },
  {
    category: "Flexible Pricing",
    icon: DollarSign,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    items: [
      {
        icon: Clock,
        title: "Pay Monthly",
        description: "Flexible monthly payments with the ability to cancel at any time - no long-term commitment."
      },
      {
        icon: DollarSign,
        title: "Annual Savings",
        description: "Save 20% with annual billing - get 12 months of service for the price of 10 months."
      },
      {
        icon: Database,
        title: "Scalable Processing",
        description: "Process as many files as you need without worrying about usage limits or overages."
      }
    ]
  }
]

export default function ServiceFeatures() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Professional ANPR Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need for automatic number plate recognition, delivered as a service
            with enterprise-grade reliability and ease of use.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center">
                  <div className={`h-12 w-12 rounded-xl ${category.bgColor} flex items-center justify-center mr-4`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="h-full bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start">
                        <div className={`h-10 w-10 rounded-lg ${category.bgColor} flex items-center justify-center flex-shrink-0 mr-4`}>
                          <feature.icon className={`h-5 w-5 ${category.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ready to Get Started?
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations worldwide who trust MicroANPR for their automatic number plate
              recognition needs. Get up and running quickly with minimal upfront investment.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </motion.a>
          </div>



          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >


            <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">

                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                    Cloud-First
                  </h2>

                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Everything you need in the cloud
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                          </svg>
                        </div>
                        Instant Scalability
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                        <p className="flex-auto">Scale from hundreds to millions of license plate reads per day without infrastructure management.</p>
                      </dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                          </svg>
                        </div>
                        Real-time API
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                        <p className="flex-auto">RESTful API with sub-second response times and real-time webhook notifications.</p>
                      </dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                        </div>
                        Enterprise Security
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                        <p className="flex-auto">SOC 2 compliant with end-to-end encryption and comprehensive audit trails.</p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>



          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
