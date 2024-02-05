/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        embroidery: "url('./src/assets/embroidery.jpg')",
      },
    },
  },
  plugins: [],
};
