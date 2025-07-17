// tailwind.config.js
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ required for Vite + React + TypeScript
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      signature: ["Kaushan Script", "cursive"],
    },
  },
  plugins: [],
};
