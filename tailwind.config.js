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
        '21px': ['1.3rem', '1.3']
      },
      lineHeight: {
        '1.3': '1.3'
      }

    },
  },
  plugins: [],
}
