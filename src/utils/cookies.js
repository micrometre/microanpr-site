// Cookie consent utilities
export const COOKIE_CONSENT_KEY = 'microanpr-cookie-consent'

export const getCookieConsent = () => {
  if (typeof window === 'undefined') return null
  
  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    return consent ? JSON.parse(consent) : null
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

export const hasCookieConsent = () => {
  return getCookieConsent() !== null
}

export const hasConsentForCategory = (category) => {
  const consent = getCookieConsent()
  return consent ? consent[category] === true : false
}

export const setCookieConsent = (preferences) => {
  if (typeof window === 'undefined') return
  
  try {
    const consentData = {
      ...preferences,
      timestamp: Date.now(),
      version: '1.0'
    }
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData))
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
      detail: consentData
    }))
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

export const clearCookieConsent = () => {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem(COOKIE_CONSENT_KEY)
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
    detail: null
  }))
}

// Enhanced theme management that respects cookie consent
export const getThemePreference = () => {
  if (typeof window === 'undefined') return 'light'
  
  // Check if functional cookies are allowed
  if (!hasConsentForCategory('functional')) {
    // Fall back to system preference if no consent for functional cookies
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  
  // Return saved theme if functional cookies are allowed
  return localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

export const setThemePreference = (theme) => {
  if (typeof window === 'undefined') return
  
  // Only save to localStorage if functional cookies are allowed
  if (hasConsentForCategory('functional')) {
    localStorage.setItem('theme', theme)
  }
  
  // Always apply the theme to the DOM
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Analytics helper functions
export const initializeAnalytics = () => {
  if (!hasConsentForCategory('analytics')) return
  
  // Initialize Google Analytics or other analytics here
  console.log('Analytics initialized')
  
  // Example Google Analytics initialization:
  /*
  window.gtag = window.gtag || function() { 
    (window.gtag.q = window.gtag.q || []).push(arguments) 
  }
  window.gtag('js', new Date())
  window.gtag('config', 'GA_MEASUREMENT_ID', {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  })
  */
}

export const trackEvent = (eventName, parameters = {}) => {
  if (!hasConsentForCategory('analytics')) return
  
  // Track event with analytics
  console.log('Tracking event:', eventName, parameters)
  
  // Example Google Analytics event tracking:
  /*
  window.gtag('event', eventName, parameters)
  */
}

// Marketing cookies helper functions
export const initializeMarketing = () => {
  if (!hasConsentForCategory('marketing')) return
  
  console.log('Marketing cookies initialized')
  
  // Initialize marketing pixels, social media tracking, etc.
}

// Cookie consent change listener
export const onConsentChange = (callback) => {
  if (typeof window === 'undefined') return
  
  const handler = (event) => callback(event.detail)
  window.addEventListener('cookieConsentChanged', handler)
  
  // Return cleanup function
  return () => window.removeEventListener('cookieConsentChanged', handler)
}
