module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      'off-white': '#E6E6E6',
      'off-white-dark': '#D9D9D9',
      'dark-blue': "#364156",
      'charcoal': "#212D40",
      'charcoal-a': 'rgba(33, 45, 64, .5)',
      'crimson': "#D66853",
      'cream': "#F1F1F1",
    },
    extend: {
      fontFamily: {
        'serif': ['var(--font-helvetica)', 'arial'],
        'serif-bold': ['var(--font-helvetica-bold)', 'arial'],
      }, 
      fontSize: {
        'h1': '4.5rem',
        'h1m': '3rem',
        'h2': '3rem',
        'h2m': '2.5rem',
        'h3': '2.25rem',
        'h3m': '2rem',
        'b1': '2.25rem',
        'b1m': '2rem',
        'b2': '1.25rem',
        'b2m': '1.15rem',
        'b3': '1rem',
        'b3m': '.8rem',
      },
     
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
