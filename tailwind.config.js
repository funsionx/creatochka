/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        "green-primary": "#34C164",
        "blue-primary": "#3E52C3",
        "blue-secondary": "#E2E5F6",
        "black-text": "#1A1C22",
        "gray-temp": "#F5F5F7",
        "gray-text": "#6A6C72"
      },
    },
  },
  plugins: [],
};
