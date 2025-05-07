/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A20067",     // Accent (fuchsia închis)
        background: "#B6ADA5",  // Fundal cald (warm gray)
      },
    },
  },
  plugins: [],
}
