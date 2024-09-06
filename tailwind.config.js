/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "blue-grayish": "hsl(237, 18%, 59%)",
      "red-soft": "hsl(345, 95%, 68%)",
      "blue-dark-desaturated": "hsl(236, 21%, 26%)",
      "blue-very-dark": "hsl(235, 16%, 14%)",
      "blue-very-dark-mostly": "hsl(234, 17%, 12%)",
    },
    extend: {
      backgroundImage: {
        "pattern-hills": "url('/images/pattern-hills.svg')",
        stars: "url('/images/bg-stars.svg')",
      },
    },
  },
  plugins: [],
};
