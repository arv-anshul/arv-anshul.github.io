import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import type { APIRoute, GetStaticPaths } from "astro";
import { getBlogSlugs } from "@/lib/blog-utils";

/** Serve raw markdown source next to each markdown page (e.g. `/blog/<post>.md`) for AI agents. */
export const getStaticPaths = (async () => {
  const [blog, journal, projects] = await Promise.all([
    getCollection("blog"),
    getCollection("journal"),
    getCollection("projects"),
  ]);
  return [
    ...blog.map((e) => ({
      params: { slug: `blog/${getBlogSlugs(e.id).pop()}` },
      props: { filePath: e.filePath },
    })),
    ...journal.map((e) => ({
      params: { slug: `journal/${e.id}` },
      props: { filePath: e.filePath },
    })),
    ...projects.map((e) => ({
      params: { slug: `projects/${e.id}` },
      props: { filePath: e.filePath },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) =>
  new Response(await readFile(props.filePath as string, "utf-8"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
