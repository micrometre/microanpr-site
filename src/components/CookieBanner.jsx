import { useState, useEffect } from 'react'
import { X, Settings, Cookie, Shield, BarChart3, Users } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'microanpr-cookie-consent'

const cookieCategories = {
  essential: {
    name: 'Essential',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    icon: Shield,
    required: true,
    cookies: [
      'Session cookies for security',
      'CSRF protection tokens',
      'Load balancing cookies'
    ]
  },
  functional: {
    name: 'Functional', 
    description: 'These cookies enable enhanced functionality and personalization, such as theme preferences.',
    icon: Settings,
    required: false,
    cookies: [
      'Theme preferences (dark/light mode)',
      'Language preferences',
      'Accessibility settings'
    ]
  },
  analytics: {
    name: 'Analytics',
    description: 'These cookies help us understand how visitors interact with our website.',
    icon: BarChart3,
    required: false,
    cookies: [
      'Google Analytics tracking',
      'Performance monitoring',
      'Error tracking'
    ]
  },
  marketing: {
    name: 'Marketing',
    description: 'These cookies are used to deliver personalized advertisements and track campaign effectiveness.',
    icon: Users,
    required: false,
    cookies: [
      'Social media tracking pixels',
      'Advertising cookies',
      'Conversion tracking'
    ]
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
    }
  }, [])

  const savePreferences = (prefs) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      ...prefs,
      timestamp: Date.now(),
      version: '1.0'
    }))
    
    // Apply preferences
    if (prefs.functional) {
      // Enable theme storage and other functional cookies
      document.documentElement.setAttribute('data-functional-cookies', 'enabled')
    } else {
      // Disable functional cookies, clear existing theme storage
      localStorage.removeItem('theme')
      document.documentElement.removeAttribute('data-functional-cookies')
    }

    if (prefs.analytics) {
      // Enable analytics (you would initialize GA here)
      console.log('Analytics cookies enabled')
    }

    if (prefs.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled')
    }

    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    setPreferences(essentialOnly)
    savePreferences(essentialOnly)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  const handleCategoryToggle = (category) => {
    if (category === 'essential') return // Cannot disable essential
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  if (!mounted) return null

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            {!showSettings ? (
              // Main Banner
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50">
                      <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Cookie Preferences
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                      We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                      <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        Cookie Policy
                      </a>.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={acceptAll}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                      >
                        Accept All
                      </button>
                      <button
                        onClick={acceptEssential}
                        className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                      >
                        Essential Only
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div>
                {/* Header */}
                <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="max-h-96 overflow-y-auto">
                  {Object.entries(cookieCategories).map(([key, category]) => {
                    const Icon = category.icon
                    const isEnabled = preferences[key]
                    
                    return (
                      <div key={key} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                                category.required 
                                  ? 'bg-blue-100 dark:bg-blue-900/50' 
                                  : isEnabled 
                                    ? 'bg-green-100 dark:bg-green-900/50' 
                                    : 'bg-gray-100 dark:bg-gray-700'
                              }`}>
                                <Icon className={`h-5 w-5 ${
                                  category.required 
                                    ? 'text-blue-600 dark:text-blue-400' 
                                    : isEnabled 
                                      ? 'text-green-600 dark:text-green-400' 
                                      : 'text-gray-400 dark:text-gray-500'
                                }`} />
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-base font-medium text-gray-900 dark:text-white">
                                  {category.name}
                                  {category.required && (
                                    <span className="ml-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
                                      Required
                                    </span>
                                  )}
                                </h4>
                                
                                {!category.required && (
                                  <button
                                    onClick={() => handleCategoryToggle(key)}
                                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
                                      isEnabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                                    }`}
                                  >
                                    <span
                                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                        isEnabled ? 'translate-x-5' : 'translate-x-0'
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>
                              
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                {category.description}
                              </p>
                              
                              <div className="space-y-1">
                                {category.cookies.map((cookie, index) => (
                                  <p key={index} className="text-xs text-gray-500 dark:text-gray-400">
                                    • {cookie}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Footer */}
                <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row justify-between gap-3">
                    <button
                      onClick={acceptEssential}
                      className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Reject All
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowSettings(false)}
                        className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveCustomPreferences}
                        className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
