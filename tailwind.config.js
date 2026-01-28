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
        primary: {
          DEFAULT: '#10B981',
          dark: '#047857',
          light: '#D1FAE5',
          pale: '#ECFDF5',
        },
        accent: {
          gold: '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      animation: {
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-50px, -50px) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
}
