import type { DataEntryMap, InferEntrySchema } from "astro:content";
import { getCollection } from "astro:content";
import type { GetStaticPaths, GetStaticPathsItem } from "astro";
import { getBlogSlugs } from "@/lib/blog-utils";
import { getImageBufferFromMarkup, getMarkupFromEntry } from "@/lib/og";

async function getBlogData(): Promise<GetStaticPathsItem[]> {
  const collections = await getCollection("blog");
  return collections.map((coll) => ({
    params: { slugs: `/blog/${getBlogSlugs(coll.id).pop()}` },
    props: coll.data,
  }));
}

async function getProjectsData(): Promise<GetStaticPathsItem[]> {
  const collections = await getCollection("projects");
  return collections.map((coll) => ({
    params: { slugs: `/projects/${coll.id}` },
    props: coll.data,
  }));
}

async function getJournalData(): Promise<GetStaticPathsItem[]> {
  const collections = await getCollection("journal");
  return collections.map((coll) => ({
    params: { slugs: `/journal/${coll.id}` },
    props: coll.data,
  }));
}

export const getStaticPaths = (async () => {
  const blogData = await getBlogData();
  const projectsData = await getProjectsData();
  const journalData = await getJournalData();

  return blogData.concat(projectsData, journalData);
}) satisfies GetStaticPaths;

export const GET = async ({
  request,
  props,
}: {
  props: InferEntrySchema<keyof DataEntryMap>;
  request: Request;
}) => {
  const markup = await getMarkupFromEntry(request.url, props);
  const imageBuffer = await getImageBufferFromMarkup(markup);
  return new Response(imageBuffer);
};
