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
        background: '#0a0a0a',
        foreground: '#fafafa',
        accent: '#f59e0b',
        'accent-dark': '#d97706',
        'muted-bg': '#1a1a1a',
        'muted-text': '#a0a0a0',
        'border-color': '#2a2a2a',
      },
      fontFamily: {
        sans: ['Sohne', 'system-ui', 'sans-serif'],
        display: ['Space Mono', 'monospace'],
      },
      spacing: {
        '1.5': '0.375rem',
      },
    },
  },
  plugins: [],
}
