/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ""),
      files: ["./src/*.{html,js}"],
    },
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
