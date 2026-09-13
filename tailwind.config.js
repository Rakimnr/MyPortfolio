/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#070B2A',
        'dark-secondary': '#0D123D',
        'brand-purple': '#7C3AED',
        'brand-light-purple': '#8B5CF6',
        'brand-blue': '#3B82F6',
        'brand-text': '#16172B',
        'brand-muted': '#6B7280',
        'light-surface': '#F7F7FC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
