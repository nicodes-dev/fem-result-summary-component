/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontSize: {
        base: [
          '1rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
        md: [
          '1.125rem',
          {
            lineHeight: '1.4375rem',
          },
        ],
      },
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
    screens: {
      sm: '500px',
      // => @media (min-width: 640px) { ... }
      md: '700px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      'min-screen': {
        raw: '(min-width: 700px) and (min-height: 630px)',
      },
    },
  },
  plugins: [],
}
