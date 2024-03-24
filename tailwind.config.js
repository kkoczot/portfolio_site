/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      poppins: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: "450px",
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: "#050816",      /* #050816 */
        secondary: "#aaa6c3",    /* #aaa6c3 */
        tertiary: "#151030",     /* #151030 */
        accent: '#B809C3',       /* #B809C3 */
        "black-100": "#100d25",  /* #100d25 */
        "white-100": "#f3f3f3",  /* #f3f3f3 */
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        about: "url('./assets/about.jpg')",
      },
    },
  },
  plugins: [],
};