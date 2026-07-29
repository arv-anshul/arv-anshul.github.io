// @ts-check

import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import pagefind from "astro-pagefind";
import syncContentAssets from "./src/integrations/sync-content-assets";
import { autolinkHeadings, githubAlerts } from "./src/lib/markdown-plugins";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--font-inter",
      name: "Inter",
      provider: fontProviders.fontsource(),
    },
    {
      cssVariable: "--font-geist-mono",
      name: "Geist Mono",
      provider: fontProviders.fontsource(),
    },
  ],
  image: {
    domains: ["gravatar.com"],
  },
  integrations: [
    icon(),
    syncContentAssets(),
    mermaid({
      mermaidConfig: {
        layout: "elk",
      },
    }),
    pagefind(),
    sitemap(),
  ],
  markdown: {
    processor: satteri({
      hastPlugins: [autolinkHeadings],
      mdastPlugins: [githubAlerts],
    }),
    shikiConfig: {
      themes: { dark: "dark-plus", light: "light-plus" },
      // TODO: Add math code block for rendering KaTeX and LaTeX
    },
  },
  redirects: {
    "/about": "/",
    "/github": "https://github.com/arv-anshul",
    "/hf": "https://hf.co/arv-anshul",
    "/imdb": "https://www.imdb.com/user/ur173640968",
    "/kaggle": "https://kaggle.com/arvanshul",
    "/linkedin": "https://linkedin.com/in/arv-anshul",
    "/notebooks": "https://github.com/arv-anshul/notebooks",
    "/spotify": "https://open.spotify.com/user/wk6gxe954mv4qbttc4tnvyw8t",
    "/twitter": "https://x.com/arvanshul",
    "/youtube": "https://youtube.com/channel/UC90WdLQimUEbL4ZIiSj68mQ",
  },
  server: {
    port: 3000,
  },
  site: "https://arvanshul.com",
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});
