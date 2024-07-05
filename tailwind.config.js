/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'splash-banner': "url('../public/assets/images/splash-banner.jpg')"
      }
    },
  },
  plugins: [],
}

