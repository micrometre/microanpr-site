import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getThemePreference, setThemePreference, hasConsentForCategory, onConsentChange } from '../utils/cookies.js';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [showConsentWarning, setShowConsentWarning] = useState(false);

  useEffect(() => {
    // Initialize theme based on cookie consent
    const theme = getThemePreference();
    setIsDark(theme === 'dark');
    
    // Listen for consent changes
    const cleanup = onConsentChange(() => {
      // Re-evaluate theme when consent changes
      const newTheme = getThemePreference();
      setIsDark(newTheme === 'dark');
    });

    return cleanup;
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    
    // Check if functional cookies are allowed
    if (!hasConsentForCategory('functional')) {
      // Show warning that preference won't be saved
      setShowConsentWarning(true);
      setTimeout(() => setShowConsentWarning(false), 3000);
    }
    
    // Always apply the theme (even if we can't save it)
    setIsDark(newTheme === 'dark');
    setThemePreference(newTheme);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
      
      {/* Consent Warning Tooltip */}
      {showConsentWarning && (
        <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg shadow-lg z-50">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-1.5"></div>
            <div>
              <p className="text-xs text-yellow-800 dark:text-yellow-200 font-medium">
                Theme preference not saved
              </p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                Enable functional cookies to save your theme preference.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}