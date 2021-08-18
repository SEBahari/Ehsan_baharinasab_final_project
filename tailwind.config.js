module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px'
      }
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
      margin: ['hover'],
      animation: ['focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
