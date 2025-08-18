import { motion } from 'framer-motion'
import { 
  Video, 
  Camera, 
  Smartphone, 
  Shield, 
  Zap, 
  Wrench, 
  Cloud, 
  Phone,
  CheckCircle 
} from 'lucide-react'

const products = [
  {
    name: 'ANPR-SL100',
    subtitle: 'Single Lane Camera',
    features: [
      '4K Ultra HD resolution',
      'IR illumination for night vision',
      'IP67 weatherproof rating',
      'PoE+ powered',
      '99.5% accuracy rate'
    ],
    icon: Video,
    popular: false
  },
  {
    name: 'ANPR-ML200',
    subtitle: 'Multi-Lane Camera',
    features: [
      'Covers up to 4 lanes',
      '8K panoramic resolution',
      'Advanced AI processing',
      'Edge computing capabilities',
      '99.8% accuracy rate'
    ],
    icon: Camera,
    popular: true
  },
  {
    name: 'ANPR-PT300',
    subtitle: 'Portable ANPR System',
    features: [
      'Rapid deployment in 15 minutes',
      'Battery powered (48-hour operation)',
      '4G/5G cellular connectivity',
      'Integrated solar charging option',
      'Ruggedized transport case included'
    ],
    icon: Smartphone,
    popular: false
  }
]

const specifications = [
  {
    name: 'Weather Resistant',
    description: 'IP67 rated enclosures withstand extreme weather conditions from -40°C to +70°C.',
    icon: Shield,
  },
  {
    name: 'High Performance',
    description: 'Process multiple vehicles simultaneously with edge AI computing at up to 200km/h speeds.',
    icon: Zap,
  },
  {
    name: 'Easy Maintenance',
    description: 'Self-diagnostic systems and remote monitoring reduce maintenance requirements by 70%.',
    icon: Wrench,
  },
]

const supportServices = [
  {
    title: 'Professional Installation',
    features: [
      'Site survey and planning',
      'Professional mounting and setup',
      'Network configuration',
      'System calibration and testing',
      'Staff training included'
    ]
  },
  {
    title: 'Ongoing Support',
    features: [
      '24/7 remote monitoring',
      'Firmware updates',
      'Preventive maintenance',
      'Technical support hotline',
      'Warranty coverage'
    ]
  }
]

export default function ProductFeatures() {
  return (
    <>
      {/* Hardware Products */}
      <section id="products" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400"
            >
              Complete Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Professional ANPR Hardware
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow ${
                    product.popular ? 'ring-2 ring-primary-600' : ''
                  }`}
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-600 mb-6">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className={`mt-2 text-sm ${product.popular ? 'text-primary-600' : 'text-gray-600 dark:text-gray-300'}`}>
                    {product.subtitle}{product.popular && ' (Most Popular)'}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Built for harsh environments
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Our hardware is designed and tested to operate reliably in the most challenging conditions.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                      <spec.icon className="h-6 w-6 text-white" />
                    </div>
                    {spec.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{spec.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Support & Services */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Complete support package
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              From installation to maintenance, we provide comprehensive support for your hardware deployment.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
