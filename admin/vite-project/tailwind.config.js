/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors:{
        // navlink: '#49557e',
        //  tomato: '#ff6347',
        //  headerbtn:'#747474',
        //  explorehead:'#262626',
        //  explorepara:'#808080',
        //  carddesc:'#676767',
        //  footerbg:"#323232",
        //  footertext:"#d9d9d9",
        //  loginbg:"#00000090",
        //  bordercolor:"#c9c9c9",
        //  hrcolor:"#e2e2e2"
      },
      backgroundImage:{
        // 'header-img':"url('/assets/frontend_assets/header_img.png')",
      },
      animation: {
        fadein: 'fadein 3s',
        fadein1:'fadein 1s'
      },
      keyframes:{
        fadein:{
          '0%':{
            opacity: '0'
          },
          '100%':{
            opacity: '1'
          },
      },
    }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',      /* Firefox */
        },
      }, ['responsive', 'hover']);
    },
  ],
}

