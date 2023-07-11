import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#131628",
        "primary-200": "#6f00ff",
        "primary-300": "#CBA4FF",
        texture: "#F6F5F2",
      },
      backgroundImage: {
        "great-place-to-work":
          "url('/images/milad-fakurian-PGdW_bHDbpI-unsplash.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
