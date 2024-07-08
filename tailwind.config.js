/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'splash-banner': "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/assets/images/splash-banner.jpg')",
        'icon1': "url('../public/assets/images/o1.png')",
        'icon2': "url('../public/assets/images/o2.png')",
        'icon3': "url('../public/assets/images/o3.png')"
      },
      boxShadow: {
        'shadowCard': '0 20px 60px 0px rgba(246, 33, 75, 0.3)',
      }
    },
  },
  plugins: [],
}

