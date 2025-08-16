# Cookie Banner Implementation

This document explains the cookie banner implementation for MicroANPR website.

## Overview

The cookie banner system provides UK GDPR-compliant cookie consent management with the following features:

- **4 Cookie Categories**: Essential, Functional, Analytics, Marketing
- **Granular Control**: Users can enable/disable individual categories
- **Persistent Storage**: Preferences are saved and remembered
- **Theme Integration**: Theme preferences respect cookie consent
- **Analytics Ready**: Easy integration with Google Analytics and other services

## Components

### CookieBanner.jsx
Main cookie consent banner component with:
- Initial consent banner
- Detailed settings modal
- Category-specific toggles
- Accept all/Essential only shortcuts

### cookies.js (utils)
Utility functions for:
- Reading/writing cookie preferences
- Checking consent for specific categories
- Theme management with consent awareness
- Analytics/marketing initialization helpers

### CookieStatus.jsx
Development component showing current consent status (optional)

## Usage

### Basic Integration
The cookie banner is automatically included in `Layout.astro` and will show on first visit.

### Checking Consent in Components
```javascript
import { hasConsentForCategory } from '../utils/cookies.js'

// Check if analytics cookies are allowed
if (hasConsentForCategory('analytics')) {
  // Initialize Google Analytics
  initializeGoogleAnalytics()
}
```

### Theme Integration
The `ThemeToggle` component now respects cookie consent:
- Theme changes are applied immediately
- Preferences are only saved if functional cookies are allowed
- Shows warning if trying to save without consent

### Adding Analytics

1. **Google Analytics Example**:
```javascript
// In cookies.js, update initializeAnalytics function:
export const initializeAnalytics = () => {
  if (!hasConsentForCategory('analytics')) return
  
  // Load Google Analytics
  const script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
  script.async = true
  document.head.appendChild(script)
  
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', 'GA_MEASUREMENT_ID', {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  })
}
```

2. **Call in Layout.astro**:
```astro
<script>
  import { initializeAnalytics } from '../utils/cookies.js'
  
  // Initialize analytics if consent is given
  document.addEventListener('DOMContentLoaded', () => {
    initializeAnalytics()
  })
  
  // Re-initialize when consent changes
  window.addEventListener('cookieConsentChanged', () => {
    initializeAnalytics()
  })
</script>
```

## Legal Compliance

### UK GDPR Requirements ✅
- **Explicit consent** for non-essential cookies
- **Granular control** over cookie categories
- **Clear information** about what each cookie does
- **Easy withdrawal** of consent
- **Documentation** in cookie policy

### Cookie Categories

1. **Essential** (Always allowed)
   - Session management
   - Security tokens
   - Load balancing

2. **Functional** (User choice)
   - Theme preferences
   - Language settings
   - Accessibility options

3. **Analytics** (User choice)
   - Google Analytics
   - Performance monitoring
   - Error tracking

4. **Marketing** (User choice)
   - Social media pixels
   - Advertising cookies
   - Conversion tracking

## Cookie Policy Page

Located at `/privacy` with comprehensive information about:
- What cookies are and how we use them
- Detailed descriptions of each category
- How to manage preferences
- Contact information
- Reset preferences button

## Development

### Testing Consent States
- Use browser dev tools to clear `localStorage`
- Visit site to see initial banner
- Test different consent combinations
- Verify theme behavior with/without functional cookies

### Development Cookie Status
Add to any page for development:
```astro
---
import { DevCookieStatus } from '../components/CookieStatus.jsx'
---

<DevCookieStatus client:load />
```

Shows current consent status in bottom-left corner (dev mode only).

## Customization

### Styling
The banner uses Tailwind classes and supports dark mode. Modify colors in `CookieBanner.jsx`:

```javascript
// Change primary color from blue to your brand color
className="bg-blue-600 hover:bg-blue-700" // Primary buttons
className="text-blue-600 dark:text-blue-400" // Links and accents
```

### Cookie Categories
Modify `cookieCategories` object in `CookieBanner.jsx` to:
- Add/remove categories
- Change descriptions
- Update cookie lists
- Modify icons

### Integration with Analytics
Update the utility functions in `cookies.js` to integrate with your specific analytics platform.

## Browser Compatibility

- Modern browsers with localStorage support
- Graceful degradation for older browsers
- Works with disabled JavaScript (falls back to system theme)

## Performance

- Lightweight implementation (~15KB gzipped)
- No external dependencies beyond React and Lucide icons
- Efficient localStorage operations
- Minimal runtime impact
