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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFD93D", // Vibrant Yellow
        secondary: "#6BCB77", // Vibrant Green
        dark: {
          900: "#1a202c", // Very Dark Slate
          800: "#2d3748", // Dark Slate
          700: "#4a5568", // Slate
          600: "#718096", // Lighter Slate
          card: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
        light: {
          100: "#f7fafc",
          200: "#edf2f7",
          text: "#e2e8f0",
          muted: "#a0aec0",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
    animation: {
      'blob': 'blob 7s infinite',
      moveFromRight: "moveFromRight 2s ease",
      moveFromTop: "moveFromTop 2s ease 3s",
      moveFromBottom: "moveFromBottom ease",
      moveFromLeft: "moveFromLeft 2s ease",
    },
    keyframes: {
      blob: {
        '0%': { transform: 'translate(0px, 0px) scale(1)' },
        '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
        '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        '100%': { transform: 'translate(0px, 0px) scale(1)' },
      },
      moveFromRight: {
        '0%': { transform: 'translateX(-100px)' },
        '100%': { transform: 'translateX(0px)' }
      },
      moveFromTop: {
        '0%': { transform: 'translateY(-100px)' },
        '100%': { transform: 'translateY(0px)' }
      },
      moveFromBottom: {
        '0%': { transform: 'translateY(100px)' },
        '100%': { transform: 'translateY(0px)' }
      },
      moveFromLeft: {
        '0%': { transform: 'translateX(100px)' },
        '100%': { transform: 'translateX(0px)' }
      }
    },
    typography: {
      DEFAULT: {
        css: {
          'code::before': {
            content: '""'
          },
          'code::after': {
            content: '""'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
