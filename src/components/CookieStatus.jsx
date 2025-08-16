import { useState, useEffect } from 'react'
import { getCookieConsent, clearCookieConsent } from '../utils/cookies.js'
import { Settings, RefreshCcw } from 'lucide-react'

export default function CookieStatus() {
  const [consent, setConsent] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    updateConsent()
    
    // Listen for consent changes
    const handleConsentChange = () => updateConsent()
    window.addEventListener('cookieConsentChanged', handleConsentChange)
    
    return () => window.removeEventListener('cookieConsentChanged', handleConsentChange)
  }, [])

  const updateConsent = () => {
    setConsent(getCookieConsent())
  }

  const resetConsent = () => {
    clearCookieConsent()
    location.reload()
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 z-30 max-w-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Settings className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Cookie Status
          </span>
        </div>
        
        {consent ? (
          <div className="space-y-2">
            <div className="text-xs text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Essential:</span>
                <span className="text-green-600 dark:text-green-400">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Functional:</span>
                <span className={consent.functional ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}>
                  {consent.functional ? '✓' : '✗'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Analytics:</span>
                <span className={consent.analytics ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}>
                  {consent.analytics ? '✓' : '✗'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Marketing:</span>
                <span className={consent.marketing ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}>
                  {consent.marketing ? '✓' : '✗'}
                </span>
              </div>
            </div>
            
            <button
              onClick={resetConsent}
              className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <RefreshCcw className="h-3 w-3" />
              Reset preferences
            </button>
          </div>
        ) : (
          <div className="text-xs text-gray-600 dark:text-gray-300">
            No consent given
          </div>
        )}
      </div>
    </div>
  )
}

// Optional: Only show in development mode
export function DevCookieStatus() {
  const isDev = import.meta.env.DEV
  return isDev ? <CookieStatus /> : null
}
