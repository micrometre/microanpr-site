import { motion } from 'framer-motion'
import { Users, Award, Globe, Zap, Target, Heart, Building2 } from 'lucide-react'

const values = [
  {
    name: 'Innovation',
    description: 'We continuously push the boundaries of ANPR technology to deliver cutting-edge solutions.',
    icon: Zap,
  },
  {
    name: 'Reliability',
    description: 'Our systems are built for 24/7 operation with enterprise-grade reliability and uptime.',
    icon: Award,
  },
  {
    name: 'Global Reach',
    description: 'Supporting organizations worldwide with local expertise and global best practices.',
    icon: Globe,
  },
  {
    name: 'Partnership',
    description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
    icon: Users,
  },
]

const stats = [
  { name: 'Years of Experience', value: '15+', icon: Target },
  { name: 'Countries Supported', value: '50+', icon: Globe },
  { name: 'Satisfied Clients', value: '500+', icon: Users },
  { name: 'Recognition Rate', value: '99.9%', icon: Award },
]

export default function AboutContent() {
  return (
    <>
      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Empowering organizations with intelligent recognition technology
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Founded in 2010, MicroANPR has been at the forefront of computer vision and 
              artificial intelligence, specifically focused on Automatic Number Plate Recognition. 
              Our mission is to provide the most accurate, reliable, and scalable ANPR solutions 
              that help organizations enhance security, optimize operations, and create smarter environments.
            </motion.p>
          </div>

          {/* Stats Section */}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              What drives us every day
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Our core values guide everything we do, from product development to customer support.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 group"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500 transition-all"
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:pr-8 lg:pt-4"
            >
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Our Story</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Building the future of ANPR
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  What started as a vision to make license plate recognition more accessible 
                  has grown into a comprehensive platform serving organizations worldwide. 
                  Today, MicroANPR powers critical infrastructure from parking systems 
                  to law enforcement operations.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <Heart className="absolute left-0 top-1 h-5 w-5 text-primary-600" />
                      Customer-First Approach.
                    </dt>
                    <dd className="inline"> Every decision we make is guided by what's best for our customers and their end users.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <Zap className="absolute left-0 top-1 h-5 w-5 text-primary-600" />
                      Continuous Innovation.
                    </dt>
                    <dd className="inline"> We invest heavily in R&D to stay ahead of industry trends and technological advances.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <Globe className="absolute left-0 top-1 h-5 w-5 text-primary-600" />
                      Global Impact.
                    </dt>
                    <dd className="inline"> Our solutions help create safer, more efficient environments for communities worldwide.</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="relative h-80 w-80 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center">
                  <Building2 className="h-32 w-32 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-primary-600 flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
