module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bg.jpg')",
      },
      colors: {
        'text-input': '#202327',
        'default-color': '#15202B',
      },
      width: {
        68: '68px',
        88: '88px',
        275: '275px',
        290: '290px',
        350: '350px',
        600: '600px',
      },
    },
  },
  plugins: [],
}
