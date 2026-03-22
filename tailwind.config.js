/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cell-fill': 'cellFill 0.2s ease-out forwards',
        'pulse-win': 'pulseWin 1.5s ease-in-out infinite',
      },
      keyframes: {
        cellFill: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseWin: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px currentColor' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px currentColor' },
        },
      },
    },
  },
  plugins: [],
}
