/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
  extend: {
    animation: {
      fadeIn: 'fadeIn 0.3s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0, transform: 'translateY(4px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
},
  plugins: [],
}
