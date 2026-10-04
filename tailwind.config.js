/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf6f2',
          100: '#f3e9df',
          200: '#e5d0b8',
          300: '#d4ae86',
          400: '#c08858',
          500: '#b06c3c',
          600: '#9a552c',
          700: '#7d4224',
          800: '#653620',
          900: '#542e1f',
          950: '#2f1810',
        },
        cream: '#faf6f0',
        charcoal: '#1c1815',
        caramel: '#c08552',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}