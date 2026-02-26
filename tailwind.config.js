/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0faf4',
          100: '#dcf5e7',
          200: '#b9eacf',
          300: '#85d6ad',
          400: '#4eba85',
          500: '#2a9d65',
          600: '#1d7f50',
          700: '#196641',
          800: '#185136',
          900: '#14422d',
          950: '#0a2519',
        },
        sage: '#a8c5a0',
        cream: '#f8f5f0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
