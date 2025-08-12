import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const navigation = {
  solutions: [
    { name: 'Traffic Management', href: '/solutions/traffic' },
    { name: 'Security & Access', href: '/solutions/security' },
    { name: 'Smart Parking', href: '/solutions/parking' },
    { name: 'Law Enforcement', href: '/solutions/law-enforcement' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-white">MicroANPR</span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Leading provider of cutting-edge Automatic Number Plate Recognition technology 
                for enterprise security, traffic management, and smart city solutions worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-x-3 text-gray-300">
                <MapPin className="h-5 w-5 flex-none text-gray-400" />
                <span className="text-sm">123 Technology Drive, Suite 100, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center gap-x-3 text-gray-300">
                <Phone className="h-5 w-5 flex-none text-gray-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-x-3 text-gray-300">
                <Mail className="h-5 w-5 flex-none text-gray-400" />
                <span className="text-sm">contact@microanpr.com</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2025 MicroANPR Technologies, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-x-6">
              <div className="text-xs text-gray-400">
                ISO 27001 Certified
              </div>
              <div className="text-xs text-gray-400">
                SOC 2 Type II Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
