/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      backgroundColor:{
        "primary": "#1b1b1b",
        "sideBarContentBg": "#1c1b23",
      },
      colors: {
        "menuContent": "#8B8A91"
      },
      // backgroundImage: {
      //   "namePhotoBg": "url('/public/489068.jpg')"
      // }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
