module.exports = {
  content: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
    "./public/**/*.{svg,js}"
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
        'blue-1':   '#02177F',
        'cream-1':  '#FAF7F3',
        'beige-1':  '#DCD5CF',
        'red-1':    '#9E3123',
        'green-1':  '#7E9679',
        'grey-1':   '#707070'
      },
      fontSize: {
        '12px':   '0.75rem',
        '16px':   '1rem',
        '18px':   '1.125rem',
        '21px':   '1.3rem',
        '32px':   '2rem',
        '50px':   '3.125rem',
        '140px':  '8.75rem'
      },
      lineHeight: {
        '115':  '1.15',
        '125':  '1.25',
        '13':   '1.3'
      }

    },
  },
  plugins: [],
}
