/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // rgb
        // violet
        v01: 'rgb(var(--violet-primary))',
        v02: 'rgb(var(--violet-secondary))',
        v03: 'rgb(var(--violet-tertiary))',
        v04: 'rgb(var(--violet-quaternary))',
        v05: 'rgb(var(--violet-quintenary))',
        v06: 'rgb(var(--violet-sextenary))',

        // yellow
        y01: 'rgb(var(--yellow-primary))',
        y02: 'rgb(var(--yellow-secondary))',
        y03: 'rgb(var(--yellow-tertiary))',
        y04: 'rgb(var(--yellow-quaternary))',
        v05: 'rgb(var(--yellow-quintenary))',
        v06: 'rgb(var(--yellow-sextenary))',

        // rgba
        'rgba-violet': 'rgb(var(--violet-primary), 5)',
        'rgba-yellow': 'rgb(var(--yellow-secondary), 5)',

        // gradient
        // violet
        'violetGradient': `linear-gradient(to right, rgb(var(--violet-primary)), rgb(var(--violet-secondary)))`,
        'violetGradient2': `linear-gradient(to right, rgb(var(--violet-quintenary)), rgb(var(--violet-sextenary)))`,
        // yellow
        'yellowGradient': `linear-gradient(to right, rgb(var(--yellow-primary)), rgb(var(--yellow-secondary)))`,
        'yellowGradient2': `linear-gradient(to right, rgb(var(--yellow-quintenary)), rgb(var(--yellow-sextenary)))`,

        overlay: 'rgba(0, 0, 0 , 1)',

        hover: {
          btnViolet: 'rgb(var(--violet-secundary))',
          btnViolet2: 'rgb(var(--violet-secondary))',

          btnYellow: 'rgb(var(--yellow-secundary))',
          btnYellow2: 'rgb(var(--yellow-secundary))'
        },

        background: {
          violet: 'rgb(var(--violet-primary))',
          violetDark: 'rgb(var(--violet-sextenary))',
          yellow: 'rgb(var(--yellow-primary))',
          yellowDark: 'rgb(var(--yellow-sextenary))',
          dark: '#111111',
          light: '#F1F1F1',
          gray: '#B3B3B3',
        },

        backgroundImage: {
          'image1': "url('/background/01.png')",
          'image2': "url('/background/02.png')",
          'image3': "url('/background/03.png')",
          'image4': "url('/background/04.png')",
          'image5': "url('/background/05.png')",
        },

        grayscale: {
          c0: '#FFFFFF',
          c1: '#F7F7F7',
          c2: '#E7E7E7',
          c3: '#DEDEDE',
          c4: '#CCCCCC',
          c5: '#B3B3B3',
          c6: '#9C9C9C',
          c7: '#707070',
          c8: '#595959',
          c9: '#404040',
          c10: '#2E2E2E',
          c11: '#111111',
          c12: '#000000',
        },
      },
      margin: {
        '12px': '12px',
        '60px': '60px',
      },
      fontSize: {
        sm: '22px',
        normal: '26px',
        md: '32px',
        lg: '32px',
        xl: '36px',
        '2xl': '48px',
        '3xl': '48px',
        '4xl': '48px',
      },
      lineHeight: {
        sm: '22px',
        normal: '26px',
        md: '32px',
        lg: '32px',
        xl: '36px',
        '2xl': '48px',
        '3xl': '48px',
        '4xl': '48px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        loader: 'loader 1s linear infinite',
        toRight: 'toRight .2s ease forwards',
      },
      keyframes: {
        loader: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        toRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(8px)' },
        },
      },
      boxShadow: {
        box: '4px 1px 12px 0px rgba(0, 0, 0, .25)',
        box2: '4px 1px 12px 0px rgba(0, 0, 0, 5)',
        light: '4px 1px 12px 0px rgba(255, 255, 255, .25)',
        light2: '4px 1px 12px 0px rgba(255, 255, 255, 5)',
      },
    },
  },
  plugins: [],
};