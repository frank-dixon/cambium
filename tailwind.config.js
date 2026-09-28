/** Cambium — brighter cream/paper + readable ink + turquoise accent */
module.exports = {
  content: ["./index.html", "./src/js/**/*.js"],
  safelist: [
    "adv-only",
    "border-l-2",
    "border-teal/40",
    "pl-3",
    "mt-4",
    "mb-2",
    "mb-3",
    "mt-0",
    "leading-relaxed",
    "text-ink-soft",
    "max-w-[62ch]",
    "font-mono",
    "text-[0.68rem]",
    "uppercase",
    "tracking-wider",
    "text-teal-deep",
    "text-teal",
    "underline",
    "underline-offset-2",
    "hover:text-teal",
    "leading-snug",
    "text-[0.9rem]",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FFFBF5",
          soft: "#FFFFFF",
          2: "#F3EDE3",
        },
        ink: {
          DEFAULT: "#1A1613",
          soft: "#3A342E",
        },
        muted: "#6B645C",
        rule: "#E4DCD0",
        teal: {
          DEFAULT: "#0B8A8F",
          deep: "#087075",
          on: "#FFFBF5",
          soft: "#E6F5F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
