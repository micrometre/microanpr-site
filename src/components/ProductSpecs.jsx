import { motion } from 'framer-motion'
import { 
  FileVideo, 
  Image, 
  Database, 
  Clock, 
  Monitor, 
  Smartphone,
  CheckCircle,
  AlertCircle 
} from 'lucide-react'

const specifications = [
  {
    category: "Supported File Types",
    icon: FileVideo,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    specs: [
      { label: "Video Formats", value: "MP4, AVI, MOV, WMV, FLV", icon: FileVideo },
      { label: "Image Formats", value: "JPEG, PNG, TIFF, BMP", icon: Image },
      { label: "File Size Limit", value: "Unlimited", icon: Database },
      { label: "Video Length", value: "Any duration", icon: Clock }
    ]
  },
  {
    category: "Platform Compatibility",
    icon: Monitor,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    specs: [
      { label: "Web Browsers", value: "Chrome, Firefox, Safari, Edge", icon: Monitor },
      { label: "Mobile Devices", value: "iOS, Android compatible", icon: Smartphone },
      { label: "Operating Systems", value: "Windows, macOS, Linux", icon: Monitor },
      { label: "Internet Required", value: "Broadband connection recommended", icon: AlertCircle }
    ]
  },
  {
    category: "Processing & Output",
    icon: Database,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    specs: [
      { label: "Recognition Accuracy", value: "High precision AI algorithms", icon: CheckCircle },
      { label: "Output Format", value: "CSV with timestamps & coordinates", icon: Database },
      { label: "Processing Time", value: "Depends on file size & complexity", icon: Clock },
      { label: "Data Privacy", value: "Only license plates captured", icon: CheckCircle }
    ]
  }
]

const techSpecs = [
  {
    feature: "Recognition Technology",
    description: "Advanced AI-powered optical character recognition specifically optimized for license plates"
  },
  {
    feature: "Multi-Language Support",
    description: "Supports license plates from multiple countries and regions with different formats"
  },
  {
    feature: "Batch Processing",
    description: "Process multiple files simultaneously for increased efficiency and throughput"
  },
  {
    feature: "Cloud Infrastructure",
    description: "Scalable cloud-based processing ensures consistent performance and availability"
  },
  {
    feature: "Secure Processing",
    description: "All uploads are processed securely with data encryption and privacy protection"
  },
  {
    feature: "API Integration",
    description: "RESTful API available for developers to integrate ANPR into custom applications"
  }
]

export default function ProductSpecs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Detailed specifications and requirements for MicroANPR service to ensure 
            optimal performance and compatibility with your needs.
          </p>
        </motion.div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {specifications.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`h-10 w-10 rounded-lg ${category.bgColor} flex items-center justify-center mr-3`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Specs List */}
              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-start">
                    <div className={`h-6 w-6 rounded ${category.bgColor} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                      <spec.icon className={`h-3 w-3 ${category.color}`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {spec.label}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Features & Capabilities
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              MicroANPR leverages cutting-edge technology to deliver reliable, accurate, 
              and scalable automatic number plate recognition services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start group"
              >
                <div className="h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <CheckCircle className="h-3 w-3 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {spec.feature}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Requirements Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
              <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                System Requirements
              </span>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              For optimal performance, we recommend a stable broadband internet connection 
              and a modern web browser. Processing times may vary based on file size, 
              video length, and complexity of the footage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
