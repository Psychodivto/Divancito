import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://psychodivto.github.io",
  base: "/", // 👈 cámbialo a "/" si tu repo se llama psychodivto.github.io

  integrations: [tailwind(), icon()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
