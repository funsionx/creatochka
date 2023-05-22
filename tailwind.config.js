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
        "blue-primary": "#3E52C3",
        "blue-secondary": "#E2E5F6",
        "dark-blue": "#2A3EAF",

        "green-primary": "#20AD50",
        "green-secondary": "#34C164",

        yellow: "#EBC70B",
        "black-text": "#1A1C22",
        "gray-1": "#6A6C72",
        "gray-2": "#92949A",
        "gray-3": "#D8DAE0",
        "gray-4": "#EFEFF1",
        "gray-5": "#F5F5F7",
        "gray-text": "#6A6C72",
      },
    },
  },
  plugins: [],
};
