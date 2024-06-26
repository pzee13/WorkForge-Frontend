/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            customGreen: '#064749', // Add your custom color

            alternate:'#003e29',
               
            secondary: "#86efac",
                      
            accent: "#dcfce1",
                      
            neutral: "#14030c",
                      
            base: "#f8fef7",
                      
            info: "#22c55e",
                      
            success: "#166534",
                      
            warning: "#bf1d00",
                      
            error: "#eb004b",

            secondGreen:"#49735A"
    },
    spacing: {
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
    },
    // fontFamily: {
    //   'adallyn': ['"Adallyn Serif"', 'serif'],
    // },
    // fontFamily: {
    //   custom: ['CustomFont', 'sans-serif'],
    // },
    // letterSpacing: {
    //   tighter: '-.05em',
    //   tight: '-.025em',
    //   normal: '0',
    //   wide: '.025em',
    //   wider: '.05em',
    //   widest: '.1em',
    // },
  },
  },
  plugins: [],
}