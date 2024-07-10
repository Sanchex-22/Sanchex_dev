/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'jazzberry-jam-50': '#fef1f9',
          'jazzberry-jam-100': '#fde6f5',
          'jazzberry-jam-200': '#feccec',
          'jazzberry-jam-300': '#fea3db',
          'jazzberry-jam-400': '#fc6ac1',
          'jazzberry-jam-500': '#f63ea7',
          'jazzberry-jam-600': '#e61c86',
          'jazzberry-jam-700': '#c80e69',
          'jazzberry-jam-800': '#a90f59',
          'jazzberry-jam-900': '#8a114b',
          'jazzberry-jam-950': '#550229',
          'custom-black-50': '#f6f6f6',
          'custom-black-100': '#e7e7e7',
          'custom-black-200': '#d1d1d1',
          'custom-black-300': '#b0b0b0',
          'custom-black-400': '#888888',
          'custom-black-500': '#6d6d6d',
          'custom-black-600': '#5d5d5d',
          'custom-black-700': '#4f4f4f',
          'custom-black-800': '#454545',
          'custom-black-900': '#3d3d3d',
          'custom-black-950': '#000000',
      
      },
    },
  },
  plugins: [],
}