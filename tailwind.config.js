/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        moveFromRight: {
          '0%': {
            transform: 'translateX(-100px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        moveFromTop: {
          '0%': {
            transform: 'translateY(-100px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        moveFromBottom: {
          '0%': {
            transform: 'translateY(100px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        moveFromLeft: {
          '0%': {
            transform: 'translateX(100px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        }


      },
      animation: {
        moveFromRight: "moveFromRight 2s ease",
        moveFromTop: "moveFromTop 2s ease 3s",
        moveFromBottom: "moveFromBottom ease",
        moveFromLeft: "moveFromLeft 2s ease",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
