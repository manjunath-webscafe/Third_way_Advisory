/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1160px',
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          50: '#5C7699',
          100: '#4C6789',
          200: '#3A5679',
          300: '#284469',
          400: '#163259',
          500: '#0A192F',
          600: '#081527',
          700: '#06111F',
          800: '#040D18',
          900: '#020810'
        },
        gold: {
          DEFAULT: '#C5A880',
          50: '#F3ECE1',
          100: '#EBE0CE',
          200: '#DFCBAC',
          300: '#D3B78B',
          400: '#C5A880',
          500: '#B0916A',
          600: '#93765350'
        },
        platinum: '#F4F6F9',
        charcoal: '#222222',
        ash: '#6B7280'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.28em'
      },
      maxWidth: {
        prose2: '68ch'
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,25,47,0.04), 0 12px 32px -12px rgba(10,25,47,0.14)',
        cardHover: '0 8px 16px rgba(10,25,47,0.06), 0 28px 48px -16px rgba(10,25,47,0.22)'
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeIn: 'fadeIn 1.1s ease forwards'
      }
    }
  },
  plugins: []
}
