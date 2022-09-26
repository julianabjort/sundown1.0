/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#BA2329",
        "secondary": "#007DDB",
      },
      fontFamily: {
        'helvetica-neue': ['helvetica-neue', 'sans-serif'] 
      },        
    },
  },
  plugins: [],
}
