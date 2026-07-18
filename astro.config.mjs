// @ts-check

import { unified } from "@astrojs/markdown-remark";
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
    processor: unified({
      rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            content: h("span.heading-anchor-icon", [
              s(
                "svg",
                {
                  fill: "none",
                  height: 24,
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  viewBox: "0 0 24 24",
                  width: 24,
                  xmlns: "http://www.w3.org/2000/svg",
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
            properties: {
              ariaLabel: "Link to section",
              class: "heading-anchor",
            },
          },
        ],
        [
          rehypePrettyCode,
          {
            transformers: [
              transformerCopyButton({
                feedbackDuration: 2500,
                visibility: "hover",
              }),
            ],
          },
        ],
      ],
      remarkPlugins: [
        [remarkGfm, { singleTilde: false }],
        remarkGithubAlerts,
        remarkMath,
      ],
    }),
    syntaxHighlight: false,
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
