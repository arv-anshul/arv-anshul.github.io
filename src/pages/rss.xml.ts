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
        dark: "dark-plus",
        light: "light-plus",
      },
    })
  );

  const [blog, projects, journal] = await Promise.all([
    getCollection("blog"),
    getCollection("projects"),
    getCollection("journal"),
  ]);

  const allContent = [
    ...blog.map((entry) => ({
      ...entry.data,
      categories: ["blog", ...entry.data.categories],
      content: sanitizeHtml(parser.render(entry.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      link: `/blog/${entry.id}`,
    })),
    ...journal.map((entry) => ({
      ...entry.data,
      categories: ["journal", ...entry.data.categories],
      content: sanitizeHtml(parser.render(entry.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      link: `/journal/${entry.id}`,
    })),
    ...projects.map((entry) => ({
      ...entry.data,
      categories: ["project", ...entry.data.categories],
      content: sanitizeHtml(parser.render(entry.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      link: `/projects/${entry.id}`,
    })),
  ];

  // Sort by date (newest first)
  allContent.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    customData: "<language>en-us</language>",
    description:
      "A Data Scientist passionate about harnessing GenAI to solve real-world problems.",
    items: allContent,
    site: context.site,
    title: "ARV's Blog",
    trailingSlash: false,
  });
}
