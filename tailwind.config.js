/** Cambium — cream/paper + ink + turquoise */
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
          DEFAULT: "#F3EEE4",
          soft: "#F8F3EA",
          2: "#E8E0D2",
        },
        ink: {
          DEFAULT: "#1C1916",
          soft: "#3F3A35",
        },
        muted: "#6A635B",
        rule: "#D4CBBE",
        teal: {
          DEFAULT: "#0B8A8F",
          deep: "#087075",
          on: "#F8F3EA",
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
