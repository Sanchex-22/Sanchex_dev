/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
        'chocolate-50': '#fefaec',
        'chocolate-100': '#fbf1ca',
        'chocolate-200': '#f8e28f',
        'chocolate-300': '#f4ce55',
        'chocolate-400': '#f1ba2e',
        'chocolate-500': '#ea9a16',
        'chocolate-600': '#cf7510',
        'chocolate-700': '#ac5311',
        'chocolate-800': '#8c4114',
        'chocolate-900': '#733514',
        'chocolate-950': '#421b06',
        'verde-50': '#edfcf4',
        'verde-100': '#d3f8e2',
        'verde-200': '#aaf0c9',
        'verde-300': '#73e2ac',
        'verde-400': '#3acd89',
        'verde-500': '#1acd81',
        'verde-600': '#0b905b',
        'verde-700': '#09734b',
        'verde-800': '#095c3c',
        'verde-900': '#094b34',
        'verde-950': '#042a1d',
    },
    
    extend: {},
  },
  plugins: [],
}