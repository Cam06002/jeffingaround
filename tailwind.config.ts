import { Tilt_Neon } from "next/font/google";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Tilt_Neon: ["Tilt Neon", "sans-serif"],
      },
      transitionProperty: {
        'dropShadow': 'dropShadow',
      },
      dropShadow: {
        DEFAULT: [
          '-0.2rem -0.2rem 5rem #fff',
          '0.2rem 0.2rem 5rem #fff',
          '0 0 1rem #08f',
          '0 0 2rem #08f'
        ]
      },
      // keyframes: {
      //   flicker: {
      //     '0%, 15%, 19%, 48%, 60%, 100%': { 'drop-shadow': 
      //       `-0.2rem -0.2rem 5rem #fff',
      //       '0.2rem 0.2rem 5rem #fff',
      //       '0 0 1rem #08f',
      //       '0 0 2rem #08f`
      //     },
      //     '18%, 25%, 55%': {'drop-shadow': 'none'}
      //   }
      // },
      // animation: {
      //   flicker: 'flicker 1.4s infinite alternate'
      // }
    },
  },
  plugins: [],
};
export default config;
