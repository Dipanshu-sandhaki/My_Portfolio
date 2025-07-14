/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowGlow: 'glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
          },
          '50%': {
            textShadow: '0 0 15px #00FFFF, 0 0 30px #00FFFF, 0 0 45px #00FFFF',
          },
          '100%': {
            textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
          },
        },
      },
    },
  },
  plugins: [],
}
