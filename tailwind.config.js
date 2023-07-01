/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "sidebarBg": "url('/src/assets/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
