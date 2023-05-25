/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        wallpaper: "url('../src/assets/wallpaper.png')",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
