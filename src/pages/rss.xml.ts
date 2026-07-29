import { getCollection } from "astro:content";
import rss, { type RSSOptions } from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import { markdownToHtml } from "satteri";

/** Feed readers get plain markup: no alerts, anchors or highlighting. */
const render = (body: string) =>
  sanitizeHtml(markdownToHtml(body).html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });

export async function GET(context: RSSOptions) {
  const [blog, projects, journal] = await Promise.all([
    getCollection("blog"),
    getCollection("projects"),
    getCollection("journal"),
  ]);

  const allContent = [
    ...blog.map((entry) => ({
      ...entry.data,
      categories: ["blog", ...entry.data.categories],
      content: render(entry.body || ""),
      link: `/blog/${entry.id}`,
    })),
    ...journal.map((entry) => ({
      ...entry.data,
      categories: ["journal", ...entry.data.categories],
      content: render(entry.body || ""),
      link: `/journal/${entry.id}`,
    })),
    ...projects.map((entry) => ({
      ...entry.data,
      categories: ["project", ...entry.data.categories],
      content: render(entry.body || ""),
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
