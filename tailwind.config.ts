import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
        "alex-laila-parallax":
          "url(https://www.acquisition.com/hubfs/Acquisition_September2022/Alex_and_Leila_Extended-1.png)",
      },
      gridTemplateColumns: {
        "grow-cards": "2, minmax(250px, 1fr)",
      },
      gridTemplateRows: {
        "grow-cards": "2, 250px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
