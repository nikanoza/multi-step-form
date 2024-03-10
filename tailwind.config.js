/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        general: "#022959",
        "dark-blue": "#483EFF",
        "light-gray": "#EFF5FF",
        "text-gray": "#9699AA",
        "sky-blu": "#BEE2FD",
      },
    },
  },
  plugins: [],
};
