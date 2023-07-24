/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn': '#FFDB00', 
        'text':'#515151',
      },
    },
  },
  plugins: [],
};
