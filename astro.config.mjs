// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import pagefind from "astro-pagefind";
import { h, s } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkGithubAlerts from "remark-github-alerts";
import remarkMath from "remark-math";
import syncContentAssets from "./src/integrations/sync-content-assets";

// https://astro.build/config
export default defineConfig({
  site: "https://arv-anshul.github.io",
  server: {
    port: 3000,
  },
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
    },
    {
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      provider: fontProviders.fontsource(),
    },
  ],
  integrations: [
    icon(),
    mdx(),
    syncContentAssets(),
    mermaid({
      mermaidConfig: {
        layout: "elk",
      },
    }),
    pagefind(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
  redirects: {
    "/about": "/",
    "/notebooks": "https://github.com/arv-anshul/notebooks",
    "/github": "https://github.com/arv-anshul",
    "/linkedin": "https://linkedin.com/in/arv-anshul",
    "/hf": "https://hf.co/arv-anshul",
    "/kaggle": "https://kaggle.com/arvanshul",
    "/youtube": "https://youtube.com/channel/UC90WdLQimUEbL4ZIiSj68mQ",
    "/imdb": "https://www.imdb.com/user/ur173640968",
    "/spotify": "https://open.spotify.com/user/wk6gxe954mv4qbttc4tnvyw8t",
  },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      [remarkGfm, { singleTilde: false }],
      remarkGithubAlerts,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: { class: "heading-anchor", ariaLabel: "Link to section" },
          content: h("span.heading-anchor-icon", [
            s(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
              [
                s("path", {
                  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                }),
                s("path", {
                  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                }),
              ]
            ),
          ]),
        },
      ],
      [
        rehypePrettyCode,
        {
          transformers: [
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 2500,
            }),
          ],
        },
      ],
    ],
  },
});
