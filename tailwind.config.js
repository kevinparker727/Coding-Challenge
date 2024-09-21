/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pumpkin: "#d35400",
        leaf: "#7d4450",
        gold: "#e67e22",
        forest: "#004225",
        sky: "#87ceeb",
        cinnamon: "#935116",
      },
    },
  },
  plugins: [],
};
