import { motion } from 'framer-motion'
import {
  Check,
  Star,
  Calendar,
  CreditCard,
  TrendingUp,
  Users,
  Building,
  Zap
} from 'lucide-react'

const pricingPlans = [
  {
    name: "Monthly Plan",
    icon: Calendar,
    popular: false,
    price: "Contact",
    period: "per month",
    description: "Perfect for getting started with flexible monthly billing",
    features: [
      "Unlimited file uploads",
      "Any video length processing",
      "CSV output format",
      "Web and mobile access",
      "Email support",
      "Cancel anytime",
      "No long-term commitment",
      "Standard processing priority"
    ],
    cta: "Get Monthly Pricing",
    highlight: "Flexible cancellation"
  },
  {
    name: "Annual Plan",
    icon: TrendingUp,
    popular: true,
    price: "Save 20%",
    period: "per year",
    description: "Best value - get 12 months for the price of 10",
    features: [
      "Everything in Monthly Plan",
      "20% cost savings",
      "12 months for price of 10",
      "Priority processing",
      "Advanced analytics",
      "Priority email support",
      "API access included",
      "Dedicated account manager"
    ],
    cta: "Get Annual Pricing",
    highlight: "Most popular choice"
  }
]

const enterpriseFeatures = [
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Team accounts with role-based permissions and user management"
  },
  {
    icon: Building,
    title: "Custom Integration",
    description: "API integration support and custom workflow development"
  },
  {
    icon: Zap,
    title: "High-Volume Processing",
    description: "Dedicated processing resources for large-scale operations"
  },
  {
    icon: CreditCard,
    title: "Custom Billing",
    description: "Tailored billing cycles and enterprise procurement support"
  }
]

export default function ServiicePricing() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Flexible Pricing Options
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that works best for your organization. No hidden fees,
            transparent pricing, and the flexibility to scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`h-full rounded-3xl p-8 ${plan.popular
                ? 'bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-700'
                : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700'
                } hover:shadow-lg transition-all duration-300`}>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      <Star className="h-4 w-4 mr-1" />
                      {plan.highlight}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-4 ${plan.popular
                    ? 'bg-primary-100 dark:bg-primary-900/30'
                    : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                      }`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-900 dark:text-white'
                      }`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${plan.popular
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-green-500'
                        }`} />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900'
                    }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing FAQ/Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >


          <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800 mb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Simple, transparent pricing</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Pay only for what you use with no hidden fees or long-term contracts.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-700">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Starter</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">Perfect for small deployments</p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    <li className="flex gap-x-3">✓ REST API access</li>
                    <li className="flex gap-x-3">✓ Basic support</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-primary-600">
                  <h3 className="text-lg font-semibold leading-8 text-primary-600">Professional</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">For growing businesses</p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    <li className="flex gap-x-3">✓ Webhooks & real-time alerts</li>
                    <li className="flex gap-x-3">✓ Priority support</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-700">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Enterprise</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">For large scale deployments</p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    <li className="flex gap-x-3">✓ Custom integrations</li>
                    <li className="flex gap-x-3">✓ Dedicated support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </motion.div>


        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Enterprise Solutions
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need custom solutions, higher volumes, or specialized integration?
              Our enterprise plans are designed for organizations with specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Sales for Enterprise Pricing
            </motion.a>
          </div>
        </motion.div>

        {/* Pricing FAQ/Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Getting Started is Easy
            </h4>
            <p className="text-blue-800 dark:text-blue-200 max-w-3xl mx-auto">
              All plans include unlimited file uploads, any video length processing, and access from any device.
              Contact us to discuss your specific needs and get personalized pricing recommendations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
