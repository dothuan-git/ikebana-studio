/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          sand: '#F5F1E8',
          bamboo: '#8B9D83',
          clay: '#C9ADA7',
          charcoal: '#4A4A48',
        },
        accent: {
          sakura: '#FADADD',
          matcha: '#9BB89F',
          indigo: '#4A5D7C',
        },
        neutral: {
          white: '#FAFAFA',
          lightGray: '#E8E8E8',
          mediumGray: '#B8B8B8',
          darkGray: '#5A5A5A',
        },
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      borderRadius: {
        'zen': '12px',
      },
      boxShadow: {
        'zen': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'zen-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
