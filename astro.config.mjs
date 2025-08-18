import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://psychodivto.github.io",
  base: "/",
<<<<<<< HEAD
=======

>>>>>>> release
  integrations: [tailwind(), icon()],
  output: "static", // GitHub Pages solo soporta estáticos
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});