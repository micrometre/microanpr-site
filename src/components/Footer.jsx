import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const navigation = {
  solutions: [
    { name: 'Smart Parking', href: '/' },
    { name: 'Traffic Management', href: '/' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'SaaS Solutions', href: '/products/saas' },
    { name: 'Hardware ANPR devices and systems', href: '/products/hardware' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Terms of Use', href: '/terms-of-use' },
    { name: 'Cookie Policy', href: '/privacy' },
    { name: 'Security', href: '/security' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/micrometre',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column - Brand and Contact Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold text-white">MicroANPR</span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Leading provider of cutting-edge Automatic Number Plate Recognition technology 
                for enterprise security, traffic management, and smart city solutions worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">info@microanpr.com</span>
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

          {/* Second Column - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Third Column - Legal and Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2025 MicroANPR Technologies, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}