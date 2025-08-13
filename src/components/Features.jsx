import { 
  Camera, 
  Shield, 
  Zap, 
  Globe, 
  Settings, 
  Database,
  Clock,
  CheckCircle2
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'High-Accuracy Recognition',
    description: 'Advanced AI algorithms deliver 99.9% accuracy in number plate detection and character recognition.',
    icon: CheckCircle2,
  },
  {
    name: 'Real-Time Processing',
    description: 'Process thousands of vehicles per hour with sub-100ms response times for instant decision making.',
    icon: Zap,
  },
  {
    name: 'Multi-Camera Support',
    description: 'Seamlessly integrate with existing camera infrastructure and support multiple camera feeds simultaneously.',
    icon: Camera,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols ensure your data remains protected and compliant.',
    icon: Shield,
  },
  {
    name: 'Global Coverage',
    description: 'Support for license plates from 100+ countries with automatic region detection capabilities.',
    icon: Globe,
  },
  {
    name: '24/7 Monitoring',
    description: 'Continuous system monitoring with automated alerts and comprehensive reporting dashboards.',
    icon: Clock,
  },
  {
    name: 'Easy Integration',
    description: 'RESTful APIs and SDKs make integration with existing systems quick and straightforward.',
    icon: Settings,
  },
  {
    name: 'Scalable Database',
    description: 'Cloud-native architecture scales automatically to handle millions of plate recognition events.',
    icon: Database,
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Enterprise Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for professional ANPR deployment
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of features ensures reliable, accurate, and scalable number plate recognition 
            for any enterprise application, from parking management to security enforcement.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
