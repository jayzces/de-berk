/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: 'black',
        white: 'white',
        transparent: 'transparent',
        currentColor: 'currentColor',

        // custom colors
        russet: '#906B3A',
        clay: '#CF946F',
        'soft-peach': '#E9D7C7',
        cream: '#F9F5F2',
        'spring-sage': '#D6E0CB',
        olive: '#939B7B'
      }
    }
  },
  plugins: []
}
