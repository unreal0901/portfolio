import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.adityasr.tech",
  integrations: [tailwind(), sitemap(), mdx(), pagefind(), react()],
  output: "hybrid",
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  }),
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  }
});