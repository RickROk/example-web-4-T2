/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        themeBackground: 'var(--background)',
        themeText: 'var(--text)',
        primary: {
          50: '#eff6ff',
          100: '#E1EFFE',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1E429F',
          900: '#1e3a8a',
          light: '#E1EFFE',
          dark: '#1E429F'
        }
        // primary: {
        //   50: "var(--primary-50)",
        //   100: "var(--primary-100)",
        //   200: "var(--primary-200)",
        //   300: "var(--primary-300)",
        //   400: "var(--primary-400)",
        //   500: "var(--primary-500)",
        //   600: "var(--primary-600)",
        //   700: "var(--primary-700)",
        //   800: "var(--primary-800)",
        //   900: "var(--primary-900)",
        //   light: "#E1EFFE",
        //   dark: "#1E429F",
        // },
      }
    }
  },
  plugins: []
}
