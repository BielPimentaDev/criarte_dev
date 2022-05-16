module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandBlue: {
          500: '#A1D1FF'
        },
        brandOrange:{
          500: '#FC8763'
        },
        brandPurple:{
          500: '#763A7A'
        },
        brandGreen:{
          500: '#ACFFC3'
        },
        brandRed:{
          500: '#FF8080'
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
],
}
