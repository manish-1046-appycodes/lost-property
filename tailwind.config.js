module.exports = {
  content: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '45px'
      }
    },

    fontFamily: {
      'sans': ['Object Sans', 'sans-serif'],
      'display': ['GrandSlang', 'serif']
    },
    extend: {

      colors: {
        'blue-1': '#02177F'
      },
      fontSize: {
        '18px': '1.125rem',
        '21px': '1.3rem',
        '32px': '2rem'
      },
      lineHeight: {
        '1.3': '1.3'
      }

    },
  },
  plugins: [],
}
