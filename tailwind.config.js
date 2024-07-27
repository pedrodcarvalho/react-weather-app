/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "675px": "675px",
      }
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#f1f1f1",
          "primary-content": "#141414",
          "secondary": "#06b6d4",
          "secondary-content": "#000c10",
          "accent": "#06b6d4",
          "accent-content": "#000c10",
          "neutral": "#f1f1f1",
          "neutral-content": "#141414",
          "base-100": "#1f2937",
          "base-200": "#19222e",
          "base-300": "#141c26",
          "base-content": "#cdd0d3",
          "info": "#0ea5e9",
          "info-content": "#000a13",
          "success": "#84cc16",
          "success-content": "#060f00",
          "warning": "#f97316",
          "warning-content": "#150500",
          "error": "#ef4444",
          "error-content": "#140202",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
