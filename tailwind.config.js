/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        contrast: "var(--color-contrast)",
        inputBackground: "var(--color-input-background)",
        formBackground: "var(--color-form-background)",
      }
    },
  },
  plugins: [],
}