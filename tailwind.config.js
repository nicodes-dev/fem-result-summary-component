/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'accent-red': 'hsl(0, 100%, 67%)',
        'gradient-red': 'hsl(4, 89%, 65%)',
        'accent-yellow': 'hsl(39, 100%, 56%)',
        'accent-teal': 'hsl(166, 100%, 37%)',
        'primary-blue-200': 'hsl(252, 100%, 67%)',
        'primary-blue-400': 'hsl(241, 81%, 54%)',
        'primary-blue-500': 'hsl(234, 85%, 45%)',
        'gradient-0': 'hsla(241, 72%, 46%, 0)',
        'neutral-100': 'hsl(0, 0%, 100%)',
        'neutral-200': 'hsl(221, 100%, 96%)',
        'neutral-500': 'hsl(241, 100%, 89%)',
        'neutral-700': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
}
