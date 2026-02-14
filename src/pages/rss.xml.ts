import { getCollection } from "astro:content";
import rss, { type RSSOptions } from "@astrojs/rss";
import Shiki from "@shikijs/markdown-it";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

export async function GET(context: RSSOptions) {
  const parser = new MarkdownIt();
  parser.use(
    await Shiki({
      langAlias: {
        math: "latex",
      },
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
    })
  );

  const blog = await getCollection("blog");
  const projects = await getCollection("projects");
  const journal = await getCollection("journal");

  const allContent = [
    ...blog.map((entry) => ({
      ...entry.data,
      categories: ["blog", ...entry.data.categories],
      link: `/blog/${entry.id}`,
      content: sanitizeHtml(parser.render(entry.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
    ...journal.map((entry) => ({
      ...entry.data,
      categories: ["journal", ...entry.data.categories],
      link: `/journal/${entry.id}`,
      content: sanitizeHtml(parser.render(entry.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
    ...projects.map((entry) => ({
      ...entry.data,
      categories: ["project", ...entry.data.categories],
      link: `/projects/${entry.id}`,
      content: sanitizeHtml(parser.render(entry.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
  ];

  // Sort by date (newest first)
  allContent.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "ARV's Blog",
    description:
      "A Data Scientist passionate about harnessing GenAI to solve real-world problems.",
    site: context.site,
    items: allContent,
    customData: "<language>en-us</language>",
    trailingSlash: false,
  });
}
