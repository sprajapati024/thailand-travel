/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        foreground: '#1E293B',
        accent: '#3B82F6',
        'accent-green': '#10B981',
        'accent-purple': '#8B5CF6',
        'muted-bg': '#F1F5F9',
        'muted-text': '#64748B',
        'border-color': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '1.5': '0.375rem',
      },
    },
  },
  plugins: [],
}
