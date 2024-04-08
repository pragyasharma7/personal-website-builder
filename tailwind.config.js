/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        bgGray: '#EFEFEF',
        bgNavBar: '#232323',
        border: '#D5D5D5',
        bgHomepage: '#F5F5F5',
        bgCards: '#FFFFFF',
        bgBtn: '#0085FF',
        placeholderText: '#C6C6C6',
        bgIconHover: '#E4E4E4' 
      }
    },
  },
  plugins: [],
  
}

