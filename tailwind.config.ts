import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef1ff',
          100: '#e0e5ff',
          200: '#c7cfff',
          300: '#a5afff',
          400: '#8185fd',
          500: '#4A6CF7',
          600: '#3a55e0',
          700: '#2f43c4',
          800: '#28399f',
          900: '#26347d',
          950: '#171f4e',
        },
        navy: {
          900: '#0a0e1a',
          800: '#0f1527',
          700: '#151d35',
          600: '#1c2744',
        }
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
        snug: '-0.02em',
      },
      animation: {
        'ticker': 'ticker 25s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.44, 0, 0.56, 1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 0 50px 5px rgba(0,0,0,0.08)',
        'card-hover': '0 0 80px 10px rgba(74,108,247,0.15)',
        'glow': '0 0 60px 20px rgba(74,108,247,0.25)',
      }
    },
  },
  plugins: [],
}
export default config
